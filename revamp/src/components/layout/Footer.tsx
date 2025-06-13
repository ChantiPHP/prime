// src/components/footer.tsx

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-PRIMEblack text-PRIMElightgray px-6 py-20 font-[Gotham Book]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-3 gap-16 sm:gap-20 lg:gap-32 sm:px-10 xl:px-0">
        {/* Left Section - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-[20px]"
        >

          <address className="not-italic space-y-4 leading-relaxed mt-8">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              3/F Main CreatWork Ben-Lor IT Center, Diliman, Quezon City, Metro
              Manila
            </p>
            <p className="flex items-center gap-3">
              <Smartphone size={18} />
              (+63) 917 555 8222
            </p>
            <p className="flex items-center gap-3">
              <Phone size={18} />
              (+632) 8442 8888
            </p>
            <p className="flex items-center gap-3">
              <Mail size={18} />
              <a
                href="mailto:inquiry@primephilippines.com"
                className="underline hover:text-PRIMEyellow transition-colors"
              >
                inquiry@primephilippines.com
              </a>
            </p>
          </address>
        </motion.div>

        {/* Middle Section - Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-[20px]"
        >
        <h2 className="text-[48px] gotham-bold ">
           <span className="bg-[linear-gradient(to_bottom_right,_theme(colors.PRIMEblue)_0%,_theme(colors.PRIMEblue)_50%,_theme(colors.PRIMEred)_75%,_theme(colors.PRIMEyellow)_100%)] text-transparent bg-clip-text">
    PRIME</span> <span className="text-PRIMEwhite">RADAR </span>
        </h2>
          <p className="leading-relaxed max-w-md">
            Get the latest real estate insights, events and news from our
            newsletter
          </p>

          <form className="flex flex-col sm:flex-row w-full rounded-xl overflow-hidden bg-PRIMElightgray shadow-lg ring-1 ring-[#e2e8f0]">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 text-PRIMEblue text-[20px] font-medium outline-none border-none shadow-none focus-visible:ring-2 focus-visible:ring-PRIMEblue transition-all w-full sm:w-auto"
            />
            <Button
              type="submit"
              className="bg-PRIMEblue text-PRIMElightgray font-bold px-6 py-4 uppercase tracking-wide text-[20px] hover:bg-[#1a2a44]"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 gap-4">
            <div className="flex items-center gap-5 text-[20px]">
              {[
                {
                  icon: "facebook-f",
                  url: "https://facebook.com/primephilippines",
                },
                {
                  icon: "linkedin-in",
                  url: "https://linkedin.com/company/primephilippines",
                },
                {
                  icon: "youtube",
                  url: "https://youtube.com/primephilippines",
                },
                {
                  icon: "instagram",
                  url: "https://instagram.com/primephilippines",
                },
                { icon: "tiktok", url: "https://tiktok.com/@primephilippines" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.icon}
                  className="hover:text-PRIMEyellow transition-colors"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>

            <a
              href="/consultation"
              className="underline hover:text-PRIMEyellow text-[20px]"
            >
              Book a Consultation
            </a>
          </div>
        </motion.div>

        {/* Right Section - Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-[20px]"
        >
          <h3 className="text-PRIMEyellow gotham-bold text-[20px]">
            NAVIGATION
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Expertise", path: "/expertise" },
              { name: "Leadership", path: "/about/leadership" },
              { name: "Find A Property", path: "/PropertiesPage" },
              { name: "Awards", path: "/about/awards" },
              { name: "Careers", path: "/Careers" },
              { name: "Contact", path: "/contact" },
              { name: "Events", path: "/Events" },
              { name: "Pressroom", path: "/Pressroom" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="underline hover:text-PRIMEyellow transition-colors block"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-6 text-center text-[16px] text-white/60"
      >
        © 2013 - 2025 PRIME Philippines. All rights reserved.
      </motion.div>
    </footer>
  );
}
