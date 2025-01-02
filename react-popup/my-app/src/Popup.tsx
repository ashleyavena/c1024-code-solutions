import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import './App.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  positionTo: HTMLElement | null;
  opacity?: number;
  children: ReactNode;
};

export function Popup({
  isOpen,
  onClose,
  positionTo,
  opacity = 0.5,
  children,
}: Props) {
  const popupRef = useRef<HTMLDivElement | null>(null);

  const r = positionTo ? positionTo.getBoundingClientRect() : null;
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  if (!isOpen) return null;
  return createPortal(
    <>
      <div onClick={onClose} style={{ opacity }} className="backdrop-shade" />
      <div
        ref={popupRef}
        className="popupStyle"
        style={{ top, left, position: 'absolute' }}>
        {children}
      </div>
    </>,
    document.body
  );
}
