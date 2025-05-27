import { ALL_LOCATIONS } from "@/data/properties";
import { useEffect } from "react";

interface PropertyFiltersProps {
  keyword: string;
  setKeyword: (value: string) => void;
  locationSelect: string;
  setLocationSelect: (value: string) => void;
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;
  forLease: boolean;
  setForLease: (value: boolean) => void;
  forRent: boolean;
  setForRent: (value: boolean) => void;
  officeSpaces: boolean;
  setOfficeSpaces: (value: boolean) => void;
  commercialSpaces: boolean;
  setCommercialSpaces: (value: boolean) => void;
  industrialWarehouses: boolean;
  setIndustrialWarehouses: (value: boolean) => void;
}

export default function PropertyFilters({
  keyword,
  setKeyword,
  locationSelect,
  setLocationSelect,
  selectedLocations,
  setSelectedLocations,
  forLease,
  setForLease,
  forRent,
  setForRent,
  officeSpaces,
  setOfficeSpaces,
  commercialSpaces,
  setCommercialSpaces,
  industrialWarehouses,
  setIndustrialWarehouses,
}: PropertyFiltersProps) {
  // Sync: when dropdown changes, clear checkbox locations
  useEffect(() => {
    if (locationSelect) {
      setSelectedLocations([]);
    }
  }, [locationSelect, setSelectedLocations]);

  // Sync: when any checkbox location changes, clear dropdown
  useEffect(() => {
    if (selectedLocations.length > 0) {
      setLocationSelect("");
    }
  }, [selectedLocations, setLocationSelect]);

  const toggleLocation = (loc: string) => {
    setSelectedLocations((prev: string[]) =>
      prev.includes(loc) ? prev.filter((x) => x !== loc) : [...prev, loc]
    );
  };

  return (
    <aside className="w-full md:w-48 flex flex-col gap-8 text-xs text-gray-700">
      {/* Search form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-white rounded-md shadow-md flex flex-col sm:flex-row items-center justify-center gap-4 p-4"
      >
        <input
          id="keywordInput"
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-700"
        />
        <select
          id="locationSelect"
          value={locationSelect}
          onChange={(e) => setLocationSelect(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          <option value="">Location</option>
          {ALL_LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <button
          id="searchBtn"
          type="submit"
          className="bg-blue-900 text-white text-xs font-semibold rounded-md px-5 py-2 w-full sm:w-auto hover:bg-blue-800 transition"
        >
          Search Properties
        </button>
      </form>

      {/* Lease Type */}
      <div>
        <h3 className="font-semibold mb-2">Lease Type</h3>
        <label className="flex items-center gap-2 mb-1 cursor-pointer">
          <input
            id="forLease"
            type="checkbox"
            className="w-3 h-3 border border-gray-300 rounded-sm"
            checked={forLease}
            onChange={() => setForLease(!forLease)}
          />
          <span>For Lease</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            id="forRent"
            type="checkbox"
            className="w-3 h-3 border border-gray-300 rounded-sm"
            checked={forRent}
            onChange={() => setForRent(!forRent)}
          />
          <span>For Rent</span>
        </label>
        <hr className="border-t border-gray-300 mt-4" />
      </div>

      {/* Property Type */}
      <div>
        <h3 className="font-semibold mb-2">Property Type</h3>
        <label className="flex items-center gap-2 mb-1 cursor-pointer">
          <input
            id="officeSpaces"
            type="checkbox"
            className="w-3 h-3 border border-gray-300 rounded-sm"
            checked={officeSpaces}
            onChange={() => setOfficeSpaces(!officeSpaces)}
          />
          <span>Office Spaces</span>
        </label>
        <label className="flex items-center gap-2 mb-1 cursor-pointer">
          <input
            id="commercialSpaces"
            type="checkbox"
            className="w-3 h-3 border border-gray-300 rounded-sm"
            checked={commercialSpaces}
            onChange={() => setCommercialSpaces(!commercialSpaces)}
          />
          <span>Retail Spaces</span>
        </label>
        <label className="flex items-center gap-2 mb-1 cursor-pointer">
          <input
            id="commercialLots"
            type="checkbox"
            className="w-3 h-3 border border-gray-300 rounded-sm"
            checked={commercialSpaces}
            onChange={() => setCommercialSpaces(!commercialSpaces)}
          />
          <span>Commercial Lots</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            id="industrialLots"
            type="checkbox"
            className="w-3 h-3 border border-gray-300 rounded-sm"
            checked={industrialWarehouses}
            onChange={() => setIndustrialWarehouses(!industrialWarehouses)}
          />
          <span>Industrial Lots</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            id="industrialWarehouses"
            type="checkbox"
            className="w-3 h-3 border border-gray-300 rounded-sm"
            checked={industrialWarehouses}
            onChange={() => setIndustrialWarehouses(!industrialWarehouses)}
          />
          <span>Industrial Warehouses</span>
        </label>
        <hr className="border-t border-gray-300 mt-4" />
      </div>

      {/* Location Multiple Checkbox */}
      <div>
        <h3 className="font-semibold mb-2">Location</h3>
        {ALL_LOCATIONS.map((loc) => (
          <label
            key={loc}
            className="flex items-center gap-2 cursor-pointer mb-1"
          >
            <input
              id={`loc-${loc}`}
              type="checkbox"
              className="w-3 h-3 border border-gray-300 rounded-sm"
              checked={selectedLocations.includes(loc)}
              onChange={() => toggleLocation(loc)}
            />
            <span>{loc}</span>
          </label>
        ))}
        <hr className="border-t border-gray-300 mt-4" />
      </div>
    </aside>
  );
}
