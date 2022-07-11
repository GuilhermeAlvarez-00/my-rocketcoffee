import imgLogo from '../../assets/logo-desktop.svg';
import imgMobileLogo from '../../assets/logo-mobile.svg';
import imgMenuOpen from '../../assets/menu-buguer-open.svg';
import imgMenuClose from '../../assets/menu-buguer-close.svg';
import { Button } from '../Button';

import { Container, Mobile } from './styles';
import { useRef, useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleToggleMobileMenu() {
    setIsMobileMenuOpen((prevState) => !prevState);
  }

  return (
    <>
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
      <Mobile>
        <img src={imgMobileLogo} />

        <nav className={isMobileMenuOpen ? 'active' : ''}>
          <a className="active" href="#">
            Home
          </a>
          <a href="#">Menu</a>
          <a href="#">Recompensas</a>
          <a href="#">Gift Cards</a>
          <a href="#">Lojas</a>
        </nav>

        <button onClick={handleToggleMobileMenu}>
          {isMobileMenuOpen ? (
            <img src={imgMenuClose} />
          ) : (
            <img src={imgMenuOpen} />
          )}
        </button>
      </Mobile>
    </>
  );
}
