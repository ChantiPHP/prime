import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "@/pages/Home/Home";
import Expertise from "@/pages/Expertise/Expertise";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Career/Careers";
import CareerDetails from "@/pages/Career/CareerDetails"; 
import Awards from "@/pages/About/Awards";
import Leadership from "@/pages/About/Leadership";
import Leadership2 from "@/pages/About/Leadership/Leadership2";
import PropertiesPage from "@/pages/Property/PropertiesPage";
import PropertiesPage2 from "@/pages/Property/PropertiesPage2";
import ViewProperties from "@/pages/Property/View-Properties";
import Events  from "@/pages/Event/Events";
import Pressroom from "@/pages/Pressroom";

import React from "react";

// Page animation wrapper with Fade Only — Minimalistic
const PageTransition: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/expertise" element={<PageTransition><Expertise /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/careers/:title" element={<PageTransition><CareerDetails /></PageTransition>} />
        <Route path="/about/awards" element={<PageTransition><Awards /></PageTransition>} />
        <Route path="/about/leadership" element={<PageTransition><Leadership /></PageTransition>} />
        <Route path="/about/leadership2" element={<PageTransition><Leadership2 /></PageTransition>} />
        <Route path="/propertiesPage" element={<PageTransition><PropertiesPage /></PageTransition>} />
        <Route path="/view-properties/:id" element={<PageTransition><ViewProperties /></PageTransition>} />
        <Route path="/PropertiesPage2" element={<PageTransition><PropertiesPage2 /></PageTransition>} />
        <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
        <Route path="/pressroom" element={<PageTransition><Pressroom /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
