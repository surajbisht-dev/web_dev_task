const SortBar = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex justify-end mb-3">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="name">Name</option>
      </select>
    </div>
  );
};

export default SortBar;
