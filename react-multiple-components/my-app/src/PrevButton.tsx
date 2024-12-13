type Props = {
  animals: string;
};

export function PrevButton({ animal }: Props) {
  return (
    <>
      <div>
        <button className="prevButton">Prev</button>
      </div>
    </>
  );
}
