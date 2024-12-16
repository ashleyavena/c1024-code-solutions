type Props = {
  quotes: string[];
  input: string;
};

export function ListOfItems({ quotes, input }: Props) {
  function renderResults() {
    return quotes.filter((Q) => Q.toLowerCase().includes(input.toLowerCase()));
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
          <div className="no-results">No items match the filter.</div>
        )}
      </div>
    </>
  );
}
