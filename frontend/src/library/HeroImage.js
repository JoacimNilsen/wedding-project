import React from 'react'
import styled from 'styled-components'
import hero from 'assets/hero.jpg'



export const Hero = styled.div`
background-image: url(${hero});
background-position: 50% 20%;
background-size: cover;
border: 3px solid white;
border-radius: 50%;
width: 500px;
height: 500px;
margin-top: 40px;
display: none;
  @media (min-width: 851px) {
    display: block;
  }
`

export const HeroImage = () => {
  return (
    <Hero />
  )
}