import './SearchableList';
import './App';

type Props = {
  onChange: (value: string) => void;
};

export function SearchBar({ onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      <label className="search-bar">
        <input
          type="text"
          onChange={handleChange}
          placeholder="search..."></input>
        <img src="search-solid.svg" className="search-glass" />
      </label>
    </>
  );
}
