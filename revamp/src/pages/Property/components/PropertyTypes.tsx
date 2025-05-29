// PropertyTypes.tsx
import { Link } from "react-router-dom";

const PropertyTypes = () => {
  return (
    <div className="w-full flex justify-center py-6 mb-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Office Spaces Card */}
        <Link
          to="/OfficeSpaces"
          className="relative h-72 hover:underline flex flex-col justify-center items-center rounded-2xl bg-[url('/Careers/Careers.jpeg')] bg-cover bg-center text-PRIMEyellow font-semibold text-xl text-center px-6 py-10 hover:bg-[#0a294d] transition-colors overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 flex flex-col items-center space-y-1">
            <span>OFFICE</span>
            <span>SPACES</span>
          </div>
        </Link>

        {/* Retail & Commercial Card */}
        <Link
          to="/RetailSpaces-CommercialLots"
          className="relative h-72 hover:underline flex flex-col justify-center items-center rounded-2xl bg-[url('/Careers/Careers.jpeg')] bg-cover bg-center text-PRIMEyellow font-semibold text-xl text-center px-6 py-10 hover:bg-[#0a294d] transition-colors overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 flex flex-col items-center space-y-1">
            <span>RETAIL SPACES AND</span> 
            <span>COMMERCIAL LOTS</span>
          </div>
        </Link>

        {/* Industrial & Warehouse Card */}
        <Link
          to="/IndustrialLots-Warehouse"
          className="relative h-72 hover:underline flex flex-col justify-center items-center rounded-2xl bg-[url('/Careers/Careers.jpeg')] bg-cover bg-center text-PRIMEyellow font-semibold text-xl text-center px-6 py-10 hover:bg-[#0a294d] transition-colors overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 flex flex-col items-center space-y-1">
            <span>INDUSTRIAL LOT AND</span>
            <span>WAREHOUSE</span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default PropertyTypes;
