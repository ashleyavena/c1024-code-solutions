import { useState } from 'react';

type Props = {
  animals: string[];
};

export function Indicators({ animal }: Props) {
  const [count, setCount] = useState(0);

  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button>{count}</button>);
  }

  return (
    <>
      <button className="numberBlocks">0</button>
      <button className="numberBlocks">1</button>
      <button className="numberBlocks">2</button>
      <button className="numberBlocks">3</button>
      <button className="numberBlocks">4</button>
      <button className="numberBlocks">5</button>
    </>
  );
}
