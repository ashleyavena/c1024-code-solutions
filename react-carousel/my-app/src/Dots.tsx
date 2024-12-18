import { FaCircle, FaRegCircle } from 'react-icons/fa';

type Props = {
  onClick: (i: number) => void;
  count: number;
  current: number;
};

export function Dots({ onClick, count, current }: Props) {
  function renderDots() {
    const circles = [];
    for (let i = 0; i < count; i++) {
      circles.push(
        i === current ? (
          <FaCircle key={i} onClick={() => onClick(i)} />
        ) : (
          <FaRegCircle key={i} onClick={() => onClick(i)} />
        )
      );
    }
    return circles;
  }
  return (
    <>
      <div>{renderDots()}</div>
    </>
  );
}
