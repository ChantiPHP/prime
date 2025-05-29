import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  type: string;
}

interface PropertyListProps {
  filtered: Property[];
  paginatedProperties: Property[];
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({
  filtered,
  paginatedProperties,
  currentPage,
  totalPages,
  goToPage,
}) => {
  return (
    <section className="relative">
      <div className="mb-3 flex items-center justify-between border-b-2 text-PRIMEblue border-PRIMEblue pb-1">
        <span>
          Showing <span className="gotham-bold">{filtered.length}</span> properties
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProperties.length > 0 ? (
          paginatedProperties.map((property) => (
            <div
              key={property.id}
              className="border border-PRIMElightgray rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                  width={400}
                  height={256}
                />
                <span className="absolute top-3 right-3 bg-PRIMEblue text-PRIMEwhite text-tags font-semibold rounded-full px-3 py-1">
                  {property.type}
                </span>
              </div>

              <div className="p-3 flex flex-col flex-grow">
                <h4 className="text-description mb-1 text-PRIMEblue">{property.title}</h4>
                <div className="flex items-center text-subcontent gap-1 text-PRIMEgray mb-3">
                  <FaMapMarkerAlt />
                  <span>{property.location}</span>
                </div>
<Link to={`/view-properties/${property.id}`}>
  <button
    type="button"
    className="mt-auto bg-PRIMEblue text-white text-subcontent font-semibold rounded-full py-1 px-5 w-full hover:bg-PRIMEblue/90 transition"
  >
    View Details
  </button>
</Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full py-10 text-PRIMEgray">No properties found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-6 flex items-center justify-center gap-3 text-PRIMEblue text-subcontent font-semibold"
        >
          <button
            aria-label="Previous page"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="border border-PRIMElightgray rounded px-3 py-1 hover:border-PRIMEblue disabled:opacity-40"
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              aria-label={`Page ${i + 1}`}
              onClick={() => goToPage(i + 1)}
              className={`border border-PRIMElightgray rounded px-3 py-1 hover:border-PRIMEblue hover:text-PRIMEblue ${
                currentPage === i + 1 ? "bg-PRIMEblue text-PRIMEwhite hover:text-PRIMEwhite" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            aria-label="Next page"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="border border-PRIMElightgray rounded px-3 py-1 hover:border-PRIMEblue disabled:opacity-40"
          >
            <FaChevronRight />
          </button>
        </nav>
      )}
    </section>
  );
};

export default PropertyList;
