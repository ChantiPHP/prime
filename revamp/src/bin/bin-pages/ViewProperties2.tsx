import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cities, properties } from "@/data/propertiesData";
import { TopFilter, Filters } from "@/components/filters";

export default function ViewProperties2() {
  // States
  const [searchTerm, setSearchTerm] = useState("");
  const [locationDropdown, setLocationDropdown] = useState("");
  const [selectedLeaseTypes, setSelectedLeaseTypes] = useState<string[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const leaseTypes = ["For Lease", "For Rent"];
  const propertyTypes = [
    "Office Spaces",
    "Retail Spaces",
    "Commercial Lots",
    "Industrial Lots",
    "Industrial Warehouse",
  ];

  // Toggle helper for selecting/deselecting filters
  const toggle = (arr: string[], setFn: (v: string[]) => void, value: string) => {
    if (arr.includes(value)) {
      setFn(arr.filter((x) => x !== value));
    } else {
      setFn([...arr, value]);
    }
  };

  // Reset page when filters/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationDropdown, selectedLeaseTypes, selectedPropertyTypes, selectedLocations]);

  // Filtering logic
  const filtered = properties.filter((p) => {
    // Search term matches title or location (case-insensitive)
    const matchesSearch =
      !searchTerm ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Location dropdown filter (single selection)
    const matchesLocationDropdown = !locationDropdown || p.location === locationDropdown;

    // Multiple selected locations filter (multi-selection)
    const matchesSelectedLocations =
      selectedLocations.length === 0 || selectedLocations.includes(p.location);

    // Lease type filter (multi-selection)
    const matchesLease =
      selectedLeaseTypes.length === 0 || selectedLeaseTypes.includes(p.type);

    // Property type filter (multi-selection)
    const matchesPropType =
      selectedPropertyTypes.length === 0 || selectedPropertyTypes.includes(p.propertyType);

    // Combine location filters with OR logic:
    // If locationDropdown is set, match that only.
    // Else, match selectedLocations multi-select filter.
    const locationMatch = locationDropdown ? matchesLocationDropdown : matchesSelectedLocations;

    return matchesSearch && matchesLease && matchesPropType && locationMatch;
  });

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProperties = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Page navigation
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

      {/* Header Image and TopFilter */}
      <div className="w-full h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 relative overflow-visible">
        <img
          src="HomeBanner.jpg"
          alt="Modern glass buildings with gradient overlay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
          <TopFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            locationDropdown={locationDropdown}
            setLocationDropdown={setLocationDropdown}
            cities={cities}
            onSearch={() => {
              setCurrentPage(1); // Reset page on search if needed
            }}
          />
        </div>
      </div>

      {/* Main Content: Sidebar Filters + Properties */}
      <div className="max-w-6xl mx-auto px-4 mt-20 mb-20 md:mt-24 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        {/* Filters Sidebar */}
        <Filters
          leaseTypes={leaseTypes}
          propertyTypes={propertyTypes}
          locations={cities}
          selectedLeaseTypes={selectedLeaseTypes}
          selectedPropertyTypes={selectedPropertyTypes}
          selectedLocations={selectedLocations}
          onLeaseTypeChange={(type) => toggle(selectedLeaseTypes, setSelectedLeaseTypes, type)}
          onPropertyTypeChange={(ptype) =>
            toggle(selectedPropertyTypes, setSelectedPropertyTypes, ptype)
          }
          onLocationChange={(loc) => toggle(selectedLocations, setSelectedLocations, loc)}
        />

        {/* Properties List */}
        <section className="relative">
          <div className="mb-3 flex items-center justify-between border-b-2 text-PRIMEblue border-PRIMEblue pb-1">
            <span>Showing  <span className="gotham-bold">{filtered.length}</span> properties</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProperties.length > 0 ? (
              paginatedProperties.map((property) => (
                <div
                  key={property.id}
                  className="border border-gray-300 rounded-md overflow-hidden shadow-sm flex flex-col"
                >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"  // increased from h-48 to h-64 (16rem)
                    width={400}
                    height={256}
                  />
                  <span className="absolute top-3 right-3 bg-PRIMEblue text-white text-tags font-semibold rounded-full px-3 py-1">
                    {property.type}
                  </span>
                </div>

                  <div className="p-3 flex flex-col flex-grow">
                    <h4 className="text-description mb-1 text-PRIMEblue">{property.title}</h4>
                    <div className="flex items-center text-subcontent gap-1 text-PRIMEgray mb-3">
                      <FaMapMarkerAlt />
                      <span>{property.location}</span>
                    </div>
                    <button
                      type="button"
                      className="mt-auto bg-PRIMEblue text-white text-subcontent font-semibold rounded-full py-1 px-5 w-full hover:bg-PRIMEblue/90 transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full py-10 text-gray-500">No properties found.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-8 flex items-center justify-center gap-3 text-gray-700 text-xs font-semibold"
            >
              <button
                aria-label="Previous page"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 disabled:opacity-40"
              >
                <FaChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  aria-label={`Page ${i + 1}`}
                  onClick={() => goToPage(i + 1)}
                  className={`border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 ${
                    currentPage === i + 1 ? "bg-gray-200" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                aria-label="Next page"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100 disabled:opacity-40"
              >
                <FaChevronRight />
              </button>
            </nav>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
