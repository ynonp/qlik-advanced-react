import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Learn React</h1>
      <p>Here's the magic button</p>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
    </div>
  );
}

export default App;
