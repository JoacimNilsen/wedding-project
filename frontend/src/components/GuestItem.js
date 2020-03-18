import React from 'react'

export const GuestItem = ({ guest, onClickDelete }) => {
  const { firstName, lastName, email, phone, allergies, other, attending } = guest

  return (
      <div>
        <div>
          <p>Name: {firstName} {lastName}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          {allergies && <p>Allergies: {allergies}</p>}
          {other && <p>Other: {other}</p>}
          <p>Attending: {attending}</p>
        </div>
        <div>
          <button onClick={onClickDelete}>Delete</button>
        </div>
      </div>
  )
}

