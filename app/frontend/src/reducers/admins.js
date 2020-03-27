import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

export const admins = createSlice({
  name: "admins",
  initialState: {
    accessToken: localStorage.getItem("accessToken"),
    adminName: localStorage.getItem("adminName")
  },
  reducers: {
    setAdminName: (state, action) => {
      localStorage.setItem("adminName", action.payload)
      state.adminName = action.payload
    },
    removeAdminName: (state, action) => {
      state.adminName = localStorage.removeItem("adminName", action.payload)
    },
    setAccessToken: (state, action) => {
      localStorage.setItem("accessToken", action.payload)
      state.accessToken = action.payload
    },
    removeAccessToken: (state, action) => {
      localStorage.removeItem("accessToken", action.payload)
      state.accessToken = ""
    }
  }
})

export const fetchAdmin = loginValues => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`http://localhost:8080/login`, {
      method: "POST",
      body: JSON.stringify(loginValues),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(json => {
        if (json.notFound !== true) {
          dispatch(admins.actions.setAccessToken(json.accessToken))
          dispatch(admins.actions.setAdminName(json.name))
          dispatch(ui.actions.setLoading(false))
          dispatch(ui.actions.setLoginFailed(false))
          dispatch(ui.actions.setLoginOpen(false))
        } else {
          dispatch(ui.actions.setLoading(false))
          dispatch(ui.actions.setLoginFailed(true))
        }
      })
      .catch(err => console.log("error", err))
  }
}
