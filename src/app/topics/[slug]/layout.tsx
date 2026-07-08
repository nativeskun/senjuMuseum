import { topicsConfig } from "@/lib/data"
import { notFound } from "next/navigation"

export default async function TopicLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = topicsConfig.topics.find((t) => t.slug === slug)

  if (!topic) {
    notFound()
  }

  return (
    <>
      <style>{`
        body {
          --topic-color: ${topic.color};
          --topic-accent: ${topic.accentColor};
        }
      `}</style>
      {children}
    </>
  )
}
