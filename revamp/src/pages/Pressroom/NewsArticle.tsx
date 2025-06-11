import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import awardsbg from "@/assets/awardsbg.png"; // ✅ Correct image import

export default function NewsArticle() {
  const { id } = useParams();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative mb-10">
        <div className="w-full h-[400px] bg-[url('/Pressroom/PressroomBG.png')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-PRIMEblue opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[28pt] sm:text-[40pt] font-bold uppercase">News Article</h1>
            <div className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Pressroom</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:flex md:gap-8 pb-20">
        {/* Left Article Section */}
        <section className="md:w-2/3 space-y-6 md:pr-10">
          <h2 className="text-3xl font-bold">
            Prime Philippines Launches Real Estate Innovation Hub in 2025
          </h2>
          <p className="text-gray-500">June 10, 2025 · By Prime News Desk</p>

          <p>
            Prime Philippines continues to redefine the real estate landscape with the opening of its new Innovation Hub,
            a state-of-the-art facility designed to foster collaboration, data-driven decision-making, and sustainable
            development planning. Located in the heart of Bonifacio Global City, this hub is expected to become the
            central think tank for property developers and investors nationwide.
          </p>

          <img
            src={awardsbg}
            alt="Innovation Hub"
            className="w-full rounded-lg shadow-md"
          />

          <p>
            The Hub houses data scientists, market researchers, and sustainability experts working together to advise clients
            across residential, commercial, and mixed-use segments. The facility also features virtual property walkthroughs,
            investment simulation rooms, and AI-powered market forecasting dashboards.
          </p>

          <p>
            "We’re entering an era where property consultancy isn’t just about location — it's about information, innovation,
            and impact," says Jet Yu, CEO of Prime Philippines. “Our Innovation Hub is the first of its kind in Southeast Asia.”
          </p>

          <img
            src={awardsbg}
            alt="Property Analysts"
            className="w-full rounded-lg shadow-md"
          />

          <p>
            The initiative is aligned with the government's push for smart cities and greener urban spaces. Prime Philippines
            is currently working with LGUs in Davao and Cebu to integrate property intelligence into their infrastructure planning.
          </p>

          <p>
            Industry experts believe this move will encourage more foreign investments and provide local developers
            with better tools to understand emerging real estate patterns, especially in secondary cities.
          </p>

          <img
            src={awardsbg}
            alt="Cebu Expansion"
            className="w-full rounded-lg shadow-md"
          />

          <p>
            With its aggressive stance on technology and market education, Prime Philippines solidifies its place not just
            as a service provider but a changemaker in the Philippine property landscape.
          </p>
        </section>

        {/* Right Related Links with Vertical Divider */}
        <aside className="md:w-1/3 border-l border-gray-300 md:pl-8 mt-12 md:mt-0 space-y-6">
          <h3 className="text-xl font-semibold">Related Articles</h3>

          {/* Related Article 1 */}
          <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold">Prime Philippines Expands to Iloilo</h4>
            <p className="text-sm text-gray-500 mb-2">May 28, 2025 · Regional News</p>
            <p className="text-sm">
              The firm opens a new branch to service the Visayas region amid rising infrastructure and tourism projects.
            </p>
          </div>

          {/* Related Article 2 */}
          <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold">Market Trends: 2025 Forecast for Commercial Spaces</h4>
            <p className="text-sm text-gray-500 mb-2">May 22, 2025 · Market Report</p>
            <p className="text-sm">
              A comprehensive outlook on property prices, vacancy rates, and developer sentiment for Q2–Q4 2025.
            </p>
          </div>

          {/* Related Article 3 */}
          <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <h4 className="text-lg font-semibold">How Real Estate is Going Green</h4>
            <p className="text-sm text-gray-500 mb-2">May 10, 2025 · Sustainability</p>
            <p className="text-sm">
              Explore Prime's sustainability standards and partnerships with eco-conscious developers in Luzon and Mindanao.
            </p>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}
