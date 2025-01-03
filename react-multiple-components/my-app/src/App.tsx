import './App.css';

import { RotatingBanner } from './RotatingBanner';

const itemz = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <>
      <RotatingBanner items={itemz} />
    </>
  );
}

export default App;
