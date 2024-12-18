import { useState, useEffect } from 'react';
import type { Image } from './App';
import { Dots } from './Dots';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Picture } from './Picture';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [currentSlide, images.length]);

  return (
    <>
      <PrevButton
        onClick={() =>
          setCurrentSlide((currentSlide - 1 + images.length) % images.length)
        }
      />

      <Picture image={images[currentSlide]} />
      <NextButton
        onClick={() => setCurrentSlide((currentSlide + 1) % images.length)}
      />
      <div>
        <Dots
          onClick={(e) => setCurrentSlide(e)}
          count={images.length}
          current={currentSlide}
        />
      </div>
    </>
  );
}
