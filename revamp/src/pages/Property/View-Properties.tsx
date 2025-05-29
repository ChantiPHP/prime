import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams for dynamic routing
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

import {
  MapPin,
  Share,
  ChevronLeft,
  ChevronRight,
  Heart,
  HouseIcon,
} from "lucide-react";

import { properties, Property } from "./data/propertiesData"; // Import the properties data

export default function ViewProperties() {
  const { id } = useParams<{ id: string }>(); // Get the property ID from the URL
  const property = properties.find((prop) => prop.id === parseInt(id || "", 10)) as Property;

  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

    // Scroll to the top of the page when the component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % property.png.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + property.png.length) % property.png.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Property not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 pt-30 pb-30 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <div className="text-center sm:text-left">
            <h1 className="text-maintitle text-PRIMEblue gotham-bold">{property.title}</h1>
            <p className="flex items-center text-subcontent text-PRIMEgray justify-center sm:justify-start mt-2">
              <MapPin className="w-4 h-4 mr-1" />
              {property.location}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <span className="flex items-center text-xs bg-PRIMEblue text-PRIMEwhite rounded-full px-3 py-1">
              <HouseIcon className="w-3 h-3 mr-1" />
              {property.leaseType}
            </span>
            <div className="flex items-center gap-2">
              <button className="text-PRIMEgray hover:text-PRIMEblack transition-colors" aria-label="Share property">
                <Share size={18} />
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`transition-colors ${
                  isFavorite ? "text-red-500" : "text-PRIMEgray hover:text-PRIMEblack"
                }`}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <span className="text-lg font-semibold text-PRIMEblack">{property.price}</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <section className="flex-1">
            <div className="relative group">
              <img
                src={property.png[currentImage]}
                alt={`Property view ${currentImage + 1}`}
                className="w-full md:h-[500px] object-cover rounded-xl border shadow-lg transition-all"
              />
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm border shadow hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm border shadow hover:bg-white transition-opacity opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {currentImage + 1} / {property.png.length}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white border shadow hover:bg-gray-100 sm:block hidden"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-3 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {property.png.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`flex-shrink-0 rounded-lg border-2 transition-all ${
                      currentImage === idx
                        ? "border-PRIMEblue scale-105"
                        : "border-transparent opacity-80"
                    } hover:border-PRIMEblue hover:opacity-100`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-[120px] h-[80px] sm:w-[200px] sm:h-[100px] object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white border shadow hover:bg-gray-100 sm:block hidden"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-subtitle text-PRIMEblue gotham-bold mb-3">Description</h2>
                <p className="text-description text-PRIMEgray leading-relaxed">
                  This stunning property is located in {property.location} and is perfect for your business needs.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-subtitle text-PRIMEblue gotham-bold mb-3">Location</h3>
                <div className="rounded-lg border overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-64 md:h-80"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      property.location
                    )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    loading="lazy"
                    allowFullScreen
                    title="Property location map"
                  ></iframe>
                </div>
                <p className="text-description text-PRIMEgray mt-2">
                  The property is located in a prestigious neighborhood with easy access to schools,
                  shopping centers, and major transportation routes.
                </p>
              </div>
            </div>
          </section>

          {/* Right Section - Contact Form */}
          <section className="w-full lg:w-[500px] bg-PRIMEwhite border border-PRIMElightgray rounded-xl p-6 self-start shadow-xl">
            <h3 className="text-maintitle text-PRIMEblue mb-4 gotham-bold">Contact Us</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="w-full border border-PRIMElightgray rounded-lg px-4 py-2 text-subcontent focus:outline-none focus:ring-2 focus:ring-PRIMEblue"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-PRIMEblue hover:bg-[#002855] rounded-lg py-2 text-subcontent gotham-bold text-PRIMEwhite"
              >
                Submit
              </Button>
            </form>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}