import styled from 'styled-components';

export const Container = styled.main`
  width: min(100%, 918px);
  margin: 0 auto;
  text-align: center;

  div.mobile {
    display: none;
  }

  > h1 {
    text-align: center;
    margin-top: 40px;
    font-weight: 700;
    font-size: 80px;
    display: flex;
    flex-direction: column;

    &::after {
      content: '<Great Coffee/>';
      color: var(--backgrond);
      text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button),
        -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }
  }

  > img {
    width: 100%;
    max-width: 798px;
  }

  @media screen and (max-width: 964px) {
    > h1 {
      font-size: 50px;
    }

    div.mobile {
      display: block;

      h1 {
        font-size: 30px;
        margin-top: 88px;
      }

      button {
        margin: 88px auto 0;
      }
    }
  }
`;
