import './App';
import { useState } from 'react';

import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Banner animal={items[index]} />
      <PrevButton
        onClick={() => setIndex((index - 1 + items.length) % items.length)}
      />
      <Indicators
        onClick={(e) => setIndex(e)}
        count={items.length}
        current={index}
      />
      <NextButton onClick={() => setIndex((index + 1) % items.length)} />
    </>
  );
}
