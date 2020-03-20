import React, { useState } from "react"
import { Link } from "react-router-dom"
import HamburgerMenu from "react-hamburger-menu"
import {
  NavWrapper,
  BurgerWrapper,
  NavLinks,
  NavButton
} from "styles/NavbarStyle"

export const Navbar = () => {
  const [active, setActive] = useState(false)

  return (
    <NavWrapper active={active === true} role='navigation'>
      <BurgerWrapper
        onKeyPress={event => {
          event.key === "Enter" && setActive(!active)
        }}
        tabIndex='0'
        aria-label='Open menu'
        role='button'
        aria-pressed={active ? "true" : "false"}
      >
        <HamburgerMenu
          isOpen={active === true}
          menuClicked={() => setActive(!active)}
          width={40}
          height={32}
          strokeWidth={2}
          rotate={0}
          color='white'
          borderRadius={0}
          animationDuration={0.5}
        />
      </BurgerWrapper>

      <NavLinks active={active === true}>
        <Link to={"/"} tabIndex='-1'>
          <NavButton>Home</NavButton>
        </Link>

        <Link to={"/location"} tabIndex='-1'>
          <NavButton>Location</NavButton>
        </Link>

        <Link to={"/gallery"} tabIndex='-1'>
          <NavButton>Gallery</NavButton>
        </Link>

        <Link to={"/music"} tabIndex='-1'>
          <NavButton>Music</NavButton>
        </Link>

        <Link to={"/rsvp"} tabIndex='-1'>
          <NavButton>RSVP</NavButton>
        </Link>
      </NavLinks>
    </NavWrapper>
  )
}
