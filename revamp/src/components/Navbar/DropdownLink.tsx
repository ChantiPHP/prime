import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface DropdownLinkProps {
  label: string;
  textColorClass: string;
  isActive: boolean;
  toggleDropdown: () => void;
  subItems: { label: string; to: string }[];
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
  return (
    <div className="relative">
      <button
        className={`flex items-center gap-1 transition-colors duration-200 hover:text-PRIMEred ${textColorClass}`}
        onClick={toggleDropdown}
      >
        {label}
        <FaChevronDown className="w-3 h-3 mt-[1px]" />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-40 min-w-[250px] px-4 py-2"
          >
            {subItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                onClick={scrollToTop}
                className="block py-2 text-sm text-PRIMEgray hover:text-PRIMEred transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
