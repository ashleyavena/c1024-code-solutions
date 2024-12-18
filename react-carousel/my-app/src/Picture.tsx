import type { Image } from './App';

type Props = {
  image: Image;
};

export function Picture({ image }: Props) {
  return (
    <>
      <img src={image.src} alt={image.alt} />
    </>
  );
}
