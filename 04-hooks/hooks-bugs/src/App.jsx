import { useState  } from 'react';
import Ex1 from './exercises/effect/ex1';
import Ex2 from './exercises/effect/ex2';
import Ex3 from './exercises/effect/ex3';
import Ex4 from './exercises/effect/ex4';
import Ex5 from './exercises/effect/ex5';
import Ex6 from './exercises/effect/ex6';
import RefEx1 from './exercises/ref/ex1';

function App() {
  const [x, s] = useState(1000);
  return (
    <>
      <RefEx1  />
    </>
    
  );
}

export default App
