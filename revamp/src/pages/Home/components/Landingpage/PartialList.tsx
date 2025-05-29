const logos = [
  { src: "/PartialList/petron.png", title: "Petron", alt: "Petron logo" },
  { src: "/PartialList/starbucks.png", title: "Starbucks", alt: "Starbucks logo" },
  { src: "/PartialList/subway.png", title: "Subway", alt: "Subway logo" },
  { src: "/PartialList/lalamove.png", title: "Lalamove", alt: "Lalamove logo" },
  { src: "/PartialList/kfc.png", title: "KFC", alt: "KFC logo" },
  { src: "/PartialList/maybank.png", title: "Maybank", alt: "Maybank logo" },
  { src: "/PartialList/timhortons.png", title: "Tim Hortons", alt: "Tim Hortons logo" },
  { src: "/PartialList/phoenix.png", title: "Phoenix", alt: "Phoenix logo" },
  { src: "/PartialList/lawson.png", title: "Lawson", alt: "Lawson logo" },
  { src: "/PartialList/bpi.png", title: "BPI", alt: "BPI logo" },
  { src: "/PartialList/7eleven.png", title: "7-Eleven", alt: "7-Eleven logo" },
  { src: "/PartialList/victory.png", title: "Victory", alt: "Victory logo" },
  { src: "/PartialList/yellowcab.png", title: "Yellow Cab Pizza Co.", alt: "Yellow Cab Pizza Co. logo" },
  { src: "/PartialList/anytimefitness.png", title: "Anytime Fitness", alt: "Anytime Fitness logo" },
  { src: "/PartialList/miniso.png", title: "Miniso", alt: "Miniso logo" },
  { src: "/PartialList/watsons.png", title: "Watsons", alt: "Watsons logo" },
  { src: "/PartialList/acehardware.png", title: "Ace Hardware", alt: "Ace Hardware logo" },
  { src: "/PartialList/alfamart.png", title: "Alfamart", alt: "Alfamart logo" },
  { src: "/PartialList/lazada.png", title: "Lazada", alt: "Lazada logo" },
  { src: "/PartialList/arrowgo.png", title: "ArrowGo Logistics", alt: "ArrowGo Logistics logo" },
  { src: "/PartialList/cjlogistics.png", title: "CJ Logistics", alt: "CJ Logistics logo" },
  { src: "/PartialList/angkas.png", title: "Angkas", alt: "Angkas logo" },
  { src: "/PartialList/flashexpress.png", title: "Flash Express", alt: "Flash Express logo" },
  { src: "/PartialList/j&texpress.png", title: "J&T Express", alt: "J&T Express logo" },
  { src: "/PartialList/ayalaland.png", title: "Ayala Land Logistics", alt: "Ayala Land Logistics logo" },
  { src: "/PartialList/fastlogistics.png", title: "Fast Logistics", alt: "Fast Logistics logo" },
  { src: "/PartialList/maersk.png", title: "Maersk", alt: "Maersk logo" },
  { src: "/PartialList/sanmiguelbrewery.png", title: "San Miguel Brewery Inc.", alt: "San Miguel Brewery logo" },
  { src: "/PartialList/airspeed.png", title: "Airspeed", alt: "Airspeed logo" },
  { src: "/PartialList/shopee.png", title: "Shopee", alt: "Shopee logo" },
  { src: "/PartialList/bollore.png", title: "Bolloré Logistics", alt: "Bolloré Logistics logo" },
  { src: "/PartialList/acommerce.png", title: "aCommerce", alt: "aCommerce logo" },
  { src: "/PartialList/entrego.png", title: "Entrego", alt: "Entrego logo" },
  { src: "/PartialList/greatdealsecommerce.png", title: "Great Deals E-commerce Corp.", alt: "Great Deals E-commerce logo" },
  { src: "/PartialList/inteluck.png", title: "Inteluck", alt: "Inteluck logo" },
];

const PartialList = () => {
  return (
 <section className="bg-white py-12 mb-[50px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
       
          <h2 className="text-center mb-6">
            <span className="inline-block bg-PRIMEblue px-4 py-2 rounded-sm">
              <span className="text-white text-maintitle">OUR</span>
              <span className="ml-2 text-[#FBBF24] text-maintitle">PARTIAL LIST</span>
            </span>
          </h2>
        <p className="text-PRIMEblack text-center sm:mt-6 text-description mb-8 leading-relaxed px-4 sm:px-6">
          Here are some of the companies we've worked with:</p>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center w-full">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-18 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PartialList;
