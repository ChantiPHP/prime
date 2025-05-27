import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const partners = [
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
  className="w-full bg-[url('/Services.png')] bg-cover bg-center py-4 md:py-6 relative overflow-hidden mb-[50px]"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-PRIMEblack/50 transition duration-300"></div>

  <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center px-4 md:px-8 relative z-10">
    {/* Heading */}
    <div className="flex justify-center items-center mb-2 text-PRIMEwhite font-bold text-subcontent tracking-wide space-x-2">
      <FaHandshake className="text-subcontent" />
      <span>TRUSTED PARTNERSHIPS</span>
    </div>

    <h2 className="text-center mb-3">
      <span className="inline-block text-PRIMEyellow bg-PRIMEblue px-4 py-2 rounded-sm">
        <span className="text-maintitle">OUR</span>
        <span className="ml-2 text-maintitle">PARTNER ORGANIZATION</span>
      </span>
    </h2>

    {/* Carousel */}
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl flex items-center justify-center"
    >
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray 
        flex items-center justify-center text-PRIMEblue hover:bg-PRIMEblue hover:text-PRIMEwhite active:bg-PRIMEgray active:text-PRIMEwhite transition-all"
        aria-label="Previous partner"
      >
        <FaChevronLeft className="text-md md:text-lg" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray  
        flex items-center justify-center text-[var(--color-PRIMEblue)] hover:bg-[var(--color-PRIMEblue)] hover:text-white active:bg-PRIMEgray active:text-PRIMEwhite transition-all"
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
          className="absolute left-4 sm:left-0 md:-left-8 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center cursor-pointer z-10"
          onClick={handlePrev}
        >
          <img
            src={partners[(current - 1 + partners.length) % partners.length].logo}
            alt="Previous Partner"
            className="w-full h-full object-contain filter brightness-0 invert transition duration-300 hover:filter-none"
          />
        </motion.div>

        {/* Center Partner */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="z-10 w-[220px] h-[280px] md:w-[260px] md:h-[320px] flex flex-col items-center justify-start text-center px-4 pt-4"
        >
          <div className="bg-white/80 rounded-xl p-4 w-full flex flex-col items-center justify-center h-full shadow-lg">
            <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mb-3">
              <img
                src={partners[current].logo}
                alt={partners[current].name}
                className="max-w-[100%] max-h-[100%] object-contain"
              />
            </div>
            <h3 className="text-subtitle font-semibold text-PRIMEblue mb-1">
              {partners[current].name}
            </h3>
            <p className="text-subcontent text-PRIMEblue leading-snug">
              {partners[current].description || "Trusted partner in the industry."}
            </p>
          </div>
        </motion.div>

        {/* Right Partner */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute right-4 sm:right-0 md:-right-8 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center cursor-pointer z-10"
          onClick={handleNext}
        >
          <img
            src={partners[(current + 1) % partners.length].logo}
            alt="Next Partner"
            className="w-full h-full object-contain filter brightness-0 invert transition duration-300 hover:filter-none"
          />
        </motion.div>
      </div>
    </div>

    {/* Dots */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ delay: 0.5 }}
      className="flex mt-4 space-x-3"
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
