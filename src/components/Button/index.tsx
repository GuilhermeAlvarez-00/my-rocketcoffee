import iconImg from '../../assets/arrow.svg';

import { Container } from './styles';

interface ButtonProps {
  withIcon?: boolean;
}

export function Button({ withIcon }: ButtonProps) {
  return (
    <Container>
      <a>Pegar meu café</a>
      {withIcon && (
        <img
          src={iconImg}
          alt="Right arrow icon beside of text Pegar meu café"
        />
      )}
    </Container>
  );
}
