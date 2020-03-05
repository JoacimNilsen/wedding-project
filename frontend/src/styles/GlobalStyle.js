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
  background: #0D0C1D;
  color: #EFFFFA;
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
}
`