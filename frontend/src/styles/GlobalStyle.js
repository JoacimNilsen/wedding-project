import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html, body {

  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
body {
  background: #2D2A2A;
  color: #FFF2EA;
  font-family: 'Open Sans', sans-serif;
}
`