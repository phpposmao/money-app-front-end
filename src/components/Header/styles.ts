import styled from "styled-components";

export const Container = styled.header `
  background: var(--blue);
`;

export const Content = styled.div `
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--background);
    justify-content: center;
    align-items: center;
  }

  .link-button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    text-decoration: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: filter: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

