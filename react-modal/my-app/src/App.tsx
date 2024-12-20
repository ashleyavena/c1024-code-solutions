import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Delete Me!</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <p>Do you really want to delete?</p>
        <button onClick={() => setOpen(false)}>Cancel</button>
        <button
          onClick={() => {
            alert('has been deleted');
            setOpen(false);
          }}>
          Delete
        </button>
      </Modal>
    </>
  );
}

export default App;
