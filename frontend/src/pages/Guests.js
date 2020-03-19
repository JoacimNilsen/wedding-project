import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Navbar } from 'components/Navbar'
import { ConfirmDelete } from 'components/ConfirmDelete'
import { MainWrapper } from 'library/MainWrapper'
import { GuestList } from 'components/GuestList'

export const Guests = () => {

  const guest = useSelector(state => state.guests.guest)

  return (
    <>
    <Navbar />
    <MainWrapper>
    <p>Attending guests:</p>
    <GuestList />
    {guest && <ConfirmDelete />}
    </MainWrapper>
    </>
  )
}