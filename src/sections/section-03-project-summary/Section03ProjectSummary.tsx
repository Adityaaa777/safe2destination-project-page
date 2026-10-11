import "./section03-project-summary.css"

function ProjectTypeGroup({ items }: { items: string[] }) {
  return (
    <section className="safe-summary-type-group">
      <h3>PROJECT TYPE :</h3>
      <div className="safe-summary-type-list">
        {items.map((item, index) => (
          <span className="safe-summary-type-pill" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}

/** Standalone project summary from Figma node 67:3788. */
export default function Section03ProjectSummary() {
  return (
    <section className="safe-section-03" aria-labelledby="safe-summary-title" data-node-id="67:3788">
      <h1 id="safe-summary-title">Safe 2 Destination Ride Booking App UI</h1>

      <section className="safe-summary-introduction" aria-labelledby="safe-introduction-title">
        <h2 id="safe-introduction-title">INTRODUCTION :</h2>
        <div className="safe-summary-copy">
          <p>
            Cabzo was designed as a modern urban mobility platform built to{" "}
            <br className="safe-summary-desktop-break" />
            simplify everyday commuting. <br className="safe-summary-desktop-break" />
            The focus of this product was to create a fast, visually clean, and{" "}
            <br className="safe-summary-desktop-break" />
            highly intuitive ride-booking experience for daily users who{" "}
            <br className="safe-summary-desktop-break" />
            prioritize speed, convenience, and real-time visibility.
          </p>

          <p>
            The platform was designed around the idea that booking a ride{" "}
            <br className="safe-summary-desktop-break" />
            should feel effortless — from location detection to ride{" "}
            <br className="safe-summary-desktop-break" />
            confirmation, every interaction was optimized to reduce friction.
          </p>

          <p>
            Cabzo combines a rider app, driver interface, and operational{" "}
            <br className="safe-summary-desktop-break" />
            backend into a connected mobility ecosystem.
          </p>
        </div>
      </section>

      <aside className="safe-summary-metadata" aria-label="Project metadata">
        <ProjectTypeGroup items={["Mobile App Design"]} />
        <ProjectTypeGroup items={["Mobile App Design", "Mobile App Design"]} />
      </aside>
    </section>
  )
}
