import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
    line-height: 1.6;
    /* Footer support */
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.grey.light};
    /* Footer support */
    margin-bottom: 5.2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input,
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #454242;
  cursor: pointer;
  transition: border-color 0.25s;
}
  button:hover {
    border-color: #646cff;
    transition: transform 0.15s ease-in-out;
    transform: scale(1.03);
  }
  button:active {
    transform: scale(1.01);
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (max-width: 1600px) {
    html {
      font-size: 55%;
    }
  }

  @media (max-width: 1400px) {
    html {
      font-size: 45%;
    }
  }
`
export default GlobalStyle
