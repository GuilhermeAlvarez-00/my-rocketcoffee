import imgLogo from '../../assets/logo-desktop.svg';
import { Button } from '../Button';

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

      <Button />
    </Container>
  );
}
