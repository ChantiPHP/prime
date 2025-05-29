export interface Speaker {
  name: string;
  title: string;
  image: string;
  background: string[];
}

export interface Countdown {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface EventData {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  backgroundImage: string;  
  aboutEvent: string;
  speaker: Speaker;
  countdown: Countdown;
}

export const eventsData: EventData[] = [
  {
    title: "BUSINESS LEADERS",
    subtitle: "CONFERENCE 2028",
    date: "22-25 July 2026",      
    location: "Greatwork 2 Office",
    backgroundImage: "/Events/events1.png",
    aboutEvent: "Join top real estate professionals, investors, and tech leaders to explore the future of property innovation. Discover trends, strategies, and digital tools shaping the Philippine real estate landscape.",
    speaker: {
      name: "Louisse B.",
      title: "Lead Software Engineer & Tech Community Host",
      image: "/events/speaker1.jpg",
      background: [
        "Louisse B. is an experienced IT professional with a strong background in software engineering, system architecture, and tech leadership. A proud graduate of the University of the Philippines with a degree in Information Technology, Louise has spent the last 8+ years building web and mobile applications, optimizing enterprise systems, and mentoring upcoming developers in the industry.",
        "He currently works as a Lead Software Engineer at NovaTech Solutions, where he leads a cross-functional team working on cloud-based applications, automation tools, and AI-powered platforms. Louise is known for his passion for clean code, user-centric design, and staying up-to-date with the latest tech trends.",
        "Outside of work, Louise is a familiar face in the local tech scene—hosting seminars, moderating hackathons, and leading workshops focused on web development, software architecture, and digital innovation. His approachable and engaging style makes him a favorite host at IT events and student-led conferences."
      ]
    },
    countdown: {
      days: "143",
      hours: "22",
      minutes: "16",
      seconds: "22"
    }
  },
  {
    title: "TECH INNOVATION",
    subtitle: "SUMMIT 2028",
    date: "15-18 August 2026",
    location: "SMX Convention Center",
    backgroundImage: "/Events/events2.png",
    aboutEvent: "Experience the future of technology at our annual Tech Innovation Summit. Network with industry leaders, explore cutting-edge solutions, and discover how emerging technologies are transforming the business landscape.",
    speaker: {
      name: "Sarah Chen",
      title: "AI Research Director & Tech Evangelist",
      image: "/events/speaker2.jpg",
      background: [
        "Sarah Chen is a renowned AI researcher and technology evangelist with over 15 years of experience in artificial intelligence and machine learning. She holds a Ph.D. in Computer Science from Stanford University and has published numerous papers on AI applications in business.",
        "Currently serving as the AI Research Director at TechFuture Labs, Sarah leads groundbreaking research in natural language processing and computer vision. Her work has been instrumental in developing AI solutions for major corporations across Asia.",
        "Sarah is a sought-after speaker at international tech conferences and has been featured in Forbes' '30 Under 30' list for her contributions to AI research and development. She is passionate about making AI more accessible and ethical in business applications."
      ]
    },
    countdown: {
      days: "167",
      hours: "15",
      minutes: "30",
      seconds: "45"
    }
  },
  {
    title: "DIGITAL TRANSFORMATION",
    subtitle: "FORUM 2028",
    date: "10-13 September 2026",
    location: "Marriott Grand Ballroom",
    backgroundImage: "/Events/events3.png",
    aboutEvent: "Join us for an exclusive forum on digital transformation in the modern business landscape. Learn from industry experts about implementing successful digital strategies and staying ahead in the digital age.",
    speaker: {
      name: "Michael Rodriguez",
      title: "Digital Strategy Consultant & Innovation Expert",
      image: "/events/speaker3.jpg",
      background: [
        "Michael Rodriguez is a digital transformation expert with over 20 years of experience helping organizations navigate their digital journey. He has worked with Fortune 500 companies across various industries, implementing successful digital strategies and innovation programs.",
        "As the founder of DigitalEdge Consulting, Michael has helped numerous companies achieve their digital transformation goals. His expertise spans digital strategy, change management, and emerging technology implementation.",
        "Michael is a published author and regular contributor to leading business and technology publications. He is known for his practical approach to digital transformation and his ability to bridge the gap between technology and business objectives."
      ]
    },
    countdown: {
      days: "193",
      hours: "08",
      minutes: "45",
      seconds: "30"
    }
  }
];
