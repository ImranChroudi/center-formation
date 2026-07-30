export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  authorImage: string
  date: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 High-Demand Tech Skills for 2025",
    slug: "high-demand-tech-skills-2025",
    excerpt: "Discover the most sought-after technical skills employers are looking for this year.",
    content: "The technology landscape continues to evolve at a rapid pace. From AI and machine learning to cloud computing and cybersecurity, we explore the skills that will give you a competitive edge in the job market...",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    category: "Career Advice",
    author: "Dr. Ahmed Mansour",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    date: "2025-12-15",
    readTime: "8 min read",
    tags: ["Technology", "Career", "Skills"],
  },
  {
    id: "2",
    title: "How to Master a New Language in 6 Months",
    slug: "master-new-language-6-months",
    excerpt: "Proven strategies for accelerated language learning used by our top students.",
    content: "Learning a new language is one of the most rewarding investments you can make. Based on our students' success stories, we've compiled the most effective techniques for rapid language acquisition...",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    category: "Study Tips",
    author: "Sarah Williams",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    date: "2025-11-28",
    readTime: "6 min read",
    tags: ["Languages", "Study Tips", "Learning"],
  },
  {
    id: "3",
    title: "The Future of Digital Marketing: Trends to Watch",
    slug: "future-digital-marketing-trends",
    excerpt: "AI-powered marketing, voice search, and the rise of video content.",
    content: "Digital marketing is undergoing a paradigm shift. With AI tools becoming mainstream and privacy regulations changing the landscape, marketers need to adapt quickly to stay ahead...",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80",
    category: "Digital Marketing",
    author: "Karim Bouchareb",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    date: "2025-11-20",
    readTime: "7 min read",
    tags: ["Marketing", "Trends", "AI"],
  },
  {
    id: "4",
    title: "Why Design Thinking Matters in Business",
    slug: "design-thinking-business",
    excerpt: "How human-centered design drives innovation and business growth.",
    content: "Design thinking isn't just for designers. It's a powerful methodology that helps businesses solve complex problems, innovate faster, and create products that customers love...",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    category: "Design",
    author: "Leila Benali",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    date: "2025-11-10",
    readTime: "5 min read",
    tags: ["Design", "Business", "Innovation"],
  },
  {
    id: "5",
    title: "Leadership Lessons from Top CEOs",
    slug: "leadership-lessons-top-ceos",
    excerpt: "Key insights from successful business leaders on building effective teams.",
    content: "What separates great leaders from good ones? We've analyzed the leadership styles of the world's most successful CEOs and distilled their key principles...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Leadership",
    author: "Prof. Hassan El Amrani",
    authorImage: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=200&q=80",
    date: "2025-10-25",
    readTime: "9 min read",
    tags: ["Leadership", "Business", "Management"],
  },
  {
    id: "6",
    title: "Getting Started with React Server Components",
    slug: "getting-started-react-server-components",
    excerpt: "A practical guide to building modern web applications with RSC.",
    content: "React Server Components represent a fundamental shift in how we build web applications. Learn how to leverage them for better performance and user experience...",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    category: "Technology",
    author: "Dr. Ahmed Mansour",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    date: "2025-10-15",
    readTime: "10 min read",
    tags: ["Technology", "React", "Web Development"],
  },
]

export const blogCategories = [
  "All",
  "Career Advice",
  "Study Tips",
  "Technology",
  "Languages",
  "Digital Marketing",
  "Design",
  "Leadership",
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
