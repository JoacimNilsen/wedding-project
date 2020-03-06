import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
height 40px;
min-width: 60px;
border: 5px solid white;
background: rgba(0,0,0, 0.2);
transition: 0.6s;
color: white;
cursor: pointer;
&:hover {
  background: rgba (255,255,255, 0.2);
}
&:focus {
  outline-color: yellow;
  outline-offset: 5px;
}
@media (min-width: 668px)
  font-size: 24px;
`

export const Button = ({ onClick, title }) => (

  <Button onClick={onClick}>{title}</Button>
)