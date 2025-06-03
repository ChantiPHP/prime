import React from 'react';


   {/* Top Filter */}
type TopFilterProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  locationDropdown: string;
  setLocationDropdown: (value: string) => void;
  cities: string[];
  onSearch: () => void; // callback for search submit (optional)
};

export const TopFilter: React.FC<TopFilterProps> = ({
  searchTerm,
  setSearchTerm,
  locationDropdown,
  setLocationDropdown,
  cities,
  onSearch,
}) => {
  return (
<form
  aria-label="Property search form"
  className="absolute left-1/2 -translate-x-1/2 bottom-[-6.5rem] sm:bottom-[-8rem] md:bottom-[-2.5rem] lg:bottom-[-3rem]
             w-full max-w-4xl px-4 sm:px-6 bg-PRIMEwhite shadow-md rounded-md
             flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 z-10"
  onSubmit={(e) => {
    e.preventDefault();
    onSearch && onSearch();
  }}
>
  <input
    type="text"
    placeholder="Keyword"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="flex-1 border border-PRIMElightgray rounded-md py-2 px-3 w-full text-subcontent text-PRIMEgray placeholder-PRIMElightgray focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
  />
  <select
    aria-label="Select location"
    value={locationDropdown}
    onChange={(e) => setLocationDropdown(e.target.value)}
    className="flex-1 border border-PRIMElightgray rounded-md py-2 px-3 w-full text-subcontent text-PRIMEgray focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
  >
    <option value="">Location</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
      <button
    type="submit"
    className="flex-1 sm:flex-none w-full sm:w-auto bg-PRIMEblue text-PRIMEwhite text-subcontent font-semibold py-2 px-5 rounded-md hover:bg-PRIMEblue/90 transition"
  >
    Search Properties
  </button>
</form>

  );
};

   {/* Aside Filter */}
type FiltersProps = {
  leaseTypes: string[];
  propertyTypes: string[];
  locations: string[];
  selectedLeaseTypes: string[];
  selectedPropertyTypes: string[];
  selectedLocations: string[];
  onLeaseTypeChange: (type: string) => void;
  onPropertyTypeChange: (type: string) => void;
  onLocationChange: (loc: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  leaseTypes,
  propertyTypes,
  locations,
  selectedLeaseTypes,
  selectedPropertyTypes,
  selectedLocations,
  onLeaseTypeChange,
  onPropertyTypeChange,
  onLocationChange,
}) => {
  return (
    <aside className="text-xs text-PRIMEblack space-y-6">
      {/* Lease Type */}
      <div>
        <h3 className="text-description mb-2">Lease Type</h3>
        <div className="flex flex-col text-subcontent space-y-1 border-b border-PRIMEgray pb-3">
          {leaseTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 border-PRIMEgray rounded"
                checked={selectedLeaseTypes.includes(type)}
                onChange={() => onLeaseTypeChange(type)}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h3 className="text-description mb-2">Property Type</h3>
        <div className="flex flex-col text-subcontent space-y-1 border-b border-PRIMEgray pb-3">
          {propertyTypes.map((ptype) => (
            <label key={ptype} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 border-PRIMEgray rounded"
                checked={selectedPropertyTypes.includes(ptype)}
                onChange={() => onPropertyTypeChange(ptype)}
              />
              <span>{ptype}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-description mb-2">Location</h3>
        <div className="flex flex-col text-subcontent space-y-1 pr-1">
          {locations.map((loc) => (
            <label key={loc} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 border-PRIMEgray rounded"
                checked={selectedLocations.includes(loc)}
                onChange={() => onLocationChange(loc)}
              />
              <span>{loc}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};


