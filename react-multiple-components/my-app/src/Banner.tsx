type Props = {
  animals: string[];
};

export function Banner({ animals }: Props) {
  return (
    <>
      <div className="RotatingBanner">
        <h1>Aardvark</h1>
      </div>
    </>
  );
}
