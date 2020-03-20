import React, { useState } from "react"
import styled from "styled-components"
import { ui } from "reducers/ui"
import { useDispatch, useSelector } from "react-redux"
import { fetchAdmin } from "reducers/admins"
import { Input } from "styles/FormStyle"
import { CardWrapper } from "styles/FormStyle"

const FormWrapper = styled.div`
  flex-direction: column;
  text-align: center;
  padding: 0% 10% 10% 10%;
`

const CardButton = styled.button`
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  height: 40px;
  border: none;
  background: transparent;
  transition: 0.6s;
  cursor: pointer;
  &:focus {
    outline-color: #ff9900;
    outline-offset: 3px;
  }
  &:hover {
    color: #ff9900;
  }
  @media (min-width: 668px) {
    font-size: 16px;
    font-weight: 400;
  }
  @media (min-width: 992px) {
    font-size: 20px;
  }
`

const LoginButtonWrapper = styled.div`
  margin-top: 15px;
`

const CloseWrapper = styled.div`
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`

export const LoginForm = () => {
  const dispatch = useDispatch()

  const open = useSelector(state => state.ui.isLoginOpen)
  const failed = useSelector(state => state.ui.isLoginFailed)
  const loading = useSelector(state => state.ui.isLoading)

  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  })

  const clearInputs = () => {
    setFormValues({
      email: "",
      password: ""
    })
  }

  const handleLogin = e => {
    e.preventDefault()
    dispatch(fetchAdmin(formValues))
    clearInputs()
  }

  const close = () => {
    dispatch(ui.actions.setLoginOpen(false))
  }

  return (
    <>
      {open && (
        <CardWrapper>
          <CloseWrapper>
            <CardButton type='button' onClick={close}>
              X
            </CardButton>
          </CloseWrapper>
          <FormWrapper>
            <form onSubmit={handleLogin}>
              <label>
                <p>E-mail</p>
                <Input
                  onChange={e =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
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
                <Input
                  onChange={e =>
                    setFormValues({ ...formValues, password: e.target.value })
                  }
                  value={formValues.password}
                  type='password'
                  required
                />
              </label>
              <LoginButtonWrapper>
                <CardButton title='Login' type='submit'>
                  Login
                </CardButton>
              </LoginButtonWrapper>
            </form>
          </FormWrapper>
          {failed && <p>Incorrect user or password</p>}
          {loading && <p>...loading</p>}
        </CardWrapper>
      )}
    </>
  )
}
