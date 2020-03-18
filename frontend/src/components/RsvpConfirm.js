import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ui } from 'reducers/ui'

export const RsvpConfirm = () => {
  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.isRsvpConfirmOpen)

  const close = () => {
    dispatch(ui.actions.setRsvpConfirmOpen(false))
  }

  return (
    <>
      {open && (
        <div>
          <p>See you at the wedding!</p>
          <button type='button' onClick={close}>Done!</button>
        </div>
      )}
    </>
  )
}