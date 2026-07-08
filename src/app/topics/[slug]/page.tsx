import { topicsConfig } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import TopicGallery from "@/components/topic-gallery"

export async function generateStaticParams() {
  return topicsConfig.topics.map((topic) => ({ slug: topic.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/topics/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const topic = topicsConfig.topics.find((t) => t.slug === slug)
  if (!topic) return { title: "Not Found" }
  return {
    title: topic.title,
    description: topic.description,
  }
}

export default async function TopicPage({
  params,
}: PageProps<"/topics/[slug]">) {
  const { slug } = await params
  const topic = topicsConfig.topics.find((t) => t.slug === slug)

  if (!topic) {
    notFound()
  }

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          {topic.title}
        </h1>
        <p
          className="mt-2 text-lg text-white/80"
          dangerouslySetInnerHTML={{ __html: topic.description }}
        />
      </div>

      <TopicGallery images={topic.images} accentColor={topic.accentColor} />
    </main>
  )
}
