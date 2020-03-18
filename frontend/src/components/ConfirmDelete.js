import React from 'react'
import styled from 'styled-components'
import { ui } from 'reducers/ui'
import { deleteGuests } from 'reducers/guests'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'library/Button'

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const ConfirmDelete = () => {

  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isConfirmDeleteOpen)
  const guest = useSelector(state => state.guests.guest)

  const handleYes = () => {
    dispatch(deleteGuests(guest))
    dispatch(ui.actions.setConfirmDeleteOpen(false))
  }

  const handleNo = () => {
    dispatch(ui.actions.setConfirmDeleteOpen(false))
  }

  return (
    <>
      {open && (
        <div>
          <p>Are you sure you want to delete guest?</p>
          <ButtonWrapper>
            <Button type='button' title='Yes' onClick={handleYes} />
            <Button type='button' title='No' onClick={handleNo} />
          </ButtonWrapper>
        </div>
      )}
    </>
  )
}