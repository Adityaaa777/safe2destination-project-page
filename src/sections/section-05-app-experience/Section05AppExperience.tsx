import { DetailImage } from "../../components/DetailImage"
import "./section05-app-experience.css"

const experiences = [
  {
    title: "User App",
    subtitle: "Onboarding & Home Experience",
    className: "safe-experience-group--user",
    screens: [
      { src: "/assets/user-onboarding.png", alt: "Safe 2 Destination rider onboarding screen" },
      { src: "/assets/user-home.png", alt: "Safe 2 Destination rider home screen" },
    ],
  },
  {
    title: "Driver App",
    subtitle: "Onboarding & Home Dashboard",
    className: "safe-experience-group--driver",
    screens: [
      { src: "/assets/driver-onboarding.png", alt: "Safe 2 Destination driver onboarding screen" },
      { src: "/assets/driver-offline.png", alt: "Safe 2 Destination driver home dashboard" },
    ],
  },
] as const

/** The four original app screens from Figma section 69:3798. */
export default function Section05AppExperience() {
  return (
    <section className="safe-section-05" aria-label="User and driver app experience" data-node-id="69:3798">
      <div className="safe-section-05-panel">
        {experiences.map((experience) => (
          <section className={`safe-experience-group ${experience.className}`} key={experience.title}>
            <div className="safe-experience-copy">
              <h2>{experience.title}</h2>
              <p>{experience.subtitle}</p>
            </div>
            <div className="safe-experience-screens">
              {experience.screens.map((screen) => (
                <DetailImage key={screen.src} src={screen.src} alt={screen.alt} draggable="false" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
