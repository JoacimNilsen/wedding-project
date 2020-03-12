import React from 'react'
import { Navbar } from 'components/Navbar'
import { MainWrapper } from 'library/MainWrapper'
import { RsvpForm } from 'components/RsvpForm'

export const Rsvp = () => {
  return (
    <>
    <Navbar />
      <MainWrapper>
        <RsvpForm />
      </MainWrapper>
    </>
  )
}