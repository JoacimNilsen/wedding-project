import styled from 'styled-components'

export const StickyWrapper = styled.footer`
position: sticky;
bottom: 0;
background: #2D2A2A
`

export const FooterWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
height: 45px;
`

export const FooterButton = styled.button`
text-transform: uppercase;
letter-spacing: 1.5px;
font-size: 18px;
font-weight: 700;
color: #fff;
height: 40px;
border: none;
background: transparent;
transition: 0.6s;
cursor: pointer;
&:focus {
  outline-color: #FF9900;
  outline-offset: 3px;
}
&:hover {
  color: #FF9900;
}
@media (min-width: 668px) {
  font-size: 14px;
  font-weight: 400;
}
@media (min-width: 992px) {
  font-size: 18px;
}
`

export const Separator = styled.p`
font-weight: 900;
font-size: 18;
height: 28px;
`