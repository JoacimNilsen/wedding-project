import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Main } from 'pages/Main'
import { Location } from 'pages/Location'

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
      
    </Switch>
   </BrowserRouter>
   </>
  )
}
