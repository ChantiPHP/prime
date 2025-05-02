// components/Navbar/MobileMenu.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

interface MobileMenuProps {
  scrollToTop: () => void;
  menuRef: React.RefObject<HTMLDivElement | null>; // ✅ fixed type
  setMenuOpen: (open: boolean) => void;
}


const MobileMenu = ({ scrollToTop, menuRef, setMenuOpen }: MobileMenuProps) => {
  const linkClass = `
    font-gotham-bold uppercase text-[12pt] md:text-[14pt]
    hover:text-[#0B3B71] transition-colors
  `;

  const mobileMenuVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: { type: "tween", ease: "easeOut", duration: 0.25 },
    },
    exit: {
      x: "-100%",
      transition: { type: "tween", ease: "easeIn", duration: 0.2 },
    }
  };

  const menuItems = [
    { label: "Expertise", to: "/expertise" },
    { label: "Services", to: "/services" },
    { label: "Find a Property", to: "/properties" },
    { label: "PRIME Leadership", to: "/about/leadership" },
    { label: "Awards and Recognition", to: "/about/awards" },
    { label: "Careers", to: "/careers" },
    { label: "Events", to: "/events" },
    { label: "Pressroom", to: "/pressroom" },
    { label: "Contact", to: "/contact" }
  ];

  return (
    <motion.div
      ref={menuRef}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={mobileMenuVariants}
      className="fixed top-0 left-0 h-full w-72 md:w-80 bg-white text-black z-40 shadow-xl flex flex-col"
    >
      <div className="flex items-center justify-between p-4 border-b">
        <Link to="/" onClick={scrollToTop}>
          <img src="/prime-logo.png" alt="PRIME Logo" className="h-10 md:h-12" />
        </Link>
        <motion.button
          onClick={() => setMenuOpen(false)}
          whileHover={{ rotate: 90 }}
          className="text-gray-500 hover:text-black"
        >
          <FaTimes className="text-xl" />
        </motion.button>
      </div>

      <div className="flex flex-col p-4 gap-4 overflow-y-auto">
        {menuItems.map(({ label, to }, i) => (
          <Link
            key={i}
            to={to}
            onClick={scrollToTop}
            className={`${linkClass}`}
          >
            {label}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
