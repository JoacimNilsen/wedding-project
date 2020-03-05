import React from 'react'
import styled from 'styled-components'
import hero from 'assets/hero.jpg'


const Wrapper = styled.div`
border: 3px solid white;
border-radius: 50%;
`

const Hero = styled.div`
background-image: url(${hero});
background-position: 50% 20%;
background-size: 95%
border: 3px solid white;
border-radius: 50%;
width: 500px;
height: 500px;
`

export const HeroImage = () => {
  return (
    <Wrapper>
    <Hero />
    </Wrapper>
  )
}