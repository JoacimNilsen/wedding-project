import React from "react"
import { Route, Redirect } from "react-router-dom"

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = localStorage.getItem("accessToken")

  return (
    <Route
      {...rest}
      render={props => (
        accessToken ? <Component {...props} /> : <Redirect to='/' />
      )}
    />
  )
}
