// components/FilterControls.jsx
function FilterControls({ filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 my-6 justify-center">
      <select
        value={filters.category}
        onChange={(e) => onChange({ ...filters, category: e.target.value })}
        className="p-2 border rounded-lg"
      >
        <option value="">All Categories</option>
        <option value="study">Study</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
      </select>

      <select
        value={filters.priority}
        onChange={(e) => onChange({ ...filters, priority: e.target.value })}
        className="p-2 border rounded-lg"
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        type="date"
        value={filters.date}
        onChange={(e) => onChange({ ...filters, date: e.target.value })}
        className="p-2 border rounded-lg"
      />
    </div>
  );
}

export default FilterControls;
