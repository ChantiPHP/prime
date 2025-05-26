import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrimeRadarBanner() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-4 mb-[50px]">
      <div className="max-w-6xl mx-auto rounded-sm relative overflow-hidden">
        {/* Background image */}
        <img
          src="https://storage.googleapis.com/a1aa/image/ac001ae9-6964-43be-eee6-4d50dd10e0f8.jpg"
          alt="Aerial view of city street with crosswalk and cars"
          className="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[200px] object-cover brightness-75 rounded-md"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-start md:items-center px-4 md:px-6 py-4 gap-4">
          {/* Left section */}
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-PRIMEyellow font-bold text-description tracking-wide leading-none font-gotham">
                PRIME
              </h2>
              <Globe className="text-PRIMEyellow w-4 h-4 md:w-5 md:h-5" />
              <h2 className="text-PRIMEyellow font-bold text-description tracking-wide leading-none font-gotham">
                RADAR
              </h2>
            </div>
            <p className="text-white text-xs sm:text-sm md:text-subcontent font-gotham-book leading-snug">
              Get the latest market insights, opinions, and sentiments from
              distinguished experts and practitioners in the industry in our
              PRIME Radar webinar series.
            </p>
          </div>

          {/* Right section (Button) */}
          <div className="w-full md:w-auto">
            <Button
              onClick={() => navigate("/events")}
              variant="default"
              className="w-full md:w-auto bg-PRIMEyellow text-PRIMEblue text-sm md:text-description font-semibold px-4 py-3 rounded-sm cursor-pointer hover:bg-PRIMEblue hover:text-PRIMEwhite transition"
            >
              VIEW SCHEDULES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
