import styled from 'styled-components'

export const Input = styled.input`
border: none;
height: 30px;
line-height: none;
padding-left: 5px;
&:focus {
  border: 2px solid #FF9900;
  outline-color: #FF9900;
  outline-offset: 3px;
}
`