import { useState, useRef } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const listStyle = {
    listStyleType: 'none',
  };

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Pop Up!
      </button>

      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        onClose={() => setIsOpen(false)}
        opacity={0.5}>
        <div className="menu-wrapper">
          <ul className="menu" style={listStyle}>
            <li> Item 1</li>
            <li> Item 2</li>
            <li> Item 3</li>
            <li> Item 4</li>
          </ul>
        </div>
      </Popup>
    </>
  );
}

export default App;
