import { useState } from 'react';
import './App';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn(!isOn);
  }
  return (
    <>
      <div className="toggle-switch" onClick={handleClick}>
        <div className={`slider ${isOn ? 'on' : 'off'}`}>
          <div className="switch"></div>
        </div>
        <span className="label">{isOn ? 'ON' : 'OFF'}</span>
      </div>
    </>
  );
}
