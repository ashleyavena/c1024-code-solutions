import type { Image } from './App';

type Props = {
  image: Image;
};

export function Picture({ image }: Props) {
  return (
    <>
      <img className="rotating-images" src={image.src} alt={image.alt} />
    </>
  );
}
