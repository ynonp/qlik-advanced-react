import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { RootState } from './store';

const Notes= () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Notes />
    </div>
  )
}

export default App
