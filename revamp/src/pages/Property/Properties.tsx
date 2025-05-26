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
  const query = useQuery();
  const navigate = useNavigate();

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
      <section className="relative mb-10">
        <div className="w-full h-[500px] bg-[url('/Property/Properties.png')] bg-cover bg-center rounded-lg relative group">
          {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue opacity-50"></div>{" "}
          {/* Updated to match Careers color */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-PRIMEwhite text-center px-4"
          >
            <h1 className="text-[36pt] sm:text-[48pt] font-bold uppercase">
              Properties
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-6 py-3 border-2 border-PRIMEwhite rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">Properties</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Component */}
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        onAdd={handleAddProperty} onDebouncedSearchChange={function (_value: string): void {
          throw new Error("Function not implemented.");
        } }      />

      {/* Category Sections */}
      <main className="max-w-6xl mx-auto py-12 px-4 space-y-16">
        {visibleCategories.map((category, index) => {
          const filtered = getFilteredProperties(category);
          const page = currentPages[index];
          const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
          const current = filtered.slice(
            page * ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
          );

          const categoryName =
            typeof category.name === "function"
              ? category.name(
                  filters.location === "All Locations"
                    ? "Quezon City"
                    : filters.location
                )
              : category.name;

          return (
            <section key={index} className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-PRIMEblack mb-2">
                  {categoryName}
                </h2>
                <p className="text-sm text-PRIMEgray">{category.description}</p>
              </div>

              {filtered.length > 0 ? (
                <>
                  <div className="relative flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      if (page > 0) {
                        handlePrev(index);
                      }
                    }}
                    className={`absolute left-[-60px] z-10 transition-opacity
                      ${page === 0 ? "opacity-50 pointer-events-none cursor-default" : ""}
                    `}
                  >
                    <ChevronLeft />
                  </Button>


                    {/* Property Cards */}
                    <div className="w-full overflow-visible ">
                      <div className="flex-wrap gap-6 transition-all">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${index}-${page}`}
                            initial={{
                              x: slideDirection === "left" ? 300 : -300,
                              opacity: 0.1,
                            }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{
                              x: slideDirection === "left" ? -300 : 300,
                              opacity: 0.1,
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className={`flex flex-wrap gap-6 ${
                              current.length < 3 ? "justify-start" : "justify-center"
                            }`}
                          >
                            {current.map((prop) => (
                              <PropertyCard key={prop.id} property={prop} />
                            ))}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        if (page < totalPages - 1) {
                          handleNext(index);
                        }
                      }}
                      className={`absolute right-[-60px] z-10 transition-opacity
                        ${page >= totalPages - 1 ? "opacity-50 pointer-events-none cursor-default" : ""}
                      `}
                    >
                      <ChevronRight />
                    </Button>

                  </div>

                  {/* Paginataion Dots */}
                  {totalPages > 1 && (
                    <div className="flex justify-center mt-4">
                      <div className="flex gap-2 px-4 py-3 bg-PRIMElightgray rounded-full shadow-sm">
                        {Array.from({ length: totalPages }).map(
                          (_, dotIndex) => (
                            <div
                              key={dotIndex}
                              className={`w-2 h-2 rounded-full ${
                                dotIndex === page
                                  ? "bg-PRIMEblue"
                                  : "bg-PRIMEgray"
                              }`}
                            />
                          )
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-center text-PRIMEgray">
                  No properties found in this category.
                </p>
              )}
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}