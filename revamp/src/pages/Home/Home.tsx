import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import Hero2 from "./components/Landingpage/Hero2";
import IndustryInsights from "./components/Landingpage/IndustryInsights";
import OurExpertise from "./components/Landingpage/OurExpertise";
import EventBanner from "./components/Landingpage/EventBanner";
import PropertiesSection from "./components/Landingpage/PropertiesSection";
import TrustedPartners from "./components/Landingpage/TrustedPartners";
import PartialList from "./components/Landingpage/PartialList";
import BottomBanner from "./components/Landingpage/BottomBanner";
import PropertyLocations from "../Property/components/PropertyLocations";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero2/>
      <OurExpertise />
      <IndustryInsights />
      <EventBanner />
      <PropertiesSection />
      <TrustedPartners />
      <PartialList />
      <PropertyLocations />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default Home;