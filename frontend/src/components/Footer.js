import React from "react"
import { ui } from "reducers/ui"
import { Link } from "react-router-dom"
import { NavButton } from "styles/NavbarStyle"
import { admins } from "reducers/admins"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export const Footer = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const accessToken = useSelector(state => state.admins.accessToken)
  const adminName = useSelector(state => state.admins.adminName)

  const openLoginForm = () => {
    dispatch(ui.actions.setLoginOpen(true))
  }

  const handleLogout = () => {
    dispatch(admins.actions.removeAccessToken(accessToken))
    dispatch(admins.actions.removeAdminName(adminName))
    history.push("/")
  }

  return (
    <>
      <section>
        {!accessToken && (
          <NavButton onClick={openLoginForm}>Admin Login</NavButton>
        )}
        {accessToken && <NavButton onClick={handleLogout}>Log out</NavButton>}
        {accessToken && (
          <Link to={"/guests"} tabIndex='-1'>
            <NavButton>Guests</NavButton>
          </Link>
        )}
      </section>
    </>
  )
}
