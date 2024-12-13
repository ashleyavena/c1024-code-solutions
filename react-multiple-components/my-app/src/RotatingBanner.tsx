import './App';

import { Banner } from './Banner';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  return (
    <>
      <Banner />
      <PrevButton />
      <Indicators />
      <NextButton />
    </>
  );
}
