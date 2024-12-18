import { FaAngleLeft } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export function PrevButton({ onClick }: Props) {
  return (
    <>
      <FaAngleLeft className="p-button" onClick={onClick} />
    </>
  );
}
