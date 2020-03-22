import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

const API_URL = process.env.API_URL || "http://localhost:8080"

export const images = createSlice({
  name: 'images'
  initialState: {
    images: [],
    image: ''
  },
  reducers: {
    setImage: (state, action) => {
      state.guest = action.payload
    },
    setImages: (state, action) => {
      state.images = action.payload
    },
    addImage: (state, action) => {
      state.images.push(action.payload)
    }
  }
}) 

// Thunk to add image
export const sendImages = image => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`${API_URL}/images`, {
      method: 'POST'
      body: JSON.stringify(image)
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(images.actions.addImage(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}