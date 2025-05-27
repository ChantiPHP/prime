import { Property } from "@/data/properties";
import PropertyCard from "./PropertyCard";

interface PropertyListProps {
  properties: Property[];
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function PropertyList({
  properties,
  currentPage,
  totalPages,
  onPageChange,
}: PropertyListProps) {
  return (
    <section className="flex-1">
      <h1 className="text-lg font-semibold mb-3">
        Properties{" "}
        <span className="text-gray-500 text-sm">
          (Showing {properties.length} of {properties.length})
        </span>
      </h1>

      {properties.length === 0 ? (
        <p className="text-gray-600 italic">No properties found.</p>
      ) : (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {properties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
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
                onClick={() => onPageChange(currentPage - 1)}
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
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next
              </button>
            </nav>
          )}
        </>
      )}
    </section>
  );
}