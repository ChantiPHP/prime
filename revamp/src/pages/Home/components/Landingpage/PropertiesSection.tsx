import { useState } from "react";
import { Building2, MapPin, HouseIcon } from "lucide-react";

interface Project {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  category: "office" | "retail" | "commercial" | "industrial" | "warehouse";
  leaseType: "For Rent" | "For Lease";
}

// Sample projects data
const projects: Project[] = [
  // Office projects (7)
  { id: 1, name: "Jollibee Tower", location: "BGC, Taguig", imageUrl: "/Property/OfficeSpaces/Jolliebee_Tower.jpg", category: "office", leaseType: "For Rent" },
  { id: 2, name: "Jewel Tower", location: "Makati City", imageUrl: "/Property/OfficeSpaces/Jewel_Tower.jpg", category: "office", leaseType: "For Lease" },
  { id: 3, name: "134 Jupiter", location: "Makati CIty", imageUrl: "/Property/OfficeSpaces/Jupiter.jpg", category: "office", leaseType: "For Rent" },
  { id: 4, name: "MTE Tower", location: "Old Balara, Queozon CIty", imageUrl: "/Property/OfficeSpaces/MTE_Tower.jpg", category: "office", leaseType: "For Lease" },
  { id: 5, name: "PMI Tower", location: "Makati,Metro Manila", imageUrl: "/Property/OfficeSpaces/PMI_Tower.jpg", category: "office", leaseType: "For Rent" },
  { id: 6, name: "Triumph Square", location: "Quezon Avenue, Quezon CIty", imageUrl: "/Property/OfficeSpaces/Triumph_Square.jpg", category: "office", leaseType: "For Lease" },
  { id: 7, name: "Primex Tower", location: "San Juan, Metro Manila", imageUrl: "/Property/OfficeSpaces/Primex.jpg", category: "office", leaseType: "For Rent" },

  // Retail + Commercial lots merged (7)
  { id: 8, name: "Sta Rosa Town Center", location: "Santa Rosa, Laguna", imageUrl: "/Property/Key-Retail-Building-Projects-and-Commercial-Lots/santa_rosa_town_center.jpg", category: "retail", leaseType: "For Lease" },
  { id: 9, name: "ATC Courtyard", location: "Santo Thomas, Batangas", imageUrl: "/Property/Key-Retail-Building-Projects-and-Commercial-Lots/atc.jpg", category: "retail", leaseType: "For Rent" },
  { id: 10, name: "The Clark Plaza", location: "Clark Golbal City, Pampanga", imageUrl: "/Property/Key-Retail-Building-Projects-and-Commercial-Lots/clark_plaza.jpg", category: "commercial", leaseType: "For Lease" },
  { id: 11, name: "One Mayon Place", location: "Santa Teresita, Quezon City", imageUrl: "/Property/Key-Retail-Building-Projects-and-Commercial-Lots/thumb_one mayon place.jpg", category: "commercial", leaseType: "For Rent" },
  { id: 12, name: "NKTI - MAB", location: "Diliman, Quezon CIty", imageUrl: "/Property/placeholder.jpg", category: "retail", leaseType: "For Lease" },
  { id: 13, name: "Bravo Business Center", location: "Tanauan, Batangas", imageUrl: "/Property/Key-Retail-Building-Projects-and-Commercial-Lots/bravo_business_center.jpg", category: "retail", leaseType: "For Rent" },
  { id: 14, name: "I Mall", location: "Antipolo, Rizal", imageUrl: "/Property/Key-Retail-Building-Projects-and-Commercial-Lots/imall.jpg", category: "commercial", leaseType: "For Lease" },

  // Industrial + Warehouse merged (7)
  { id: 15, name: "Warehouse Alpha", location: "Cavite Province, Philippines", imageUrl: "/Property/Key-Industrial-Projects-and-Warehouses/global aseana park.jpg", category: "warehouse", leaseType: "For Lease" },
  { id: 16, name: "Logistics Hub", location: "Laguna Province, Philippines", imageUrl: "/Property/Key-Industrial-Projects-and-Warehouses/laguna technopark.jpg", category: "industrial", leaseType: "For Rent" },
  { id: 17, name: "Storage Central", location: "Pampanga, Philippines", imageUrl: "/Property/Key-Industrial-Projects-and-Warehouses/hgl.jpg", category: "warehouse", leaseType: "For Lease" },
  { id: 18, name: "Industrial Park A", location: "Bulacan, Philippines", imageUrl: "/Property/Key-Industrial-Projects-and-Warehouses/thumb_ep_baliuag.jpg", category: "industrial", leaseType: "For Rent" },
  { id: 19, name: "M Central", location: "Cabuyao Laguna, Philippines", imageUrl: "/Property/placeholder.jpg", category: "industrial", leaseType: "For Lease" },
  { id: 20, name: "RLX Mexico", location: "Mexico Pampanga, Philippines", imageUrl: "/Property/placeholder.jpg", category: "industrial", leaseType: "For Rent" },
  { id: 21, name: "RLX San Fernando", location: "San Fernando Pampanga, Philippines", imageUrl: "/Property/placeholder.jpg", category: "warehouse", leaseType: "For Lease" },   
];

const descriptions: Record<string, string> = {
  office: "Discover modern office spaces designed to boost productivity and collaboration. Ideal for startups or established companies, these locations offer professional environments in strategic areas.",
  
  retail: "Explore retail spaces with high visibility and foot traffic, perfect for shops, cafés, and service businesses. Establish your brand in vibrant commercial zones that drive customer engagement.",
  
  commercial: "Choose versatile commercial properties suited for growing or new businesses. These flexible spaces are located in prime areas that connect you with your ideal market.",
  
  industrial: "Our industrial lots support logistics, manufacturing, and large-scale operations. Enjoy spacious layouts and reliable infrastructure in well-connected industrial zones.",
  
  warehouse: "Find secure, scalable warehouses ideal for storage and distribution. Optimize your inventory flow with modern features that support efficient supply chain management."
};



export default function FeaturedProjects() {
  const [selected, setSelected] = useState<Project['category']>("office");

  // Filter projects and handle category groupings
  const filtered = projects.filter(p => {
    if (selected === "retail" || selected === "commercial") {
      return p.category === "retail" || p.category === "commercial";
    } else if (selected === "industrial" || selected === "warehouse") {
      return p.category === "industrial" || p.category === "warehouse";
    }
    return p.category === selected;
  }).slice(0, 7);

  const tabs = [
    { key: "office", label: "Key Office", sub: "Building Projects"},
    { key: "retail", label: "Key Retail", sub: "Building Projects and Commercial Lots"},
    { key: "industrial", label: "Key Industrial", sub: "Projects and Warehouses"},
  ];

  return (
        <div className="bg-PRIMEwhite mb-[50px]">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* ===== Header Section ===== */}
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

        {/* ===== Tabs Navigation ===== */}
        <nav className="border border-PRIMElightgray rounded-md max-w-6xl mx-auto mb-6 grid grid-cols-3 gotham-bold overflow-hidden">
          {tabs.map((tab, index) => {
            const isActive =
              tab.key === selected ||
              (tab.key === "retail" && (selected === "retail" || selected === "commercial")) ||
              (tab.key === "industrial" && (selected === "industrial" || selected === "warehouse"));

            const isLast = index === tabs.length - 1;

            return (
              <button
                key={tab.key}
                onClick={() => setSelected(tab.key as Project["category"])}
                className={
                  `flex flex-col text-navbar font-bold  items-center py-2 px-3 transition-colors ` +
                  (isActive
                    ? "bg-PRIMEblue text-PRIMEwhite"
                    : "text-PRIMEblack") +
                  (!isLast ? " border-r border-PRIMElightgray" : "")
                }
                aria-current={isActive ? "true" : undefined}
              >
                <div className="flex items-center gap-1">
                  <span>{tab.label}</span>
                </div>
                <span className={isActive ? "text-PRIMEyellow" : "text-PRIMEblue"}>
                  {tab.sub}
                </span>
              </button>
            );
          })}
        </nav>

        {/* ===== Description Text ===== */}
        <p className="text-center text-description max-w-4xl mx-auto mb-8">
          {descriptions[selected]}
        </p>

        {/* ===== Properties Grid Section ===== */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.id}`}
              className="relative rounded-md overflow-hidden group cursor-pointer"
            >
              {/* Image with hover scale effect */}
              <div className="relative h-64 w-full">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-2000 group-hover:scale-120"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Project name and location */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-description">{project.name}</h3>
                  <p className="flex items-center text-subcontent">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </p>
                </div>
              </div>

              {/* Lease type badge */}
              <div
                className={`absolute top-2 right-2 text-subcontent font-semibold rounded-full px-2 py-[2px] flex items-center gap-1 ${
                  project.leaseType === "For Rent"
                    ? "bg-PRIMEyellow text-PRIMEblue"
                    : "bg-PRIMEblue text-PRIMEyellow"
                }`}
              >
                <HouseIcon className="w-4 h-4" />
                {project.leaseType}
              </div>
            </a>
          ))}

          {/* ===== View All Properties Card (if exactly 7 projects) ===== */}
          {filtered.length === 7 && (
        <a
          href="/projects"
          className="flex flex-col justify-center items-center rounded-md bg-PRIMEblue text-PRIMEyellow text-description font-semibold hover:underline text-center p-6 hover:bg-[#0a294d] transition-colors"
        >
          <span className="hover:underline">VIEW ALL</span>
          <span className="hover:underline">PROPERTIES</span>
        </a>
          )}
        </div>
      </div>
    </div>
  );
};