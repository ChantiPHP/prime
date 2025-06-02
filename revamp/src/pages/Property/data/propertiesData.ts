// src/pages/Property/data/propertiesData.ts

export const cities: string[] = [
  "Makati CBD", "BGC", "Ortigas", "Pasay", "Alabang",
  "Cebu", "Quezon City", "Davao", "Clark", "Navotas City",
  "Las Pinas City", "Taguig City", "Mandaluyong City", "Iloilo", "CDO",
];

export type PropertyType =
  | "Office Spaces"
  | "Retail Spaces"
  | "Commercial Lots"
  | "Industrial Lots"
  | "Industrial Warehouse";
export type LeaseType = "For Lease" | "For Rent";

export interface Property {
  leaseType: LeaseType | undefined; // optional field, can be undefined
  id: number;
  title: string;
  type: LeaseType;
  location: string;
  png: string[];        // required array of image URLs
  image: string;        // now required
  propertyType: PropertyType;
  price: string;
}

export const properties: Property[] = [
  {
    id: 1, title: "Office Tower", location: "Quezon City", image: "/Property/placeholder.jpg", 
    png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Office Spaces", price: "₱85,000/mo",
    leaseType: undefined
  },
  {
    id: 2, title: "Downtown Office", location: "Makati City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Office Spaces", price: "₱120,000/mo",
    leaseType: undefined
  },
  {
    id: 3, title: "High Street Retail", location: "Taguig City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Retail Spaces", price: "₱95,000/mo",
    leaseType: undefined
  },
  {
    id: 4, title: "Corner Retail Space", location: "San Juan City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Retail Spaces", price: "₱65,000/mo",
    leaseType: undefined
  },
  {
    id: 5, title: "Open Commercial Lot", location: "Pasig City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Commercial Lots", price: "₱150/sqm",
    leaseType: undefined
  },
  {
    id: 6, title: "Prime Commercial Lot", location: "Pasay City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Commercial Lots", price: "₱180/sqm",
    leaseType: undefined
  },
  {
    id: 7, title: "Industrial Yard", location: "Valenzuela City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Industrial Lots", price: "₱70,000/mo",
    leaseType: undefined
  },
  {
    id: 8, title: "Heavy Equipment Lot", location: "Caloocan City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Industrial Lots", price: "₱85,000/mo",
    leaseType: undefined
  },
  {
    id: 9, title: "Main Road Warehouse", location: "Paranaque City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Industrial Warehouse", price: "₱110,000/mo",
    leaseType: undefined
  },
  {
    id: 10, title: "Storage Warehouse", location: "Navotas City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Industrial Warehouse", price: "₱90,000/mo",
    leaseType: undefined
  },
  {
    id: 11, title: "Executive Office", location: "Las Pinas City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Office Spaces", price: "₱75,000/mo",
    leaseType: undefined
  },
  {
    id: 12, title: "Modern Office Hub", location: "Mandaluyong City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Office Spaces", price: "₱100,000/mo",
    leaseType: undefined
  },
  {
    id: 13, title: "Lifestyle Retail Space", location: "Taguig City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Retail Spaces", price: "₱80,000/mo",
    leaseType: undefined
  },
  {
    id: 14, title: "Mall-based Retail Unit", location: "Makati City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Retail Spaces", price: "₱105,000/mo",
    leaseType: undefined
  },
  {
    id: 15, title: "Commercial Dev Lot", location: "Quezon City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Commercial Lots", price: "₱160/sqm",
    leaseType: undefined
  },
  {
    id: 16, title: "Highway Front Lot", location: "Pasig City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Commercial Lots", price: "₱200/sqm",
    leaseType: undefined
  },
  {
    id: 17, title: "Heavy-Duty Industrial", location: "Caloocan City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Industrial Lots", price: "₱95,000/mo",
    leaseType: undefined
  },
  {
    id: 18, title: "Bulk Storage Yard", location: "San Juan City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Industrial Lots", price: "₱88,000/mo",
    leaseType: undefined
  },
  {
    id: 19, title: "Logistics Warehouse", location: "Navotas City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Industrial Warehouse", price: "₱120,000/mo",
    leaseType: undefined
  },
  {
    id: 20, title: "Dry Storage Warehouse", location: "Valenzuela City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Industrial Warehouse", price: "₱100,000/mo",
    leaseType: undefined
  },
  {
    id: 21, title: "Shared Office Floor", location: "Las Pinas City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Office Spaces", price: "₱60,000/mo",
    leaseType: undefined
  },
  {
    id: 22, title: "Tech Park Office", location: "Paranaque City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Office Spaces", price: "₱110,000/mo",
    leaseType: undefined
  },
  {
    id: 23, title: "Boutique Retail Stall", location: "Taguig City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Retail Spaces", price: "₱70,000/mo",
    leaseType: undefined
  },
  {
    id: 24, title: "Small Retail Kiosk", location: "Mandaluyong City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Retail Spaces", price: "₱50,000/mo",
    leaseType: undefined
  },
  {
    id: 25, title: "Expansion Comm Lot", location: "Quezon City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Commercial Lots", price: "₱170/sqm",
    leaseType: undefined
  },
  {
    id: 26, title: "Plaza Frontage Lot", location: "Pasay City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Commercial Lots", price: "₱185/sqm",
    leaseType: undefined
  },
  {
    id: 27, title: "Construction Base Lot", location: "Pasig City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Industrial Lots", price: "₱90,000/mo",
    leaseType: undefined
  },
  {
    id: 28, title: "Warehouse Hub", location: "Makati City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Industrial Warehouse", price: "₱115,000/mo",
    leaseType: undefined
  },
  {
    id: 29, title: "Full Floor Office", location: "San Juan City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Lease", propertyType: "Office Spaces", price: "₱125,000/mo",
    leaseType: undefined
  },
  {
    id: 30, title: "Compact Office Studio", location: "Caloocan City", image: "/Property/placeholder.jpg", png: ["/Property/placeholder.jpg"], type: "For Rent", propertyType: "Office Spaces", price: "₱55,000/mo",
    leaseType: undefined
  }
];
