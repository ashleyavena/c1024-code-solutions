/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { Pokemon, PokemonList } from './PokemonList';
import { Props } from './PokemonList';

export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(obj: Pokemon) {
    setPokedex([...pokedex, obj]);
  }

  function handleUpdate(number: string, name: string) {
    setPokedex(
      pokedex.map((pokemon) =>
        pokemon.number === number ? { ...pokemon, name } : pokemon
      )
    );
  }

  function handleRemove(number: string) {
    setPokedex(pokedex.filter((pokemon) => pokemon.number !== number));
  }

  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={() => handleAdd({ number: '137', name: 'Cinnamoroll' })}>
        Add
      </button>
      <button onClick={() => handleUpdate('025', 'PikaPika')}>Update</button>
      <button onClick={() => handleRemove('004')}>Remove</button>
    </div>
  );
}
