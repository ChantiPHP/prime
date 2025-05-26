import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Landingpage/Hero";
import Footer from "@/components/Footer";
import IndustryInsights from "@/components/Landingpage/IndustryInsights";
import OurExpertise from "@/components/Landingpage/OurExpertise";
import EventBanner from "@/components/Landingpage/EventBanner";
import PropertiesSection from "@/components/Landingpage/PropertiesSection";
import TrustedPartners from "@/components/Landingpage/TrustedPartners";
import PartialList from "@/components/Landingpage/PartialList";
import BusinessDistrict from "@/components/Landingpage/BusinessDistrict";
import BottomBanner from "@/components/Landingpage/BottomBanner";


function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero/>
      <OurExpertise />
      <IndustryInsights />
      <EventBanner />
      <PropertiesSection />
      <TrustedPartners />
      <PartialList />
      <BusinessDistrict />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default Home;