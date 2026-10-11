import type { CSSProperties } from "react"
import { DetailImage } from "../../components/DetailImage"
import "./section04-screen-gallery.css"

const galleryWidth = 1270
const galleryHeight = 855
type GalleryScreen = {
  alt: string
  src: string
  left: number
  top: number
  width: number
  height: number
  imageWidth?: number
  imageLeft?: number
  imageTop?: number
}

// Keep each Figma gallery slot separate so its asset can be swapped for the
// original export without changing the layout.
const screens: GalleryScreen[] = [
  { alt: "Rider onboarding", src: "/assets/user-onboarding.png", left: 0, top: 0, width: 190, height: 338, imageWidth: 249, imageLeft: -59, imageTop: -195 },
  { alt: "Rider home and booking options", src: "/assets/section-02-cover/rider-home-screen-original.png", left: 0, top: 362, width: 190, height: 493, imageWidth: 249, imageLeft: -59 },
  { alt: "Confirmed monthly ride", src: "/assets/section-04-gallery/ride-confirmed-2x.png", left: 213, top: 0, width: 232, height: 535 },
  { alt: "Renew monthly pass", src: "/assets/section-04-gallery/renew-pass-2x.png", left: 213, top: 559, width: 232, height: 296 },
  { alt: "Reschedule a ride", src: "/assets/section-04-gallery/reschedule-ride-2x.png", left: 469, top: 0, width: 243, height: 395 },
  { alt: "Completed morning ride", src: "/assets/section-04-gallery/ride-completed-2x.png", left: 469, top: 419, width: 249, height: 436 },
  { alt: "Monthly ride pass dashboard", src: "/assets/section-04-gallery/monthly-pass-2x.png", left: 742, top: 0, width: 310, height: 830 },
  { alt: "Renewed pass confirmation", src: "/assets/section-04-gallery/pass-renewed-2x.png", left: 1076, top: 0, width: 194, height: 419 },
  { alt: "Rider home screen", src: "/assets/user-home.png", left: 1076, top: 443, width: 194, height: 412, imageWidth: 249 },
]

function screenPosition(screen: GalleryScreen): CSSProperties {
  return {
    left: `${(screen.left / galleryWidth) * 100}%`,
    top: `${(screen.top / galleryHeight) * 100}%`,
    width: `${(screen.width / galleryWidth) * 100}%`,
    height: `${(screen.height / galleryHeight) * 100}%`,
    aspectRatio: `${screen.width} / ${screen.height}`,
  }
}

function imagePosition(screen: GalleryScreen): CSSProperties {
  if (!screen.imageWidth) return {}
  return {
    width: `${(screen.imageWidth / screen.width) * 100}%`,
    left: `${((screen.imageLeft ?? 0) / screen.width) * 100}%`,
    top: `${((screen.imageTop ?? 0) / screen.height) * 100}%`,
  }
}

/** Isolated app screen gallery from Figma node 67:3789. */
export default function Section04ScreenGallery() {
  return (
    <section className="safe-section-04" aria-label="Safe 2 Destination app screen gallery" data-node-id="67:3789">
      <div className="safe-section-04-panel">
        {screens.map((screen) => (
          <div
            className="safe-section-04-screen"
            key={`${screen.src}-${screen.left}-${screen.top}`}
            style={screenPosition(screen)}
          >
            <DetailImage src={screen.src} alt={screen.alt} style={imagePosition(screen)} draggable="false" />
          </div>
        ))}
      </div>
    </section>
  )
}
