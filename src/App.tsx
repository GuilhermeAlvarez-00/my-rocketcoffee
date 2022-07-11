import { BlurEffect } from './components/BlurEffect/';
import { Header } from './components/Header';
import { Hero } from './pages/Hero';

import './styles/styles.css';

function App() {
  return (
    <>
      <BlurEffect position="top" />
      <BlurEffect position="bottom" />
      <Header />
      <Hero />
    </>
  );
}

export default App;
