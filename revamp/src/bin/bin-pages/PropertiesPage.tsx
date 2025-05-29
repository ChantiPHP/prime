// src/components/PropertiesPage.tsx
import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/Footer";

export type Property = {
  id: number;
  title: string;
  location: string;
  leaseType: "For Lease" | "For Rent";
  propertyType: "Office Spaces" | "Retail Spaces" | "Commercial Lots" | "Industrial Lots" | "Industrial Warehouse";
  img: string;
  alt: string;
};

// Sample property data for demo (replace with your real data or API)
const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Downtown Office Suite",
    location: "New York",
    leaseType: "For Lease",
    propertyType: "Office Spaces",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    alt: "Modern office interior",
  },
  {
    id: 2,
    title: "Suburban Commercial Lot",
    location: "Los Angeles",
    leaseType: "For Rent",
    propertyType: "Commercial Lots",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial land space",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    location: "Chicago",
    leaseType: "For Lease",
    propertyType: "Industrial Warehouse",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    alt: "Large warehouse building",
  },
  // Add more sample properties here as needed...
];

// Locations derived from PROPERTIES (unique)
const ALL_LOCATIONS = Array.from(new Set(PROPERTIES.map((p) => p.location)));

export default function PropertiesPage() {
  const [keyword, setKeyword] = useState("");
  const [locationSelect, setLocationSelect] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [forLease, setForLease] = useState(false);
  const [forRent, setForRent] = useState(false);
  const [officeSpaces, setOfficeSpaces] = useState(false);
  const [commercialSpaces, setCommercialSpaces] = useState(false);
  const [industrialWarehouses, setIndustrialWarehouses] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync: when dropdown changes, clear checkbox locations
  useEffect(() => {
    if (locationSelect) {
      setSelectedLocations([]);
      setCurrentPage(1);
    }
  }, [locationSelect]);

  // Sync: when any checkbox location changes, clear dropdown
  useEffect(() => {
    if (selectedLocations.length > 0) {
      setLocationSelect("");
      setCurrentPage(1);
    }
  }, [selectedLocations]);

  // Filter properties based on all filters
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      const kw = keyword.trim().toLowerCase();
      const matchesKeyword =
        !kw ||
        prop.title.toLowerCase().includes(kw) ||
        prop.location.toLowerCase().includes(kw);

      let matchesLocation = true;
      if (locationSelect) {
        matchesLocation = prop.location === locationSelect;
      } else if (selectedLocations.length > 0) {
        matchesLocation = selectedLocations.includes(prop.location);
      }

      const leaseTypes: string[] = [];
      if (forLease) leaseTypes.push("For Lease");
      if (forRent) leaseTypes.push("For Rent");
      const matchesLease =
        leaseTypes.length === 0 || leaseTypes.includes(prop.leaseType);

      const propTypes: string[] = [];
      if (officeSpaces) propTypes.push("Office Spaces");
      if (commercialSpaces) propTypes.push("Commercial Spaces & Lots");
      if (industrialWarehouses) propTypes.push("Industrial & Warehouses");
      const matchesPropType =
        propTypes.length === 0 || propTypes.includes(prop.propertyType);

      return (
        matchesKeyword && matchesLocation && matchesLease && matchesPropType
      );
    });
  }, [
    keyword,
    locationSelect,
    selectedLocations,
    forLease,
    forRent,
    officeSpaces,
    commercialSpaces,
    industrialWarehouses,
  ]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const pageItems = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Helpers to toggle checkbox locations
  const toggleLocation = (loc: string) =>
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((x) => x !== loc) : [...prev, loc]
    );

  // Reset to first page on filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [
    keyword,
    locationSelect,
    selectedLocations.length,
    forLease,
    forRent,
    officeSpaces,
    commercialSpaces,
    industrialWarehouses,
  ]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Top banner */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80">
        <img
          src="https://storage.googleapis.com/a1aa/image/46638e90-f28b-4635-bf60-a0f3132b36f6.jpg"
          alt="Blue glass building"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/59e6b56e-431f-4286-bb1f-e0432bf796ba.jpg"
          alt="Red glass building"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-red-900/70 to-orange-500/70" />
      </div>

      {/* Search bar */}
      <div className="max-w-5xl mx-auto -mt-10 relative z-10 px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col md:flex-row gap-8 mb-10 flex-grow">
        {/* Filters */}
        <aside className="w-full md:w-48 flex flex-col gap-8 text-xs text-gray-700">
          {/* Lease Type */}
          <div>
            <h3 className="font-semibold mb-2">Lease Type</h3>
            <label className="flex items-center gap-2 mb-1 cursor-pointer">
              <input
                id="forLease"
                type="checkbox"
                className="w-3 h-3 border border-gray-300 rounded-sm"
                checked={forLease}
                onChange={() => setForLease((f) => !f)}
              />
              <span>For Lease</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                id="forRent"
                type="checkbox"
                className="w-3 h-3 border border-gray-300 rounded-sm"
                checked={forRent}
                onChange={() => setForRent((r) => !r)}
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
                onChange={() => setOfficeSpaces((o) => !o)}
              />
              <span>Office Spaces</span>
            </label>
            <label className="flex items-center gap-2 mb-1 cursor-pointer">
              <input
                id="commercialSpaces"
                type="checkbox"
                className="w-3 h-3 border border-gray-300 rounded-sm"
                checked={commercialSpaces}
                onChange={() => setCommercialSpaces((c) => !c)}
              />
              <span>Commercial Spaces & Lots</span>
            </label>
            
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                id="industrialWarehouses"
                type="checkbox"
                className="w-3 h-3 border border-gray-300 rounded-sm"
                checked={industrialWarehouses}
                onChange={() => setIndustrialWarehouses((i) => !i)}
              />
              <span>Industrial & Warehouses</span>
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

        {/* Properties list */}
        <section className="flex-1">
          <h1 className="text-lg font-semibold mb-3">
            Properties{" "}
            <span className="text-gray-500 text-sm">
              (Showing {pageItems.length} of {filteredProperties.length})
            </span>
          </h1>

          {filteredProperties.length === 0 ? (
            <p className="text-gray-600 italic">No properties found.</p>
          ) : (
            <>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pageItems.map((prop) => (
                  <li
                    key={prop.id}
                    className="border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition"
                  >
                    <img
                      src={prop.img}
                      alt={prop.alt}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-3">
                      <h2 className="font-semibold text-sm">{prop.title}</h2>
                      <p className="text-xs text-gray-500">{prop.location}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        {prop.leaseType} | {prop.propertyType}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Pagination controls */}
              {totalPages > 1 && (
                <nav
                  aria-label="Pagination"
                  className="flex justify-center mt-8 gap-2"
                >
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, idx) => {
                    const page = idx + 1;
                    return (
                      <button
                        key={page}
                        className={`px-3 py-1 rounded hover:bg-gray-300 ${
                          currentPage === page
                            ? "bg-blue-900 text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </nav>
              )}
            </>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
