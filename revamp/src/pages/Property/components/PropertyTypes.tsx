// src/components/PropertyTypes.tsx

import { Link } from "react-router-dom";

const PropertyTypes = () => {
  return (
    <div className="w-full flex justify-center py-6 mb-6">
      <div className="max-w-[1600px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px] mb-[50px]">

        {/* Office Spaces */}
        <Link
          to="/PropertiesPage2?propertyType=Office%20Spaces"
          className="relative h-72 flex justify-center items-center rounded-2xl bg-[url('/Property/OfficeSpaces/OfficeSpaces.jpg')] bg-cover bg-center text-PRIMEyellow text-xl font-semibold hover:bg-[#0a294d] transition overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <span className="relative z-10">OFFICE SPACES</span>
        </Link>

       {/* Retail */}
        <Link
          to="/PropertiesPage2?propertyType=Retail%20Spaces,Commercial%20Lots"
          className="relative h-72 flex justify-center items-center rounded-2xl bg-[url('/Property/Key-Retail-Building-Projects-and-Commercial-Lots/Retail-Commercial.jpg')] bg-cover bg-center text-PRIMEyellow text-xl font-semibold hover:bg-[#0a294d] transition overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <span className="relative z-10 text-center">RETAIL SPACES & COMMERCIAL LOTS</span>
        </Link>

        {/* Industrial */}
        <Link
          to="/PropertiesPage2?propertyType=Industrial%20Lots,Industrial%20Warehouse"
          className="relative h-72 flex justify-center items-center rounded-2xl bg-[url('/Property/Key-Industrial-Projects-and-Warehouses/IndustrialLot-Warehouse.jpg')] bg-cover bg-center text-PRIMEyellow text-xl font-semibold hover:bg-[#0a294d] transition overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <span className="relative z-10 text-center">INDUSTRIAL LOT & WAREHOUSE</span>
        </Link>
      </div>
    </div>
  );
};

export default PropertyTypes;
