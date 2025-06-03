export interface ExpertiseItem {
  id: number;
  name: string;
  content: string[];
  images: string[];
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: 1,
    name: "Landlord Representation",
    content: [
      `We provide expert services in landlord representation, ensuring maximum visibility and optimal tenant placement. Our strategies are designed to attract high-quality tenants while protecting the landlord’s long-term interests. With deep knowledge of the local market, we help property owners maximize their asset value, maintain occupancy, and structure competitive lease terms that suit their investment strategy.`,
      
      `From property marketing to lease negotiations, our team handles every detail professionally. We analyze current trends and provide actionable advice to minimize vacancy and increase return on investment. Partner with us to elevate your property’s performance and market standing.`
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"],
  },
  {
    id: 2,
    name: "Tenant Representation",
    content: [
      `Our tenant representation service focuses on helping businesses find spaces that align with their brand, goals, and budget. We act as your trusted advisor, conducting comprehensive market analysis and guiding you through the selection and negotiation process to ensure favorable lease terms.`,
      
      `Whether you're expanding, relocating, or entering a new market, we tailor our approach to your unique needs. We handle the legwork, saving you time and money while helping you make informed real estate decisions.`
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"],
  },
  {
    id: 3,
    name: "Research & Advisory",
    content: [
      `We provide research-backed insights to guide real estate decisions. Our advisory services include market trends, economic data, and risk assessments tailored to developers, investors, and stakeholders. This ensures that you’re equipped with the latest intelligence to make informed moves.`,
      
      `Our reports are customized, thorough, and focused on your specific property goals. We help you navigate uncertainty and identify hidden opportunities in a competitive real estate landscape.`
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"],
  },
  {
    id: 4,
    name: "Property Acquisition & Disposal",
    content: [
      `We support clients in acquiring and disposing of real estate assets with full transparency and strategic planning. From sourcing the right property to handling negotiations and closing, we streamline the process and protect your best interests throughout.`,
      
      `Our network and market knowledge enable us to identify the right buyers or sellers quickly. With us, your acquisitions and disposals are driven by data, maximizing returns and minimizing delays.`
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"],
  },
  {
    id: 5,
    name: "Project Management",
    content: [
      `Our project management service covers planning, coordination, and execution. Whether it’s a renovation, new build, or commercial fit-out, we ensure the project stays on time, on budget, and aligned with your vision.`,
      
      `We coordinate with contractors, consultants, and suppliers to maintain quality and consistency. You’ll get regular updates, risk assessments, and cost control strategies from a dedicated team that treats your project like their own.`
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"],
  },
  {
    id: 6,
    name: "Design and Construction",
    content: [
      `We offer integrated design and construction services to bring your ideas to life. From initial concepts to completed structures, we manage each phase to ensure seamless execution and innovative solutions tailored to your needs.`,
      
      `Our team works with architects, engineers, and builders to deliver functional and beautiful spaces. We prioritize efficiency, quality, and client satisfaction every step of the way.`
    ],
    images: ["/ImagePlaceholder.png", "/ImagePlaceholder.png"],
  },
];
