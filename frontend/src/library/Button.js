import React from 'react'
import styled from 'styled-components'

export const MainButton = styled.button`
height 60px;
min-width: 100px;
max-width: 300px;
font-size: 18px;
border: 4px solid #FFF2EA;
background: rgba(0,0,0, 0.2);
letter-spacing: 1.5px;
transition: 0.6s;
color: #FFF2EA;
cursor: pointer;
&:hover {
  border-color: #FF9900;
  color: #FF9900;
  background: rgba(0,0,0, 0.4);
}
&:focus {
  border-color: #FF9900;
  outline-color: #FF9900;
  outline-offset: 5px;
}
@media (min-width: 668px) {
  font-size: 24px;
  min-width: 150px;
}
`

export const Button = ({ onClick, title }) => (

  <MainButton onClick={onClick}>{title}</MainButton>
)