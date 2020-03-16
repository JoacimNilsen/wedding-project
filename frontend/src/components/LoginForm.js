import React, { useState } from 'react'
import styled from 'styled-components'
import { ui } from 'reducers/ui'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from 'reducers/users'

export const LoginForm = () => {

  const dispatch = useDispatch()
  
  const open = useSelector(state => state.ui.isLoginOpen)
  const failed = useSelector(state => state.ui.isLoginFailed)
  const loading = useSelector(state => state.ui.isLoading)
  
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const clearInputs = () => {
    setFormValues({
      email: '',
      password: ''
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(fetchUser(formValues))
    clearInputs()
  }

  const close = () => {
    dispatch(ui.actions.setLoginOpen(false))
  }

  return (
    <>
    {open && (
      <div>
        <form onSubmit={handleLogin}>
          <button type='button' onClick={close}>X</button>
          <label>
            <p>E-mail</p>
            <input onChange={e => setFormValues({ ...formValues, email: e.target.value })}
            value={formValues.email}
            type='email'
            placeholder='email@mail.com'
            minLength='5'
            maxLength='30'
            required
            />
          </label>

          <label>
            <p>Password</p>
            <input onChange={e => setFormValues({ ...formValues, password: e.target.value })}
            value={formValues.password}
            type='password'
            required
            />
          </label>
          <button type='submit'>Login</button>
        </form>
        {failed && <p>Incorrect user or password</p>}
        {loading && <p>...loading</p>}
      </div>
    )}
    </>
  )
}