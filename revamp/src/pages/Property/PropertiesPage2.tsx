import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { properties } from "./data/propertiesData";
import { TopFilter, Filters } from "./components/filters";
import { useLocation } from "react-router-dom";
import PropertyList from "./components/PropertyList";

// ✅ Replace cities with allowed places
const allowedPlaces = [
  "Makati CBD", "BGC", "Ortigas", "Pasay", "Quezon City", "Alabang",
  "Cebu", "Davao", "Clark", "Iloilo", "CDO", "Bacolod"
];

export default function PropertiesPage2() {
  const location = useLocation();

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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") ?? "";
    const locParam = params.get("location") ?? "";
    const propTypeParam = params.get("propertyType") ?? "";

    setSearchTerm(search);
    setLocationDropdown(locParam);

    const propertyTypesFromURL = propTypeParam
      ? decodeURIComponent(propTypeParam).split(",").map((t) => t.trim())
      : [];
    setSelectedPropertyTypes(propertyTypesFromURL);

    const locationsFromURL = locParam
      ? decodeURIComponent(locParam).split(",").map((l) => l.trim()).filter((loc) => allowedPlaces.includes(loc))
      : [];
    setSelectedLocations(locationsFromURL);

    setCurrentPage(1);
  }, [location.search]);

  const toggle = (arr: string[], setFn: (v: string[]) => void, value: string) => {
    if (arr.includes(value)) {
      setFn(arr.filter((x) => x !== value));
    } else {
      setFn([...arr, value]);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationDropdown, selectedLeaseTypes, selectedPropertyTypes, selectedLocations]);

  const filtered = properties.filter((p) => {
    const matchesSearch =
      !searchTerm ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocationDropdown = !locationDropdown || p.location === locationDropdown;

    const matchesSelectedLocations =
      selectedLocations.length === 0 || selectedLocations.includes(p.location);

    const matchesLease =
      selectedLeaseTypes.length === 0 || selectedLeaseTypes.includes(p.type);

    const matchesPropType =
      selectedPropertyTypes.length === 0 || selectedPropertyTypes.includes(p.propertyType);

    const locationMatch = locationDropdown ? matchesLocationDropdown : matchesSelectedLocations;

    return matchesSearch && matchesLease && matchesPropType && locationMatch;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedProperties = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />

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
            cities={allowedPlaces} // ✅ use allowed locations only
            onSearch={() => {
              const currentParams = new URLSearchParams(location.search);
              const currentSearch = currentParams.get("search") ?? "";
              const currentLocation = currentParams.get("location") ?? "";

              if (currentSearch !== searchTerm || currentLocation !== locationDropdown) {
                setCurrentPage(1);
              }
            }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20 mb-20 md:mt-24 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <Filters
          leaseTypes={leaseTypes}
          propertyTypes={propertyTypes}
          locations={allowedPlaces} // ✅ filter options here too
          selectedLeaseTypes={selectedLeaseTypes}
          selectedPropertyTypes={selectedPropertyTypes}
          selectedLocations={selectedLocations}
          onLeaseTypeChange={(type) => toggle(selectedLeaseTypes, setSelectedLeaseTypes, type)}
          onPropertyTypeChange={(ptype) => toggle(selectedPropertyTypes, setSelectedPropertyTypes, ptype)}
          onLocationChange={(loc) => toggle(selectedLocations, setSelectedLocations, loc)}
        />

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
