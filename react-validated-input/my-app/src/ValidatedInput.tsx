import './App';
import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [password, setPassword] = useState(' ');

  let message = '';
  let isCorrect = false;

  if (!password) {
    message = 'A password is required';
  } else if (password.length < 8) {
    message = 'Your password is too short.';
  } else if (password.length > 8) {
    message = '';
    isCorrect = true;
  } else {
    isCorrect = true;
  }

  return (
    <>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password} // force the input's value to match the state variable
            defaultValue="some initial value"
            onChange={(e) => setPassword(e.target.value)} // update the state variable on any edits
          />
          <span>
            {isCorrect ? (
              <FaCheck style={{ color: 'green' }} />
            ) : (
              password && <FaTimes style={{ color: 'red' }}></FaTimes>
            )}
          </span>
        </label>
        <div className="validation-message">{message}</div>
      </div>
    </>
  );
}
