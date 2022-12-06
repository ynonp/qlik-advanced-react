import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { RootState, store } from './store';

const UserName = () => {
  const user = useSelector((state: RootState) => state.profile.user);

  // The return type will be inferred from the return value
  return <div>Welcome, {user.name}</div>;
};

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
      <UserName />
      <Notes />
    </div>
  )
}

export default App
