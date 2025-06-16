import { useState } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { pressItems } from "./data/pressroomData";

const items = [...pressItems];
const itemsPerPage = 6;

const NewsMediaGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mb-10">
        <div className="w-full h-[400px] bg-[url('/Pressroom/PressroomBG.png')] bg-cover bg-center relative group">
          <div className="absolute inset-0 bg-PRIMEblue opacity-50"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[32pt] sm:text-[48pt] font-bold uppercase mt-10">
              News & Media Appearances
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">News & Media</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 flex-grow">
        
        {/* Pagination Top Right */}
        {totalPages > 1 && (
          <div className="flex justify-end mb-6">
            <nav
              aria-label="Pagination"
              className="flex items-center gap-2 text-PRIMEblue text-sm font-semibold"
            >
              {/* Previous */}
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center border border-PRIMElightgray rounded hover:border-PRIMEblue disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToPage(i + 1)}
                  className={`w-9 h-9 flex items-center justify-center border border-PRIMElightgray rounded hover:border-PRIMEblue hover:text-PRIMEblue ${
                    currentPage === i + 1
                      ? "bg-PRIMEblue text-white hover:text-white"
                      : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center border border-PRIMElightgray rounded hover:border-PRIMEblue disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-8 sm:py-8 md:py-10 lg:py-12">
          {currentItems.map((item) => (
            <Link
              key={item.id}
              to={
                item.type === "NEWS"
                  ? `/Pressroom/News/${item.id}`
                  : `/Pressroom/Insights/${item.id}`
              }
              className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden flex flex-col h-full group"
            >
              {/* Image Section with Zoom on Hover */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <span
                  className={`absolute top-4 right-4 text-xs font-bold py-1 px-3 rounded-full ${
                    item.type === "NEWS"
                      ? "bg-PRIMEblue text-PRIMEwhite"
                      : "bg-PRIMEyellow text-PRIMEblue"
                  }`}
                >
                  {item.type}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <p className="text-center text-sm text-PRIMEblue underline mt-4 hover:text-PRIMEgray transition">
                  View Details
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default function Pressroom() {
  return <NewsMediaGrid />;
}
