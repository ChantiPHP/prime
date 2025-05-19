import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";

// Interfaces
interface PropertyCard {
  id: string;
  title: string;
  desc: string;
  location: string;
  image: string;
  category: string;
  filterValue: string;
}

interface IndustryInsightsProps {
  onCardClick?: (category: string) => void;
  highlightedCategory?: string;
  resetFilters?: () => void;
}

// Main Component
export default function IndustryInsights({
  onCardClick,
  highlightedCategory,
  resetFilters,
}: IndustryInsightsProps) {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const cards: PropertyCard[] = [
    {
      id: "office",
      title: "Key Office Building Projects",
      desc: "Explore Prime Philippines' commercial spaces for lease, featuring premium office buildings and expert insights to find the perfect workspace for your business.",
      location: "Quezon City",
      image: "/Property/mockup.png",
      category: "office",
      filterValue: "Office Spaces",
    },
    {
      id: "retail",
      title: "Key Retail Building Projects",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Quezon City",
      image: "/Property/Retail.png",
      category: "retail",
      filterValue: "Retail Spaces",
    },
    {
      id: "commercial",
      title: "Key Commercial Lots",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Quezon City",
      image: "/Property/CommercialLots.png",
      category: "commercial",
      filterValue: "Commercial Lots",
    },
    {
      id: "warehouse",
      title: "Key Industrial Warehouses",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Alabang",
      image: "/Property/IndustrialWarehouse.png",
      category: "warehouse",
      filterValue: "Industrial Warehouse",
    },
    {
      id: "industrial",
      title: "Key Industrial Lots",
      desc: "From commercial spaces to commercial lots, ranging from big to small, there's a PRIME property that can accommodate new and existing businesses.",
      location: "Bulacan",
      image: "/Property/IndustrialLot.png",
      category: "industrial",
      filterValue: "Industrial Lots",
    },
  ];

  const isCategorySelected =
    highlightedCategory && highlightedCategory !== "All Categories";

  const handleCardClick = (filterValue: string) => {
    if (onCardClick) {
      onCardClick(filterValue);
    } else {
      navigate(`/properties?category=${filterValue}`);
    }
  };

  const handleReset = () => {
    resetFilters?.();
  };

  return (
    <section className="flex items-center justify-center px-4 py-20 font-gotham-book bg-white">
      <div className="w-full max-w-[1500px] flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex justify-center items-center mb-8 text-PRIMEblue font-gotham-bold text-sm tracking-wide space-x-2">
            <FaBuilding className="text-xl" />
            <span>INSIGHTS</span>
          </div>

          <h1 className="text-maintitle font-gotham-bold text-PRIMEblue text-center">
            INDUSTRY <span className="text-PRIMEgray">INSIGHTS</span>
          </h1>

          <div className="h-1 w-24 bg-PRIMEblue mt-4 mx-auto rounded-full" />

          <div className="flex justify-center mt-10">
            <h3 className="text-description font-gotham-book text-white bg-PRIMEblue px-4 py-2 text-center">
              Explore properties in Prime Philippines
            </h3>
          </div>

          <p className="text-description font-gotham-book text-PRIMEgray mt-4 max-w-2xl mx-auto text-center leading-relaxed">
            Explore Prime Philippines' commercial spaces for lease, featuring premium office buildings and expert insights to find the perfect workspace for your business.
          </p>

          {/* Reset Button */}
          {isCategorySelected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <Button
                variant="outline"
                className="text-description font-gotham-book text-PRIMEgray border-PRIMEgray hover:bg-PRIMEgray hover:text-white"
                onClick={handleReset}
              >
                Reset All Filters
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {cards.slice(0, 3).map((card) => (
            <InsightCard
              key={card.id}
              card={card}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              highlightedCategory={highlightedCategory}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
          {cards.slice(3).map((card) => (
            <InsightCard
              key={card.id}
              card={card}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              highlightedCategory={highlightedCategory}
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Card Component
const InsightCard = ({
  card,
  hoveredCard,
  setHoveredCard,
  highlightedCategory,
  handleCardClick,
}: {
  card: PropertyCard;
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
  highlightedCategory?: string;
  handleCardClick: (value: string) => void;
}) => {
  const isSelected = highlightedCategory === card.filterValue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      animate={{
        scale: isSelected ? 1.05 : 1,
        borderColor: isSelected ? "#0a1e4a" : "#e5e7eb",
        boxShadow: isSelected ? "0 10px 30px -10px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl overflow-hidden border-3 ${
        isSelected ? "border-PRIMEblue" : "border-transparent"
      } cursor-pointer relative group`}
      onClick={() => handleCardClick(card.filterValue)}
      onHoverStart={() => setHoveredCard(card.id)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      {isSelected && <div className="absolute inset-0 bg-PRIMEblue/5 z-0" />}

      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
          animate={{ scale: hoveredCard === card.id ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h4 className="text-[14pt] font-gotham-bold drop-shadow-md">{card.title}</h4>
          <p className="text-description font-gotham-book text-[#cccccc]">{card.location}</p>
        </div>
      </div>

      <div className="p-5 relative z-10">
        <p className="text-subcontent font-gotham-book text-PRIMEgray mb-4">{card.desc}</p>
        <Button
          variant="default"
          className="text-white w-full bg-PRIMEblue hover:bg-[#0b3358]"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick(card.filterValue);
          }}
        >
          {isSelected ? `Viewing ${card.filterValue}` : `View ${card.filterValue}`}
        </Button>
      </div>
    </motion.div>
  );
};
