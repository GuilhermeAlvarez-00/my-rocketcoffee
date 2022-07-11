import styled from 'styled-components';

export const Container = styled.header`
  width: min(100%, 918px);
  height: 50px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
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
    margin-left: auto;
  }

  @media screen and (max-width: 964px) {
    display: none;
  }
`;

export const Mobile = styled.header`
  display: none;
  margin-top: 37px;
  height: 58px;
  border-bottom: 1px solid #29292e;
  padding: 0 25px;

  @media screen and (max-width: 964px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > img {
      width: 171px;
    }

    button {
      width: 24px;
      height: 8px;
      background: none;
      border: none;
    }

    nav {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 96px;
      left: -100%;
      background: var(--backgrond);
      z-index: 1;
      transition: all 0.2s;

      a {
        line-height: 56px;
        border-bottom: 1px solid #29292e;
        padding-left: 30px;

        &.active {
          border-left: 5px solid var(--button);
        }
      }
    }

    nav.active {
      left: 0;
    }
  }
`;
