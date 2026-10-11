import { useRef } from "react"
import "./section08-related-projects.css"

const projects = [
  {
    title: "Nzcu",
    description: "Book cars, scooters, e-rickshaws, and loaders—all from one platform.",
    image: "/assets/cover-nzcu.png",
  },
  {
    title: "Corezap",
    description: "Manage rides and fleet operations from one intelligent platform.",
    image: "/assets/cover-corezap.png",
  },
  {
    title: "Cabzo",
    description: "A smart ride booking app designed for fast, convenient, and reliable travel.",
    image: "/assets/cover-cabzo.png",
  },
]

/** Standalone related project carousel from Figma node 67:3793. */
export default function Section08RelatedProjects() {
  const track = useRef<HTMLDivElement>(null)
  const move = (direction: -1 | 1) => {
    const element = track.current
    if (!element) return
    const card = element.querySelector<HTMLElement>(".safe-related-card")
    element.scrollBy({ left: direction * (card?.offsetWidth ?? 400) + direction * 32, behavior: "smooth" })
  }

  return (
    <section className="safe-section-08" aria-labelledby="safe-related-title" data-node-id="67:3793">
      <div className="safe-related-content">
        <header className="safe-related-header">
          <h2 id="safe-related-title">Related Projects</h2>
          <nav className="safe-related-controls" aria-label="Related project carousel">
            <button type="button" onClick={() => move(-1)} aria-label="Previous projects"><img src="/assets/arrow-left.svg" alt="" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next projects"><img src="/assets/arrow-left.svg" alt="" /></button>
          </nav>
        </header>
        <div className="safe-related-track" ref={track}>
          {projects.map((project) => (
            <article className="safe-related-card" key={project.title}>
              <img className="safe-related-cover" src={project.image} alt={`${project.title} project cover`} />
              <div className="safe-related-card-content">
                <div className="safe-related-meta">
                  <span>Mobile App Design</span>
                  <span className="safe-related-card-arrow" aria-hidden="true">
                    <img src="/assets/section-08-related/project-arrow-alt.svg" alt="" />
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
