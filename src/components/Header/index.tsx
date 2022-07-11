import imgLogo from '../../assets/logo-desktop.svg';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={imgLogo} />

      <nav>
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Recompensas</a>
        <a href="#">Gift Cards</a>
        <a href="#">Lojas</a>
      </nav>

      <button>
        <a>Pegar meu café</a>
      </button>
    </Container>
  );
}
