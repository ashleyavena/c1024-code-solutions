import { useState } from 'react';

type Props = {
  chamomiles: string[];
};
export function Caption({ chamomiles }: Props) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index >= chamomiles.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return <h3 onClick={handleClick}>{chamomiles[index]}</h3>;
}
