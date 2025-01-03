import './App';

type Pokemon = {
  number: string;
  name: string;
};

type Props = {
  pokedex: Pokemon[];
};

// export function PokemonList({ pokedex }: Props){
//   let list=[];
//   for (let i =0; i< pokedex.length;i++){
//     list.push(<li>{pokedex[i].name</li>)
//   }

//   pokedex.forEach((pokemon)=>{
//     list.push(<li>{pokedex[i].name</li>);
//   })

// list=pokedex.map((pokemon)=>{
//   return <li>{pokemon.name}</li>
// })

// preffered way:
// return(
//   <ul>
//     {pokedex.map((pokemon)=>{
//       <li key={pokemon.number}>{pokemon.name}</li>
//     })}
//   </ul>
// )
// }

export function PokemonList({ pokedex }: Props) {
  const nameItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{nameItems}</ul>;
}
