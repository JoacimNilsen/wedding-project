import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
height 40px;
width: 110px;
font-size: 12px;
border: 2px solid #FFF2EA;
background: rgba(0,0,0, 0.4);
border-radius: 5px;
letter-spacing: 1px;
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
  font-size: 18px;
  min-width: 150px;
}
`

export const MenuButton = ({ onClick, title }) => (

  <Button onClick={onClick}>{title}</Button>
)