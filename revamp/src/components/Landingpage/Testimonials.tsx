import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Andy Smith",
    location: "Los Angeles, CA",
    text: "Prime Philippines made finding the perfect commercial space seamless and stress-free. Ideal for businesses seeking premium office locations!",
    image: "/Leadership/photo.png",
  },
  {
    name: "Samantha Lee",
    location: "Makati City, PH",
    text: "Their team was extremely helpful and responsive. Highly recommend for any real estate needs.",
    image: "/Leadership/photo.png",
  },
  {
    name: "Carlos Rivera",
    location: "Cebu City, PH",
    text: "I was impressed with how fast they found us a property that matched all our requirements!",
    image: "/Leadership/photo.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); // To track if the section is in view
  const sectionRef = useRef(null);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Set state when the section enters or leaves the viewport
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the testimonials section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer when component unmounts
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        handleNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-fullpy-10 px-4 sm:px-8 md:px-10 lg:px-20 font-gotham-book"
    >
      <div className="max-w-[1400px] mx-auto p-8 md:p-12">
        {/* Section Tag */}
        <div className="flex justify-center items-center mb-8 text-PRIMEblue font-gotham-bold text-sm tracking-wide space-x-2">
          <FaUserCircle className="text-xl" />
          <span>CLIENT TESTIMONIALS</span>
        </div>

        {/* Heading */}
        <h2 className="text-[20pt] md:text-4xl font-gotham-bold text-center text-[#0a0a0a] mb-10">
          What Our Clients Say
        </h2>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto px-6 sm:px-10">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-8 top-1/2 -translate-y-1/2 w-9 h-9 bg-PRIMEwhite border border-PRIMElightgray rounded-full 
            flex justify-center items-center shadow-lg hover:bg-PRIMEblue hover:text-white active:bg-PRIMEgray active:text-PRIMEwhite transition"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          {/* Testimonial Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isInView ? 1 : 0, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-PRIMEblue rounded-2xl p-8 md:p-10 text-PRIMEwhite flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              <img
                src={testimonials[index].image}
                alt={`${testimonials[index].name}'s photo`}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="text-base md:text-lg leading-relaxed text-center md:text-left max-w-xl font-gotham-book">
                <p className="mb-4">"{testimonials[index].text}"</p>
                <p className="font-gotham-bold text-lg">
                  {testimonials[index].name}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonials[index].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-8 top-1/2 -translate-y-1/2 w-9 h-9 bg-white border border-gray-300 rounded-full 
            flex justify-center items-center shadow-lg hover:bg-PRIMEblue hover:text-white active:bg-PRIMEgray active:text-PRIMEwhite transition"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === i
                    ? "bg-PRIMEblue scale-110"
                    : "bg-gray-400 opacity-40"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
