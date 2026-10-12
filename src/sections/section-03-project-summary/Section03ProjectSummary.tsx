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
            Safe 2 Destination was designed to make everyday travel{" "}
            <br className="safe-summary-desktop-break" />
            feel simple and secure. <br className="safe-summary-desktop-break" />
            Riders can book trips, track their journey, and manage{" "}
            <br className="safe-summary-desktop-break" />
            monthly rides through a clear, reassuring app experience{" "}
            <br className="safe-summary-desktop-break" />
            built around safer travel.
          </p>

          <p>
            The rider flow includes trip confirmation, rescheduling,{" "}
            <br className="safe-summary-desktop-break" />
            monthly passes, and pass renewal to keep regular{" "}
            <br className="safe-summary-desktop-break" />
            journeys easy to manage.
          </p>

          <p>
            A companion driver app supports availability, trip updates,{" "}
            <br className="safe-summary-desktop-break" />
            monthly requests, and income tracking.
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
