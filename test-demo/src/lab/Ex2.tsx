import { useState } from 'react';

export default function CountingBox() {
  const [text, setText] = useState('');
  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.currentTarget.value)} />
      <p>Text size {text.length} characters</p>
    </div>
  );
}