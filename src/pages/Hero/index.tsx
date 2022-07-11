import heroImg from '../../assets/rocket-coffee.png';
import { Button } from '../../components/Button';

import { Container } from './styles';

export function Hero() {
  return (
    <Container>
      <div className="mobile">
        <h1>O café que fará seu código decolar para o próximo nível.</h1>
        <Button withIcon />
      </div>
      <h1>Great Coffee</h1>
      <img src={heroImg} />
    </Container>
  );
}
