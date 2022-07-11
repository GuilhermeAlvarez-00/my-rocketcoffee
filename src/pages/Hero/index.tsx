import heroImg from '../../assets/rocket-coffee.png';

import { Container } from './styles';

export function Hero() {
  return (
    <Container>
      <h1>Great Coffee</h1>
      <img src={heroImg} />
    </Container>
  );
}
