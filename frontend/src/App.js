import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from 'styles/GlobalStyle'
import { Main } from 'pages/Main'

export const App = () => {
  return (
    <>
   <GlobalStyle />
   <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <Main />
      </Route>
    </Switch>
   </BrowserRouter>
   </>
  )
}
