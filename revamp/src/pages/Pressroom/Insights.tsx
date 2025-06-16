import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { pressItems } from "./data/pressroomData";

// Convert any YouTube URL to embed URL and disable autoplay
function convertToEmbedUrl(url: string): string {
  const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  if (!videoId) return url;

  return `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;
}

export default function InsightsArticle() {
  const { id } = useParams();
  const article = pressItems.find(
    (item) => item.id === Number(id) && item.type === "INSIGHT"
  );

  const otherInsights = pressItems
    .filter((item) => item.type === "INSIGHT" && item.id !== Number(id))
    .slice(0, 3);

  if (!article) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Article not found.
      </div>
    );
  }

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
            <h1 className="text-[28pt] sm:text-[40pt] font-bold uppercase">Insights</h1>
            <div className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Pressroom</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
     <main className="max-w-7xl mx-auto px-4 md:flex md:gap-8 pb-20">
        {/* Left Section (Main Article) */}
        <section className="md:w-2/3 space-y-6 md:pr-10">
          <h2 className="text-3xl font-bold">{article.title}</h2>
          <p className="text-gray-500">{article.date}</p>

          {/* First Paragraph */}
          {article.contentTop && (
            <p className="leading-relaxed text-lg">{article.contentTop}</p>
          )}

          {/* Video (if available) */}
          {article.videoUrl && (
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={convertToEmbedUrl(article.videoUrl)}
                title={article.title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Second Paragraph */}
          {article.contentBottom && (
            <p className="leading-relaxed text-lg">{article.contentBottom}</p>
          )}

          {/* Image (if available) */}
          {article.imageUrl && (
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </section>

        {/* Right Section (Related Insights) */}
        <aside className="md:w-1/3 border-l border-gray-300 md:pl-8 mt-12 md:mt-0 space-y-6">
          <h3 className="text-xl font-semibold text-PRIMEblue">Other Insights</h3>
          {otherInsights.map((insight) => (
            <Link
              to={`/pressroom/insights/${insight.id}`}
              key={insight.id}
              className="group block border border-gray-200 rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg text-PRIMEblue group-hover:underline">
                {insight.title}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{insight.date}</p>
              <p className="text-sm text-gray-700 line-clamp-3 group-hover:underline">
                {insight.contentTop}
              </p>
            </Link>
          ))}
        </aside>
      </main>

      <Footer />
    </>
  );
}
