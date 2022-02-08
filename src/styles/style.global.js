import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --default-green:  85, 57%, 55%;
    --saturated-green: 85, 82%, 55%;
    --light-black: 	0.50	0.10%	0.06%;
    --text-gray: 0, 0%, 93%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: hsl(var(--light-black));
  }

  body, button,
  h1, h2, h3, h4, h4, h5,
  input, textarea {
    font-family: 'Montserrat', sans-serif;
  }

`

export default GlobalStyle