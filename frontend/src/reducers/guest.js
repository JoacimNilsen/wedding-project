import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const guests = createSlice({
  name: 'guests',
  initialstate: {
    guests: [],
    guest: ''
  },
  reducers: {
    setGuest: (state, action) => {
      state.guest = action.payload
    },
    setGuests: (state, action) => {
      state.guests = action.payload
    },
    addGuest: (state, action) => {
      state.guests.push(action.payload)
    },
    deleteGuest: (state, action) => {
      state.guests = state.guests.filter(guest => guest._id !== action.payload)
    }
  }
})

//Thunk middleware for guestlist
export const fetchGuests = (path) => {
  return dispatch => {
    const accessToken = localStorage.getItem('accessToken')
    dispatch(ui.actions.setLoading(true))
    fetch(`https://kn-wedding-project.herokuapp.com/guests${path}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json',
       Authorization: accessToken
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(guests.actions.setGuests(json.guests))
      dispatch(ui.actions.setLoading(false))
    })
  }
}

//Thunk middleware to add guests
export const sendGuests = (guest) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://kn-wedding-project.herokuapp.com/guests`, {
      method: 'POST',
      body: JSON.stringify(guest),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then((json) => {
      dispatch(guests.actions.addGuest(json))
      dispatch(ui.actions.setLoading(false))
    }) 
  }
}

//Thunk to delete specific guests
export const deleteGuests = (guest) => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://kn-wedding-project.herokuapp.com/guests/${guest._id}`, {
      method: 'DELETE'
    })
    .then(() => {
      dispatch(guests.actions.deleteGuest(guest._id))
      dispatch(ui.actions.setLoading(false))
    })
  }
}