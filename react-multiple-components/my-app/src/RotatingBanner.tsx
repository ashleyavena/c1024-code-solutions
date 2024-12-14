import './App';
// import { useState } from 'react';

// import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  // const [index, setIndex] = useState(1);

  return (
    <>
      {/* <Banner animal={items[index]} /> */}
      <PrevButton />
      <Indicators animals={items} />
      <NextButton />
    </>
  );
}

// onClick={setIndex(index - 1)}
