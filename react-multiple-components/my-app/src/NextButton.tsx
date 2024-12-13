type Props = {
  animals: string;
};

export function NextButton({ animals }: Props) {
  return (
    <>
      <div>
        <button className="nextButton">Next</button>
      </div>
    </>
  );
}
