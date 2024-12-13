import './App';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useState } from 'react';

export function Stopwatch() {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [seconds, setSeconds] = useState(0);

  function handlePlay() {
    function callback() {
      setSeconds((seconds) => seconds + 1);
    }
    const id = setInterval(callback, 1000);
    setIntervalId(id);
  }

  function handlePause() {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }

  function handleReset() {
    if (!intervalId) {
      setSeconds(0);
      setIntervalId(undefined);
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
