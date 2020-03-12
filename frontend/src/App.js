import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Main } from 'pages/Main'
import { Location } from 'pages/Location'
import { Rsvp } from 'pages/Rsvp'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { guests } from 'reducers/guest'
import { ui } from './reducers/ui'

const reducer = combineReducers({
  ui: ui.reducer,
  guests: guests.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
  <Provider store={store}>
   <GlobalStyle />
   <BrowserRouter>
    <Switch>

      <Route path='/' exact>
        <Main />
      </Route>

      <Route path='/location' exact>
        <Location />
      </Route>

      <Route path='/rsvp' exact>
        <Rsvp />
      </Route>

    </Switch>
   </BrowserRouter>
   </Provider>
  )
}
