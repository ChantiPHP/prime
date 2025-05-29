import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {events} from "./data/eventsData"; // Import your events data

export const Events = () => {
  const [currentTime, setCurrentTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevEvent = () =>
    setCurrentIndex((index) => (index > 0 ? index - 1 : events.length - 1));
  const nextEvent = () =>
    setCurrentIndex((index) => (index < events.length - 1 ? index + 1 : 0));

  const event = events[currentIndex];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <section
          className="relative w-full h-[1000px] bg-cover bg-center flex items-center justify-start px-8 md:px-[174px]"
          style={{ backgroundImage: `url(${event.background})` }}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevEvent}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            aria-label="Previous Event"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextEvent}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
            aria-label="Next Event"
          >
            <ChevronRight size={28} />
          </button>

          <div className="text-white space-y-4">
            <h3 className="text-[23px] font-light">{event.title}</h3>
            <h1 className="text-[35px] font-bold">{event.subtitle}</h1>
            <p className="text-xl font-light">
              {event.date} - {event.location}
            </p>

            <div className="flex gap-4 text-3xl font-light">
              {["days", "hours", "minutes", "seconds"].map((key) => (
                <div key={key} className="text-center">
                  <div>
                    {String(currentTime[key as keyof typeof currentTime]).padStart(2, "0")}
                  </div>
                  <div className="text-sm capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Event */}
        <section className="w-full bg-[#0f656b] py-6 px-[174px]">
          <h2 className="text-white text-[35px] font-bold mb-4">ABOUT EVENT</h2>
          <p className="text-white text-xl font-bold">{event.about}</p>
        </section>

        {/* Featured Speaker */}
        <section className="max-w-[1508px] mx-auto mt-20 mb-20 px-4">
          <h2 className="text-center text-[35px] font-bold mb-28">Featured Speaker</h2>
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <img
                    src={event.speaker.image}
                    alt={event.speaker.name}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="mt-12 px-6 text-center">
                    <h3 className="text-[25px] font-bold mb-4">{event.speaker.name}</h3>
                    <p className="text-xl font-light">Title: {event.speaker.title}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:flex-1">
              <Card className="border-0 shadow-none">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed whitespace-pre-line">
                    {event.speaker.background}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
              <Footer />
      </div>
    </div>
  );
};

export default Events;
