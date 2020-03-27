import React from "react"
import styled from "styled-components"
import { ui } from "reducers/ui"
import { deleteGuests } from "reducers/guests"
import { useDispatch, useSelector } from "react-redux"
import { MenuButton } from "library/MenuButton"

const AlertWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  width: 350px;
  height: 140px;
  border: 1px solid white;
  border-radius: 0px 30px 0px 30px;
  bottom: 50%;
  background: black;
  z-index: 2;
`

const ButtonWrapper = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
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
        <AlertWrapper>
          <p>Are you sure you want to delete guest?</p>
          <ButtonWrapper>
            <MenuButton type='button' title='Yes' onClick={handleYes} />
            <MenuButton type='button' title='No' onClick={handleNo} />
          </ButtonWrapper>
        </AlertWrapper>
      )}
    </>
  )
}
