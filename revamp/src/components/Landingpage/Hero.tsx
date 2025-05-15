import React, { useEffect, useState } from "react";
import heroImage from "@/assets/cebu.jpg";

const Hero: React.FC = () => {
  const [sales, setSales] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [studies, setStudies] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false); // Reset first

    const timeout = setTimeout(() => {
      setAnimate(true);

      const animateCount = (
        setFn: React.Dispatch<React.SetStateAction<number>>,
        target: number,
        duration: number = 1500
      ) => {
        const startTime = performance.now();
        const easeOutQuad = (t: number) => t * (2 - t);

        const updateCounter = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easedProgress = easeOutQuad(progress);
          const currentValue = Math.floor(easedProgress * target);

          setFn(currentValue);

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            setFn(target);
          }
        };

        requestAnimationFrame(updateCounter);
      };

      animateCount(setSales, 500);
      setTimeout(() => animateCount(setClients, 7000), 100);
      setTimeout(() => animateCount(setProjects, 3000), 200);
      setTimeout(() => animateCount(setStudies, 150), 300);
    }, 100); // Small delay before triggering to ensure proper reset

    return () => clearTimeout(timeout); // Cleanup
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

                {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue/20 transition duration-300"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center md:items-start md:justify-center md:text-left">
        <div className="w-full max-w-[800px]">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[50pt] font-bold overflow-hidden leading-tight">
            <span
              className={`inline-block transition-all duration-500 ease-out ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
   <span className="bg-[linear-gradient(to_right,_theme(colors.PRIMEblue)_0%,_theme(colors.PRIMEblue)_50%,_theme(colors.PRIMEred)_75%,_theme(colors.PRIMEyellow)_100%)] text-transparent bg-clip-text">
    PRIME</span>{' '} Philippines </span>
          </h1>

          {/* Tagline */}
          <div className="text-center md:text-left text-xl sm:text-2xl md:text-3xl lg:text-[22pt] mb-4 mt-4  overflow-hidden leading-snug w-full">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: animate ? "300ms" : "0ms" }}
              >
                <span className="text-[#0E406F] font-bold">Real</span> Estate.
              </span>
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: animate ? "700ms" : "0ms" }}
              >
                <span className="text-[#0E406F] font-bold">We</span> Advise.
              </span>
              <span
                className={`inline-block transition-all duration-500 ease-out ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: animate ? "1000ms" : "0ms" }}
              >
                <span className="text-[#0E406F] font-bold">You</span> Advance.
              </span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 text-center md:text-left w-full max-w-lg mx-auto md:mx-0">
            <div className="flex flex-col p-2 sm:p-3 items-center bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-[22pt] font-bold text-white">
                {sales.toLocaleString()}M+
              </span>
              <span className="text-xs sm:text-sm text-[#0E406F] uppercase tracking-wider">
                Sales
              </span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 items-center bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-[22pt] font-bold text-white">
                {clients.toLocaleString()}+
              </span>
              <span className="text-xs sm:text-sm text-[#0E406F] uppercase tracking-wider">
                Clients
              </span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 items-center bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-[22pt] font-bold text-white">
                {projects.toLocaleString()}+
              </span>
              <span className="text-xs sm:text-sm text-[#0E406F] uppercase tracking-wider">
                Projects
              </span>
            </div>
            <div className="flex flex-col p-2 sm:p-3 items-center bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-[22pt] font-bold text-white">
                {studies.toLocaleString()}+
              </span>
              <span className="text-xs sm:text-sm text-[#0E406F] uppercase tracking-wider">
                Studies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
