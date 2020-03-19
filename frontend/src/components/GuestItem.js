import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.div`
  width: 20em;
  display: flex;
  // flex-wrap: wrap;
  background: rgba(0,0,0, 0.8);
  border-radius: 40px 5px 40px 5px;
  margin: 10px; 
`

const DetailsWrapper = styled.div`
  margin: 10px;
`

const ButtonWrapper = styled.div`
display: flex;
height: 30px;
align-items: center;
`

export const GuestItem = ({ guest, onClickDelete }) => {
  const { first_name, last_name, email, phone, allergies, other, isAttending } = guest
  return (
    
      <ListWrapper>
        <DetailsWrapper>
          <p>Name: {first_name} {last_name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          {allergies && <p>Allergies: {allergies}</p>}
          {other && <p>Other: {other}</p>}
          <p>Attending: {isAttending ? 'Yes' : 'No'}</p>
        
        <ButtonWrapper>
          <button onClick={onClickDelete}>Delete</button>
        </ButtonWrapper>
        </DetailsWrapper>
      </ListWrapper>
    
  )
}

