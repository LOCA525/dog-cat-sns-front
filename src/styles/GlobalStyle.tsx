import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* 백그라운드 컬러 */
    background-color: #f8f3e7;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ol,
  ul,
  li {
    list-style: none;
  }
  input {
    border: none;
    outline: none;
  }
  button {
    border: none;
    background: transparent;

    :hover {
      cursor: pointer;
    }
  }
  a {
    color: black;
    text-decoration: none;

    :hover, :active {
      text-decoration: none; 
      color: gainsboro; 
    }
  }
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
      "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  `;

export default GlobalStyle;
