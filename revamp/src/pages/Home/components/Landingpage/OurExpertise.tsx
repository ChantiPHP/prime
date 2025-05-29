import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
  FaCog,
  FaDraftingCompass,
  FaUserTie,
  FaFileContract,
  FaHandshake,
  FaChartLine,
  FaProjectDiagram,
} from "react-icons/fa"

const expertiseData = [
  {
    title: "Design & Construction",
    icon: (
      <FaDraftingCompass className="text-white text-3xl" />
    ),
    description:
      "Innovative design solutions combined with expert construction management for quality results.",
  },
  {
    title: "Tenant Representation",
    icon: <FaUserTie className="text-white text-3xl" />,
    description:
      "Dedicated support to find and secure the ideal space tailored to your business needs.",
  },
  {
    title: "Property Acquisition & Disposal",
    icon: <FaFileContract className="text-white text-3xl" />,
    description:
      "Comprehensive services to acquire or dispose of properties efficiently and profitably.",
  },
  {
    title: "Landlord Representation",
    icon: <FaHandshake className="text-white text-3xl" />,
    description:
      "Expert guidance and advocacy to maximize your property’s value and tenant quality.",
  },
  {
    title: "Research & Advisory",
    icon: <FaChartLine className="text-white text-3xl" />,
    description:
      "In-depth market insights and strategic advice to empower your real estate decisions.",
  },
  {
    title: "Project Management",
    icon: <FaProjectDiagram className="text-white text-3xl" />,
    description:
      "Expert coordination and oversight to ensure your projects are delivered on time and budget.",
  },
]

export default function ExpertiseSection() {
  return (
    <section className="w-full px-4 py-12 flex flex-col items-center mb-[50px]">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="flex justify-center items-center mb-4 text-PRIMEblue font-bold text-subcontent tracking-wide space-x-2">
          <FaCog className="text-subcontent" />
          <span>EXPERTISE</span>
        </div>

          <h2 className="text-center">
            <span className="inline-block bg-PRIMEblue px-4 py-2 rounded-sm">
              <span className="text-white text-maintitle">OUR</span>
              <span className="ml-2 text-[#FBBF24] text-maintitle">EXPERTISE</span>
            </span>
          </h2>
        <p className="text-PRIMEblack sm:mt-6 text-description max-w-4xl mb-8 mt-6 leading-relaxed px-4 sm:px-6">
          PRIME Philippines drives your business forward by offering smart and innovative real estate solutions.
          No matter what stage your business is in, our expert consultancy services are here to support your growth.
        </p>

        <div className="grid gap-5 w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="rounded-xl border-2 border-PRIMElightgray shadow-md hover:shadow-lg transition-shadow duration-300 w-full">
                <CardContent className="flex flex-col items-center justify-center p-2 text-center min-h-[200px]">
                  <div className="bg-PRIMEblue rounded-full p-4 mb-4 flex justify-center items-center shadow-md w-14 h-14">
                    {item.icon}
                  </div>
                  <h2 className="text-PRIMEblue text-content font-semibold uppercase mb-2 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-PRIMEblack text-subcontent max-w-md leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
