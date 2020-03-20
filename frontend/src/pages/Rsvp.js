import React from 'react'
import { Navbar } from 'components/Navbar'
import { MainWrapper } from 'styles/MainWrapper'
import { RsvpForm } from 'components/RsvpForm'
import { RsvpConfirm } from 'components/RsvpConfirm'

export const Rsvp = () => {
  return (
    <>
    
      <MainWrapper>
        <Navbar />
        <RsvpForm />
        <RsvpConfirm />
      </MainWrapper>
    </>
  )
}