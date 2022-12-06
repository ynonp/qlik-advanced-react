import { useState, useContext, createContext } from 'react'
import './App.css'

const CountFromApp = createContext(0);

function A() {
  return <B  />
}

function B() {
  return <C  />
}

function C() {
  return <D />
}

function D() {
  const count = useContext(CountFromApp);
  return <p>I am d: {count}</p>
}


function App() {  
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CountFromApp.Provider value={count}>
        <button onClick={() => setCount(c => c + 1)}>{count}</button>
        <A />
      </CountFromApp.Provider>
    </div>
  )
}

export default App
