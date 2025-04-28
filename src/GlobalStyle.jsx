import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
      font-size: 18px;
  }

  body {
    font-family: ${(props) => props.theme.fonts.body};
    line-height: 1.5;
    color: ${(props) => props.theme.colors.text};
    overflow-x: clip;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }
    

  :focus {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }


  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }


  html {
    scroll-padding-top: 80px; /* Adjust based on your header height */
  }


  p {
    max-width: 70ch;
  }

  /* Responsive container */
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .skip-to-content {
    position: absolute;
    left: -9999px;
    top: 1rem;
    z-index: 999;
    background: ${(props) => props.theme.colors.primary};
    color: white;
    padding: 0.5rem 1rem;
    
    &:focus {
      left: 1rem;
    }
`;

export default GlobalStyle;
