type Props = {
  animal: string;
};

export function Banner({ animal }: Props) {
  return (
    <>
      <div className="RotatingBanner">
        <h1>{animal}</h1>
      </div>
      1
    </>
  );
}
