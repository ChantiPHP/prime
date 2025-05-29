// src/pages/CareerDetails.tsx
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { jobPositions, JobPosition } from "./data/careersData";
import { useEffect } from "react";

const JobDescription = ({ job }: { job: JobPosition }) => (
  <section className="space-y-15">
    <h2 className="text-4xl font-semibold mb-2">{job.title}</h2>
    <div className="flex flex-wrap gap-4 mb-4">
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">{job.location}</span>
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">{job.type}</span>
      <span className="bg-PRIMEblue text-white px-4 py-1 rounded-full text-sm">Experience: {job.experience}</span>
    </div>
    <div className="border-b"></div>

    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Job Description</h2>
      <ul className="list-disc pl-8 space-y-2 text-gray-800">
        <li>{job.description}</li>
      </ul>
    </div>

    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Responsibilities</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>

    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Qualifications</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.qualifications.map((q, i) => <li key={i}>{q}</li>)}
      </ul>
    </div>

    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Benefits</h2>
      <ul className="list-disc pl-13 space-y-2 text-gray-800">
        {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>

    <div className="mt-4">
      <h2 className="text-3xl font-semibold mb-2">Company Details</h2>
      <p>
        <strong>Send your application here:</strong>{" "}
        <a href={`mailto:${job.companyDetails.email}`} className="text-PRIMEblue underline">
          {job.companyDetails.email}
        </a>
      </p>
      <p><strong>Company Address:</strong> {job.companyDetails.address}</p>
      <p><strong>Contact No:</strong> {job.companyDetails.phone}</p>
    </div>
  </section>
);

export default function CareerDetails() {
  // Scroll to the top of the page when the component is rendered
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
      
  // Get the job position based on the slug from the URL
  const { title } = useParams(); // get slug
  const job = jobPositions.find((j) => j.slug === title); // find by slug

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Job not found.
      </div>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <section className="relative h-[250px] bg-[url('/Careers/Careers.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-PRIMEblue/70" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center"
        />
      </section>

      <div className="max-w-screen-lg mx-auto p-10 space-y-20">
        <JobDescription job={job} />
      </div>

      <Footer />
    </div>
  );
}
