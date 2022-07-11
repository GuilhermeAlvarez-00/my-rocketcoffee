import styled from 'styled-components';

export const Container = styled.button`
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
  transition: background 0.2s;

  a {
    font-weight: 900;
    font-size: 11px;
  }

  img {
    padding-left: 10px;
  }

  &:hover {
    background: var(--button);
  }
`;
