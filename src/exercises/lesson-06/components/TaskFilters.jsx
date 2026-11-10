export default function TaskFilter({ filter, setFilter }) {
  const filters = ['all', 'completed', 'pending'];

  return (
    <div>
      {filters.map((filterOption) => (
        <button key={filterOption} onClick={() => setFilter(filterOption)}>
          {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
        </button>
      ))}
      <p>Current filter: {filter}</p>
    </div>
  );
}
