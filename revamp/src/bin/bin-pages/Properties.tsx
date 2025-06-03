// pages/properties.tsx
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Filters from "@/components/Properties/Filters";
import PropertyCard from "@/components/Properties/PropertyCard";
import { Button } from "@/components/Properties/button";
import {
  properties as initialProperties,
  categories,
  Property,
} from "@/data/propertyData";

const ITEMS_PER_PAGE = 3;
// Helper to get query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationDropdown, setLocationDropdown] = useState("");

  // Scroll to the top of the page when the component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  
    // Read category from URL query param
  const urlCategory = query.get("category") || "All Categories";

  const [properties] = useState<Property[]>(initialProperties);
  const [currentPages, setCurrentPages] = useState(
    Array(categories.length).fill(0)
  );
  const [filters, setFilters] = useState({
    location: "All Locations",
    category: "All Categories",
    leaseType: "All Types",
    searchQuery: "",
  });
  const [visibleCategories, setVisibleCategories] = useState(categories);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  // Sync filter state with URL query param on mount or when URL changes
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: urlCategory,
    }));
  }, [urlCategory]);


  // Update visible categories based on selected category filter
  useEffect(() => {
    if (filters.category === "All Categories") {
      // Show all grouped categories when no filter is selected
      setVisibleCategories([
        {
          name: "Featured Office Spaces for leases in Quezon City",
          description:
            "Looking to set up your first office? Ease into an easier travel to work with these spaces located in Quezon City.",
          filter: (prop: Property) =>
            prop.category === "Office Spaces" &&
            prop.location === "Quezon City",
        },
        {
          name: "Key Retail Building Projects and Commercial Lots",
          description:
            "Prime retail spaces for your business in high-traffic areas with excellent visibility.",
          filter: (prop: Property) =>
            prop.category === "Retail Spaces" ||
            prop.category === "Commercial Lots",
        },
        {
          name: "Key Industrial Projects and Warehouses",
          description:
            "Industrial spaces and warehouses with convenient access to major transportation routes.",
          filter: (prop: Property) =>
            prop.category === "Industrial Lots" ||
            prop.category === "Industrial Warehouse",
        },
      ]);
    } else {
      // When a specific category is selected, show only that category
      const filteredCategories = categories.flatMap((cat) => {
        if (typeof cat.filter === "string") {
          return cat.filter === filters.category ? [cat] : [];
        } else {
          if (
            filters.category === "Retail Spaces" ||
            filters.category === "Commercial Lots"
          ) {
            return cat.name ===
              "Key Retail Building Projects and Commercial Lots"
              ? [
                  {
                    name:
                      filters.category === "Retail Spaces"
                        ? "Retail Spaces"
                        : "Commercial Lots",
                    description: cat.description,
                    filter: filters.category,
                  },
                ]
              : [];
          } else if (
            filters.category === "Industrial Lots" ||
            filters.category === "Industrial Warehouse"
          ) {
            return cat.name === "Key Industrial Projects and Warehouses"
              ? [
                  {
                    name:
                      filters.category === "Industrial Lots"
                        ? "Industrial Lots"
                        : "Industrial Warehouse",
                    description: cat.description,
                    filter: filters.category,
                  },
                ]
              : [];
          }
          return [];
        }
      });
      setVisibleCategories(filteredCategories);
    }

    // Reset pagination on filter change
    setCurrentPages(Array(categories.length).fill(0));
  }, [filters.category]);

  // Apply all filters to properties based on selected category
  const getFilteredProperties = (category: (typeof categories)[0]) => {
    let filtered =
      typeof category.filter === "string"
        ? properties.filter((prop) => prop.category === category.filter)
        : properties.filter(category.filter);

    if (filters.location !== "All Locations") {
      filtered = filtered.filter((p) => p.location === filters.location);
    }
    if (filters.leaseType !== "All Types") {
      filtered = filtered.filter((p) => p.leaseType === filters.leaseType);
    }
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      );
    }

    return filtered;
  };

  // Handle next/previous pagination
  const handleNext = (index: number) => {
    setSlideDirection("left");
    setCurrentPages((prev) => {
      const newPages = [...prev];
      const total = Math.ceil(
        getFilteredProperties(visibleCategories[index]).length / ITEMS_PER_PAGE
      );
      newPages[index] = Math.min(newPages[index] + 1, total - 1);
      return newPages;
    });
  };

  const handlePrev = (index: number) => {
    setSlideDirection("right");
    setCurrentPages((prev) => {
      const newPages = [...prev];
      newPages[index] = Math.max(newPages[index] - 1, 0);
      return newPages;
    });
  };

  // Handle filter field updates
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));

    // If category changes, update URL
    if (name === "category") {
      navigate(`/properties?category=${encodeURIComponent(value)}`);
    }
  };

  function handleAddProperty(): void {
    // Implement as needed
  }

  return (
    <div className="min-h-screen bg-PRIMEwhite overflow-x-hidden">
      <Navbar />

      {/* Banner Section */}
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

      {/* Business District section */}
      <BusDisProperties />

      {/* Cards/Buttons for different property offers */}
      <div className="flex w-full justify-center mb-[100px]">
        <div className="max-w-[1600px] flex md:flex-col lg:flex-row gap-3 uppercase text-xsubtitle text-center text-PRIMEwhite font-semibold">
          <Link
            to="/"
            className="relative flex flex-col justify-center items-center rounded-md bg-[url('Property/OfficeSpaces.png')] bg-cover text-PRIMEwhite text-xsubtitle font-semibold hover:underline text-center p-6 transition-colors overflow-hidden w-[530px] h-[300px]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-PRIMEblue/60 z-0" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              Office <br /> spaces
            </div>
          </Link>

          <Link
            to="/projects"
            className="relative flex flex-col justify-center items-center rounded-md bg-[url('Property/OfficeSpaces.png')] bg-cover text-PRIMEwhite text-xsubtitle font-semibold hover:underline text-center p-6 transition-colors overflow-hidden w-[530px] h-[300px]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-PRIMEblue/60 z-0" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              retail spaces & <br />
              commercial lots
            </div>
          </Link>

          <Link
            to="/projects"
            className="relative flex flex-col justify-center items-center rounded-md bg-[url('Property/OfficeSpaces.png')] bg-cover text-PRIMEwhite text-xsubtitle font-semibold hover:underline text-center p-6 transition-colors overflow-hidden w-[530px] h-[300px]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-PRIMEblue/60 z-0" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              industrial lots
              <br />& warehouses
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
