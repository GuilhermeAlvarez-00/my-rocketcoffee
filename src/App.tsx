import { BlurEffect } from './components/BlurEffect/';
import { Header } from './components/Header';

import './styles/styles.css';

function App() {
  return (
    <>
      <BlurEffect position="top" />
      <BlurEffect position="bottom" />
      <Header />
    </>
  );
}

export default App;

//text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
