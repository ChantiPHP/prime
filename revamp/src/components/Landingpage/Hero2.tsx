import React, { useEffect, useState } from "react";

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

    animateCount("sales", 700, 0);
    animateCount("clients", 7000, 200);
    animateCount("projects", 3000, 400);
    animateCount("studies", 100, 400);
  }, [animate]);


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
<div className="w-full m-0 p-0">
<header className="relative w-full">
  <div className="relative w-full aspect-[16/9] sm:aspect-[16/8] md:aspect-[16/7] lg:aspect-[16/6] overflow-hidden">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/primebanner.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
  {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue/30 transition duration-300"></div>
</header>

  {/* ✅ Stats Section Now Outside and Below the Banner */}
  <section className=" text-PRIMEblack py-4 px-4 sm:px-6 text-center">
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-y-6 gap-x-10  w-full max-w-4xl sm:max-w-5xl mx-auto">
      {statData.map((stat, index) => (
        <div key={index} className="text-center px-2 sm:px-0">
          <h1 className="text-xsubtitle text-PRIMEblue ">
            {stat.prefix ? `${stat.prefix} ` : ""}
            {stat.value.toLocaleString()}
            {stat.suffix}
          </h1>
          <p className="text-subcontent ">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* ✅ Line After Stats */}
    <hr className="border-PRIMEblue border-2 w-full max-w-4xl sm:max-w-5xl mt-6 mx-auto" />
  </section>

  <section className="  px-4 sm:px-8 max-w-5xl mx-auto text-center">
    <h2 className="text-subtitle mx-auto">
      An <span className="text-PRIMEblue">award-winning</span> & recognized leader in the Philippine commercial and industrial real estate service industry.
    </h2>
    <p className="mt-4 sm:mt-6 text-content mx-auto">
      <span className="text-PRIMEblue">Entrust your real estate needs</span> to a company well-equipped to deal with today's modern real estate business, with offices in Manila, Davao, and Cebu.
    </p>
  </section>
</div>

  );
};

export default HeroSection;
