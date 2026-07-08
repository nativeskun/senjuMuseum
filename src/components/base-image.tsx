import Image, { ImageProps } from "next/image"
import { BASE_PATH } from "@/lib/path"

export default function BaseImage({ src, ...props }: ImageProps) {
  const finalSrc =
    typeof src === "string" && src.startsWith("/") && !src.startsWith(BASE_PATH)
      ? `${BASE_PATH}${src}`
      : src
  return <Image src={finalSrc} {...props} />
}
