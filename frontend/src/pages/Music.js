import React from "react"
import styled from "styled-components"
import { Navbar } from "components/Navbar"
import { Paragraph } from "styles/TextStyle"
import { MainWrapper } from "styles/MainWrapper"

const HeaderWrapper = styled.header`
  margin-top: 40px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  @media (min-width: 668px) {
    margin-top: 0px;
  }
`

const Header = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 30px;
  font-weight: 700;
  color: #fff2ea;
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
    flex-direction: column;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 20px;
`

const PlaylistWrapper = styled.div`
  margin: 20px;
  width: 100%;
  overflow: hidden;
  background: none;
  display: flex;
  justify-content: center;
  @media (min-width: 850px);
`
const Iframe = styled.iframe`
  width: 800px;
  height: 700px;
  margin: 20px;
  border-radius: 6px;
`

export const Music = () => {
  return (
    <MainWrapper>
      <Navbar />
      <HeaderWrapper>
        <Header>Request music to the party!</Header>
      </HeaderWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Paragraph>
            This is a shared playlist. Open it up in Spotify and add music to
            the wedding! We will moderate the list as we dont want slow jams at
            the party!
          </Paragraph>
        </TextWrapper>
        <PlaylistWrapper>
          <Iframe
            title='playlist'
            src='https://open.spotify.com/embed/playlist/2WPYRa53nGxvDjNlQVwbbh'
            width='300'
            height='380'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></Iframe>
        </PlaylistWrapper>
      </ContentWrapper>
    </MainWrapper>
  )
}
