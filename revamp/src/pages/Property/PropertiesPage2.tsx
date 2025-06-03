import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { cities, properties } from "./data/propertiesData";
import { TopFilter, Filters } from "./components/filters";
import { useLocation } from "react-router-dom";
import PropertyList from "./components/PropertyList";


export default function PropertiesPage2() {

  // Hook to access the current URL location
  // This allows us to read query parameters for search and location
  const location = useLocation();

  // Local state to manage search input and selected location
  // These states will be updated based on URL query parameters
  const [searchTerm, setSearchTerm] = useState("");
  const [locationDropdown, setLocationDropdown] = useState("");

  // Initialize search term and location from URL query parameters
  // This runs once when the component mounts to set initial state
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") ?? "";
    const loc = params.get("location") ?? "";

    setSearchTerm(search);
    setLocationDropdown(loc);
  }, [location.search]);

  // States
  // These states manage the selected filters for lease types, property types, and locations
  const [selectedLeaseTypes, setSelectedLeaseTypes] = useState<string[]>([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Lease types and property types for filtering
  // These arrays define the available options for lease and property types
  const leaseTypes = ["For Lease", "For Rent"];
  const propertyTypes = [
    "Office Spaces",
    "Retail Spaces",
    "Commercial Lots",
    "Industrial Lots",
    "Industrial Warehouse",
  ];

  // Toggle helper for selecting/deselecting filters
// This function updates the selected filters based on user interaction
  const toggle = (arr: string[], setFn: (v: string[]) => void, value: string) => {
    if (arr.includes(value)) {
      setFn(arr.filter((x) => x !== value));
    } else {
      setFn([...arr, value]);
    }
  };

  // Reset page when filters/search change
// This effect resets the current page to 1 whenever the search term or selected filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationDropdown, selectedLeaseTypes, selectedPropertyTypes, selectedLocations]);

  // Filtering logic
  // This filters the properties based on search term, selected locations, lease types, and property types
  const filtered = properties.filter((p) => {
    // Search term matches title or location (case-insensitive)
    // If searchTerm is empty, it matches all properties
    // This allows users to search by title or location
    const matchesSearch =
      !searchTerm ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Location dropdown filter (single selection)
    // If locationDropdown is set, it matches that specific location
    const matchesLocationDropdown = !locationDropdown || p.location === locationDropdown;

    // Multiple selected locations filter (multi-selection)
    // If selectedLocations is empty, it matches all properties
    const matchesSelectedLocations =
      selectedLocations.length === 0 || selectedLocations.includes(p.location);

    // Lease type filter (multi-selection)
    // If selectedLeaseTypes is empty, it matches all properties
    const matchesLease =
      selectedLeaseTypes.length === 0 || selectedLeaseTypes.includes(p.type);

    // Property type filter (multi-selection)
    // If selectedPropertyTypes is empty, it matches all properties
    // This allows users to filter properties by their type (e.g., Office Spaces, Retail Spaces)
    const matchesPropType =
      selectedPropertyTypes.length === 0 || selectedPropertyTypes.includes(p.propertyType);

    // Combine location filters with OR logic:
    // If locationDropdown is set, match that only.
    // Else, match selectedLocations multi-select filter.
    const locationMatch = locationDropdown ? matchesLocationDropdown : matchesSelectedLocations;

    return matchesSearch && matchesLease && matchesPropType && locationMatch;
  });

  // Pagination
  // This calculates the total number of pages based on the filtered properties
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProperties = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Page navigation
  // This function changes the current page if the requested page is valid
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
        <PropertyList
          filtered={filtered}
          paginatedProperties={paginatedProperties}
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </div>

      <Footer />
    </div>
  );
}
