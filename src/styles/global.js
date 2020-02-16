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
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'sidebar main';
    grid-gap: 30px;
  }

  .menu {
    grid-area: sidebar
  }

  .todo {
    grid-area: main
  }
`

export default GlobalStyle
