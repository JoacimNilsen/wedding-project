import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar'
import { HeroImage } from 'library/HeroImage'
import background from 'assets/hero.jpg'
import desktopBackground from 'assets/desktopBackground.jpg'
import { Header, InfoText } from 'styles/TextStyle'
import { Button } from 'library/Button'

const HeadSection = styled.section`
position: relative;
display: flex;
width: 100%;
height: 100vh;
background: url(${background});
background-size: cover;
background-position: center;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 850px) {
  background: url(${desktopBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
`

const ButtonWrapper = styled.div`
position: relative;
top: 35px;
`


export const Main = () => { 
  return (
    <>
        <Navbar />
        <HeadSection>
        <HeroImage />
        <Header>Natalie & Kenneth</Header>
        <InfoText>6/6-2020, 14:30 | Enskede Kyrka</InfoText>
        <Link to={'/rsvp'} tabIndex='-1'>
          <ButtonWrapper>
          <Button title='RSVP' />
          </ButtonWrapper>
        </Link>
        </HeadSection>
    </>
  )
}