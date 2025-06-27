import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { properties } from "./data/propertiesData";
import PropertyList from "./components/PropertyList";
import { useLocation } from "react-router-dom";

const allowedPlaces = [
  "Quezon City", "San Juan City", "Pasig City", "Makati City", "Valenzuela City", "Pasay City",
  "Marikina City", "Caloocan City", "Paranaque City", "Navtoas City", "Las Pinas City", "Taguig City", "Mandaluyong City"
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  const handleLocationToggle = (loc: string) => {
    let updatedLocations: string[];

    if (selectedLocations.includes(loc)) {
      updatedLocations = selectedLocations.filter((l) => l !== loc);
    } else {
      updatedLocations = [...selectedLocations, loc];
    }

    setSelectedLocations(updatedLocations);

    if (updatedLocations.length === 1) {
      setLocationDropdown(updatedLocations[0]);
    } else {
      setLocationDropdown("");
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
          <form
            className="absolute left-1/2 -translate-x-1/2 bottom-[-6.5rem] sm:bottom-[-8rem] md:bottom-[-2.5rem] lg:bottom-[-3rem] w-full max-w-4xl px-4 sm:px-6 bg-white shadow-md rounded-md flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 z-10"
            onSubmit={(e) => {
              e.preventDefault();
              setCurrentPage(1);
            }}
          >
            <input
              type="text"
              placeholder="Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 border border-gray-300 rounded-md py-2 px-3 w-full text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
            />
            <select
              value={locationDropdown}
              onChange={(e) => {
                const value = e.target.value;
                setLocationDropdown(value);
                setSelectedLocations(value ? [value] : []);
              }}
              className="flex-1 border border-gray-300 rounded-md py-2 px-3 w-full text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
            >
              <option value="">Location</option>
              {allowedPlaces.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="flex-1 sm:flex-none w-full sm:w-auto bg-PRIMEblue text-PRIMEwhite text-sm font-semibold py-2 px-5 rounded-md hover:bg-PRIMEblue/90 transition"
            >
              Search Properties
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20 mb-20 md:mt-24 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
        <aside className="text-xs text-PRIMEblack space-y-6">
          <div>
            <h3 className="text-description mb-2">Lease Type</h3>
            <div className="flex flex-col text-subcontent space-y-1 border-b border-PRIMEgray pb-3">
              {leaseTypes.map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-PRIMEgray rounded"
                    checked={selectedLeaseTypes.includes(type)}
                    onChange={() => toggle(selectedLeaseTypes, setSelectedLeaseTypes, type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-description mb-2">Property Type</h3>
            <div className="flex flex-col text-subcontent space-y-1 border-b border-PRIMEgray pb-3">
              {propertyTypes.map((ptype) => (
                <label key={ptype} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-PRIMEgray rounded"
                    checked={selectedPropertyTypes.includes(ptype)}
                    onChange={() => toggle(selectedPropertyTypes, setSelectedPropertyTypes, ptype)}
                  />
                  <span>{ptype}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-description mb-2">Location</h3>
            <div className="flex flex-col text-subcontent space-y-1 pr-1">
              {allowedPlaces.map((loc) => (
                <label key={loc} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border-PRIMEgray rounded"
                    checked={selectedLocations.includes(loc)}
                    onChange={() => handleLocationToggle(loc)}
                  />
                  <span>{loc}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

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
