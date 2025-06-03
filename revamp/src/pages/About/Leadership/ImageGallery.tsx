import { useState, useEffect } from "react";

type ImageItem = {
  src: string;
  name: string;
  position: string;
  fullDesc: string;
};

const images: ImageItem[] = [
  {
    src: "/Leadership/MervynValenzuela.jpg",
    name: "Mervyn Valenzuela",
    position: "Head of Office Markets",
    fullDesc: `Currently Vice President for Office Leasing - Tenant Representation, Mervyn’s expertise lies in the sales and marketing of commercial properties, with his closed deals amounting to about PHP 1 Billion worth of real estate transactions. Having been in the real estate industry for 8 years, he has handled a wide variety of clients ranging from Government, BPO, IT/Tech Firms, Engineering, Media, e-Commerce, and more across Metro Manila.

    In 2021, he brokered a PHP 150 Million design-build-manage office facility deal for a government agency in Mandaluyong. He also facilitated one of the most noteworthy office leasing deals in Quezon City in 2019: the relocation of a major government agency, after more than 20 years of tenancy in their original site. Thanks to his efforts, the agency acquired a total of 3,000 sqm of office space in a PEZA-accredited building along a major thoroughfare of Quezon City. In 2018, as the Head of PRIME’s Marketing team, Mervyn successfully facilitated PRIME Philippines’ feature in the 3rd season of CNN Philippines’ The Final Pitch.`,

  },
  {
    src: "/Leadership/MhelDellosa.jpg",
    name: "Mhel Dellosa",
    position: "Head of Investments Services",
     fullDesc: `An experienced commercial real estate practitioner, he has closed over Php 810M worth of transactions since joining the firm. Mhel has worked with a wide variety of clients, ranging from Banking, Manufacturing, Oil, and more, as well as developers of all sizes to provide general commercial real estate advisory and investment services.`,

  },
  {
    src: "/Leadership/RuthCoyoca.jpg",
    name: "Ruth Coyoca",
    position: "Head of Brokerage Solutions",
     fullDesc: `As the company's Head of Brokerage Solutions, she has worked with a wide range of developers in the country, both big and boutique, in bringing in the right occupiers and tenants to their buildings. Ruth provides local expert advice to several local and multinational brands to assist them in their regional expansion, from site identification and valuation up to negotiation and contract documentation.

    Ruth has also assisted multiple office locator and retail anchor tenant brands in the BPO, hotel, food and beverage, and petroleum industries in establishing their first-ever provincial office or branch. Together with her team, she has facilitated the leasing out of multiple commercial centers, office buildings, and commercial properties nationwide.`,

  },
  {
    src: "/Leadership/SondiTuazon.jpg",
    name: "Sondi Tuazon",
    position: "Head of Retail Markets",
    fullDesc: `A seasoned expert with over 15 years of experience in real estate, he has led his team to close deals amounting to over 36,000 sq. meters and worth over Php 34M since joining the company. He has also brought in a strong list of retail accounts of various sizes, including those in Food and Beverage, Hardware, Broadcasting, Automotive, Grocery Store, and more, to PRIME's extensive client network.

    His expertise lies in the ability to expertly deal with both big-ticket anchor tenants, including Starbucks, Lido, Anytime Fitness, Tim Hortons, among others, and smaller boutique requirements. Sondi has facilitated a wide variety of deals with established companies for leasing mall and commercial center retail spaces, as well as handling commercial lot lease dealings for free-standing concepts for different types of businesses in various locations. Notably, he led the negotiations with a major local TV broadcast and production company for a 5,000+ sq. meter commercial lot property along a major highway.`,

  },
  {
    src: "/Leadership/JoyRosarioBautista.jpg",
    name: "Joy Rosario-Bautista",
    position: "Head of Industrial Markets",
    fullDesc: `With over 10 years of experience in the real estate industry, Joy has been involved in various transactions across the Philippines, including leasing, sales, and investment advisory. She has worked with a wide range of clients, from local businesses to multinational corporations, providing them with tailored solutions to meet their specific needs.

    Joy's expertise lies in the industrial sector, where she has successfully facilitated numerous transactions involving warehouses, manufacturing facilities, and logistics hubs. Her deep understanding of the market dynamics and her strong negotiation skills have enabled her to achieve favorable outcomes for her clients.`,

  },
  {
    src: "/Leadership/PhilamerDang-At Jr..jpg",
    name: "Philamer Dang-At Jr.",
    position: "Head Of Marketing",
    fullDesc: `With over seven (7) years of experience in commercial real estate, He have supported a wide range of businesses in meeting their property needs. Throughout his career, Phil facilitated the leasing of over 110,000 square meters of retail and industrial spaces, working with more than 60 companies to find the right commercial solutions for their growth and operational needs.

    His focus is on understanding the specific goals and challenges of each client—whether they are landlords seeking tenants or businesses looking for their ideal space. He offer tailored property strategies that align with long-term objectives, helping businesses thrive through informed, data-driven decisions.

    By fostering strong client relationships built on trust and open communication, Phil provide valuable market insights and guidance throughout the leasing process. His goal is to deliver thoughtful, efficient solutions that support his clients' success in an ever-evolving market.`,

  },
];

type ImageCardProps = {
  item: ImageItem;
  onOpenModal: () => void;
  onToggleOverlay: () => void;
  overlayVisible: boolean;
  isTouchDevice: boolean;
};

const ImageCard = ({
  item,
  onOpenModal,
  onToggleOverlay,
  overlayVisible,
  isTouchDevice,
}: ImageCardProps) => {
  return (
    <div
      className="relative w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-xs h-auto"
      onClick={() => {
        if (isTouchDevice) {
          onToggleOverlay();
        }
      }}
      onMouseLeave={() => {
        if (isTouchDevice) return;
        if (overlayVisible) onToggleOverlay();
      }}
    >
      {/* Image with frame */}
      <div
        className={`relative inline-block border-2 border-[#0f3a5f] rounded-sm p-2 bg-PRIMEwhite w-full h-[420px] sm:h-[380px] md:h-[350px] lg:h-[420px] group`}
        onMouseEnter={() => {
          if (!isTouchDevice && !overlayVisible) onToggleOverlay();
        }}
      >
        <img
          src={item.src}
          alt={item.name}
          className="w-full h-full object-center rounded-sm"
          loading="lazy"
        />
        <span className="absolute -top-2 -left-2 w-4 h-4 bg-PRIMEblue rounded-full z-10"></span>
        <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-PRIMEblue rounded-full z-10"></span>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-PRIMEblue/80 flex flex-col justify-center items-center p-4 text-PRIMEwhite text-center z-20 transition-opacity duration-300 ${
            overlayVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-subtitle">{item.name}</h3>
          <p className="text-content italic mb-2 ">{item.position}</p>
          <button
            className="text-content underline hover:text-PRIMEyellow font-bold"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal();
            }}
            type="button"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const [modalOpenIndex, setModalOpenIndex] = useState<number | null>(null);
  const [overlayStates, setOverlayStates] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    );
  }, []);

  const toggleOverlay = (index: number) => {
    setOverlayStates((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  const openModal = (index: number) => {
    setModalOpenIndex(index);
    // Also close any overlay visible on the card
    setOverlayStates((prev) => prev.map(() => false));
  };

  const closeModal = () => {
    setModalOpenIndex(null);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <ImageCard
            key={index}
            item={item}
            overlayVisible={overlayStates[index]}
            isTouchDevice={isTouchDevice}
            onToggleOverlay={() => toggleOverlay(index)}
            onOpenModal={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal rendered outside cards */}
      {modalOpenIndex !== null && (
        <>
          {/* Backdrop */}
          <div
            className="fixed  z-50"
            onClick={closeModal}
            aria-hidden="true"
          ></div>

          {/* Modal content */}
          <div
            className="fixed top-1/2 left-1/2 z-60 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 border border-PRIMEblue rounded-md p-8 bg-PRIMEwhite shadow-lg"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${images[modalOpenIndex].name.replace(/\s/g, "")}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="absolute -top-2 -left-2 w-4 h-4 bg-PRIMEblue rounded-full"></span>
            <span className="absolute -bottom-2 -right-2 w-4 h-4 bg-PRIMEblue rounded-full"></span>

            <button
              className="absolute top-4 right-5 text-gray-600 hover:text-PRIMEblack text-navbar font-bold text-3xl"
              onClick={closeModal}
              aria-label="Close modal"
              type="button"
            >
              &times;
            </button>

            <h2
              id={`modal-title-${images[modalOpenIndex].name.replace(/\s/g, "")}`}
              className="text-subtitle text-PRIMEblue font-extrabold"
            >
              {images[modalOpenIndex].name}
            </h2>
            <h3 className="text-description mb-6">{images[modalOpenIndex].position}</h3>
            <p className="text-subcontent text-justify leading-relaxed whitespace-pre-line">
              {images[modalOpenIndex].fullDesc}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ImageGallery;
