import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavLink, DropdownLink } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";


const menuItems = [
  { label: "Expertise", to: "/expertise" },
  { label: "Find a Property", to: "/properties" },
  { 
    label: "About Us", 
    subItems: [
      { label: "PRIME Leadership", to: "/about/leadership" },
      { label: "Awards and Recognition", to: "/about/awards" },
      { label: "Services", to: "/services" },
      { label: "Events", to: "/events" },
      { label: "Pressroom", to: "/pressroom" }
    ]
  },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" }
];

const Navbar = () => {
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navClasses = isHomePage
    ? scrolled
      ? "bg-PRIMEwhite text-PRIMEblack shadow-md"
      : "bg-transparent text-white"
    : "bg-PRIMEwhite text-PRIMEblack shadow-md";

  const textColorClass = isHomePage && !scrolled ? "text-white" : "text-PRIMEgray";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-bold ${navClasses}`}>
      <div className="w-full flex justify-between items-center relative">
<div className="relative">
  {/* Real shadow matching the clip path */}
  {(scrolled || !isHomePage) && (
    <div
      className="absolute left-0 top-0 h-full w-[110%] z-[-3] pointer-events-none"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.25)', // shadow color
        clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
        transform: 'translateX(15px)', // offset to right
        filter: 'blur(50px)', // soft shadow
      }}
    />
  )}

  {/* Angled white background */}
  <div
    className="absolute left-0 top-0 h-full w-[110%] z-[-2] transition-all duration-300"
    style={{
      backgroundColor: 'white',
      clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
    }}
  />

  {/* Logo */}
  <Link to="/" onClick={scrollToTop} className="relative p-2 pl-4 pr-4 block">
    <img
      src="/Logo/prime-logo.webp"
      alt="PRIME Philippines Logo"
      className="h-10 md:h-14 object-contain"
    />
  </Link>
</div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex-1 flex justify-end items-center px-6" ref={dropdownRef}>
            <div className="flex space-x-4">
              {menuItems.map((item, index) => (
                item.subItems ? (
                  <DropdownLink
                    key={index}
                    label={item.label}
                    textColorClass={textColorClass}
                    isActive={activeDropdown === `menu-${index}`}
                    toggleDropdown={() => toggleDropdown(`menu-${index}`)}
                    subItems={item.subItems}
                    scrollToTop={scrollToTop}
                  />
                ) : (
                  <NavLink
                    key={index}
                    to={item.to}
                    label={item.label}
                    textColorClass={textColorClass}
                    scrollToTop={scrollToTop}
                    isContact={item.label === "Contact"}
                  />
                )
              ))}
            </div>
          </div>
        )}

        {/* Mobile Toggle Button */}
        {isMobile && (
          <button
            className="z-50 p-4 mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className={`w-6 h-6 ${textColorClass}`} />
            ) : (
              <FaBars className={`w-6 h-6 ${textColorClass}`} />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <MobileMenu
            menuItems={menuItems}
            activeDropdown={activeDropdown}
            toggleDropdown={toggleDropdown}
            scrollToTop={scrollToTop}
            textColorClass={textColorClass}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;