import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// NavLink Component
interface NavLinkProps {
  to: string;
  label: string;
  textColorClass: string;
  scrollToTop: () => void;
  isContact?: boolean;
}

export const NavLink = ({
  to,
  label,
  textColorClass,
  scrollToTop,
}: NavLinkProps) => {
  const underlineColor = textColorClass.includes("text-white")
    ? "bg-white"
    : "bg-PRIMEblue";

  return (
    <Link
      to={to}
      onClick={scrollToTop}
      className={`group relative font-[Gotham Bold] uppercase text-navbar px-2 py-2 transition-colors ${textColorClass}`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-[2px] w-0 ${underlineColor} transition-all duration-300 group-hover:w-full group-focus:w-full`}
      />
    </Link>
  );
};

// DropdownLink Component
interface DropdownLinkProps {
  label: string;
  textColorClass: string;
  isActive: boolean;
  toggleDropdown: () => void;
  subItems: Array<{ label: string; to: string }>;
  scrollToTop: () => void;
}

export const DropdownLink = ({
  label,
  textColorClass,
  isActive,
  toggleDropdown,
  subItems,
  scrollToTop,
}: DropdownLinkProps) => {
  const underlineColor = textColorClass.includes("text-white")
    ? "bg-white"
    : "bg-PRIMEblue";

  return (
    <div className="relative group">
      <button
        onClick={toggleDropdown}
        className={`group relative font-[Gotham Bold] uppercase text-navbar px-2 py-2 flex items-center ${textColorClass}`}
      >
        {label}
        {isActive ? (
          <FaChevronUp className="ml-1 text-xs" />
        ) : (
          <FaChevronDown className="ml-1 text-xs" />
        )}
        <span
          className={`absolute bottom-0 left-0 h-[2px] w-0 ${underlineColor} transition-all duration-300 group-hover:w-full group-focus:w-full`}
        />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-1/2 transform -translate-x-1/2 mt-0 min-w-[250px] bg-white shadow-xl rounded-b-lg py-2 z-50 border border-gray-100"
          >
            {subItems.map((subItem, index) => (
              <Link
                key={index}
                to={subItem.to}
                onClick={scrollToTop}
                className="block px-6 py-2 text-sm font-[Gotham Book] text-PRIMEgray hover:bg-blue-50 transition-colors"
              >
                {subItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
