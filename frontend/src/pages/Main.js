import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Navbar } from 'components/Navbar'
import { HeroImage } from 'library/HeroImage'
import { Header, InfoText } from 'styles/TextStyle'
// import { Button } from 'library/Button'

const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

const HeadWrapper = styled.section`
position: relative;
top: 70px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Main = () => {
  return (
    <>
        <Navbar />
        <HeadWrapper>
        <Header>Natalie & Kenneth</Header>
        <InfoText>6/6-2020, 14:30 | Enskede Kyrka</InfoText>
        <HeroImage />
        </HeadWrapper>
    </>
  )
}