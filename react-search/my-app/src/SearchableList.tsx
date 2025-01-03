import './App';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ListOfItems } from './ListOfItems';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <div className="searchable-list">
        <SearchBar value={inputValue} onChange={setInputValue} />
        <ListOfItems quotes={quotes} input={inputValue} />
      </div>
    </>
  );
}
