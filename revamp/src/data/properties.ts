export type Property = {
  id: number;
  title: string;
  location: string;
  leaseType: "For Lease" | "For Rent";
  propertyType: "Office Spaces" | "Retail Spaces" | "Commercial Lots" | "Industrial Lots" | "Industrial Warehouse";
  img: string;
  alt: string;
};

// Sample property data for demo (replace with your real data or API)
export const PROPERTIES =[
  {
    id: 1,
    title: "Downtown Office Suite",
    location: "New York",
    leaseType: "For Lease",
    propertyType: "Office Spaces",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    alt: "Modern office interior",
  },
  {
    id: 2,
    title: "Suburban Commercial Lot",
    location: "Los Angeles",
    leaseType: "For Rent",
    propertyType: "Commercial Lots",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Commercial land space",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    location: "Chicago",
    leaseType: "For Lease",
    propertyType: "Industrial Warehouse",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    alt: "Large warehouse building",
  },
];

// Locations derived from PROPERTIES (unique)
export const ALL_LOCATIONS = Array.from(new Set(PROPERTIES.map((p) => p.location)));