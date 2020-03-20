import styled from 'styled-components'
import desktopBackground from 'assets/desktopBackground.jpg'

export const MainWrapper = styled.div`
display: flex;
height: 100%;
background: url(${desktopBackground});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
flex-direction: column;
align-items: center;
`