import styled from 'styled-components';

export const Container = styled.header`
  width: min(100%, 918px);
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  nav {
    display: flex;
    gap: 32px;
  }

  nav a {
    font-size: 14px;
    font-weight: 400;
    padding: 0 4px;
    color: var(--white);
    transition: color 0.2s;

    &:hover {
      color: var(--button);
    }
  }

  button {
    width: 172px;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid var(--button);
    background: transparent;
    text-transform: uppercase;
    color: var(--white);

    a {
      font-weight: 900;
      font-size: 11px;
    }
  }
`;
