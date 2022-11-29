import React, { useCallback, useState, useReducer, useDeferredValue } from 'react'
import tinycolor from 'tinycolor2';

function reducer(state: any, action: any) {
  if (action.type === 'reset') {
    return new Set();
  } else if (action.type === 'delete') {
    const newDeletedBoxes = new Set(state);
    newDeletedBoxes.add(action.payload);
    return newDeletedBoxes;
  }
}

type ColorBoxProps = {
  start: number,
  spin: number,
  onClick: React.MouseEventHandler<HTMLDivElement>,
  id: number,
};

const ColorBox = React.memo<ColorBoxProps>(function ColorBox(props) {
  const { start, spin, onClick, id } = props;
  const color = tinycolor(start).spin(spin).toString();
  console.count('ColorBox');

  return (
    <div
      onClick={onClick}
      data-id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,

        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
});

function ColorPalette(props) {
  console.count('ColorPalette');
  const [deletedBoxes, dispatch] = useReducer(reducer, new Set<string>());
  const { start } = props;

  const removeBox: ColorBoxProps['onClick'] = useCallback((e) => {
    const id = e.currentTarget.dataset.id;
    dispatch({ type: 'delete', payload: id});
  }, [dispatch]);

  const colors: Array<JSX.Element> = [];
  for (let i=-360; i < 360; i++) {
    if (deletedBoxes?.has(String(i))) continue;

    colors.push(
      <ColorBox
        start={start}
        spin={i}
        onClick={removeBox}
        id={i}
        key={i}
      />
    );
  }
  return <>
    <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    {colors}
    </>;
}

const Clicker = React.memo(function Clicker() {
  console.count(`Clicker`);
  const [ticks, setTicks] = useState(0);

  return <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>
});

function App() {
  const [color, setColor] = useState('#C3C3C3');
  const deferColor = useDeferredValue(color);

  console.log('ColorSelector');
  return (
    <div>
      <div>
        <Clicker />
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={deferColor} />
    </div>
  );
}

export default App
