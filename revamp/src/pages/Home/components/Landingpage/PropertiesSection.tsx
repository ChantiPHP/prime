import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, MapPin, HouseIcon } from "lucide-react";
import { properties, PropertyType } from "@/pages/Property/data/propertiesData";

const descriptions: Record<string, string> = {
  office:
    "Discover modern office spaces designed to boost productivity and collaboration. Ideal for startups or established companies, these locations offer professional environments in strategic areas.",
  retail:
    "Explore retail spaces with high visibility and foot traffic, perfect for shops, cafés, and service businesses. Establish your brand in vibrant commercial zones that drive customer engagement.",
  commercial:
    "Choose versatile commercial properties suited for growing or new businesses. These flexible spaces are located in prime areas that connect you with your ideal market.",
  industrial:
    "Our industrial lots support logistics, manufacturing, and large-scale operations. Enjoy spacious layouts and reliable infrastructure in well-connected industrial zones.",
  warehouse:
    "Find secure, scalable warehouses ideal for storage and distribution. Optimize your inventory flow with modern features that support efficient supply chain management.",
};

const tabs = [
  { key: "office", label: "Key Office", sub: "Building Projects" },
  { key: "retail", label: "Key Retail", sub: "Building Projects and Commercial Lots" },
  { key: "industrial", label: "Key Industrial", sub: "Projects and Warehouses" },
];

export default function FeaturedProjects() {
  const [selected, setSelected] = useState<"office" | "retail" | "industrial">("office");
  const navigate = useNavigate();

  let filtered: typeof properties = [];

  if (selected === "office") {
    filtered = properties.filter((p) => p.propertyType === "Office Spaces").slice(0, 7);
  } else if (selected === "retail") {
    filtered = properties
      .filter((p) => p.propertyType === "Retail Spaces" || p.propertyType === "Commercial Lots")
      .slice(0, 7);
  } else if (selected === "industrial") {
    filtered = properties
      .filter((p) => p.propertyType === "Industrial Lots" || p.propertyType === "Industrial Warehouse")
      .slice(0, 7);
  }

  // Navigate to dynamic route on click
  const handlePropertyClick = (propertyId: number) => {
    navigate(`/view-properties/${propertyId}`);
  };

  const handleViewAll = () => {
    let types: PropertyType[] = [];
    if (selected === "office") {
      types = ["Office Spaces"];
    } else if (selected === "retail") {
      types = ["Retail Spaces", "Commercial Lots"];
    } else if (selected === "industrial") {
      types = ["Industrial Lots", "Industrial Warehouse"];
    }
    navigate(`/PropertiesPage2?propertyType=${encodeURIComponent(types.join(","))}`);
  };

  return (
    <div className="bg-PRIMEwhite mb-[50px]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-center items-center mb-4 text-PRIMEblue font-bold text-subcontent tracking-wide space-x-2">
          <Building2 className="text-subcontent w-5 h-5" />
          <span>PROPERTIES</span>
        </div>

        <h2 className="text-center mb-6">
          <span className="inline-block bg-PRIMEblue px-4 py-2 rounded-sm">
            <span className="text-white text-maintitle">FEATURED</span>
            <span className="ml-2 text-[#FBBF24] text-maintitle">PROJECTS</span>
          </span>
        </h2>

        {/* Tabs Navigation */}
        <nav className="border border-PRIMElightgray rounded-md max-w-6xl mx-auto mb-6 grid grid-cols-3 gotham-bold overflow-hidden">
          {tabs.map((tab, index) => {
            const isActive = tab.key === selected;
            const isLast = index === tabs.length - 1;

            return (
              <button
                key={tab.key}
                onClick={() => setSelected(tab.key as "office" | "retail" | "industrial")}
                className={
                  `flex flex-col text-navbar font-bold items-center py-2 px-3 transition-colors ` +
                  (isActive ? "bg-PRIMEblue text-PRIMEwhite" : "text-PRIMEblack") +
                  (!isLast ? " border-r border-PRIMElightgray" : "")
                }
                aria-current={isActive ? "true" : undefined}
              >
                <div className="flex items-center gap-1">
                  <span>{tab.label}</span>
                </div>
                <span className={isActive ? "text-PRIMEyellow" : "text-PRIMEblue"}>{tab.sub}</span>
              </button>
            );
          })}
        </nav>

        {/* Description Text */}
        <p className="text-center text-description max-w-4xl mx-auto mb-8">{descriptions[selected]}</p>

        {/* Properties Grid Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="relative rounded-md overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-PRIMElightgray"
              onClick={() => handlePropertyClick(project.id)}
              tabIndex={0}
              role="button"
              aria-label={`View ${project.title}`}
            >
              {/* Image with hover scale effect */}
              <div className="relative h-64 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000 group-hover:scale-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Project name and location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-description">{project.title}</h3>
                  <p className="flex items-center text-subcontent">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Lease type badge */}
              <div
                className={`absolute top-2 right-2 text-subcontent font-semibold rounded-full px-2 py-[2px] flex items-center gap-1 ${
                  project.type === "For Rent"
                    ? "bg-PRIMEyellow text-PRIMEblue"
                    : "bg-PRIMEblue text-PRIMEyellow"
                }`}
              >
                <HouseIcon className="w-4 h-4" />
                {project.type}
              </div>
            </div>
          ))}

          {/* View All Properties Card */}
          {filtered.length === 7 && (
            <div
              className="relative flex flex-col justify-center items-center rounded-md bg-PRIMEblue text-PRIMEyellow text-description font-semibold hover:underline text-center p-6 hover:bg-[#0a294d] transition-colors overflow-hidden cursor-pointer"
              onClick={handleViewAll}
              tabIndex={0}
              role="button"
              aria-label="View all properties"
            >
              <div className="absolute z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="hover:underline">VIEW ALL</span>
                <span className="hover:underline">PROPERTIES</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
