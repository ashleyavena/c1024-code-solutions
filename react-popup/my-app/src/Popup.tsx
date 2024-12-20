import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  positionTo: HTMLElement | null;
  opacity?: number;
  children: React.ReactNode;
};

export function Popup({
  isOpen,
  onClose,
  positionTo,
  opacity = 0.5,
  children,
}: Props) {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        positionTo &&
        !positionTo.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, positionTo]);

  const r = positionTo ? positionTo.getBoundingClientRect() : null;
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  const popupStyle = {
    position: 'absolute' as const,
    listStyleType: 'none',
    top: `${top}px`,
    left: `${left}px`,
    transform: 'translateX(-50%)',
    border: '2px solid black',
    padding: '10px',
    width: '200px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    color: 'black',
    zIndex: 1001,
  };

  const backdropStyle = {
    position: 'fixed' as const,
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    zIndex: 1000,
  };

  if (!isOpen) return null;
  return createPortal(
    <>
      <div style={backdropStyle} onClick={onClose} />
      <div ref={popupRef} style={popupStyle}>
        {children}
      </div>
    </>,
    document.body
  );
}
