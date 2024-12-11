import './App.css';
import { PokemonList } from './PokemonList';

const pokedexArray = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export function App() {
  return (
    <>
      <PokemonList pokedex={pokedexArray} />
    </>
  );
}

export default App;
