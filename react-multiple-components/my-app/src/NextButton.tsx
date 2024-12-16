type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return (
    <>
      <button onClick={onClick} className="nextButton">
        Next
      </button>
    </>
  );
}
