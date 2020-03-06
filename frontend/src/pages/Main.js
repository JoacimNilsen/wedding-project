import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar'
import { HeroImage } from 'library/HeroImage'
import background from 'assets/hero.jpg'
import { Header, InfoText } from 'styles/TextStyle'
// import { Button } from 'library/Button'

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
`

export const Main = () => {
  return (
    <>
        <Navbar />
        <HeadSection>
        <Header>Natalie & Kenneth</Header>
        <InfoText>6/6-2020, 14:30 | Enskede Kyrka</InfoText>
        </HeadSection>
    </>
  )
}