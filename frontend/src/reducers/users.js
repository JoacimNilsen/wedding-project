import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const users = createSlice({
  name: 'users',
  initialState: {
    accessToken: localStorage.getItem('accessToken'),
    userName: localStorage.getItem('userName')
  },
  reducers: {
    setUserName: (state, action) => {
      localStorage.setItem('userName', action.payload)
      state.userName = action.payload
    },
    removeUserName: (state, action) => {
      state.userName = localStorage.removeItem('userName', action.payload)
    },
    setAccessToken: (state, action) => {
      localStorage.setItem('accessToken', action.payload)
      state.accessToken = action.payload
    },
    removeAccessToken: (state, action) => {
      localStorage.removeItem('accessToken', action.payload)
      state.accessToken = ''
    }
  }
})

export const fetchUser = (loginValues) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://kn-wedding-project.herokuapp.com/login`, {
      method: 'POST',
      body: JSON.stringify(loginValues),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        if (json.notFound !== true) {
          dispatch(users.actions.setAccessToken(json.accessToken))
          dispatch(users.actions.setUserName(json.name))
          dispatch(ui.actions.setLoading(false))
          dispatch(ui.actions.setLoginFailed(false))
          dispatch(ui.actions.setLoginOpen(false))
        } else {
          dispatch(ui.actions.setLoading(false))
          dispatch(ui.actions.setLoginFailed(true))
        }
      })
      .catch(err => console.log('error', err))
  }
}