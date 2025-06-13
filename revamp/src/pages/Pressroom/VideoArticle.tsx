import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

export default function VideoArticle() {
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
            <h1 className="text-[28pt] sm:text-[40pt] font-bold uppercase">Video Article</h1>
            <div className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Pressroom</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Vertical Divider */}
      <main className="max-w-7xl mx-auto px-4 md:flex md:gap-8 pb-20">
        {/* Left Content */}
        <section className="md:w-2/3 space-y-6 md:pr-10">
          <h2 className="text-3xl font-bold">How Prime Philippines is Shaping the Future of Real Estate</h2>
          <p className="text-gray-500">June 1, 2025 · By Prime Media Team</p>

          {/* Embedded YouTube Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/JdWQJq2OkJs"
              title="Prime Philippines Media Interview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            Prime Philippines continues to redefine the country's real estate landscape. In this exclusive feature on CNN Philippines, CEO Jet Yu shares insights on the shifting trends in commercial and residential investments, and how data-driven strategies are helping investors make smarter decisions.
          </p>

          <p>
            As a leading real estate consultancy firm, Prime Philippines focuses on transparency, research-based advising, and client-centric approaches. From revitalizing Metro Manila’s business districts to expanding reach in Visayas and Mindanao, the company remains committed to empowering clients with smart property investments.
          </p>

          <p>
            This video explores the company’s strategic direction for 2025, including its expansion to Cebu and Davao, investment trends in sustainable infrastructure, and its efforts in supporting startup developers through innovative property solutions.
          </p>
        </section>

        {/* Right Related Links with Vertical Line */}
        <aside className="md:w-1/3 border-l border-gray-300 md:pl-8 mt-12 md:mt-0 space-y-6">
          <h3 className="text-xl font-semibold">Other Videos</h3>

          {/* Related Video 1 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
            <h4 className="font-semibold text-lg">The Rise of Mixed-Use Developments</h4>
            <p className="text-sm text-gray-500 mb-2">May 28, 2025 · Prime Pressroom</p>
            <p className="text-sm mb-2">
              A short documentary on the growing demand for mixed-use real estate zones in Metro Manila and Cebu.
            </p>
            <iframe
              className="w-full aspect-video rounded-md"
              src="https://www.youtube.com/embed/n_VzNUaUS0k"
              title="Mixed Use Developments"
              allowFullScreen
            ></iframe>
          </div>

          {/* Related Video 2 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Sustainable Real Estate Investment</h4>
            <p className="text-sm text-gray-500 mb-2">May 15, 2025 · GreenBuild Summit</p>
            <p className="text-sm mb-2">
              Highlights from Prime Philippines' panel talk on integrating sustainability in commercial real estate.
            </p>
            <iframe
              className="w-full aspect-video rounded-md"
              src="https://www.youtube.com/embed/SJJrL9mQqMc"
              title="Green Investment"
              allowFullScreen
            ></iframe>
          </div>

          {/* Related Video 3 */}
          <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition">
            <h4 className="font-semibold text-lg">Expanding to Visayas and Mindanao</h4>
            <p className="text-sm text-gray-500 mb-2">April 30, 2025 · Prime Expansion Series</p>
            <p className="text-sm mb-2">
              A video feature on Prime Philippines’ expansion efforts and new opportunities in emerging cities.
            </p>
            <iframe
              className="w-full aspect-video rounded-md"
              src="https://www.youtube.com/embed/4K43XUpk8ss"
              title="Expansion Plans"
              allowFullScreen
            ></iframe>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}
