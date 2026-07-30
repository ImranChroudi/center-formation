export interface Program {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  image: string
  duration: string
  level: string
  certificate: string
  category: string
  lessons: number
  students: number
  price: string
  curriculum: { title: string; topics: string[] }[]
  outcomes: string[]
  requirements: string[]
  careers: string[]
  instructor: {
    name: string
    role: string
    image: string
  }
  faq: { question: string; answer: string }[]
}

export const programs: Program[] = [
  {
    id: "1",
    title: "Full-Stack Web Development",
    slug: "full-stack-web-development",
    description: "Master modern web development with React, Node.js, and cloud technologies.",
    longDescription: "Dive deep into modern web development with our comprehensive program. From front-end frameworks to back-end architecture, you'll build production-ready applications using industry-standard tools and practices.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    duration: "12 Months",
    level: "Advanced",
    certificate: "Professional Diploma in Full-Stack Development",
    category: "IT & Programming",
    lessons: 240,
    students: 1200,
    price: "$4,500",
    curriculum: [
      {
        title: "Front-End Development",
        topics: ["HTML5 & CSS3", "JavaScript ES6+", "React & Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      },
      {
        title: "Back-End Development",
        topics: ["Node.js & Express", "RESTful APIs", "GraphQL", "PostgreSQL", "MongoDB", "Authentication & Authorization"],
      },
      {
        title: "DevOps & Deployment",
        topics: ["Git & GitHub", "Docker", "AWS Cloud Services", "CI/CD Pipelines", "Testing & Debugging"],
      },
    ],
    outcomes: [
      "Build full-stack web applications from scratch",
      "Deploy scalable applications to the cloud",
      "Work with modern databases and APIs",
      "Implement authentication and security best practices",
      "Collaborate effectively using Git and agile methodologies",
    ],
    requirements: [
      "Basic understanding of programming concepts",
      "Familiarity with HTML, CSS, and JavaScript",
      "A computer with internet connection",
    ],
    careers: ["Full-Stack Developer", "Front-End Engineer", "Back-End Developer", "Software Engineer", "Technical Lead"],
    instructor: {
      name: "Dr. Ahmed Mansour",
      role: "Senior Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    },
    faq: [
      { question: "Is this program suitable for beginners?", answer: "Yes, while some programming basics are helpful, we start from fundamentals and build up gradually." },
      { question: "Will I receive a certificate?", answer: "Yes, upon completion you'll receive a Professional Diploma recognized by industry partners." },
    ],
  },
  {
    id: "2",
    title: "English Language Mastery",
    slug: "english-language-mastery",
    description: "Achieve fluency in English for academic and professional success.",
    longDescription: "Our English Language Mastery program is designed to take you from intermediate to advanced fluency. Focus on business communication, academic writing, and professional presentations.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    duration: "6 Months",
    level: "Intermediate to Advanced",
    certificate: "Certificate of English Proficiency (CEFR C1)",
    category: "Languages",
    lessons: 120,
    students: 2500,
    price: "$2,200",
    curriculum: [
      {
        title: "Business Communication",
        topics: ["Professional Email Writing", "Meeting Etiquette", "Negotiation Skills", "Business Presentations"],
      },
      {
        title: "Academic English",
        topics: ["Essay Writing", "Research Papers", "Academic Vocabulary", "Critical Analysis"],
      },
    ],
    outcomes: [
      "Communicate fluently in professional settings",
      "Write business documents with confidence",
      "Deliver impactful presentations in English",
      "Understand complex academic texts",
    ],
    requirements: ["Intermediate English level (B1 or higher)", "Commitment to 10 hours/week"],
    careers: ["International Business", "Global Marketing", "Diplomacy", "Academic Research"],
    instructor: {
      name: "Sarah Williams",
      role: "Cambridge Certified Instructor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    faq: [
      { question: "Do you offer IELTS preparation?", answer: "Yes, IELTS preparation is integrated into the final module." },
    ],
  },
  {
    id: "3",
    title: "Digital Marketing & SEO",
    slug: "digital-marketing-seo",
    description: "Master SEO, social media marketing, and data-driven advertising.",
    longDescription: "Transform into a digital marketing expert. Learn SEO, SEM, social media strategy, content marketing, and analytics.",
    image: "https://images.unsplash.com/photo-1553729459-afe8f2e4b3cb?w=800&q=80",
    duration: "8 Months",
    level: "Intermediate",
    certificate: "Professional Certificate in Digital Marketing",
    category: "Marketing",
    lessons: 160,
    students: 1800,
    price: "$3,200",
    curriculum: [
      {
        title: "SEO & Content Marketing",
        topics: ["Keyword Research", "On-Page SEO", "Link Building", "Content Strategy", "Analytics & Reporting"],
      },
      {
        title: "Social Media & Paid Ads",
        topics: ["Facebook & Instagram Ads", "Google Ads", "LinkedIn Marketing", "TikTok Strategy"],
      },
    ],
    outcomes: ["Create comprehensive digital marketing strategies", "Optimize websites for search engines", "Manage social media campaigns"],
    requirements: ["Basic understanding of marketing", "Familiarity with social media platforms"],
    careers: ["Digital Marketing Manager", "SEO Specialist", "Content Strategist", "Social Media Manager"],
    instructor: {
      name: "Karim Bouchareb",
      role: "Digital Marketing Director at Ogilvy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    faq: [],
  },
  {
    id: "4",
    title: "Graphic Design & Visual Communication",
    slug: "graphic-design-visual-communication",
    description: "Create stunning visual content with industry-standard design tools.",
    longDescription: "Develop your creative skills with professional design tools. Master visual communication, branding, and user interface design.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    duration: "8 Months",
    level: "Beginner to Intermediate",
    certificate: "Professional Diploma in Graphic Design",
    category: "Design",
    lessons: 140,
    students: 900,
    price: "$3,000",
    curriculum: [
      { title: "Design Fundamentals", topics: ["Color Theory", "Typography", "Layout & Composition", "Branding Basics"] },
      { title: "Tools & Software", topics: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "After Effects"] },
    ],
    outcomes: ["Design professional brand identities", "Create engaging social media content", "Build user interfaces"],
    requirements: ["No prior design experience needed", "A computer with minimum 8GB RAM"],
    careers: ["Graphic Designer", "UI/UX Designer", "Art Director", "Brand Designer"],
    instructor: {
      name: "Leila Benali",
      role: "Senior Designer at IDEO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    faq: [],
  },
  {
    id: "5",
    title: "Business Management & Leadership",
    slug: "business-management-leadership",
    description: "Develop strategic leadership skills for the modern business world.",
    longDescription: "Build the skills needed to lead organizations effectively. Covering strategy, operations, finance, and human resources.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    duration: "12 Months",
    level: "Advanced",
    certificate: "Executive Diploma in Business Management",
    category: "Business",
    lessons: 200,
    students: 750,
    price: "$5,500",
    curriculum: [
      { title: "Strategic Management", topics: ["Corporate Strategy", "Competitive Analysis", "Change Management"] },
      { title: "Financial Management", topics: ["Financial Accounting", "Managerial Finance", "Investment Analysis"] },
    ],
    outcomes: ["Lead cross-functional teams effectively", "Develop strategic business plans", "Analyze financial statements"],
    requirements: ["3+ years of professional experience", "Bachelor's degree or equivalent"],
    careers: ["Business Manager", "Operations Director", "Management Consultant", "Entrepreneur"],
    instructor: {
      name: "Prof. Hassan El Amrani",
      role: "Former CEO & Harvard Business Lecturer",
      image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=400&q=80",
    },
    faq: [],
  },
  {
    id: "6",
    title: "Accounting & Financial Management",
    slug: "accounting-financial-management",
    description: "Master financial principles, accounting standards, and reporting.",
    longDescription: "Comprehensive training in financial accounting, management accounting, taxation, and audit.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    duration: "9 Months",
    level: "Intermediate",
    certificate: "Professional Certificate in Accounting",
    category: "Business",
    lessons: 160,
    students: 600,
    price: "$3,800",
    curriculum: [
      { title: "Financial Accounting", topics: ["IFRS Standards", "Financial Statements", "Consolidations"] },
      { title: "Management Accounting", topics: ["Cost Analysis", "Budgeting", "Performance Measurement"] },
    ],
    outcomes: ["Prepare financial statements", "Perform financial analysis", "Understand tax regulations"],
    requirements: ["Basic math proficiency", "Degree in any field"],
    careers: ["Accountant", "Financial Analyst", "Auditor", "Finance Manager"],
    instructor: {
      name: "Fatima Zahra",
      role: "Chartered Accountant, Deloitte",
      image: "https://images.unsplash.com/photo-1594744803329-e58f31de2bf4?w=400&q=80",
    },
    faq: [],
  },
]

export const categories = ["All", "IT & Programming", "Languages", "Marketing", "Design", "Business"]

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug)
}
