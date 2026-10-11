import type { CSSProperties } from "react"
import { DetailImage } from "../../components/DetailImage"
import "./section02-cover.css"

const assetRoot = "/assets/section-02-cover"
const frameWidth = 1440
const frameHeight = 722
const mockupCanvasWidth = 673
const mockupPhoneLeft = 54
const mockupPhoneTop = 80
const mockupPhoneWidth = 565

type CoverShot = {
  alt: string
  src: string
  left: number
  top: number
  width: number
  mobile?: boolean
  screenInsideFrame?: boolean
}

// The uploaded mockups all share a 673px transparent canvas and a 565px phone.
// These coordinates position the visible phone frames from Figma node 65:547.
const coverShots: CoverShot[] = [
  { alt: "Active trip map", src: "trip-mockup.png", left: 813, top: -122, width: 189 },
  { alt: "Cash payment selection", src: "payment-mockup.png", left: 1022, top: -250, width: 189 },
  { alt: "Rider home screen", src: "rider-home-screen-original.png", left: 813, top: 278, width: 189, mobile: true, screenInsideFrame: true },
  { alt: "Driver offline dashboard", src: "driver-offline-mockup.png", left: 1022, top: 152, width: 189, mobile: true },
  { alt: "Driver map screen", src: "driver-map-mockup.png", left: 1232, top: 27, width: 188 },
  { alt: "Monthly rides screen", src: "monthly-rides-mockup.png", left: 1022, top: 552, width: 189 },
  { alt: "Monthly plan screen", src: "monthly-plan-mockup.png", left: 1232, top: 428, width: 188 },
]

function shotPosition(shot: CoverShot): CSSProperties {
  const scale = shot.width / mockupPhoneWidth
  return {
    left: `${((shot.left - mockupPhoneLeft * scale) / frameWidth) * 100}%`,
    top: `${((shot.top - mockupPhoneTop * scale) / frameHeight) * 100}%`,
    width: `${((mockupCanvasWidth * scale) / frameWidth) * 100}%`,
  }
}

/** Layered cover based on Figma node 65:547 and Cabzo's CoverSection. */
export default function Section02Cover() {
  return (
    <section className="safe-section-02" aria-labelledby="safe-cover-title" data-node-id="65:547">
      <img className="safe-section-02-artwork" src={`${assetRoot}/cover-artwork.png`} alt="" />

      <div className="safe-section-02-copy">
        <span className="safe-section-02-kicker">Ride Booking Application</span>
        <h1 id="safe-cover-title">Safe 2 Destination</h1>
        <p>
          Safe to Destination makes everyday travel simple and secure<br />
          with easy ride booking, trusted drivers, and real-time tracking
        </p>
      </div>

      <div className="safe-section-02-screens">
        {coverShots.map((shot) => shot.screenInsideFrame ? (
          <div
            key={shot.src}
            className="safe-section-02-shot safe-section-02-shot--mobile safe-section-02-rider-frame"
            style={shotPosition(shot)}
          >
            <img src={`${assetRoot}/rider-home-mockup.png`} alt="" draggable="false" />
            <DetailImage
              className="safe-section-02-rider-screen"
              src={`${assetRoot}/${shot.src}`}
              alt={shot.alt}
              draggable="false"
            />
            <span className="safe-section-02-rider-notch" aria-hidden="true" />
          </div>
        ) : (
          <DetailImage
            key={shot.src}
            className={`safe-section-02-shot${shot.mobile ? " safe-section-02-shot--mobile" : ""}`}
            style={shotPosition(shot)}
            src={`${assetRoot}/${shot.src}`}
            alt={shot.alt}
            draggable="false"
          />
        ))}
      </div>
    </section>
  )
}
