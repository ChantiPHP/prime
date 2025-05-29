// pages/properties.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import BusDisProperties from "@/components/Properties/BusDisProperties";
import { TopFilter } from "@/components/filters";
import { cities } from "@/data/propertiesData";

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationDropdown, setLocationDropdown] = useState("");

  // Scroll to the top of the page when the component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  function setCurrentPage(_arg0: number) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="min-h-screen bg-PRIMEwhite overflow-x-hidden">
      <Navbar />

      {/* Banner Section */}
      {/* Header Image and TopFilter */}
      <div className="w-full h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 relative overflow-visible">
        <img
          src="HomeBanner.jpg"
          alt="Modern glass buildings with gradient overlay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
          <TopFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            locationDropdown={locationDropdown}
            setLocationDropdown={setLocationDropdown}
            cities={cities}
            onSearch={() => {
              setCurrentPage(1); // Reset page on search if needed
            }}
          />
        </div>
      </div>

      {/* Business District section */}
      <BusDisProperties />

      {/* Cards/Buttons for different property offers */}
      <div className="flex w-full justify-center mb-[100px]">
        <div className="max-w-[1600px] flex md:flex-col lg:flex-row gap-3 uppercase text-xsubtitle text-center text-PRIMEwhite font-semibold">
          <Link
            to="/"
            className="relative flex flex-col justify-center items-center rounded-md bg-[url('Property/OfficeSpaces.png')] bg-cover text-PRIMEwhite text-xsubtitle font-semibold hover:underline text-center p-6 transition-colors overflow-hidden w-[530px] h-[300px]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-PRIMEblue/60 z-0" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              Office <br /> spaces
            </div>
          </Link>

          <Link
            to="/projects"
            className="relative flex flex-col justify-center items-center rounded-md bg-[url('Property/OfficeSpaces.png')] bg-cover text-PRIMEwhite text-xsubtitle font-semibold hover:underline text-center p-6 transition-colors overflow-hidden w-[530px] h-[300px]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-PRIMEblue/60 z-0" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              retail spaces & <br />
              commercial lots
            </div>
          </Link>

          <Link
            to="/projects"
            className="relative flex flex-col justify-center items-center rounded-md bg-[url('Property/OfficeSpaces.png')] bg-cover text-PRIMEwhite text-xsubtitle font-semibold hover:underline text-center p-6 transition-colors overflow-hidden w-[530px] h-[300px]"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-PRIMEblue/60 z-0" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              industrial lots
              <br />& warehouses
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
