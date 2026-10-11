import type { CSSProperties } from "react"
import { DetailImage } from "../../components/DetailImage"
import "./section06-driver-gallery.css"

const panelWidth = 1270
const panelHeight = 854

type DriverScreen = {
  alt: string
  src: string
  left: number
  top: number
  width: number
  height: number
}

// The first column references the unchanged app artwork. The other screens
// remain separate gallery assets in the exact positions of Figma node 69:3797.
const screens: DriverScreen[] = [
  { alt: "Driver onboarding", src: "/assets/driver-onboarding.png", left: 0, top: 0, width: 233, height: 462 },
  { alt: "Driver offline dashboard", src: "/assets/driver-offline.png", left: 0, top: 486, width: 233, height: 368 },
  { alt: "Driver online dashboard", src: "/assets/section-06-gallery/driver-online.png", left: 257, top: 0, width: 249, height: 306 },
  { alt: "Collect cash payment", src: "/assets/section-06-gallery/collect-cash.png", left: 257, top: 330, width: 249, height: 524 },
  { alt: "Earn stable monthly income", src: "/assets/section-06-gallery/monthly-income.png", left: 530, top: 0, width: 249, height: 528 },
  { alt: "Monthly ride pass earnings", src: "/assets/section-06-gallery/monthly-ride-pass.png", left: 530, top: 557, width: 249, height: 297 },
  { alt: "Confirm monthly ride enrollment", src: "/assets/section-06-gallery/confirm-enrollment.png", left: 803, top: 0, width: 249, height: 306 },
  { alt: "Active monthly ride dashboard", src: "/assets/section-06-gallery/active-monthly-ride.png", left: 803, top: 330, width: 249, height: 524 },
  { alt: "Enrollment success", src: "/assets/section-06-gallery/enrollment-success.png", left: 1076, top: 0, width: 194, height: 488 },
  { alt: "Monthly ride requests", src: "/assets/section-06-gallery/monthly-requests.png", left: 1076, top: 512, width: 194, height: 342 },
]

function screenPosition(screen: DriverScreen): CSSProperties {
  return {
    left: `${(screen.left / panelWidth) * 100}%`,
    top: `${(screen.top / panelHeight) * 100}%`,
    width: `${(screen.width / panelWidth) * 100}%`,
    height: `${(screen.height / panelHeight) * 100}%`,
    aspectRatio: `${screen.width} / ${screen.height}`,
  }
}

/** Standalone driver app gallery from Figma node 69:3797. */
export default function Section06DriverGallery() {
  return (
    <section className="safe-section-06" aria-label="Safe 2 Destination driver app screens" data-node-id="69:3797">
      <div className="safe-section-06-panel">
        {screens.map((screen) => (
          <div className="safe-section-06-screen" key={screen.src} style={screenPosition(screen)}>
            <DetailImage src={screen.src} alt={screen.alt} draggable="false" />
          </div>
        ))}
      </div>
    </section>
  )
}
