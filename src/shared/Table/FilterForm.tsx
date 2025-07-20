import { useState } from "react";

interface FilterFormProps {
  filters: Record<string, string>;
  setFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  columns: string[];
}

export const FilterForm: React.FC<FilterFormProps> = ({ filters, setFilters, columns }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (key: string, value: string) => {
    setLocalFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    setFilters(localFilters);
  };

  const resetFilters = () => {
    const reset = Object.fromEntries(columns.map(col => [col, '']));
    setLocalFilters(reset);
    setFilters(reset);
  };

  return (
    <form className="filters-form">
      {columns.map(col => (
        <label key={col}>
          {col}
          <input
            value={localFilters[col] || ''}
            onChange={e => handleChange(col, e.target.value)}
            placeholder={`Search ${col}`}
          />
        </label>
      ))}
      <div className="actions">
        <button type="button" className="reset" onClick={resetFilters}>Reset</button>
        <button type="button" className="filter" onClick={applyFilters}>Filter</button>
      </div>
    </form>
  );
};
