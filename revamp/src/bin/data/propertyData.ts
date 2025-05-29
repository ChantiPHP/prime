
export interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  png: string[];
  image?: string;
  category: "Office Spaces" | "Retail Spaces" | "Commercial Lots" | "Industrial Lots" | "Industrial Warehouse";
  leaseType: "For Lease" | "For Rent";
  price: string; // Added price field
}


export const properties: Property[] = [
  // Office Spaces 
  { id: 1, title: "Modern Office Tower", type: "Quezon City", location: "Quezon City", 
    png: [
      "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
    ], category: "Office Spaces", leaseType: "For Lease", price: "₱150,000/month", },
    
  { id: 2, title: "Executive Business Center", type: "Makati", location: "Makati", png: [
   "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 3, title: "Corporate Plaza Suite", type: "Ortigas", location: "Ortigas", png: [
   "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 4, title: "Startup Hub Workspace", type: "Taguig", location: "Taguig", png: [
 "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 5, title: "Pasig Office Condo", type: "Pasig", location: "Pasig", png: [
 "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 26, title: "Modern Office Tower", type: "Quezon City", location: "Quezon City", png: [
 "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 27, title: "Modern Office Tower", type: "Quezon City", location: "Quezon City", png: [
 "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 28, title: "Modern Office Tower", type: "Quezon City", location: "Quezon City", png: [
 "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 29, title: "Modern Office Tower", type: "Quezon City", location: "Quezon City",png: [
 "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 30, title: "Modern Office Tower", type: "Quezon City", location: "Quezon City", png: [
 "/Property/mockup.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Office Spaces", leaseType: "For Lease", price: "₱150,000/month",  },

  // Retail Spaces 
  { id: 6, title: "Prime Retail Strip Mall", type: "Quezon City", location: "Quezon City", png: [
 "/Property/Retail.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Retail Spaces", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 7, title: "Downtown Retail Space", type: "Manila", location: "Manila", png: [
 "/Property/Retail.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Retail Spaces", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 8, title: "Shopping Center Space", type: "Pasig", location: "Pasig", png: [
 "/Property/Retail.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Retail Spaces", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 9, title: "Commercial Showroom", type: "Rizal", location: "Rizal", png: [
 "/Property/Retail.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Retail Spaces", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 10, title: "High Street Retail", type: "Taguig", location: "Taguig", png: [
 "/Property/Retail.png",
      "/Property/IndustrialLot.png",
      "/Property/IndustrialWarehouse.png",
      "/Property/CommercialLots.png",
  ], category: "Retail Spaces", leaseType: "For Lease", price: "₱150,000/month",  },

  // Commercial Lots 
  { id: 11, title: "Commercial Corner Lot", type: "Makati", location: "Makati", png: [
    "/Property/CommercialLots.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Commercial Lots", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 12, title: "Highway Frontage Lot", type: "Quezon City", location: "Quezon City", png: [
    "/Property/CommercialLots.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Commercial Lots", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 13, title: "Commercial Parking Lot", type: "Ortigas", location: "Ortigas", png: [
    "/Property/CommercialLots.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Commercial Lots", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 14, title: "Development Ready Lot", type: "Rizal", location: "Rizal", png: [
    "/Property/CommercialLots.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Commercial Lots", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 15, title: "Mixed-Use Zoned Lot", type: "Manila", location: "Manila", png: [
    "/Property/CommercialLots.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Commercial Lots", leaseType: "For Lease", price: "₱150,000/month",  },

  // Industrial Lots 
  { id: 16, title: "Industrial Park Lot", type: "Laguna", location: "Rizal", png: [
    "/Property/IndustrialLot.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Lots", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 17, title: "Manufacturing Zone Lot", type: "Cavite", location: "Pasig", png: [
    "/Property/IndustrialLot.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Lots", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 18, title: "Industrial Yard", type: "Bulacan", location: "Manila", png: [
    "/Property/IndustrialLot.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Lots", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 19, title: "Logistics Hub Lot", type: "Bulacan", location: "Quezon City", png: [
    "/Property/IndustrialLot.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Lots", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 20, title: "Heavy Industry Lot", type: "Batangas", location: "Taguig", png: [
    "/Property/IndustrialLot.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Lots", leaseType: "For Lease", price: "₱150,000/month",  },

  // Industrial Warehouse 
  { id: 21, title: "Warehouse Complex", type: "Cavite", location: "Makati", png: [
    "/Property/IndustrialWarehouse.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Warehouse", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 22, title: "Distribution Center", type: "Laguna", location: "Ortigas", png: [
    "/Property/IndustrialWarehouse.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Warehouse", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 23, title: "Storage Warehouse", type: "Batangas", location: "Rizal", png: [
    "/Property/IndustrialWarehouse.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Warehouse", leaseType: "For Lease", price: "₱150,000/month",  },
  { id: 24, title: "Cold Storage Facility", type: "Bulacan", location: "Pasig", png: [
    "/Property/IndustrialWarehouse.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Warehouse", leaseType: "For Rent", price: "₱150,000/month",  },
  { id: 25, title: "Flex Warehouse Space", type: "Laguna", location: "Manila", png: [
    "/Property/IndustrialWarehouse.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
    "/Property/mockup.png",
  ], category: "Industrial Warehouse", leaseType: "For Lease", price: "₱150,000/month",  }
];

// Updated categories array with proper typing
export interface Category {
  name: string | ((...args: any[]) => string);
  description: string;
  filter: string | ((prop: Property) => boolean);
}

export const categories: Category[] = [
  {
    name: "Office Spaces",
    description: "Prime Office spaces for your business in high-traffic areas with excellent visibility.",
    filter: "Office Spaces"
    },

  {
    name: (location: string = "Quezon City") => `Featured Office Spaces for leases in ${location}`,
    description: "Looking to set up your first office? Ease into an easier travel to work with these spaces located at the center of Metro Manila.",
    filter: (prop: Property) => prop.category === "Office Spaces" && prop.location === "Quezon City",
  },
    
  {
    name: "Retail Spaces",
    description: "Prime retail spaces for your business in high-traffic areas with excellent visibility.",
    filter: "Retail Spaces"
    },

  {
    name: "Key Retail Building Projects",
    description: "Prime retail spaces for your business in high-traffic areas with excellent visibility.",
    filter: (prop: Property) => prop.category === "Retail Spaces" || prop.category === "Commercial Lots",
  },
  {
    name: "Commercial Lots",
    description: "Commercial lots ready for your business development needs.",
    filter: "Commercial Lots",
  },

  {
    name: "Industrial Lots",
    description: "Industrial lots with convenient access to major transportation routes.",
    filter: "Industrial Lots"
    },

  {
    name: "Industrial Lots",
    description: "Industrial lots with convenient access to major transportation routes.",
    filter: (prop: Property) => prop.category === "Industrial Lots",
  },
  {
    name: "Industrial Warehouse",
    description: "Warehouse spaces for storage and distribution needs.",
    filter: "Industrial Warehouse",
  },
];

export const locationOptions = [
  "All Locations",
  "Quezon City",
  "Makati",
  "Taguig",
  "Ortigas",
  "Manila",
  "Pasig",
  "Rizal"
];

export const categoryOptions = [
  "All Categories",
  "Office Spaces",
  "Retail Spaces",
  "Commercial Lots",
  "Industrial Lots",
  "Industrial Warehouse"
];

export const leaseOptions = ["All Types", "For Lease", "For Rent"];