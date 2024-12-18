import { FaAngleRight } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return (
    <>
      <FaAngleRight className="n-button" onClick={onClick} />
    </>
  );
}
