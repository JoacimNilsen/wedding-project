import React from "react"
import styled from "styled-components"
import { MainWrapper } from "styles/MainWrapper"
import { Navbar } from "components/Navbar"
import { Header } from "styles/TextStyle"

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 860px;
`

export const Gallery = () => {
  return (
    <MainWrapper>
      <Navbar />
      <HeaderWrapper>
        <Header>under construction</Header>
      </HeaderWrapper>
    </MainWrapper>
  )
}
