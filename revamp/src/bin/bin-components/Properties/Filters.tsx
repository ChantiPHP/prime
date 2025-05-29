import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { locationOptions, categoryOptions, leaseOptions } from "@/bin/data/propertyData";

interface FiltersProps {
  filters: {
    location: string;
    category: string;
    leaseType: string;
    searchQuery: string;
  };
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onDebouncedSearchChange: (value: string) => void;
  onAdd: () => void;
}

export default function Filters({
  filters,
  onFilterChange,
  onDebouncedSearchChange,
}: FiltersProps) {
  const [searchValue, setSearchValue] = useState(filters.searchQuery); // Fixed state initialization

  useEffect(() => {
    const timeout = setTimeout(() => {
      onDebouncedSearchChange(searchValue); // Trigger debounced search
    }, 300);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount or value change
  }, [searchValue, onDebouncedSearchChange]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update local search value
    onFilterChange(e); // Trigger parent filter change
  };

  return (
    <div className="relative z-10 bg-PRIMEwhite -mt-20 max-w-4xl rounded-lg mx-auto">
      <div className="shadow-xl rounded-2xl p-6 flex flex-wrap gap-6 items-center justify-between">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Location Filter */}
          <select
            name="location"
            value={filters.location}
            onChange={onFilterChange}
            className="border-b border-PRIMEgray p-2 bg-PRIMEwhite w-[160px] text-sm focus:ring-0 focus:border-PRIMEblue"
          >
            {locationOptions.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            name="category"
            value={filters.category}
            onChange={onFilterChange}
            className="border-b border-PRIMEgray p-2 bg-PRIMEwhite w-[160px] text-sm focus:ring-0 focus:border-PRIMEblue"
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Lease Type Filter */}
          <select
            name="leaseType"
            value={filters.leaseType}
            onChange={onFilterChange}
            className="border-b border-PRIMEgray p-2 bg-PRIMEwhite w-[160px] text-sm focus:ring-0 focus:border-PRIMEblue"
          >
            {leaseOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div className="relative flex-1 min-w-[220px] max-w-[300px]">
          <input
            type="text"
            name="searchQuery"
            value={searchValue} // Use local state for debounced search
            onChange={handleSearchChange} // Handle search input change
            placeholder="Search properties..."
            className="border-b border-[var(--color-PRIMEgray)] p-2 pl-10 w-full text-sm bg-transparent focus:outline-none focus:border-[var(--color-PRIMEblue)]"
          />
          <Search className="absolute top-3 left-3 h-4 w-4 text-[var(--color-PRIMEgray)]" />
        </div>
      </div>
    </div>
  );
}