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
`;
