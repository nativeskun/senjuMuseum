import BaseImage from "@/components/base-image"
import type { ImageItem } from "@/lib/types"

interface TopicGalleryProps {
  images: ImageItem[]
  accentColor: string
}

export default function TopicGallery({ images, accentColor }: TopicGalleryProps) {
  return (
    <div className="flex flex-col items-center gap-12">
      {images.map((item) => (
        <figure key={item.src} className="flex w-full max-w-[90vh] flex-col gap-3">
          <div
            className="relative w-full overflow-hidden rounded-lg bg-white/10"
            style={{ borderWidth: 2, borderStyle: "solid", borderColor: accentColor }}
          >
            <BaseImage
              src={item.src}
              alt={item.description.replace(/<[^>]*>/g, "")}
              width={0}
              height={0}
              sizes="90vh"
              className="h-auto w-full rounded-lg"
            />
          </div>
          <figcaption
            className="text-center text-sm font-medium"
            style={{ color: accentColor }}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </figure>
      ))}
    </div>
  )
}
