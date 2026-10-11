import { useEffect, useRef, useState } from "react"

const assets = "/assets"

type Screen = { src: string; alt: string; label: string }

const screens: Screen[] = [
  { src: `${assets}/user-onboarding.png`, alt: "Safe 2 Destination rider onboarding screen", label: "Rider onboarding" },
  { src: `${assets}/user-home.png`, alt: "Safe 2 Destination rider home screen", label: "Rider home" },
  { src: `${assets}/driver-onboarding.png`, alt: "Safe 2 Destination driver onboarding screen", label: "Driver onboarding" },
  { src: `${assets}/driver-offline.png`, alt: "Safe 2 Destination driver dashboard", label: "Driver dashboard" },
]

const projects = [
  { name: "Nzcu", image: "cover-nzcu.png", type: "Mobile App Design", description: "Book cars, scooters, e-rickshaws, and loaders—all from one platform.", href: "../NZCU_PROJECT_PAGE/" },
  { name: "Corezap", image: "cover-corezap.png", type: "Mobile App Design", description: "Manage rides and fleet operations from one intelligent platform.", href: "" },
  { name: "Cabzo", image: "cover-cabzo.png", type: "Mobile App Design", description: "A smart ride booking app designed for fast, convenient, and reliable travel.", href: "../CABZO_PROJECT_PAGE/" },
]

function Navigation() {
  return (
    <nav className="project-navigation" aria-label="Project navigation" data-node-id="65:1707">
      <a href="../NZCU_PROJECT_PAGE/">
        <img src={`${assets}/arrow-left.svg`} alt="" />
        <span>Go Back</span>
      </a>
      <a href="#related-projects">
        <span>Next Project</span>
        <img className="nav-next-icon" src={`${assets}/arrow-right.svg`} alt="" />
      </a>
    </nav>
  )
}

function Cover() {
  return (
    <section className="cover-section" aria-label="Safe 2 Destination project cover" data-node-id="67:3787">
      <img className="cover-image" src={`${assets}/cover-safe2destination.png`} alt="Safe 2 Destination ride booking app with rider and driver screens" />
      <div className="cover-copy-mask" />
      <div className="cover-copy">
        <span>Ride Booking Application</span>
        <h1>Safe 2 Destination</h1>
        <p>Safe to Destination makes everyday travel simple and secure<br className="cover-desktop-break" /> with easy ride booking, trusted drivers, and real-time tracking</p>
      </div>
      <div className="cover-bottom-fade" />
    </section>
  )
}

function Overview() {
  return (
    <section className="overview-section page-gutter" id="project-overview" aria-labelledby="project-title" data-node-id="67:3788">
      <h1 id="project-title">Safe 2 Destination Ride Booking App UI</h1>
      <div className="overview-grid">
        <div className="overview-copy">
          <h2>INTRODUCTION :</h2>
          <p>Safe 2 Destination brings everyday travel into one simple, secure experience. Riders can find a journey, book a trusted driver, and follow their trip in real time.</p>
          <p>The product supports daily rides and fixed monthly routes, making familiar commutes easier to plan and manage.</p>
          <p>Rider and driver experiences work together to keep booking, trip updates, and earnings clear from start to finish.</p>
        </div>
        <aside className="overview-meta" aria-label="Project details">
          <div><h2>PROJECT TYPE :</h2><span className="meta-pill">Mobile App Design</span></div>
          <div><h2>PLATFORMS :</h2><span className="meta-pill">User App</span><span className="meta-pill">Driver App</span></div>
        </aside>
      </div>
    </section>
  )
}

function ScreenButton({ screen, onOpen, className = "" }: { screen: Screen; onOpen: (screen: Screen) => void; className?: string }) {
  return (
    <button className={`screen-button ${className}`} type="button" onClick={() => onOpen(screen)} aria-label={`Enlarge ${screen.label}`}>
      <img src={screen.src} alt={screen.alt} loading="lazy" />
    </button>
  )
}

function UserGallery({ onOpen }: { onOpen: (screen: Screen) => void }) {
  return (
    <section className="gallery-section page-gutter" aria-labelledby="user-gallery-heading" data-node-id="67:3789">
      <div className="gallery-panel user-gallery-panel">
        <div className="gallery-title"><h2 id="user-gallery-heading">A simpler way to get moving</h2><p>From a welcoming start to a clear view of every ride option.</p></div>
        <div className="user-gallery-phones">
          <ScreenButton screen={screens[0]} onOpen={onOpen} />
          <ScreenButton screen={screens[1]} onOpen={onOpen} />
        </div>
      </div>
    </section>
  )
}

function AppComparison({ onOpen }: { onOpen: (screen: Screen) => void }) {
  return (
    <section className="comparison-section page-gutter" aria-label="Rider and driver app screens" data-node-id="69:3798">
      <div className="comparison-panel">
        <div className="comparison-headings">
          <div><h2>User App</h2><p>Onboarding &amp; Home Experience</p></div>
          <div><h2>Driver App</h2><p>Onboarding &amp; Home Dashboard</p></div>
        </div>
        <div className="comparison-screens">
          {screens.map((screen) => <ScreenButton key={screen.src} screen={screen} onOpen={onOpen} />)}
        </div>
      </div>
    </section>
  )
}

function DriverGallery({ onOpen }: { onOpen: (screen: Screen) => void }) {
  return (
    <section className="gallery-section page-gutter" aria-labelledby="driver-gallery-heading" data-node-id="69:3797">
      <div className="gallery-panel driver-gallery-panel">
        <div className="gallery-title"><h2 id="driver-gallery-heading">Built for the people behind the wheel</h2><p>A focused driver experience for getting ready, going online, and staying informed.</p></div>
        <div className="driver-gallery-phones">
          <ScreenButton screen={screens[2]} onOpen={onOpen} />
          <ScreenButton screen={screens[3]} onOpen={onOpen} />
        </div>
      </div>
    </section>
  )
}

const swatches = [
  { name: "Orange", hex: "#FF9D0A" },
  { name: "Blue", hex: "#035EFC" },
  { name: "Gold", hex: "#EDC13D" },
  { name: "White", hex: "#FFFFFF" },
]

function DesignSystem() {
  return (
    <section className="design-section page-gutter" aria-label="Safe 2 Destination design system" data-node-id="67:3792">
      <div className="design-panel">
        <div className="design-block"><h2>Colors</h2><div className="design-rule" /><div className="swatches">{swatches.map((swatch) => <figure key={swatch.hex}><div className="swatch" style={{ background: swatch.hex }} /><figcaption>{swatch.name}<small>{swatch.hex}</small></figcaption></figure>)}</div></div>
        <div className="design-block typography-block"><h2>Typography</h2><div className="design-rule" /><div className="type-specimen"><div className="type-header"><strong>Plus Jakarta Sans</strong><span>ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</span></div><div className="type-divider" /><div className="type-row"><b>Your destination is just<br />one ride away.</b><span>Heading</span><span>56px</span></div><div className="type-row"><b>Your destination is just one<br />ride away.</b><span>Subheading</span><span>24px</span></div><div className="type-row"><p>Your destination is just one ride away.</p><span>Body</span><span>16px</span></div><div className="type-row"><p>Your destination is just one ride away.</p><span>Body Light</span><span>16px</span></div><div className="type-row"><b>Your destination is just one ride away.</b><span>Body Bold</span><span>16px</span></div></div></div>
      </div>
    </section>
  )
}

function RelatedProjects() {
  const track = useRef<HTMLDivElement>(null)
  function move(direction: -1 | 1) { track.current?.scrollBy({ left: direction * 430, behavior: "smooth" }) }
  return (
    <section className="related-section page-gutter" id="related-projects" aria-labelledby="related-heading" data-node-id="67:3793">
      <div className="related-heading"><h2 id="related-heading">Related Projects</h2><div className="carousel-buttons"><button type="button" aria-label="Previous projects" onClick={() => move(-1)}>←</button><button type="button" aria-label="Next projects" onClick={() => move(1)}>→</button></div></div>
      <div className="related-track" ref={track}>{projects.map((project) => <article className="related-card" key={project.name}><img src={`${assets}/${project.image}`} alt={`${project.name} project cover`} loading="lazy" /><div className="related-card-content"><div className="related-card-meta"><span>{project.type}</span>{project.href ? <a href={project.href} aria-label={`Explore ${project.name} project`}>↗</a> : <span className="related-card-arrow" aria-hidden="true">↗</span>}</div><h3>{project.name}</h3><p>{project.description}</p></div></article>)}</div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-section" data-node-id="65:1750">
      <div className="footer-main"><h2>Thanks for Exploring <span>This Project</span></h2><p>I hope you enjoyed the process as much as I enjoyed creating it.<br />Let&apos;s build something impactful together.</p><div className="footer-actions"><a className="footer-outline" href="mailto:?subject=Safe%202%20Destination%20project">Contact Me <span>↗</span></a><a className="footer-solid" href="#related-projects">Explore More Projects <span>→</span></a></div><div className="footer-links"><a href="mailto:?subject=Safe%202%20Destination%20project">✉&nbsp; Email</a><span /><a href="#related-projects">More Projects</a></div></div><div className="copyright">© 2026, Shruti</div>
    </footer>
  )
}

function Lightbox({ screen, onClose }: { screen: Screen; onClose: () => void }) {
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose() }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey) }, [onClose])
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={screen.label} onClick={onClose}><figure onClick={(event) => event.stopPropagation()}><button type="button" onClick={onClose} aria-label="Close image">×</button><img src={screen.src} alt={screen.alt} /><figcaption>{screen.label}</figcaption></figure></div>
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen | null>(null)
  return <main className="project-page"><Navigation /><Cover /><Overview /><UserGallery onOpen={setActiveScreen} /><AppComparison onOpen={setActiveScreen} /><DriverGallery onOpen={setActiveScreen} /><DesignSystem /><RelatedProjects /><Footer />{activeScreen && <Lightbox screen={activeScreen} onClose={() => setActiveScreen(null)} />}</main>
}
