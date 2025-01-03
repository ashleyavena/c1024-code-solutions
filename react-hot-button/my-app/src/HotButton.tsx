import { useState } from 'react';

export function HotButton() {
  const [count, setCount] = useState(0);

  const colors = ['purple', 'lilac', 'red', 'orange', 'yellow', 'white'];

  function getColor(clicks: number) {
    if (clicks <= 3) return colors[0];
    if (clicks <= 6) return colors[1];
    if (clicks <= 9) return colors[2];
    if (clicks <= 12) return colors[3];
    if (clicks <= 15) return colors[4];
    if (clicks <= 18) return colors[5];
    return colors[0];
  }

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button className={`hot-button ${getColor(count)}`} onClick={handleClick}>
        Hot Button {count}
      </button>
    </>
  );
}

export default HotButton;
