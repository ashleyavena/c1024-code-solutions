type Props = {
  animals: string[];
};

export function Indicators({ animals }: Props) {
  function renderButtons() {
    const buttons = [];
    for (let i = 0; i < animals.length; i++) {
      buttons.push(<button>{i}</button>);
    }
    return buttons;
  }

  return (
    <>
      <div>{renderButtons()}</div>
      onClick={}
    </>
  );
}
