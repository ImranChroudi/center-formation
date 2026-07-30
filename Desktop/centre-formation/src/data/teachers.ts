export interface Teacher {
  id: string
  name: string
  role: string
  bio: string
  image: string
  specialties: string[]
  experience: string
  education: string
  linkedin?: string
  twitter?: string
}

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Dr. Ahmed Mansour",
    role: "Senior Software Engineer at Google",
    bio: "With over 15 years of experience in software development, Dr. Mansour has worked at leading tech companies including Google and Microsoft. He specializes in full-stack development, cloud architecture, and AI/ML applications.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    specialties: ["React", "Node.js", "Cloud Computing", "Machine Learning"],
    experience: "15+ years",
    education: "Ph.D. Computer Science, MIT",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Cambridge Certified Instructor",
    bio: "A Cambridge-certified English instructor with 12 years of experience teaching ESL students worldwide. She has helped over 2,000 students achieve fluency and pass international exams.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    specialties: ["Business English", "IELTS Preparation", "Academic Writing"],
    experience: "12+ years",
    education: "M.A. TESOL, University of Cambridge",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "3",
    name: "Karim Bouchareb",
    role: "Digital Marketing Director at Ogilvy",
    bio: "Award-winning digital marketing leader with expertise in SEO, paid advertising, and brand strategy. He has managed multi-million dollar campaigns for Fortune 500 companies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    specialties: ["SEO", "Google Ads", "Social Media Strategy", "Brand Management"],
    experience: "14+ years",
    education: "MBA, HEC Paris",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "4",
    name: "Leila Benali",
    role: "Senior Designer at IDEO",
    bio: "A multi-award-winning designer with expertise in branding, UI/UX, and visual communication. Her work has been featured in Communication Arts and Awwwards.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    specialties: ["UI/UX Design", "Branding", "Typography", "Motion Design"],
    experience: "10+ years",
    education: "B.F.A. Graphic Design, Parsons School of Design",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "5",
    name: "Prof. Hassan El Amrani",
    role: "Former CEO & Harvard Business Lecturer",
    bio: "Former CEO of a multinational corporation and visiting lecturer at Harvard Business School. He brings real-world business experience to the classroom.",
    image: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=600&q=80",
    specialties: ["Strategic Management", "Leadership", "Corporate Finance"],
    experience: "25+ years",
    education: "MBA, Harvard Business School",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "6",
    name: "Fatima Zahra",
    role: "Chartered Accountant, Deloitte",
    bio: "Qualified Chartered Accountant with extensive experience in audit, tax, and financial consulting at Deloitte. She specializes in IFRS and corporate finance.",
    image: "https://images.unsplash.com/photo-1594744803329-e58f31de2bf4?w=600&q=80",
    specialties: ["Financial Accounting", "Taxation", "Audit", "IFRS"],
    experience: "11+ years",
    education: "ACA, ICAEW",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "7",
    name: "Yuki Tanaka",
    role: "Japanese Language Expert",
    bio: "Native Japanese speaker with JLPT N1 certification and 8 years of teaching experience. She has developed innovative language learning methodologies.",
    image: "https://images.unsplash.com/photo-1598550472221-2d12da80f5f0?w=600&q=80",
    specialties: ["Japanese Language", "JLPT Preparation", "Business Japanese"],
    experience: "8+ years",
    education: "M.A. Linguistics, University of Tokyo",
    linkedin: "#",
    twitter: "#",
  },
  {
    id: "8",
    name: "Carlos Rodriguez",
    role: "Spanish Language & Culture Professor",
    bio: "Native Spanish speaker with DELE examiner certification. He has taught at universities across Europe and specializes in immersive language learning.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    specialties: ["Spanish Language", "DELE Preparation", "Latin American Culture"],
    experience: "13+ years",
    education: "Ph.D. Hispanic Studies, Universidad de Salamanca",
    linkedin: "#",
    twitter: "#",
  },
]
