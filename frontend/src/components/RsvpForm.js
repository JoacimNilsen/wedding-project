import React, { useState } from "react"
import { ui } from "reducers/ui"
import { sendGuests } from "reducers/guests"
import { useDispatch } from "react-redux"
import { Button } from "library/Button"
import { Input, RsvpWrapper, RadioWrapper, RadioButtonWrapper, RsvpStyle } from "styles/FormStyle"

export const RsvpForm = () => {
  const dispatch = useDispatch()
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    allergies: "",
    other: "",
    isAttending: ""
  })

  const clearInputs = () => {
    setFormValues({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      allergies: "",
      other: "",
      isAttending: ""
    })
  }

  //Send form values to thunk and open alert to confirm
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(sendGuests(formValues))
    clearInputs()
    dispatch(ui.actions.setRsvpConfirmOpen(true))
  }

  //Enable submit button if values are correct
  const enabled =
    formValues.first_name.length >= 2 &&
    formValues.last_name >= 2 &&
    formValues.email.length >= 5 &&
    formValues.isAttending !== ""

  return (
    <RsvpWrapper>
      <RsvpStyle onSubmit={handleSubmit}>
        <label>
          <p>First Name *</p>
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
          <p>Last name *</p>
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
          <p>E-mail *</p>
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
          <p>Phone number</p>
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
          <p>Allergies</p>
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
          <p>Other</p>
          <textarea
            onChange={event =>
              setFormValues({ ...formValues, other: event.target.value })
            }
            value={formValues.other}
            type='text'
            rows='4'
            placeholder='Enter message here'
          />
        </label>

        
          <p>Will we see you at the wedding?</p>
          <RadioWrapper>
          <RadioButtonWrapper>
            <Input
              onChange={event =>
                setFormValues({
                  ...formValues,
                  isAttending: event.target.value
                })
              }
              type='radio'
              name='isAttending'
              value='true'
              checked={formValues.isAttending === "true"}
              required
            />
            <p>Yes</p>
          </RadioButtonWrapper>
          <RadioButtonWrapper>
            <Input
              onChange={event =>
                setFormValues({
                  ...formValues,
                  isAttending: event.target.value
                })
              }
              type='radio'
              name='isAttending'
              value='false'
              checked={formValues.isAttending === "false"}
              required
            />
            <p>No</p>
          </RadioButtonWrapper>
        </RadioWrapper>

        <Button type='submit' title='submit' disabled={!enabled} />
        {!enabled && <p>Please fill required fields</p>}
      </RsvpStyle>
    </RsvpWrapper>
  )
}
