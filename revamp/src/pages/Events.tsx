import { useState, useEffect, JSX } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { eventsData, EventData } from "@/data/eventData";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Events = (): JSX.Element => {
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 20,
    hours: 22,
    minutes: 22,
    seconds: 0,
  });

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])
  
  const [eventEnded, setEventEnded] = useState<boolean>(false);

  const currentEvent: EventData = eventsData[currentEventIndex];
  const targetDate: Date = new Date(currentEvent.date.split(" ")[0]);

  const calculateTimeLeft = (): TimeLeft => {
    const now: Date = new Date();
    const difference: number = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setEventEnded(true);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes: number = Math.floor((difference / 1000 / 60) % 60);
    const seconds: number = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer: NodeJS.Timeout = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEventIndex]);

  useEffect(() => {
    if (
      timeLeft.days <= 0 &&
      timeLeft.hours <= 0 &&
      timeLeft.minutes <= 0 &&
      timeLeft.seconds <= 0 &&
      !eventEnded
    ) {
      setEventEnded(true);
    }
  }, [timeLeft, eventEnded]);

  const nextEvent = (): void => {
    setCurrentEventIndex((prev: number) => (prev + 1) % eventsData.length);
  };

  const prevEvent = (): void => {
    setCurrentEventIndex((prev: number) => (prev - 1 + eventsData.length) % eventsData.length);
  };

  return (
    <div className="bg-[var(--color-PRIMEwhite)] flex flex-row justify-end w-full font-gotham">
      <Navbar />
      <div className="bg-[var(--color-PRIMEwhite)] w-full max-w-[1920px] relative">
        {/* Hero Section */}
        <section
          className="w-full h-[971px] relative bg-cover bg-[50%_50%]"
          style={{ backgroundImage: `url(${currentEvent.backgroundImage})` }}
        >
          <div className="absolute w-[382px] h-[209px] top-[381px] left-[109px]">
            <div className="font-light text-[var(--color-PRIMEwhite)] text-[23px] ml-2 mt-[11px] gotham-book">
              {currentEvent.title}
            </div>
            <div className="font-bold text-[var(--color-PRIMEwhite)] text-[35px] ml-2 mt-3 gotham-bold">
              {currentEvent.subtitle}
            </div>
            <div className="font-light text-[var(--color-PRIMEwhite)] text-xl ml-2 mt-6 gotham-book">
              {currentEvent.date} - {currentEvent.location}
            </div>
            <div className="font-light text-[var(--color-PRIMEwhite)] text-3xl ml-2 mt-2 gotham-book">
              {eventEnded ? (
                <span>Event Started!</span>
              ) : (
                <span>
                  {timeLeft.days} | {timeLeft.hours} | {timeLeft.minutes} |{" "}
                  {timeLeft.seconds}
                </span>
              )}
            </div>
            <div className="font-light text-[var(--color-PRIMEwhite)] text-[13px] ml-0.5 mt-[11px] gotham-book">
              &nbsp;&nbsp;Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;Minutes&nbsp;&nbsp;&nbsp;&nbsp;Seconds
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              onClick={prevEvent}
              className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-r-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              onClick={nextEvent}
              className="bg-black/50 hover:bg-black/70 text-white p-4 rounded-l-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </section>

        {/* About Event Section */}
        <section className="w-full h-[190px] bg-[var(--color-PRIMEblue)] py-6 px-[174px]">
          <h2 className="font-bold text-[35px] text-[var(--color-PRIMEwhite)] gotham-bold">
            ABOUT EVENT
          </h2>
          <p className="font-justify text-[var(--color-PRIMEwhite)] text-xl mt-5 gotham-book">
            {currentEvent.aboutEvent}
          </p>
        </section>

        {/* Featured Speaker Section */}
        <section className="w-full max-w-[1508px] mx-auto mt-[60px] mb-[60px]">
          <h2 className="font-bold text-[var(--color-PRIMEblack)] text-[35px] text-center mb-[113px] gotham-bold">
            Featured Speaker
          </h2>
          <div className="flex flex-wrap gap-6">
            <div className="w-full max-w-[550px]">
              <img
                className="w-auto h-auto object-cover"
                alt={currentEvent.speaker.name}
                src={currentEvent.speaker.image}
              />
              <div className="mt-[47px] text-center">
                <h3 className="font-bold text-[var(--color-PRIMEblack)] text-[25px] gotham-bold">
                  {currentEvent.speaker.name}
                </h3>
                <p className="font-light text-[var(--color-PRIMEblack)] text-xl mt-[13px] gotham-book">
                  Title: {currentEvent.speaker.title}
                </p>
              </div>
            </div>
            <div className="w-full max-w-[900px]">
              <h3 className="font-gotham text-[var(--color-PRIMEgray)] text-[35px] text-center mb-[34px] gotham-bold">
                BACKGROUND
              </h3>
              <p className="font-light text-[var(--color-PRIMEblack)] text-md text-justify whitespace-pre-line gotham-book">
                {currentEvent.speaker.background.join("\n\n")}
              </p>
            </div>
          </div>
        </section>

        {/* Chat With Our Team Section */}
        <section className="w-full flex justify-center my-[100px] px-4">
          <div className="max-w-[1400px] w-full bg-[var(--color-PRIMEwhite)] border border-[var(--color-PRIMEgray)] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-PRIMEblack)] mb-4 gotham-bold">
                Chat to our team
              </h2>
              <p className="text-lg text-[var(--color-PRIMEgray)] mb-10 gotham-book">
                Need help with something? Get in touch with our friendly team
                and we'll get in touch within 2 hours.
              </p>
              <form className="space-y-6">
                <div>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-4 text-[var(--color-PRIMEblack)] focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                </div>
                <div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+63"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-4 text-[var(--color-PRIMEblack)] focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                </div>
                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jana@framer.com"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-4 text-[var(--color-PRIMEblack)] focus:ring-blue-500 focus:border-blue-500 text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[var(--color-PRIMEblack)] text-[var(--color-PRIMEwhite)] font-semibold py-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-PRIMEblack)] focus:ring-opacity-50 text-lg"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className="w-full md:w-1/2 hidden md:block">
              <img
                src="Contact.png"
                alt="Person working on a laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};
