import { useEffect, useRef, useState } from "react";

// This component should change the document title when component Foo enters the page
// and restore the previous value when Foo leaves the page,
// Unfortunately it doesn't work

// Find the bug and fix it

function useTitle(title) {
  console.count(`useTitle`);
  const prevTitleRef = useRef(document.title);

  useEffect(() => {
    console.count(`useTitle::effect setup`);
    if (document.title !== title) document.title = title;

    return () => {
      console.count(`useTitle::effect cleanup`);
      document.title = prevTitleRef.current;
    };
  }, [title]);
}

function Foo() {
  useTitle("yay");
  return <p>Foo</p>;
}

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show && <Foo />}
      <input
        type="checkbox"
        checked={show}
        onChange={(e) => setShow(e.currentTarget.checked)}
      />
    </div>
  );
}
