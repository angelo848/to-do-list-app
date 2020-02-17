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
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
    grid-template-areas: 'sidebar main calendar';
    grid-gap: 30px;
  }

  .menu {
    grid-area: sidebar
  }

  .todo {
    grid-area: main
  }

  .calendar {
    grid-area: calendar;
    height: fit-content;
    margin-top: 30px
  }
`

export default GlobalStyle
