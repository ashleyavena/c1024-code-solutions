import { FormEvent, useState } from 'react';

import './App';

export function RegistrationFormControlled() {
  const [username, setUserName] = useState<string>(); // might be undefined
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({ username, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username ?? ''} // checks for null or undefined
            onChange={(e) => setUserName(e.target.value)}
            className="username"></input>
        </label>
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="password"></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
