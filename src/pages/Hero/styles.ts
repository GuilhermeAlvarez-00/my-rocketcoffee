import styled from 'styled-components';

export const Container = styled.main`
  width: min(100%, 918px);
  margin: 0 auto;
  text-align: center;

  h1 {
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

  img {
    width: 100%;
    max-width: 798px;
  }
`;
