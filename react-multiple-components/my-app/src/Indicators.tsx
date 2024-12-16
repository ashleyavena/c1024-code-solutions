type Props = {
  count: number;
  current: number;
  onClick: (i: number) => void;
};

export function Indicators({ count, current, onClick }: Props) {
  function renderButtons() {
    const buttons = [];
    for (let i = 0; i < count; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onClick(i)}
          style={{ backgroundColor: i === current ? 'lightblue' : 'grey' }}>
          {i}
        </button>
      );
    }
    return buttons;
  }

  return (
    <>
      <div>{renderButtons()}</div>
    </>
  );
}
