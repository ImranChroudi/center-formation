export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: string
  width: number
  height: number
}

export const galleryItems: GalleryItem[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1523050854058-8df90110c341?w=800&q=80", alt: "Modern classroom with students", category: "Classrooms", width: 800, height: 600 },
  { id: "2", src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80", alt: "Computer laboratory", category: "Labs", width: 800, height: 1000 },
  { id: "3", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", alt: "Graduation ceremony", category: "Events", width: 800, height: 600 },
  { id: "4", src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", alt: "Students collaborating in library", category: "Activities", width: 800, height: 600 },
  { id: "5", src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80", alt: "Campus building", category: "Campus", width: 800, height: 600 },
  { id: "6", src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", alt: "IT classroom session", category: "Classrooms", width: 800, height: 900 },
  { id: "7", src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80", alt: "Language class in session", category: "Classrooms", width: 800, height: 600 },
  { id: "8", src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80", alt: "Business meeting workshop", category: "Events", width: 800, height: 600 },
  { id: "9", src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", alt: "Students working in lab", category: "Labs", width: 800, height: 600 },
  { id: "10", src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&q=80", alt: "Graduates celebrating", category: "Graduations", width: 800, height: 1000 },
  { id: "11", src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", alt: "Library study area", category: "Campus", width: 800, height: 600 },
  { id: "12", src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80", alt: "Reception area", category: "Campus", width: 800, height: 600 },
]

export const galleryCategories = ["All", "Classrooms", "Labs", "Events", "Graduations", "Campus", "Activities"]
