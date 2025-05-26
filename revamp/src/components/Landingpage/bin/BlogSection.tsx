import { FC } from "react";
import { Link } from "react-router-dom";
import { FaList } from "react-icons/fa";

const blogItems = [
  {
    id: 1,
    title: "Transforming Urban Spaces with Smart Infrastructure",
    date: "April 28, 2025",
    image:
      "https://storage.googleapis.com/a1aa/image/3750558c-b4fd-40e6-77be-d39badfa5941.jpg",
  },
  {
    id: 2,
    title: "Prime PH Launches New Commercial Hub in Quezon City",
    date: "April 27, 2025",
    image:
      "https://storage.googleapis.com/a1aa/image/be5e5e5b-b5c4-4d09-b542-99c907877170.jpg",
  },
  {
    id: 3,
    title: "Exploring the Future of Property Investment in the Philippines",
    date: "April 26, 2025",
    image:
      "https://storage.googleapis.com/a1aa/image/924e8a0d-de67-4b75-106f-df810dc30413.jpg",
  },
];

const BlogsSection: FC = () => {
  return (
    <section className="flex items-center justify-center px-4 py-20 font-gotham-book bg-white">
      <div className="w-full max-w-[1400px] flex flex-col items-center">
        {/* Top label */}
        <div className="flex justify-center items-center mb-8 text-PRIMEblue font-gotham-bold text-sm tracking-wide space-x-2">
          <FaList className="text-xl" />
          <span>BLOGS / ARTICLE</span>
        </div>

        {/* Heading */}
        <h2 className="text-maintitle font-gotham-bold text-PRIMEblue text-center">
          Stay Updated With{" "}
          <span className="text-PRIMEgray">Prime Philippines</span>
        </h2>

        {/* Line */}
        <div className="h-1 w-24 bg-PRIMEblue mt-4 mx-auto rounded-full" />

        {/* Description */}
        <p className="text-[12pt] text-PRIMEgray mt-4 max-w-2xl mx-auto text-center leading-relaxed font-gotham-book">
          Discover the latest trends, company milestones, and insights from
          Prime Philippines. Stay informed with news, updates, and strategic
          developments.
        </p>

        {/* Blog Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {blogItems.map((item) => (
            <div
              key={item.id}
              className="group border border-PRIMElightgray rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-PRIMEwhite"
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-PRIMEblue text-PRIMEwhite text-[10pt] font-semibold px-3 py-1 rounded-full shadow-sm">
                  Featured
                </span>
              </div>

              {/* Text */}
              <div className="p-5 flex flex-col justify-between min-h-[auto]">
                <div>
                  <p className="text-[12pt] font-gotham-bold text-PRIMEblue mb-1 line-clamp-2 hover:underline cursor-pointer">
                    {item.title}
                  </p>
                  <p className="text-[10pt] font-gotham-book text-PRIMEgray mb-4">
                    {item.date}
                  </p>
                </div>

                <Link
                  to="/pressroom"
                  className="text-[12pt] text-PRIMEblue hover:underline font-gotham-book mt-auto"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  View Pressroom
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
