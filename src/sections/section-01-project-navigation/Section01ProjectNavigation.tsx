import "./section01-project-navigation.css"

export type Section01ProjectNavigationProps = {
  backHref: string
  nextHref: string
}

/** Safe 2 Destination navigation, Figma node 65:1707. */
export default function Section01ProjectNavigation({
  backHref,
  nextHref,
}: Section01ProjectNavigationProps) {
  return (
    <nav
      className="safe-section-01-nav"
      aria-label="Project navigation"
      data-node-id="65:1707"
    >
      <a className="safe-section-01-link" href={backHref} data-node-id="65:1708">
        <span className="safe-section-01-icon" data-node-id="65:1709">
          <img src="/assets/arrow-left.svg" alt="" />
        </span>
        <span data-node-id="65:1711">Go Back</span>
      </a>

      <a className="safe-section-01-link" href={nextHref} data-node-id="65:1712">
        <span data-node-id="65:1713">Next Project</span>
        <span
          className="safe-section-01-icon safe-section-01-icon--next"
          data-node-id="65:1714"
        >
          <img src="/assets/arrow-right.svg" alt="" />
        </span>
      </a>
    </nav>
  )
}
