import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 100%;
    padding: 96px;
    background: var(--background);
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
      width: 100%;
      max-width: 380px;

      h2 {
        margin: 2rem 0 2rem;
        font-size: 2rem;
      }

      h1 {
        font-size: 3rem;
        color: var(--green);
      }

      p {
        font-size: 1.1rem;
        color: var(--text-body)
        line-height: 2rem;
      }
    }

    form {
      width: 100%;
      max-width: 450px;

      input {
        margin-top: 0.5rem;
      }
    }
  }
`