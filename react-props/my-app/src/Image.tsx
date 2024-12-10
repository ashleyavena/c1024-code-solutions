import './Image.css';

type ImageProps = {
  src: string;
};

export function Image({ src }: ImageProps) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt="space-image" />
      </div>
    </div>
  );
}
