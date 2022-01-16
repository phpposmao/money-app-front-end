import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .form {
    width: 100%;
    max-width: 350px;
    margin-right: 2rem;

    form {
      margin-top: 5rem;

      h1 {
        color: var(--green);
        margin-bottom: 1rem;
        font-size: 3rem;
      }

      h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
    }
  }
`