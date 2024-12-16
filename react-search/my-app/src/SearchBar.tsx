import './SearchableList';
import './App';

type Props = {
  input: string;
  onChange: (value: string) => void;
};

export function SearchBar({ input, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      <label className="search-bar">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="search..."></input>
        {/* <img alt="search icon" className="search-icon" /> */}
      </label>
    </>
  );
}

// useState [index, setIndex] Loop through items[]
