import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BannerProps {
  headline?: string;
  subtext?: string;
  primaryAction?: {
    label: string;
  };
  secondaryAction?: {
    label: string;
    url: string;
  };
}

export default function Banner({
  headline = "Empowering Your Property Growth with PRIME Philippines",
  subtext = "Trusted by industry leaders for investment, development, and expansion.",
  primaryAction = { label: "Your Next Property Move Starts Here" },
  secondaryAction = {
    label: "Explore Our Company Profile",
    url: "https://www.primephilippines.com/_files/ugd/5cca29_1a79074fb0e142f8bc06239a51b6ec3f.pdf",
  },
}: BannerProps) {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    navigate("/contact");
  };

  const handleSecondaryClick = () => {
    window.open(secondaryAction.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative text-PRIMEwhite w-full h-[240px] sm:h-[280px] md:h-[300px] lg:h-[340px] xl:h-[360px] overflow-hidden shadow-lg">
      <img
        src="BottomBanner.png"
        alt="Cityscape with buildings and skyline under clear sky"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-PRIMEblack/50 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 text-center">
        <h1 className="font-semibold text-PRIMEwhite leading-tight text-subtitle max-w-[90%] sm:max-w-[80%]">
          {headline}
        </h1>
        <p className="text-subcontent text-PRIMEwhite mt-2 max-w-[90%] sm:max-w-[70%]">
          {subtext}
        </p>

        <div className="mt-5 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2 sm:px-0">
          <Button
            onClick={handlePrimaryClick}
            className="bg-PRIMEblue text-navbar rounded px-4 py-2 transition-shadow duration-300 hover:shadow-lg hover:bg-[#082d57] hover:border border-PRIMEwhite w-full sm:w-auto"
          >
            {primaryAction.label}
          </Button>
          <Button
            onClick={handleSecondaryClick}
            className="bg-PRIMEblue text-navbar rounded px-4 py-2 transition-shadow duration-300 hover:shadow-lg hover:bg-[#082d57] hover:border border-PRIMEwhite w-full sm:w-auto"
          >
            {secondaryAction.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
