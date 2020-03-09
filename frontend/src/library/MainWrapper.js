import React from 'react'
import styled from 'styled-components'
import desktopBackground from 'assets/desktopBackground.jpg'

export const MainWrapper = styled.main`
display: flex;
width: 100%;
height: 100%;
background: url(${desktopBackground});
background-size: cover;
background-position: center;
flex-direction: column;
align-items: center;
@media (min-width: 992px) {
  height: 100vh;
}
`