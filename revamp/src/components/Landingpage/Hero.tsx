import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HeroSection: React.FC = () => {
  const [stats, setStats] = useState({
    sales: 0,
    clients: 0,
    projects: 0,
    studies: 0,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animate) return;

    const easeOutQuad = (t: number) => t * (2 - t);
    const animateCount = (
      key: keyof typeof stats,
      target: number,
      delay: number
    ) => {
      setTimeout(() => {
        const start = performance.now();
        const duration = 1500;
        const step = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const value = Math.floor(easeOutQuad(progress) * target);
          setStats((prev) => ({ ...prev, [key]: value }));
          if (progress < 1) requestAnimationFrame(step);
          else setStats((prev) => ({ ...prev, [key]: target }));
        };
        requestAnimationFrame(step);
      }, delay);
    };

    animateCount("sales", 500, 0);
    animateCount("clients", 7000, 200);
    animateCount("projects", 3000, 400);
    animateCount("studies", 150, 600);
  }, [animate]);

  const tagline = [
    { text: 'REAL ESTATE.', delay: 0 },
    { text: 'WE ADVICE.', delay: 500 },
    { text: 'YOU ADVANCE.', delay: 1000 }
  ];

  const statData = [
    {
      label: 'worth of deals transacted',
      prefix: 'USD',
      value: stats.sales,
      suffix: 'M+',
    },
    {
      label: 'clients served',
      value: stats.clients,
      suffix: '+',
    },
    {
      label: 'real estate projects',
      value: stats.projects,
      suffix: '+',
    },
    {
      label: 'research studies done',
      value: stats.studies,
      suffix: '+',
    },
  ];

  return (
    <div className="w-full m-0 p-0 font-gotham">
      <header className="relative">
        <div className="relative">
          <img
            src="/HomeBanner.jpg"
            alt="Cityscape night skyline with buildings and lights"
            className="w-full h-[500px] sm:h-[600px] md:h-[700px] object-cover"
          />

          <div
            className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center text-PRIMEwhite w-full"
            style={{ top: '60%', transform: 'translateY(-50%)' }}
          >
            <h1 className="text-title font-extrabold flex flex-wrap justify-center gap-6 text-center">
{tagline.map(({ text, delay }, i) => {
  const words = text.split(" ");
  return (
    <span
      key={i}
      className={cn(
        "inline-block transition-all duration-500",
        animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text === 'REAL ESTATE.' ? (
        <span className="text-white font-extrabold">{text}</span>
      ) : (
        <>
          <span className="text-white font-normal">{words[0]} </span>
          <span className="text-PRIMEyellow font-extrabold">{words[1]}</span>
        </>
      )}
    </span>
  );
})}

            </h1>

            <hr className="border-PRIMEyellow border-2 w-full max-w-5xl sm:max-w-6xl mt-4 mb-8 sm:mb-12 md:mb-16" />

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-x-6 gap-y-6 sm:gap-x-12 w-full max-w-4xl sm:max-w-5xl">
              {statData.map((stat, index) => (
                <div key={index} className="text-center px-2 sm:px-0">
                  <p className="text-xsubtitle font-extrabold">
                    {stat.prefix ? `${stat.prefix} ` : ""}
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </p>
                  <p className="text-subcontent mt-1">{stat.label}</p>

                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-subtitle mx-auto">
          An <span className="text-PRIMEblue"> award-winning</span> & recognized leader in the Philippine commercial and industrial real estate service industry.
        </h2>
        <p className="mt-4 sm:mt-6 text-content mx-auto font-gotham-book">
          <span className="text-PRIMEblue">Entrust your real estate needs</span> to a company well-equipped to deal with today's modern real estate business, with offices in Manila, Davao, and Cebu.
        </p>
      </section>
    </div>
  );
};

export default HeroSection;
