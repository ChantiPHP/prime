"use client"; // Ensure this is a client-side component if using Next.js App Router

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "./data/eventsData"; // your events data

interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Events: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<TimeState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Whenever currentIndex changes, recalculate the countdown
  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(events[currentIndex].targetDate).getTime();
      const now = Date.now();
      const diff = target - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCurrentTime({ days, hours, minutes, seconds });
      } else {
        setCurrentTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Handlers to move to previous/next event
  const prevEvent = () =>
    setCurrentIndex((idx) => (idx > 0 ? idx - 1 : events.length - 1));
  const nextEvent = () =>
    setCurrentIndex((idx) => (idx < events.length - 1 ? idx + 1 : 0));

  const event = events[currentIndex];

  // Framer Motion variants for fade/scale animations
  const heroVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

  <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentIndex}
      variants={heroVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${event.background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navigation Arrows */}
      <button
        onClick={prevEvent}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition z-20"
        aria-label="Previous Event"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={nextEvent}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition z-20"
        aria-label="Next Event"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 md:px-20 lg:px-40 py-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 w-full">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center gap-4">
            <h3 className="text-lg md:text-2xl font-light">{event.title}</h3>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {event.subtitle}
            </h1>
            <p className="text-base md:text-lg font-light">
              {event.date} – {event.location}
            </p>

            {/* Countdown */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xl md:text-2xl font-light mt-4">
              {(["days", "hours", "minutes", "seconds"] as const).map((key) => (
                <div key={key} className="flex flex-col items-center">
                  <div className="bg-PRIMEblack/50 px-4 py-4 rounded-md">
                    {String(currentTime[key]).padStart(2, "0")}
                  </div>
                  <div className="text-sm capitalize mt-1">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
</section>



      {/* ABOUT EVENT */}
      <section className="w-full bg-teal-800 text-white py-12">
        <div className="container mx-auto px-4 md:px-20 lg:px-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex} // re-animate when event changes
              variants={sectionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold mb-6">ABOUT EVENT</h2>
              <p className="text-base md:text-xl leading-relaxed">{event.about}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

     {/* FEATURED SPEAKER */}
<section className="w-full py-12">
  <div className="container mx-auto px-4 md:px-20 lg:px-40">
    <h2 className="text-center text-2xl md:text-4xl font-bold mb-6">
      Featured Speaker
    </h2>

    <div className="flex flex-col lg:flex-row gap-8">
      <AnimatePresence mode="wait">
        {/* Speaker Image/Card */}
        <motion.div
          key={currentIndex + "-speaker-img"}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex-shrink-0 lg:w-1/3 h-full"
        >
          <Card className="h-full flex flex-col border-none">
            <CardContent className="p-0 flex flex-col h-full">
              <img
                src={event.speaker.image}
                alt={event.speaker.name}
                className="w-full h-60 md:h-80 lg:h-96 object-cover rounded-t-lg"
              />
              <div className="p-6 text-center mt-auto">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {event.speaker.name}
                </h3>
                <p className="text-base md:text-lg">
                  Title: {event.speaker.title}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Speaker Bio */}
        <motion.div
          key={currentIndex + "-speaker-bio"}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex-1 h-full"
        >
          <Card className="h-full flex flex-col border-none">
            <CardContent className="p-6 flex-grow">
              <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                {event.speaker.background}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Events;
