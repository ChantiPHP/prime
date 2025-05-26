import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function InquireNowSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    setTimeout(() => {
      const element = document.getElementById("top");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="relative bg-PRIMEblue text-PRIMEwhite py-16 px-4 md:py-20 md:px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-base md:text-lg mb-4 tracking-wide">
          Have Questions or Need Assistance?
        </p>

        <h2 className="mb-8 leading-snug">
          Let's Get You Started — <br className="hidden md:block" /> Inquire Now!
        </h2>

        <Button
          onClick={handleClick}
          className="bg-PRIMEwhite text-PRIMEblue hover:bg-PRIMEyellow hover:text-PRIMEblue text-base md:text-lg px-8 py-3 rounded-full transition-all duration-300 shadow-xl"
        >
          Inquire Now
        </Button>
      </motion.div>

      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-PRIMEwhite/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-PRIMEwhite/10 rounded-full blur-3xl opacity-50" />
    </section>
  );
}
