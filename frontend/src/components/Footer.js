import React from "react"
import { ui } from "reducers/ui"
import { Link } from "react-router-dom"
import { StickyWrapper, FooterButton, Separator, FooterWrapper } from "styles/FooterStyle"
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
    <StickyWrapper>
      <FooterWrapper>
        {!accessToken && (
          <FooterButton onClick={openLoginForm}>Admin Login</FooterButton>
        )}
        {accessToken && (
          <Link to={"/guests"} tabIndex='-1'>
            <FooterButton>Guests</FooterButton>
          </Link>
        )}
        {accessToken && (
          <>
            <Separator>|</Separator>
            <FooterButton onClick={handleLogout}>Log out</FooterButton>
          </>
        )}
      </FooterWrapper>
    </StickyWrapper>
  )
}
