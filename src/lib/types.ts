export interface ImageItem {
  src: string
  description: string
}

export interface Topic {
  slug: string
  title: string
  description: string
  thumbnail: string
  color: string
  accentColor: string
  images: ImageItem[]
}

export interface TopicsConfig {
  topics: Topic[]
}
