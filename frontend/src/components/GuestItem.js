import React from 'react'
import styled from 'styled-components'

export const GuestItem = ({ firstName, lastName, email, phone, allergies, other, attending, addedAt, onClickDelete }) => {
  return (
      <div>
        <div>
          <p>Name: {firstName} {lastName}</p>
          <p>Email: {email}</p>
          <p>Phone: {Phone}</p>
          {allergies && <p>Allergies: {allergies}</p>}
          {other && <p>Other: {other}</p>}
          <p>Attending: {attending}</p>
          <p>Added: {addedAt}</p>
        </div>
        <div>
          <button onClick={onClickDelete}>Delete</button>
        </div>
      </div>
  )
}

