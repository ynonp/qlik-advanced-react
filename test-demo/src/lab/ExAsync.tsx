import { useEffect, useState } from "react";

export default function Timer(props: { ms: number }) {
  const { ms } = props;
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    const clock = setInterval(() => {
      setCount(c => c + 1);
    }, ms);

    return () => {
      clearInterval(clock);
    }
  }, [ms]);

  return (
    <p>Every {ms} ms, count is going up. Current value {count}</p>
  )

}