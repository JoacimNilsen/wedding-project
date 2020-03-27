import mongoose from 'mongoose'
import crypto from 'crypto'

export const Admin = mongoose.model('Admin', {
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 2,
    maxlength: 100
  },
  email: {
    type: String,
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }

})