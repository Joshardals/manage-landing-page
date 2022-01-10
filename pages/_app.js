import { createGlobalStyle, ThemeProvider } from "styled-components";
import "tailwindcss/tailwind.css";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap');

  html, 
  body {
    padding: 0; 
    margin: 0; 
    scroll-behaviour: smooth;
    color: hsl(227, 12%, 61%);  
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 16px;  
    width: 100%; 
    height: 100vh; 
    overflow-x: hidden; 
  }
  ::-webkit-scrollbar {
    width: 0; 
  }
  a {
    text-decoration: none;
    cursor: pointer; 
    color: hsl(228, 39%, 23%);
    font-weight: 600;  
  }
  h1 {
    font-size: 2rem; 
    font-weight: 600; 
    color: hsl(228, 39%, 23%); 
  }
  h2 {
    font-size: 1.5rem; 
    color: hsl(228, 39%, 23%); 
  }
  h3 {
    font-size: 1.17rem;
    font-weight: 600;   
  }
  h4 {
    font-size: 1em; 
    color: hsl(228, 39%, 23%); 
  }
  h5 {
    font-size: 0.83em; 
    color: hsl(228, 39%, 23%); 
  }
  h6 {
    font-size: 0.67rem; 
    color: hsl(228, 39%, 23%); 
  }
  p {
    color: hsl(227, 12%, 61%); 
  }
  .author {
    color: hsl(227, 12%, 61%);
    transition: all 0.3s ease-in 2ms;   
  }
  .author:hover {
    color: white; 
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
