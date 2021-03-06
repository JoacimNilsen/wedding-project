import React, { useState } from 'react'
import { ui } from 'reducers/ui'
import { sendGuests } from 'reducers/guests'
import { useDispatch } from 'react-redux'
import { Button } from 'library/Button'
import {
	RadioInput,
	TextArea,
	Input,
	RadioWrapper,
	RadioButtonWrapper,
	RsvpStyle
} from 'styles/FormStyle'
import { LabelText } from 'styles/TextStyle'

export const RsvpForm = () => {
	const dispatch = useDispatch()
	const [formValues, setFormValues] = useState({
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		allergies: '',
		other: '',
		isAttending: ''
	})

	const clearInputs = () => {
		setFormValues({
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			allergies: '',
			other: '',
			isAttending: ''
		})
	}

	//Send form values to thunk and open alert to confirm
	const handleSubmit = event => {
		event.preventDefault()
		dispatch(sendGuests(formValues))
		clearInputs()
		dispatch(ui.actions.setRsvpConfirmOpen(true))
	}

	return (
		<RsvpStyle onSubmit={handleSubmit}>
			<label>
				<LabelText>First Name *</LabelText>
				<Input
					onChange={event =>
						setFormValues({ ...formValues, first_name: event.target.value })
					}
					value={formValues.first_name}
					type='text'
					placeholder='First name'
					minLength='2'
					maxLength='30'
					required
				/>
			</label>

			<label>
				<LabelText>Last name *</LabelText>
				<Input
					onChange={event =>
						setFormValues({ ...formValues, last_name: event.target.value })
					}
					value={formValues.last_name}
					type='text'
					placeholder='Last name'
					minLength='2'
					maxLength='30'
					required
				/>
			</label>

			<label>
				<LabelText>E-mail *</LabelText>
				<Input
					onChange={event =>
						setFormValues({ ...formValues, email: event.target.value })
					}
					value={formValues.email}
					placeholder='email@mail.com'
					minLength='5'
					maxLength='30'
					required
				/>
			</label>

			<label>
				<LabelText>Phone number</LabelText>
				<Input
					onChange={event =>
						setFormValues({ ...formValues, phone: event.target.value })
					}
					value={formValues.phone}
					type='text'
					placeholder='070 *** ****'
				/>
			</label>

			<label>
				<LabelText>Allergies</LabelText>
				<Input
					onChange={event =>
						setFormValues({ ...formValues, allergies: event.target.value })
					}
					value={formValues.allergies}
					type='text'
					placerholder='If you have any allergies'
				/>
			</label>

			<label>
				<LabelText>Other</LabelText>
				<TextArea
					onChange={event =>
						setFormValues({ ...formValues, other: event.target.value })
					}
					value={formValues.other}
					type='text'
					rows='4'
					placeholder='Enter message here'
				/>
			</label>

			<LabelText>Will you come to the wedding?</LabelText>
			<RadioWrapper>
				<RadioButtonWrapper>
					<RadioInput
						onChange={event =>
							setFormValues({
								...formValues,
								isAttending: event.target.value
							})
						}
						type='radio'
						name='isAttending'
						value='true'
						checked={formValues.isAttending === 'true'}
						required
					/>
					<LabelText>Yes</LabelText>
				</RadioButtonWrapper>
				<RadioButtonWrapper>
					<RadioInput
						onChange={event =>
							setFormValues({
								...formValues,
								isAttending: event.target.value
							})
						}
						type='radio'
						name='isAttending'
						value='false'
						checked={formValues.isAttending === 'false'}
						required
					/>
					<LabelText>No</LabelText>
				</RadioButtonWrapper>
			</RadioWrapper>

			<Button type='submit' title='submit' />
			<LabelText>* Required fields</LabelText>
		</RsvpStyle>
	)
}
