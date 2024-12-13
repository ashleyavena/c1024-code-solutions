import { FormEvent, useState } from 'react';

import './App';

// type FormData = {
//   username: string;
//   password: string;
// };

export function RegistrationFormControlled() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data, username, password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
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
