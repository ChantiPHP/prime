import { useState } from "react";
import { FaCheck, FaInfoCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const highlights = [
  {
    title: "Expert Local Knowledge",
    description:
      "Extensive experience and insights into the perfect local market.",
  },
  {
    title: "Personalized Service",
    description: "Customized solutions for a smooth, tailored experience.",
  },
  {
    title: "Proven Track Record",
    description:
      "A history of 7000+ successful projects and satisfied clients.",
  },
];

const steps = [
  {
    title: "Find Your Ideal Commercial Space",
    description:
      "Browse our extensive commercial listings, filter by location, price, and features to find the perfect workspace for your business.",
  },
  {
    title: "Schedule a Viewing",
    description:
      "Coordinate with our experts to book a convenient time and tour the space.",
  },
  {
    title: "Secure Your Deal",
    description:
      "Make an offer or apply for financing through our website, and let our experts guide you.",
  },
];

const stepImages = [
  "/About/image1.png",
  "/About/image2.png",
  "/About/image3.png",
];

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-20 px-6 sm:px-10 md:px-16 font-gotham-book">
      <div className="max-w-[1400px] mx-auto space-y-20">
        {/* Label */}
        <motion.div
          className="flex justify-center items-center text-PRIMEblue font-gotham-bold text-sm tracking-wide space-x-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaInfoCircle className="text-xl" />
          <span>About PRIME</span>
        </motion.div>

        {/* Heading */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-[32px] font-gotham-bold text-PRIMEblack max-w-3xl mx-auto leading-tight">
            Why Choose{" "}
            <a href="#" className="text-PRIMEblue underline-offset-2 hover:underline transition">
              PRIME Philippines
            </a>{" "}
            for Your Commercial Real Estate Needs?
          </h2>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="relative flex flex-col md:flex-row gap-10 items-center max-w-[1200px] mx-auto rounded-2xl overflow-hidden shadow-xl bg-PRIMEwhite group transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/About/About.png"
            alt="Modern interior"
            className="w-full md:w-[55%] h-[400px] md:h-full object-cover"
          />
          <div className="flex-1 p-6 md:p-10 space-y-5">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex gap-3 items-start group"
              >
                <FaCheck className="text-PRIMEblue mt-1 shrink-0" />
                <div>
                  <p className="text-[13pt] font-gotham-bold text-PRIMEblack">
                    {item.title}
                  </p>
                  <p className="text-sm text-PRIMEgray">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-[32px] font-gotham-bold text-PRIMEblack max-w-md mx-auto">
            Discover the{" "}
            <span className="text-PRIMEblue font-semibold">advantages</span> and
            exclusive benefits
          </h3>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 max-w-[1200px] mx-auto mt-10">
          {/* Step List */}
          <motion.div
            className="space-y-6 w-full md:w-[45%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {steps.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer p-5 rounded-lg border-l-4 transition-all duration-300 ${
                    isActive
                      ? "border-PRIMEblue bg-PRIMEwhite"
                      : "border-PRIMElightgray hover:border-PRIMEblue"
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <p
                    className={`text-lg font-gotham-bold ${
                      isActive ? "text-PRIMEblue" : "text-PRIMEgray"
                    }`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      isActive ? "text-PRIMEblack" : "text-PRIMEgray"
                    }`}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Step Image */}
          <div className="w-full md:w-[55%] rounded-2xl overflow-hidden shadow-xl relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={stepImages[activeIndex]}
                alt="Step visual"
                className="w-full h-full object-cover absolute inset-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
