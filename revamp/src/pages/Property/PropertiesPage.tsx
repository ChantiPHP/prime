import { useState } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { TopFilter } from "./components/filters"; 
import { cities } from "./data/propertiesData"; 
import PropertyTypes from "./components/PropertyTypes";
import PropertyLocations from "./components/PropertyLocations";

export default function FindProperty() {
  // Local state to manage search input and selected city
  // These states will be updated based on user input
  
  const [searchTerm, setSearchTerm] = useState("");
  // Dropdown for selecting a location (city)
  // This will be used to filter properties based on the selected city
  const [locationDropdown, setLocationDropdown] = useState("");

  // Hook for programmatic navigation
  // This allows us to redirect to another page with query parameters
  const navigate = useNavigate();

  // Handler function triggered on search button click
  // It constructs a URL with query parameters based on the search term and selected location
  const handleSearch = () => {
    const params = new URLSearchParams();

    // Append query parameters only if values are not empty
    // This ensures that we only include parameters that the user has specified
    if (searchTerm.trim()) params.append("search", searchTerm.trim());
    if (locationDropdown) params.append("location", locationDropdown);

    // Redirect to ViewProperties3 page with query parameters
    // This will allow the next page to read these parameters and filter properties accordingly
    navigate(`/PropertiesPage2?${params.toString()}`);
  };

  return (
    <div className="w-full h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 relative overflow-visible">
      <Navbar />
      {/* Background banner image */}
      <img
        src="HomeBanner.jpg"
        alt="Modern glass buildings with gradient overlay"
        className="w-full h-full object-cover"
      />
      {/* Overlay container with semi-transparent black background */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        {/* Filter component with search input and dropdown */}
        <TopFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locationDropdown={locationDropdown}
          setLocationDropdown={setLocationDropdown}
          cities={cities}
          onSearch={handleSearch}
        />
      </div>
      {/* Additional components for property types and locations */}
      {/* These components will allow users to filter properties by type and location */}
      <PropertyLocations />
      <PropertyTypes />
      <Footer />
    </div>
  );
}




