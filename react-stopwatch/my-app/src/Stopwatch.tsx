import './App';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useState } from 'react';

export function Stopwatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>(); // intervalID will tell us if it's running, if it's not it's undefined
  const [seconds, setSeconds] = useState(0);
  // const isRunning= !!intervalId //turns into boolean isRunning is False here

  function handlePlay() {
    function callback() {
      setSeconds((prev) => prev + 1);
    }
    const id = setInterval(callback, 1000);
    setIntervalId(id);
  }

  function handlePause() {
    clearInterval(intervalId); // clear interval clears it from the event queue so the interval stops running
    setIntervalId(undefined);
  }

  function handleReset() {
    if (!intervalId) {
      setSeconds(0);
    }
  }

  return (
    <>
      <div className="stopwatch">
        <div className="face" onClick={handleReset}>
          <span>{seconds}</span>
        </div>
        <div>
          {intervalId ? (
            <FaPause onClick={handlePause} size="2rem" className="pause-icon" />
          ) : (
            <FaPlay onClick={handlePlay} size="2rem" className="play-icon" />
          )}
        </div>
      </div>
    </>
  );
}
