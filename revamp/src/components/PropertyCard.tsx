import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <li className="border border-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={property.img}
        alt={property.alt}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-3">
        <h2 className="font-semibold text-sm">{property.title}</h2>
        <p className="text-xs text-gray-500">{property.location}</p>
        <p className="text-xs text-gray-600 mt-1">
          {property.leaseType} | {property.propertyType}
        </p>
      </div>
    </li>
  );
}