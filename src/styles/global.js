import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('<link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap" rel="stylesheet">');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    font-family: 'Roboto', sans-serif;
  }

  .App {
    margin: 50px 100px
  }
`

export default GlobalStyle
