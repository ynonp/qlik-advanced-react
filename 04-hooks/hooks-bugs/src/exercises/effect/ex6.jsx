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

function Listener() {
  const [active, setActive] = useState([]);

  useEffect(() => {
    active.forEach(c => {
      eventBus.on(c, console.log);
    });

    return () => {
      active.forEach(c => {
        eventBus.off(c, console.log);
      });
    };
  }, [active]);

  return (
    <>
      <p>Subscribed to {active.join(', ')}</p>
      <ul>
        {categories.map(c =>
        <li>
          <input type="checkbox" checked={active.includes(c)}
            onChange={(e) => setActive(act => e.target.checked ? [...act, c] : act.filter(cc => cc !== c))}
          />
          {c}
        </li>
        )}
      </ul>
    </>
  );
}

function App() {
  return <Listener />
}

export default App
