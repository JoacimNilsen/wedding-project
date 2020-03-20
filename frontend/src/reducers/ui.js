import { createSlice } from "@reduxjs/toolkit"

export const ui = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    isLoginOpen: false,
    isConfirmDeleteOpen: false,
    isRsvpConfirmOpen: false,
    isLoginFailed: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setLoginOpen: (state, action) => {
      state.isLoginOpen = action.payload
    },
    setConfirmDeleteOpen: (state, action) => {
      state.isConfirmDeleteOpen = action.payload
    },
    setRsvpConfirmOpen: (state, action) => {
      state.isRsvpConfirmOpen = action.payload
    },
    setLoginFailed: (state, action) => {
      state.isLoginFailed = action.payload
    }
  }
})
