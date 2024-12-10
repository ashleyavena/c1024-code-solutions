import { useState } from 'react';

type Props = {
  daisies: string[];
};
export function Description({ daisies }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= daisies.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return <p onClick={handleClick}>{daisies[index]}</p>;
}
