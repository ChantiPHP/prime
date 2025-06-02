import { useState } from "react";
import { PhoneCall, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<number>(1);

  const serviceList = [
    { id: 1, name: "Landlord Representation" },
    { id: 2, name: "Tenant Representation" },
    { id: 3, name: "Research & Advisory" },
    { id: 4, name: "Property Acquisition & Disposal" },
    { id: 5, name: "Project Management" },
    { id: 6, name: "Project Management" },
  ];

  const contentParagraph = (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
      </p>
    </>
  );

  const contentMap: Record<number, React.ReactNode> = {
    1: contentParagraph,
    2: contentParagraph,
    3: contentParagraph,
    4: contentParagraph,
    5: contentParagraph,
    6: contentParagraph,
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar />

      {/* Banner */}
      <section className="relative mb-10">
        <div
          className="w-full h-[500px] relative overflow-hidden"
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
            <h1 className="text-[36pt] sm:text-[48pt] font-bold uppercase">Services</h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-[40px] py-[12px] border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Services</span>
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
            <h2 className="text-2xl font-bold text-PRIMEblue mb-2">Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-PRIMEyellow via-PRIMEred to-PRIMEblue rounded-full mb-6" />
            <div className="space-y-3">
              {serviceList.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all duration-300 ${
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
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-PRIMEblue mb-6">
              {serviceList.find((s) => s.id === selectedService)?.name}
            </h2>
            <div className="text-PRIMEgray text-justify leading-relaxed space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                >
                  {contentMap[selectedService]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
