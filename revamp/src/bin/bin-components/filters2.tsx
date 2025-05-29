import React, { useState } from 'react';

// Props type definition
type TopFilterProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  cities: string[];
  onSearch: () => void;
};

// Main component
export const TopFilter: React.FC<TopFilterProps> = ({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  cities,
  onSearch,
}) => {
  // Temporary states for form inputs
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);
  const [tempLocation, setTempLocation] = useState(location);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(tempSearchTerm.trim());
    setLocation(tempLocation);
    onSearch();
  };

  return (
    <form
      aria-label="Property search form"
      onSubmit={handleSubmit}
      className="
        absolute left-1/2 -translate-x-1/2
        bottom-[-6.5rem] sm:bottom-[-8rem] md:bottom-[-2.5rem] lg:bottom-[-3rem]
        w-full max-w-4xl px-4 sm:px-6
        bg-white shadow-md rounded-md
        flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6
        z-10
      "
    >
      {/* Search input */}
      <input
        type="text"
        placeholder="Search Properties"
        value={tempSearchTerm}
        onChange={(e) => setTempSearchTerm(e.target.value)}
        className="
          flex-1 border border-gray-300 rounded-md
          py-2 px-3 w-full text-sm text-gray-600 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-PRIMEblue
        "
      />

      {/* Location dropdown */}
      <select
        aria-label="Select location"
        value={tempLocation}
        onChange={(e) => setTempLocation(e.target.value)}
        className="
          flex-1 border border-gray-300 rounded-md
          py-2 px-3 w-full text-sm text-gray-600
          focus:outline-none focus:ring-2 focus:ring-PRIMEblue
        "
      >
        <option value="">All locations</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Search button */}
      <button
        type="submit"
        className="
          flex-none bg-PRIMEblue text-PRIMEwhite
          text-sm font-semibold py-2 px-5 rounded-md
          hover:bg-PRIMEblue/90 transition
        "
      >
        Search Properties
      </button>
    </form>
  );
};
