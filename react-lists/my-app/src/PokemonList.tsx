import './App';

type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const nameItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return (
    <>
      <ul>{nameItems}</ul>
    </>
  );
}
