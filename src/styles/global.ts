import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 3rem;
    color: var(--text-body);
    border: 0.1rem solid #DCDCE6;
    border-radius: 0.5rem;
    padding: 0 1rem;
    margin-top: 1rem;
  }

  .button {
    width: 100%;
    height: 4rem;
    background: var(--green);
    border: 0;
    border-radius: 0.5rem;
    color: #FFF;
    font-weight: 700;
    margin-top: 1rem;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 1.2rem;
    line-height: 4rem;
    transition: filter 0.2s;

    :hover {
      filter: brightness(90%);
    }
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 2.5rem;
    color: var(--text-title);
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 700;
    transition: opacity 0.2s;
  }

  .back-link:hover {
    opacity: 0.8;
  }
`
