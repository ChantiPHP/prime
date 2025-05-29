import { useState } from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

const ExpertisePage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(1); // Default selected: Buying & Selling
  const [showDropdown, setShowDropdown] = useState(true); // Default to open for Kickstart

  // List of available services
  const serviceList = [
    { id: 1, name: "Buying & Selling" },
    { id: 2, name: "Research & Advisory" },
    { id: 3, name: "Leasing and Profitability" },
    { id: 4, name: "Seasoned" },
    { id: 5, name: "Accelerate" },
  ];

  const contentMap: Record<number, React.ReactNode> = {
    1: (
      <div className="space-y-8">
        {["Selling", "Buying"].map((section) => (
          <div key={section}>
            {/* Section Title */}
            <h3 className="text-xl font-semibold text-PRIMEblue">{section}</h3>

            {/* Section Images */}
            <div className="flex space-x-4">
              {[
                { image: `/Services/Services.png` },
                { image: `/Services/Services.png` },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-md overflow-hidden bg-gray-200"
                  style={{ aspectRatio: "16 / 9" }} // Maintain a consistent aspect ratio
                >
                  <img
                    src={item.image} // Explicit image path
                    alt={`${section} Image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            {/* Section Description */}
            <p className="mt-4 text-PRIMEgray">
              Explore our {section.toLowerCase()} services to find the best solutions tailored to your needs. We provide expert guidance and support to ensure a seamless experience.
            </p>
          </div>
        ))}
      </div>
    ),
    2: <p>We provide in-depth research and advisory services for smarter real estate decisions.</p>,
    3: <p>Maximize leasing potential and profitability with our expert insights and strategies.</p>,
    4: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit... (placeholder long text)
      </p>
    ),
    5: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit... (placeholder long text)
      </p>
    ),
  };

  const handleDropdownClick = () => setShowDropdown(!showDropdown);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Navbar />

      {/* Banner Section */}
      <section className="relative mb-10">
        <div
          className="w-full h-[500px] rounded-lg overflow-hidden relative group"
          style={{
            backgroundImage: `url(/Expertise/ExpertiseBG.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-PRIMEblue opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[36pt] sm:text-[48pt] font-bold uppercase">
              Expertise
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center px-[40px] py-[12px] border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Expertise</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* Sidebar + Help Card as a single vertical flex column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-between h-full space-y-6"
          >
            {/* Sidebar */}
            <div className="bg-white border border-PRIMElightgray shadow-lg p-8 rounded-xl max-h-[500px] overflow-y-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-PRIMEblue">Expertise</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-PRIMEyellow via-PRIMEred to-PRIMEblue rounded-full mt-2" />
              </div>

              {/* Dropdown Button */}
              <div className="flex flex-col space-y-4">
                <button
                  onClick={handleDropdownClick}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-md transition-all duration-300 ${
                    showDropdown
                      ? "bg-blue-100 text-PRIMEblue font-semibold"
                      : "hover:bg-blue-100 text-PRIMEgray"
                  }`}
                >
                  <span>Kickstart</span>
                  <ArrowRight size={18} />
                </button>

                {/* Dropdown Items */}
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col space-y-4 pl-4"
                    >
                      {serviceList.slice(0, 3).map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`flex justify-between items-center py-2 px-4 rounded-md ${
                            selectedService === service.id
                              ? "bg-blue-100 text-PRIMEblue font-semibold shadow"
                              : "hover:bg-blue-100 text-PRIMEgray"
                          }`}
                        >
                          <span>{service.name}</span>
                          <ArrowRight size={18} />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Remaining Services */}
                {serviceList.slice(3).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`flex items-center justify-between w-full py-3 px-4 rounded-md transition-all duration-300 ${
                      selectedService === service.id
                        ? "bg-blue-100 text-PRIMEblue font-semibold shadow"
                        : "hover:bg-blue-100 text-PRIMEgray"
                    }`}
                  >
                    <span>{service.name}</span>
                    <ArrowRight size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Help Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-PRIMEblue text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-full sm:w-[full] md:w-[full] lg:w-[full] mx-auto min-h-[400px] sm:min-h-[450px] lg:min-h-[full]"
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
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-PRIMEgray leading-relaxed"
              >
                <h2 className="text-3xl font-bold text-PRIMEblue mb-4">
                  {serviceList.find((s) => s.id === selectedService)?.name ||
                    "Service Not Found"}
                </h2>
                {contentMap[selectedService || 0] || (
                  <p>Content is currently unavailable.</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertisePage;