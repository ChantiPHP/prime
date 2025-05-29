import { Card, CardContent } from "@/components/ui/card";
import { FaBuilding, FaChevronRight } from "react-icons/fa";

const PRIMEwhite = "#F9FAFB"; // Your custom PRIMEwhite color

const insights = [
  {
    title: "Bouncing Forward to Retail Landlords: A Business Resumption Guide",
    date: "June 23, 2020 - PRIME Philippines Retail Markets Team",
    highlight: true,
  },
  {
    title: `Going Beyond "Buy and Sell": Tackling the Post-Quarantine Commercial Property Market`,
    date: "June 26, 2020, - PRIME Philippines Research and Advisory",
  },
  {
    title: "Emerging Hub and Spoke Model in Philippine Office Sector",
    date: "June 26, 2020, - PRIME Philippines Research and Advisory",
  },
  {
    title: `Going Beyond "Buy and Sell": Tackling the Post-Quarantine Commercial Property Market`,
    date: "June 26, 2020, - PRIME Philippines Research and Advisory",
  },
  {
    title: "Emerging Hub and Spoke Model in Philippine Office Sector",
    date: "June 26, 2020, - PRIME Philippines Research and Advisory",
  },
  {
    title: `Going Beyond "Buy and Sell": Tackling the Post-Quarantine Commercial Property Market`,
    date: "June 26, 2020, - PRIME Philippines Research and Advisory",
  },
  {
    title: "Emerging Hub and Spoke Model in Philippine Office Sector",
    date: "June 26, 2020, - PRIME Philippines Research and Advisory",
  },
];

export default function IndustryInsights() {
  return (
    <div className="bg-gray-100 text-PRIMEgray min-h-screen py-10">
      <div className="mx-auto px-6 max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-6">
          <div className="inline-flex justify-center items-center space-x-2 text-[#1B3A6F] font-semibold text-subcontent">
            <FaBuilding className="text-subcontent" />
            <span>INSIGHTS</span>
          </div>
        </div>

        <h2 className="text-center mb-6">
        <span className="inline-block bg-PRIMEblue px-4 py-2 rounded-sm">
          <span className="text-white text-maintitle">INDUSTRY</span>
          <span className="ml-2 text-[#FBBF24] text-maintitle">INSIGHTS</span>
        </span>
      </h2>

        {/* Highlighted main insight */}
        {insights
          .filter((item) => item.highlight)
          .map((item, idx) => (
            <div
              key={idx}
              className="bg-PRIMEblue rounded-md p-6 mb-4"
              style={{ maxWidth: 1200 }}
            >
              <h3 className="text-PRIMEyellow font-semibold text-description leading-tight mb-1 max-w-[700px]">
                {item.title}
              </h3>
              <p className="text-PRIMEyellow text-subcontent max-w-[700px]">
                {item.date}
              </p>

              {/* Button container with flex to align right and spacing */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="text-yellow-400 text-description font-semibold cursor-pointer select-none underline-offset-2 hover:underline inline-flex items-center space-x-1"
                  aria-label={`Read more about: ${item.title}`}
                  onClick={() => alert("Read more clicked!")}
                >
                  <span>READ MORE</span>
                  <FaChevronRight className="text-description" />
                </button>
              </div>
            </div>
          ))}

        {/* Other insights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {insights
            .filter((item) => !item.highlight)
            .map((item, idx) => (
              <Card
                key={idx}
                className="shadow-sm rounded-md p-5"
                style={{ backgroundColor: PRIMEwhite }}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <h4 className="text-[#0F3B70] font-semibold text-description leading-snug mb-1">
                    {item.title}
                  </h4>
                  <p className="text-subcontent text-gray-600 mb-4">{item.date}</p>
                  <div className="mt-auto flex justify-end">
                    <button
                      type="button"
                      className="text-PRIMEblue text-description font-semibold cursor-pointer select-none underline-offset-2 hover:underline inline-flex items-center space-x-1"
                      aria-label={`Read more about: ${item.title}`}
                      onClick={() => alert("Read more clicked!")}
                    >
                      <span>READ MORE</span>
                      <FaChevronRight className="text-description" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
