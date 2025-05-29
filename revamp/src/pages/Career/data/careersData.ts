// src/data/jobPositionData.ts

export interface JobPosition {
  slug: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  salary: string; 
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  companyDetails: {
    email: string;
    address: string;
    phone: string;
  };
}

export const jobPositions: JobPosition[] = [
  {
    slug: "junior-web-developer",
    title: "Junior Web Developer",
    location: "Quezon City",
    type: "Full-time",
    experience: "0–2 years",
    salary: "₱15,000 - ₱20,000",
    description:
      "Define opportunities to create tangible business value for the client by leading current state assessments and identifying high-level customer requirements, defining the business solutions and structures needed to realize these opportunities, and developing business cases to achieve the vision. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    responsibilities: [
      "Write clean, scalable code using HTML, CSS, JavaScript.",
      "Collaborate with backend developers and designers.",
      "Participate in sprint planning and reviews.",
      "Debug issues and optimize performance.",
    ],
    qualifications: [
      "Bachelor’s degree in IT or related field.",
      "Familiarity with frontend frameworks like React or Vue.",
    ],
    benefits: ["Health insurance", "Career growth and mentorship"],
    companyDetails: {
      email: "careers@primephilippines.com",
      address: "3F IT Center, Ben-Lor Building, Quezon Ave, Diliman, QC",
      phone: "0987-654-3210",
    },
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    location: "Makati",
    type: "Full-time",
    experience: "1–3 years",
    salary: "₱18,000 - ₱22,000",
    description:
      "Responsible for the creation of visually stunning designs for both digital and print formats...",
    responsibilities: [
      "Design promotional materials, posters, and digital assets.",
      "Work with teams to create brand-aligned visuals.",
      "Revise designs based on feedback.",
      "Ensure high-quality final outputs.",
    ],
    qualifications: [
      "Degree in Fine Arts, Graphic Design, or equivalent.",
      "Proficiency in Photoshop, Illustrator, Figma.",
    ],
    benefits: ["Flexible working hours", "Monthly design workshops"],
    companyDetails: {
      email: "design@primephilippines.com",
      address: "2F Creative Hub, Ayala Ave, Makati",
      phone: "0917-888-4321",
    },
  },
  {
    slug: "marketing-associate",
    title: "Marketing Associate",
    location: "Taguig",
    type: "Part-time",
    experience: "1–2 years",
    salary: "₱12,000 - ₱18,000",
    description:
      "Assist the marketing team in executing campaigns, analyzing performance, and improving audience engagement. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    responsibilities: [
      "Create social media content.",
      "Assist with event coordination and market research.",
      "Track analytics and performance data.",
      "Support marketing strategy planning.",
    ],
    qualifications: [
      "Bachelor’s in Marketing or Business.",
      "Strong writing and presentation skills.",
    ],
    benefits: ["Performance incentives", "Access to industry events"],
    companyDetails: {
      email: "marketing@primephilippines.com",
      address: "Prime Tower, BGC, Taguig",
      phone: "0917-567-3456",
    },
  },
  {
    slug: "sales-executive",
    title: "Sales Executive",
    location: "Cebu",
    type: "Full-time",
    experience: "2–4 years",
    salary: "₱20,000 - ₱30,000",
    description:
      "Generate new sales opportunities and maintain relationships with clients. Deliver presentations and close deals that align with company goals...",
    responsibilities: [
      "Identify and pursue leads.",
      "Meet monthly and quarterly sales targets.",
      "Maintain CRM database and records.",
      "Conduct client meetings and follow-ups.",
    ],
    qualifications: [
      "Proven experience in sales roles.",
      "Strong interpersonal and negotiation skills.",
    ],
    benefits: ["Commission bonuses", "Quarterly travel incentives"],
    companyDetails: {
      email: "sales@primephilippines.com",
      address: "Cebu Business Park, Cebu City",
      phone: "0923-456-7890",
    },
  },
  {
    slug: "real-estate-analyst",
    title: "Real Estate Analyst",
    location: "Quezon City",
    type: "Full-time",
    experience: "1–3 years",
    salary: "₱22,000 - ₱28,000",
    description:
      "Provide insights and analysis on market trends and property investment opportunities. Assist management in decision-making processes through well-prepared reports...",
    responsibilities: [
      "Collect and analyze property and market data.",
      "Prepare forecasting and ROI evaluations.",
      "Support investment strategies.",
      "Present findings to stakeholders.",
    ],
    qualifications: [
      "Background in finance or real estate.",
      "Strong data analysis and reporting skills.",
    ],
    benefits: ["HMO and life insurance", "Real estate seminar access"],
    companyDetails: {
      email: "analyst@primephilippines.com",
      address: "QC Realty Office, EDSA, Quezon City",
      phone: "0998-123-4567",
    },
  },
  {
    slug: "hr-coordinator",
    title: "HR Coordinator",
    location: "Makati",
    type: "Full-time",
    experience: "1–2 years",
    salary: "₱16,000 - ₱21,000",
    description:
      "Manage HR operations including recruitment, training logistics, and employee records. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    responsibilities: [
      "Post job ads and schedule interviews.",
      "Maintain employee records and HR files.",
      "Assist in performance evaluation processes.",
      "Organize training sessions.",
    ],
    qualifications: [
      "BS Psychology or HRM related degree.",
      "1 year of HR-related work experience.",
    ],
    benefits: ["Leave benefits", "SSS, PhilHealth, Pag-IBIG contributions"],
    companyDetails: {
      email: "hr@primephilippines.com",
      address: "Makati Admin Center, Legazpi Village",
      phone: "0918-234-5678",
    },
  },
  {
    slug: "administrative-assistant",
    title: "Administrative Assistant",
    location: "Pasig",
    type: "Full-time",
    experience: "0–2 years",
    salary: "₱14,000 - ₱19,000",
    description:
      "Support company operations by organizing schedules, documents, and assisting all departments with admin tasks. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    responsibilities: [
      "Organize and maintain filing systems.",
      "Schedule meetings and handle logistics.",
      "Prepare reports and internal memos.",
      "Assist team with administrative tasks.",
    ],
    qualifications: [
      "Graduate of any 4-year course.",
      "Proficient in Microsoft Office and Google Suite.",
    ],
    benefits: ["13th month pay", "Office perks and snacks"],
    companyDetails: {
      email: "admin@primephilippines.com",
      address: "Pasig Business Center, Ortigas Ave",
      phone: "0905-987-6543",
    },
  },
];
