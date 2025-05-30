import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const PrimeFoundation = (title: string, team: TeamMember[]) => (
  <>
    <h3 className="text-maintitle font-gotham-bold text-PRIMEblue text-center mb-10 ">
      {title}
    </h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-15 mx-auto mb-20">
      {team.map((member, i) => (
        <div
          key={i}
          className="flex flex-col w-[350px] h-[450px] items-center rounded-lg shadow-lg border border-PRIMEgray "
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-[350px] h-[350px] object-cover rounded-lg"
          />
          <div className="flex flex-col w-full h-[100px] justify-center px-5">
            <h4 className="text-lg font-gotham-bold text-[var(--color-PRIMEblack)]">
              {member.name}
            </h4>
            <p className="text-sm text-[#A3B1C2]">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

const teamLeaders: TeamMember[] = [
  { name: "Name", role: "Team Leader", image: "/Leadership/photo.png" },
  { name: "Name", role: "Team Leader", image: "/Leadership/photo.png" },
  { name: "Name", role: "Team Leader", image: "/Leadership/photo.png" },
];

const marketingTeam: TeamMember[] = [
  {
    name: "Name",
    role: "Marketing Specialist",
    image: "/Leadership/photo.png",
  },
  {
    name: "Name",
    role: "Marketing Coordinator",
    image: "/Leadership/photo.png",
  },
  {
    name: "Name",
    role: "Social Media Manager",
    image: "/Leadership/photo.png",
  },
  { name: "Name", role: "Content Creator", image: "/Leadership/photo.png" },
  { name: "Name", role: "Digital Marketer", image: "/Leadership/photo.png" },
  { name: "Name", role: "PR Executive", image: "/Leadership/photo.png" },
];

const Team: React.FC = () => {
  return (
    <div className="flex-col items-center">
      <Navbar />

      {/* Banner Section */}
      <section className="relative mb-10">
        <div className="w-full h-[400px] bg-[url('/Leadership/LeadershipBG.png')] bg-cover bg-center relative group">
          {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue/50 transition duration-300"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-PRIMEwhite text-center px-4"
          >
            <h1 className="mt-10">PRIME Foundation</h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-6 py-3 border-2 border-white rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">Prime Foundation</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Founder Section */}
        <section className="mx-auto p-8 flex flex-col flex-cols-2 lg:flex-row items-center gap-8 mb-10">
          <img
            src="/Leadership/SirJet.png"
            alt="Founder"
            className="w-[350px] h-[450px] rounded-lg shadow-lg object-cover"
          />
          <div className="w-full md:px-25 lg:px-0">
            <div className="text-center mb-4 lg:text-left">
              <h2 className="text-3xl">Jet Yu</h2>
              <h3 className="text-xl">Chief Executive Officer</h3>
            </div>

            <div className=" text-PRIMEgray leading-relaxed text-justify space-y-6">
              <p>
                Sir Jet Yu is the visionary behind the PRIME Foundation. With
                years of experience in the industry, he strives to create a
                platform that nurtures young leaders and innovators through
                mentorship, education, and opportunities.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos.
              </p>
            </div>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="mx-auto p-8 flex flex-col lg:flex-row-reverse items-center gap-8 mb-10">
          <img
            src="/Leadership/SirCholo.png"
            alt="Highlight"
            className="w-[350px] h-[450px] rounded-lg shadow-lg object-cover"
          />
          <div className="w-full md:px-25 lg:px-0">
            <div className="text-center mb-4 space-y-2 lg:text-right">
              <h3 className="text-3xl">Cholo Florencio</h3>
              <h3 className="text-xl">Executive Vice-President</h3>
            </div>

            <div className=" text-PRIMEgray leading-relaxed text-justify space-y-6">
              <p>
                Since joining PRIME in 2014, he has taken various roles in
                Business Development, Landlord Representation, Leasing & Sales,
                and Research & Advisory. As a seasoned real estate professional
                with over 15 years of experience in the Philippines property
                market, he has been involved in over 200 transactions with
                property developers, land bankers, landlords, and occupiers.
              </p>
              <p>
                He has led teams managing over PhP15 Billion worth of accounts
                and secured exclusive leasing agency contracts for PRIME with
                multiple commercial developments.
              </p>
            </div>
          </div>
        </section>

        {/* Team Sections */}
        <section className="container mx-auto flex flex-col max-w-[1400px]">
          {PrimeFoundation("Team Leaders", teamLeaders)}
          {PrimeFoundation("Marketing Team", marketingTeam)}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
