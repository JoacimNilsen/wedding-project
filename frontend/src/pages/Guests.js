import React from "react"
import { useSelector } from "react-redux"
import { Navbar } from "components/Navbar"
import { ConfirmDelete } from "components/ConfirmDelete"
import { MainWrapper } from "styles/MainWrapper"
import { GuestList } from "components/GuestList"
import { InfoText } from "styles/TextStyle"

export const Guests = () => {
  const guest = useSelector(state => state.guests.guest)

  return (
    <MainWrapper>
      <Navbar />
      <InfoText>Attending guests:</InfoText>
      <GuestList />
      {guest && <ConfirmDelete />}
    </MainWrapper>
  )
}
