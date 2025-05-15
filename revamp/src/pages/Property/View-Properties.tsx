import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import {
  MapPin,
  Share,
  ChevronLeft,
  ChevronRight,
  Heart,
  HouseIcon,
} from "lucide-react";
import { properties, Property } from "@/data/propertyData";

export default function ViewProperties() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(
    (prop) => prop.id === parseInt(id || "", 10)
  ) as Property | undefined;

  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (property) {
        setCurrentImage((prev) => (prev + 1) % property.png.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [property]);

  const handleNext = () => {
    if (property) {
      setCurrentImage((prev) => (prev + 1) % property.png.length);
    }
  };

  const handlePrev = () => {
    if (property) {
      setCurrentImage((prev) => (prev - 1 + property.png.length) % property.png.length);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;
    if (!name || !phone || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/contact", formData);
      if (res.status === 200 || res.status === 201) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

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
              <button className="text-PRIMEgray hover:text-PRIMEblack" aria-label="Share property">
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
            {/* Image Viewer */}
            <div className="relative group">
              <img
                src={property.png[currentImage]}
                alt={`Property view ${currentImage + 1}`}
                className="w-full md:h-[500px] object-cover rounded-xl border shadow-lg"
              />
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full backdrop-blur-sm border shadow hover:bg-white opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full backdrop-blur-sm border shadow hover:bg-white opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {currentImage + 1} / {property.png.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 mt-4">
              <button onClick={handlePrev} className="p-2 rounded-full bg-white border shadow hover:bg-gray-100 sm:block hidden">
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
              <button onClick={handleNext} className="p-2 rounded-full bg-white border shadow hover:bg-gray-100 sm:block hidden">
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Description & Map */}
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-subtitle text-PRIMEblue gotham-bold mb-3">Description</h2>
                <p className="text-description text-PRIMEgray leading-relaxed">
                  This stunning property is located in {property.location} and is perfect for your business needs.
                </p>
              </div>
              <div>
                <h3 className="text-subtitle text-PRIMEblue gotham-bold mb-3">Location</h3>
                <div className="rounded-lg border overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-64 md:h-80"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
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

          {/* Contact Form */}
          <section className="w-full lg:w-[500px] bg-PRIMEwhite border border-PRIMElightgray rounded-xl p-6 self-start shadow-xl">
            <h3 className="text-maintitle text-PRIMEblue mb-4 gotham-bold">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">Full Name</label>
                <Input id="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">Phone Number</label>
                <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Your phone number" />
              </div>

              <div>
                <label htmlFor="email" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">Email Address</label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
              </div>

              <div>
                <label htmlFor="message" className="block text-subcontent text-PRIMEgray mb-1 gotham-bold">Message</label>
                <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={4} />
              </div>

              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
