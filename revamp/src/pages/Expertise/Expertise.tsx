import { useState } from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { expertiseData, ExpertiseItem } from "./data/expertiseData";

const ExpertisaePage = () => {
  const [selectedExpertisae, setSelectedExpertisae] = useState<number>(1);

  const selectedData: ExpertiseItem | undefined = expertiseData.find(
    (item) => item.id === selectedExpertisae
  );

  return (
    <div className="w-full min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="relative mb-10">
        <div
          className="w-full h-[400px] relative overflow-hidden"
          style={{
            backgroundImage: "url(/Services/ServicesBG.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-PRIMEblue opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[36pt] sm:text-[48pt] font-bold uppercase mt-10">
              Expertise
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-[40px] py-[12px] border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Expertise</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="px-6 lg:px-12 py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-PRIMEwhite rounded-lg border border-PRIMElightgray shadow-lg p-6 max-h-[600px] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold text-PRIMEblue mb-2">Expertise</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-PRIMEyellow via-PRIMEred to-PRIMEblue rounded-full mb-6" />
            <div className="space-y-3">
              {expertiseData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedExpertisae(item.id)}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all duration-300 ${
                    selectedExpertisae === item.id
                      ? "bg-blue-100 text-PRIMEblue font-semibold shadow"
                      : "hover:bg-blue-100 text-PRIMEgray"
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight size={18} />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-2"
          >
            {/* Animated Title */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={selectedExpertisae}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-PRIMEblue mb-6"
              >
                {selectedData?.name}
              </motion.h2>
            </AnimatePresence>

            <div className="text-PRIMEgray text-justify leading-relaxed space-y-6 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedExpertisae}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                >
                  {selectedData?.content.map((para, idx) => (
                    <p key={idx} className="mb-4">
                      {para}
                    </p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated Images */}
            <div className="flex gap-6">
              <AnimatePresence mode="wait">
                {selectedData?.images.map((imgSrc, idx) => (
                  <motion.img
                    key={selectedExpertisae + "-" + idx}
                    src={imgSrc}
                    alt={`${selectedData.name} image ${idx + 1}`}
                    className="w-1/2 rounded-lg shadow-md object-cover max-h-[300px]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Help Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-PRIMEblue text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-full mx-auto min-h-[400px]"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-PRIMEblue border border-PRIMEwhite rounded-full mb-4">
              <PhoneCall size={32} color="white" />
            </div>
            <p className="text-2xl font-bold mb-2">Need Help?</p>
            <p className="text-lg font-semibold mb-6">Call Here</p>
            <div className="text-sm space-y-2 text-center">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+63288881000" className="text-blue-100 hover:underline">
                  +63 2 8888 1000
                </a>
              </p>
              <p>
                <strong>Mobile:</strong>{" "}
                <a href="tel:+639171234567" className="text-blue-100 hover:underline">
                  +63 917 123 4567
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertisaePage;
