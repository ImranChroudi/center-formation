export interface Testimonial {
  id: string
  name: string
  role: string
  program: string
  image: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amina El Khattabi",
    role: "Full-Stack Developer at Shopify",
    program: "Full-Stack Web Development",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    content: "This program completely transformed my career. Within 3 months of graduating, I landed my dream job as a developer. The curriculum is incredibly well-structured and the instructors are world-class.",
    rating: 5,
  },
  {
    id: "2",
    name: "Omar Benali",
    role: "Marketing Manager at L'Oréal",
    program: "Digital Marketing & SEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    content: "The digital marketing program gave me hands-on experience with real campaigns. I went from knowing nothing about SEO to managing a $2M advertising budget. Highly recommended!",
    rating: 5,
  },
  {
    id: "3",
    name: "Sophia Chen",
    role: "International Business Analyst",
    program: "English Language Mastery",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    content: "My English improved dramatically in just 6 months. The business communication module was particularly valuable. I now lead international meetings with confidence.",
    rating: 5,
  },
  {
    id: "4",
    name: "Youssef Idrissi",
    role: "UI/UX Designer at Airbnb",
    program: "Graphic Design & Visual Communication",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    content: "The design program helped me build an impressive portfolio. The instructors are practicing professionals who share real-world insights. I got my first design job before graduating!",
    rating: 5,
  },
  {
    id: "5",
    name: "Nadia Tazi",
    role: "Operations Director at McKinsey",
    program: "Business Management & Leadership",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    content: "The executive program was intense but incredibly rewarding. The case-study approach helped me apply concepts directly to my work. My leadership skills have grown tremendously.",
    rating: 5,
  },
  {
    id: "6",
    name: "Rayan El Fassi",
    role: "Financial Analyst at Goldman Sachs",
    program: "Accounting & Financial Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    content: "The accounting program gave me a solid foundation in IFRS and financial analysis. The instructors bring real experience from top firms. It was the best investment in my career.",
    rating: 5,
  },
]
