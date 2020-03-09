import React from 'react'
import styled from 'styled-components'
import { Navbar} from 'components/Navbar'
import { Paragraph } from 'styles/TextStyle'
import { Button } from 'library/Button'
import { MainWrapper } from 'library/MainWrapper'



const HeaderWrapper = styled.div`
margin-top: 40px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
width: 100%;
@media (min-width: 668px) {
  margin-top: 0px;      
}
`

const Header = styled.h2`
text-transform: uppercase;
letter-spacing: 1.5px;
font-size: 30px;
font-weight: 700;
color: #FFF2EA;
@media (min-width: 668px) {
  font-size: 35px;
}
`

const ContentWrapper = styled.section`
width: 100%;
margin: 0;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
@media (min-width: 992px) {
  flex-direction: row;
}
`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0px 20px 0px 20px;
`

const MapWrapper = styled.div`
  margin: 20px;
  width: 100%;
  overflow: hidden;
  background: none;
  display: flex;
  justify-content: center;
  @media (min-width: 850px)

`
const Iframe = styled.iframe`
  width: 400px;
  height: 400px;
  margin: 20px;
  border-radius: 6px;
`

export const Location = () => {
  
  return (
    <>
    <Navbar />
    <MainWrapper>
      
    <HeaderWrapper>
      <Header>Where is the wedding?</Header>
    </HeaderWrapper>
    <ContentWrapper>
      <TextWrapper>
      <Paragraph>The wedding will take place at Enskede church and the closest subway is Sandsborg.
         After the ceremony we will dance all night at a venue in Slakthusområdet nearby. 
         If you would like to join us for breakfast, we will be staying at Quality Hotel Globe.
      </Paragraph>
      <Button title='Book Quality Hotel' onClick={() => window.open('https://www.nordicchoicehotels.se/hotell/sverige/stockholm/quality-hotel-globe/')} />
      </TextWrapper>
      <MapWrapper>
      <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.8958173189922!2d18.079251216153178!3d59.28459482165052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f782ef380ed4d%3A0xa5b8bea529276d4f!2sEnskede%20Kyrka!5e0!3m2!1ssv!2sse!4v1583583393667!5m2!1ssv!2sse" scrolling ='no' frameBorder='0' />
      </MapWrapper>
    </ContentWrapper>
    </MainWrapper>
  </>
  )
}