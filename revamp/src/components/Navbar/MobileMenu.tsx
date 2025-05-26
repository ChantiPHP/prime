import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  menuItems: Array<{
    label: string;
    to?: string;
    subItems?: Array<{ label: string; to: string }>;
  }>;
  activeDropdown: string | null;
  toggleDropdown: (menu: string) => void;
  scrollToTop: () => void;
  textColorClass: string; // Still passed for compatibility, but ignored in mobile for consistent black text
}

export const MobileMenu = ({
  menuItems,
  activeDropdown,
  toggleDropdown,
  scrollToTop
}: MobileMenuProps) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.3 }}
    className="lg:hidden bg-PRIMEwhite shadow-lg w-full absolute left-0 z-50"
  >
    <div className="px-4 py-2 space-y-1">
      {menuItems.map((item, index) => (
        <div key={index} className="border-b border-gray-100 last:border-0">
          {!item.subItems ? (
            <Link
              to={item.to!}
              onClick={scrollToTop}
              className="block py-4 px-4 font-[Gotham Bold] uppercase text-PRIMEblack hover:text-PRIMEblue transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <div className="py-2">
              <button
                onClick={() => toggleDropdown(`mobile-menu-${index}`)}
                className="w-full flex justify-between items-center py-2 px-4 font-[Gotham Bold] uppercase text-black hover:text-PRIMEblue transition-colors"
              >
                {item.label}
                {activeDropdown === `mobile-menu-${index}` ? (
                  <FaChevronUp className="text-xs" />
                ) : (
                  <FaChevronDown className="text-xs" />
                )}
              </button>

              <AnimatePresence>
                {activeDropdown === `mobile-menu-${index}` && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-6 overflow-hidden space-y-2 py-2"
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.to}
                        onClick={scrollToTop}
                        className="block py-2 text-sm font-[Gotham Book] text-black hover:text-PRIMEblue transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      ))}
    </div>
  </motion.div>
);
