type Props = {
  quotes: string[];
  input: string;
};

export function ListOfItems({ quotes, input }: Props) {
  function renderResults() {
    return quotes.filter((q) => q.toLowerCase().includes(input.toLowerCase()));
  }
  const results = renderResults();

  return (
    <>
      <div className="items-list">
        {results.length > 0 ? (
          results.map((q, index) => (
            <div key={index} className="quote-item">
              {q}
            </div>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    </>
  );
}

// filter prop?
// useState [index, setIndex] Loop through items[]
// if (filter !== items[any index]){console.log("no items found")}
