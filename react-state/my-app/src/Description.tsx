import { useState } from 'react';

type Props = {
  daisies: string[];
};
export function Description({ daisies }: Props) {
  const [index, setIndex] = useState(0);
  return <p onClick={() => setIndex((index + 1) % daisies.length)}></p>;
}
