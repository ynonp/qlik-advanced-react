import { useState, useRef, useEffect } from 'react'

function TodoList({ items, toggleDone }) {
  const [filter, setFilter] = useState('');
  const visibleItems = items.filter(i => i.text.includes(filter));

  return (
    <>
      <input type="text" value={filter} onChange={(e) => setFilter(e.currentTarget.value)} />
      <p>Total: {items.length} items. Left To Do {items.filter(it => !it.done).length}</p>
      <ul>
        {visibleItems.map(item => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={item.done} onChange={() => toggleDone(item)} />
              {item.text}
            </label>
          </li>
        ))}
      </ul>      
    </>
  );
}


function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'write code', done: false },
    { id: 2, text: 'fix the code', done: false },
    { id: 3, text: 'push to production', done: false },
    { id: 4, text: 'hotfix critical bugs in new code', done: false },
  ]);

  function toggleDone(item) {    
    setItems(oldValue => oldValue.map(i =>
      i.id === item.id ? { ...item, done: !item.done } : i 
    ));    
  }
  const finished = items.filter(i => i.done).length;
  return (
    <>
    <TodoList items={items} toggleDone={toggleDone} />

    <hr />
    <footer>
      <p>I finished {finished} tasks </p>
    </footer>
    </>
  )
}

export default App



