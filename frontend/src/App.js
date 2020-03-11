import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Main } from 'pages/Main'
import { Location } from 'pages/Location'
import { Rsvp } from 'pages/Rsvp'

export const App = () => {
  return (
    <>
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
   </>
  )
}
