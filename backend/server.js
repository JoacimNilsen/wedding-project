import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import { Guest } from './models/guests'
import { Admin } from './models/admin'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/wedding-project'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
	if (mongoose.connection.readyState === 1) {
		next()
	} else {
		res.status(503).json({ error: 'HTTP Error 503. Service unavaliable' })
	}
})

const authenticateAdmin = async (req, res, next) => {
	try {
		const admin = await Admin.findOne({
			accessToken: req.header('Authorization')
		})
		if (admin) {
			req.admin = admin
			next()
		} else {
			res.status(401).json({ loggedOut: true, message: 'You are logged out' })
		}
	} catch (err) {
		res
			.status(403)
			.json({ message: 'Access token missing', errors: err.errors })
	}
}

// Routes
app.get('/', (req, res) => {
	res.send('Joacim´s final project for Technigo 2020')
})

// Route to create a admin
app.post('/admin', async (req, res) => {
	try {
		const { name, email, password } = req.body
		const newAdmin = await new Admin({
			name,
			email,
			password: bcrypt.hashSync(password)
		})
		newAdmin.save()
		res.status(201).json(newAdmin)
	} catch (err) {
		res
			.status(400)
			.json({ message: 'Error, could not create admin', error: err.errors })
	}
})

// Route to login for admin
app.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body
		const admin = await Admin.findOne({ email })
		if (admin && bcrypt.compareSync(password, admin.password)) {
			res.status(201).json({
				name: admin.name,
				adminId: admin._id,
				accessToken: admin.accessToken
			})
		} else {
			res.status(401).json({
				statusCode: 401,
				notFound: true,
				error: 'Login failed, email or password incorrect'
			})
		}
	} catch (err) {
		res.status(400).json({ message: 'couldnt find admin', error: err.errors })
	}
})

// Routes for guestlist

const queryBuilder = (req, res) => {
	const { name, attending } = req.query
	const nameRegex = new RegExp(name, 'i')
	let query = {}
	if (name) {
		query = { $or: [{ first_name: nameRegex }, { last_name: nameRegex }] }
	}
	if (attending) {
		query['isAttending'] = { $eq: attending }
	}
	return query
}

// Secure endpoint for guestroute, only admin should be able to see this
app.get('guests', authenticateAdmin)
app.get('/guests', async (req, res) => {
	const query = queryBuilder(req, res)
	// If true: filter on query, else: return all guests
	const guests = query
		? await Guest.find(query)
		: await Guest.find()
				.sort('last_name')
				.sort('first_name')
	// Return matching results, else return error
	if (guests) {
		res.json({ guests: guests })
	} else {
		res.status(404).json({ error: 'No guests found' })
	}
})

// Route for specific guest ID
app.get('/guests/:id', async (req, res) => {
	const guest = await Guest.findById(req.params.id)
	if (guest) {
		res.json(guest)
	} else {
		res.status(404).json({ error: 'Guest not found' })
	}
})

// Post route for RSVP
app.post('/guests', async (req, res) => {
	const {
		first_name,
		last_name,
		email,
		phone,
		allergies,
		other,
		isAttending
	} = req.body
	const guest = new Guest({
		first_name,
		last_name,
		email,
		phone,
		allergies,
		other,
		isAttending
	})
	try {
		//success
		const savedGuest = await guest.save()
		res.status(201).json(savedGuest)
	} catch (err) {
		//failed
		res.status(400).json({ message: 'Could not save guest', error: err.errors })
	}
})

// Put route for specific guest ID
app.put('/guests/:id', async (req, res) => {
	const { id } = req.params
	try {
		//success
		await Guest.findByIdAndUpdate({ _id: id }, req.body, { new: true })
		res.status(201).json(guest)
	} catch (err) {
		//failed
		res
			.status(400)
			.json({ message: 'Could not update guest', error: err.errors })
	}
})

// Delete route specific guest ID
app.delete('/guests/:id', async (req, res) => {
	const { id } = req.params
	try {
		//success
		await Guest.findByIdAndDelete({ _id: id })
		res.status(201).json({ message: 'Deleted' })
	} catch (err) {
		//failed
		res
			.status(404)
			.json({ message: 'Could not delete guest', error: err.errors })
	}
})

// Get route for uploaded images
// app.get("/gallery", async (req, res) => {
//   const images = await.Image.find()
//   res.json(image)
// })

// // Post route for Imageupload
// app.post("/gallery", async (req, res) => {
//   const image = new Image(req.body)
//   try {
//     //success
//     const savedImage = await image.save()
//     res.status(201).json(savedImage)
//   } catch (err) {
//     //failed
//     res.status(400).json({ message: "Could not upload image", error: err.errors })
//   }
// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
