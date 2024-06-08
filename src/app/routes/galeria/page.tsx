import ClientOnlyMotion from "@/components/Transition/ClientOnlyMotion"
import { Gallery } from "@/components/gallery/gallery"

export default function galeria() {
  return (
    <ClientOnlyMotion>
      <div className="content">
        <Gallery />
      </div>
    </ClientOnlyMotion>
  )
}