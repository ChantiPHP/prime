import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredAwards = [
  {
    img: "/ImagePlaceholder.png",
    title: "Title of Award 1",
    date: "December 2019",
  },
  {
    img: "/ImagePlaceholder.png",
    title: "Title of Award 2",
    date: "November 2019",
  },
  {
    img: "/ImagePlaceholder.png",
    title: "Title of Award 3",
    date: "February 2019",
  },
  {
    img: "/ImagePlaceholder.png",
    title: "Title of Award 4",
    date: "Januray 2019",
  },
  {
    img: "/ImagePlaceholder.png",
    title: "Title of Award 5",
    date: "September 2019",
  },
];

const Featured = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const total = featuredAwards.length;

  const getPosition = (index: number) => {
    const pos = (index - centerIndex + total) % total;
    switch (pos) {
      case 0:
        return "z-10 scale-100 opacity-100 pointer-events-auto";
      case 1:
        return "z-5 scale-95 translate-x-[120px] sm:translate-x-[140px] md:translate-x-[160px] opacity-60 cursor-pointer";
      case 2:
        return "z-0 scale-75 translate-x-[240px] sm:translate-x-[280px] md:translate-x-[320px] opacity-40 pointer-events-none";
      case total - 1:
        return "z-5 scale-95 -translate-x-[120px] sm:-translate-x-[140px] md:-translate-x-[160px] opacity-60 cursor-pointer";
      case total - 2:
        return "z-0 scale-75 -translate-x-[240px] sm:-translate-x-[280px] md:-translate-x-[320px] opacity-40 pointer-events-none";
      default:
        return "opacity-0 scale-50 pointer-events-none";
    }
  };

  const handleClick = (index: number) => {
    const nextIndex = (centerIndex + 1) % total;
    const prevIndex = (centerIndex - 1 + total) % total;
    if (index === nextIndex) {
      setCenterIndex(nextIndex);
    } else if (index === prevIndex) {
      setCenterIndex(prevIndex);
    }
  };

  const prev = () => setCenterIndex((prev) => (prev - 1 + total) % total);
  const next = () => setCenterIndex((prev) => (prev + 1) % total);

  return (
    <section className="bg-white mt-24 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        <span className="text-PRIMEyellow bg-PRIMEblue px-4 py-4 rounded-sm">
          <span className="text-maintitle">Featured Awards</span>
        </span>
      </h2>

      <div className="flex justify-center items-center w-full">
        <div className="relative w-full max-w-7xl flex items-center justify-center overflow-x-hidden">
          {/* Left Arrow */}
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-50 md:z-30">
            <Button
              size="icon"
              onClick={prev}
              className="rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray text-PRIMEblue hover:bg-PRIMEblue hover:text-PRIMEwhite active:bg-PRIMEgray active:text-PRIMEwhite transition-all h-10 w-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          {/* Carousel */}
          <div className="relative flex justify-center items-center w-full h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] xl:h-[380px] overflow-visible">
            {featuredAwards.map((item, index) => {
              const positionClass = getPosition(index);
              return (
                <div
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`absolute transition-all duration-500 ease-in-out rounded-xl overflow-hidden shadow-lg bg-black ${positionClass}`}
                  style={{
                    width: "80vw",
                    maxWidth: "500px",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white backdrop-blur-sm bg-black/40 px-3 py-1 rounded">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <span className="text-xs opacity-90">{item.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-50 md:z-30">
            <Button
              size="icon"
              onClick={next}
              className="rounded-full bg-PRIMEwhite shadow-lg border border-PRIMEgray text-PRIMEblue hover:bg-PRIMEblue hover:text-PRIMEwhite active:bg-PRIMEgray active:text-PRIMEwhite transition-all h-10 w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
