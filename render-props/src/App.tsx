import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type ListProps = {
  items: Array<{id: string, text: string }>;
  render?: (item: ListProps['items'][number]) => React.ReactNode;
};

function defaultRender(item: ListProps['items'][number]) {
  return  <li key={item.id}>{item.text}</li>
}

function List({ items, render=defaultRender }: ListProps) {
  return (
    <ul>
      {items.map(render)}
    </ul>
  )
}

const items = [
  { id: '1', text: 'wow' },
  { id: '2', text: 'bye bye'},
]

const el = useRef(null);

function App() {
  return (
    <div ref={el}>
      <List
        items={items}
        render={(item) =>           
          <li key={item.id}><b>{item.id} - {item.text}</b></li>} /> 
        
        <List items={items} />
    </div>
  )
}

export default App
