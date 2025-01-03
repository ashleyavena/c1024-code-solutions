import './SearchableList';
import './App';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label className="search-bar">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="search..."></input>
        <img src="search-solid.svg" className="search-glass" />
      </label>
    </>
  );
}
