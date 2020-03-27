import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { GlobalStyle } from "styles/GlobalStyle"
import { Main } from "pages/Main"
import { Location } from "pages/Location"
import { Rsvp } from "pages/Rsvp"
import { Guests } from "pages/Guests"
import { Gallery } from "pages/Gallery"
import { PrivateRoute } from "components/PrivateRoute"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { guests } from "reducers/guests"
import { ui } from "reducers/ui"
import { admins } from "reducers/admins"
import { Footer } from "components/Footer"
import { LoginForm } from "components/LoginForm"
import { Music } from "pages/Music"

const reducer = combineReducers({
  ui: ui.reducer,
  guests: guests.reducer,
  admins: admins.reducer
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <LoginForm />
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

          <Route path='/music' exact>
            <Music />
          </Route>

          <Route path='/gallery' exact>
            <Gallery />
          </Route>
          <PrivateRoute component={Guests} path='/guests' exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
