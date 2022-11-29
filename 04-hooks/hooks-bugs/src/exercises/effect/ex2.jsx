import React, { useState, useEffect, useReducer, useRef } from 'react';

// This component waits 3 seconds after it mounted
// and then displays an alert showing how many times the user clicked on the button
// BUT it doesn't work - it always prints zero.
// find and fix the problem

function reducer(state, action) {
  if (action.type === 'alert') {
    alert(state);
    return state;
  } else if (action.type === 'inc') {
    return state + 1;
  }
}

export default function Ex2() {
  // const [clickCount, dispatch] = useReducer(reducer, 0);
  const [clickCount, setClickCount] = useState(0);
  const clickCountRef = useRef(clickCount);

  useEffect(() => {
    clickCountRef.current = clickCount;
  }, [clickCount]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      // dispatch({ type: 'alert' });
      alert(clickCountRef.current);
    }, 3000)
    return () => clearTimeout(timeout)
  }, [clickCountRef]);

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={() => setClickCount(c => c + 1)}>
        Click me! (clicked {clickCount} times)
      </button>
    </div>
  )
}