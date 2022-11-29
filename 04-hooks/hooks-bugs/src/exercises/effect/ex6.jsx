import { useState, useEffect } from 'react'
import _ from 'lodash';

/**
 * The component Listener listens to messages on selected categories
 * Each time the user changes categories, it cancels all previous subscriptions
 * and created new ones
 *
 * Change the code so that when we "subscribe" to a new category,
 * Existing subscriptions will not be re-created
 */

const eventBus = {
  subscribers: {},
  on(category, cb) {
    console.log(`Subscribed to ${category}`);
    this.subscribers[category] = this.subscribers[category]  || [];
    this.subscribers[category].push(cb);
  },
  off(category, cb) {
    console.log(`Unsubscribed to ${category}`);
    this.subscribers[category] = this.subscribers[category].filter(c => c !== cb);
  },
  emit(category, msg) {
    if (this.subscribers[category]) {
      this.subscribers[category].forEach(c => c(msg));
    }
  }
};

const categories = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

setInterval(() => {
  const cat = _.sample(categories);
  eventBus.emit(cat, `hello from ${cat}`);
}, 500);

function Subscription({ active, handleChange, cat }) {
  useEffect(() => {
    if (active) {
      eventBus.on(cat, console.log);
    }
    
    return () => {
      if (active) {
        eventBus.off(cat, console.log);
      }
    };
  }, [active, cat]);  

  return (
  <li>
    <input type="checkbox" checked={active}
      onChange={(e) => handleChange(e, cat)}
    />
    {cat}
  </li>
  )
}


function Listener() {
  const [active, setActive] = useState([]);

  function selectAll() {
    setActive(categories);
    // categories.forEach((c) => eventBus.on(c, console.log));
  }

  function clearAll() {
    setActive([]);
  }

  function handleChange(e, category) {
    if (e.target.checked) {
      // subscribe
      // setActive([...active, category]);
      setActive(oldActive => [...oldActive, category]);
      // eventBus.on(category, console.log);
    } else {
      setActive(active.filter(c => c !== category));
      // eventBus.off(category, console.log);
    }
  }


  return (
    <>
      <p>Subscribed to {active.join(', ')}</p>
      <button onClick={selectAll}>Select All</button>
      <button onClick={clearAll}>Clear All</button>
      <ul>
        {categories.map(c =>
          <Subscription
            handleChange={handleChange}
            active={active.includes(c)}
            cat={c}
            />
        )}
      </ul>
    </>
  );
}

function App() {
  return <Listener />
}

export default App
