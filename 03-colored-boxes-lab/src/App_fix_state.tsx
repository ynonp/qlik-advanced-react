import React, { useState } from 'react'
import tinycolor from 'tinycolor2';

type ColorBoxProps = {
  start: number,
  spin: number,
  id: number,
};

const ColorBox = function ColorBox(props: ColorBoxProps) {
  const [visible, setVisible] = useState(true);
  const { start, spin, id } = props;
  const color = tinycolor(start).spin(spin).toString();
  console.log('ColorBox');

  if (!visible) {
    return <></>
  }

  return (
    <div
      onClick={() => setVisible(v => !v)}
      data-id={id}
      style={{
        width: '100px',
        height: '100px',
        background: color,

        display: 'inline-block',
        margin: '5px',
      }} >{id}</div>
  );
};

function ColorPalette(props) {
  console.log('ColorPalette');

  const { start } = props;

  const colors: Array<JSX.Element> = [];
  for (let i=-360; i < 360; i++) {
    colors.push(
      <ColorBox
        start={start}
        spin={i}
        id={i}
      />
    );
  }
  return <>{colors}</>;
}

function Clicker() {
  const [ticks, setTicks] = useState(0);

  return <button onClick={() => setTicks(v => v + 1)}>Click Me ... {ticks}</button>

}

function App() {
  const [color, setColor] = useState('#000000');
  console.log('ColorSelector');
  return (
    <div>
      <div>
        <Clicker />
        <input type="color" value={color} onChange={(e) => setColor(e.target.value) } />
      </div>
      <ColorPalette start={color} />
    </div>
  );
}

export default App
