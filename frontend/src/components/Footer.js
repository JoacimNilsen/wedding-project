import React from 'react'
import styled from 'styled-components'
import { ui } from 'reducers/ui'
import { admins } from 'reducers/admins'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const Footer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const accessToken = useSelector(state => state.admins.accessToken)
  const adminName = useSelector(state => state.admins.adminName)

  const openLoginForm =() => {
    dispatch(ui.actions.setLoginOpen(true))
  }

  const handleLogout = () => {
    dispatch(admins.actions.removeAccessToken(accessToken))
    dispatch(admins.actions.removeAdminName(adminName))
    history.push('/')
  }

  return (
    <>
    <section>
    {!accessToken && <button onClick={openLoginForm}>Admin Login</button>}
    {accessToken && <button onClick={handleLogout}>Log out</button>}
    </section>
    </>
  )
}