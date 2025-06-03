import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Components
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import JetYuProfile from "./Founder"; // Adjust the path if needed

const Leadership: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
              {/* Banner Section */}
      <section className="relative mb-10">
        <div className="w-full h-[500px] bg-[url('/PrimeFoundationBanner.avif')] bg-cover bg-center rounded-lg relative group">
          {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue/50 transition duration-300"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-PRIMEwhite text-center px-4"
          >
            <h1> The <span className="text-PRIMEyellow">PRIME </span> Foundation</h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">Prime Foundation</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    
        <JetYuProfile />
   

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Leadership;
