import { BlurEffect } from './components/BlurEffect/';

import './styles/styles.css';

function App() {
  return (
    <>
      <h2>Hello World</h2>
      <BlurEffect position="top" />
      <BlurEffect position="bottom" />
    </>
  );
}

export default App;

//text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
