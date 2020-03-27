import styled from "styled-components"

export const Header = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 30px;
  font-weight: 700;
  color: #fff2ea;
  display: flex;
  @media (min-width: 668px) {
    font-size: 35px;
  }
`

export const InfoText = styled.h3`
  letter-spacing: 1.5px;
  font-size: 18px;
  text-align: center;
  @media (min-width: 668px) {
    font-size: 25px;
  }
`

export const Paragraph = styled.p`
  letter-spacing: 1.5px;
  font-size: 16px;
  text-align: center;
  @media (min-width: 668px) {
    font-size: 21px;
  }
`

export const LabelText = styled.p`
  font-weight: 700;
  @media (min-width: 668px) {
    font-size: 21px;
  }
`
