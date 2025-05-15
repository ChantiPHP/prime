import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const partners = [
  {
    name: "Prime Philippines",
    logo: "/Logo/prime-logo.webp",
    description: "Leading supplier of property materials and services.",
  },
  {
    name: "Greatwork",
    logo: "/Logo/greatwork.webp",
    description: "Innovative partner in real estate project execution.",
  },
  {
    name: "CREBA",
    logo: "/Logo/CREBA.webp",
    description: "Committed to professional excellence in construction.",
  },
  {
    name: "REBAP",
    logo: "/Logo/REBAP.webp",
    description: "Trusted partner in building nationwide networks.",
  },
  {
    name: "PAREB",
    logo: "/Logo/PAREB.webp",
    description: "Strengthening client relationships and business growth.",
  },
];



export default function TrustedPartners() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % partners.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full  bg-[url('/Services.png')] bg-cover bg-center py-6 md:py-12 relative overflow-hidden"
    >
       {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEwhite/50 transition duration-300"></div>
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center px-4 md:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-8 text-PRIMEblue font-gotham-bold text-sm md:text-base tracking-wide space-x-2"
        >
          <FaHandshake className="text-xl" />
          <span>TRUSTED PARTNERSHIPS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[20pt] md:text-4xl text-PRIMEblack font-bold text-center tracking-tight"
        >
          Our Partner Organizations
        </motion.h2>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative w-full max-w-[1000px] flex items-center justify-center"
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-PRIMEwhite shadow-md flex items-center justify-center text-[var(--color-PRIMEblue)] hover:bg-[var(--color-PRIMEblue)] hover:text-white transition-all"
            aria-label="Previous partner"
          >
            <FaChevronLeft className="text-md md:text-lg" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-PRIMEwhite shadow-md flex items-center justify-center text-[var(--color-PRIMEblue)] hover:bg-[var(--color-PRIMEblue)] hover:text-white transition-all"
            aria-label="Next partner"
          >
            <FaChevronRight className="text-md md:text-lg" />
          </button>

          {/* Main Image Container */}
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[650px] h-auto flex items-center justify-center overflow-visible gap-4">
            {/* Left Partner */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="absolute left-4 sm:left-0 md:-left-8 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center cursor-pointer"
              onClick={handlePrev}
            >
              <img
                src={
                  partners[(current - 1 + partners.length) % partners.length]
                    .logo
                }
                alt="Previous Partner"
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              />
            </motion.div>

<motion.div
  key={current}
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -50 }}
  transition={{ duration: 0.5 }}
  className="z-10 w-[250px] h-[320px] md:w-[300px] md:h-[360px] flex flex-col items-center justify-start text-center px-4 pt-4"
>
  <div className="w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mb-4">
    <img
      src={partners[current].logo}
      alt={partners[current].name}
      className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>
  <h3 className="text-lg md:text-xl font-semibold text-PRIMEblue mb-1">
    {partners[current].name}
  </h3>
  <p className="text-sm md:text-base text-PRIMEblack leading-snug">
    {partners[current].description || "Trusted partner in the industry."}
  </p>
</motion.div>


            {/* Right Partner */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute right-4 sm:right-0 md:-right-8 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center cursor-pointer"
              onClick={handleNext}
            >
              <img
                src={partners[(current + 1) % partners.length].logo}
                alt="Next Partner"
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              />
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
          className="flex mt-8 space-x-3"
        >
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-PRIMEblue scale-125"
                  : "bg-PRIMElightgray hover:bg-PRIMEgray"
              }`}
              aria-label={`Go to partner ${index + 1}`}
            ></button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
