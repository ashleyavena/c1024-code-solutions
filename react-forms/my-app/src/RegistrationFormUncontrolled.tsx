import { FormEvent } from 'react';
import './App';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username" className="username"></input>
        </label>
        <label>
          Password:
          <input name="password" type="password" className="password"></input>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
