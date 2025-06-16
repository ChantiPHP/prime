import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { pressItems } from "./data/pressroomData";

type PressItem = typeof pressItems[number];

function convertToEmbedUrl(url: string): string {
  if (url.includes("youtube.com/embed")) return url;

  const videoIdMatch = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
}

export default function News() {
  const { id } = useParams();
  const [article, setArticle] = useState<PressItem | null>(null);

  useEffect(() => {
    const selectedArticle = pressItems.find(
      (item) => item.id === Number(id) && item.type === "NEWS"
    );
    setArticle(selectedArticle || null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        News article not found.
      </div>
    );
  }

  const otherNews = pressItems
    .filter((item) => item.type === "NEWS" && item.id !== Number(id))
    .slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative mb-10">
        <div className="w-full h-[400px] bg-[url('/Pressroom/PressroomBG.png')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-PRIMEblue opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
          >
            <h1 className="text-[28pt] sm:text-[40pt] font-bold uppercase">News</h1>
            <div className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span>Pressroom</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 md:flex md:gap-8 pb-20">
        {/* Article */}
        <section className="md:w-2/3 space-y-6 md:pr-10">
          <h2 className="text-subtitle font-bold text-PRIMEblue">{article.title}</h2>
          <p className="text-gray-500">{article.date}</p>
          <p className="leading-relaxed text-lg">{article.content}</p>

          {article.videoUrl ? (
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src={convertToEmbedUrl(article.videoUrl)}
                title={article.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : article.imageUrl ? (
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : null}

          {article.moreContent && (
            <div className="prose lg:prose-lg text-gray-800 pt-4 whitespace-pre-line">
              {article.moreContent}
            </div>
          )}
        </section>

        {/* Other News */}
        <aside className="md:w-1/3 border-l border-gray-300 md:pl-8 mt-12 md:mt-0 space-y-6">
          <h3 className="text-content font-semibold text-PRIMEblue">Other News</h3>
          {otherNews.map((news) => (
            <Link
              to={`/pressroom/news/${news.id}`}
              key={news.id}
              className="group block border border-gray-200 rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition"
            >
              <h4 className="text-content text-PRIMEblue font-semibold group-hover:underline">{news.title}</h4>
              <p className="text-sm text-gray-500 mb-1">{news.date}</p>
              <p className="text-sm text-gray-700 line-clamp-3 group-hover:underline">{news.content}</p>
            </Link>
          ))}
        </aside>
      </main>

      <Footer />
    </>
  );
}
