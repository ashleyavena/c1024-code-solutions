import './App';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ListOfItems } from './ListOfItems';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(value: string) {
    setInputValue(value);
  }

  return (
    <>
      <div className="searchable-list">
        <SearchBar input={inputValue} onChange={handleChange} />
        <ListOfItems quotes={quotes} input={inputValue} />
      </div>
    </>
  );
}
