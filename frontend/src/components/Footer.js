import React from 'react'
import styled from 'styled-components'
import { ui } from 'reducers/ui'
import { users } from 'reducers/users'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const Footer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const accessToken = useSelector(state => state.users.accessToken)
  const userName = useSelector(state => state.users.userName)

  const openLoginForm =() => {
    dispatch(ui.actions.setLoginOpen(true))
  }

  const handleLogout = () => {
    dispatch(users.actions.removeAccessToken(accessToken))
    dispatch(users.actions.removeUserName(userName))
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