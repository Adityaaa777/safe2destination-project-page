import Section01ProjectNavigation from "./Section01ProjectNavigation"

/** Isolated review canvas for the first supplied Figma section. */
export default function Section01Preview() {
  return (
    <main className="safe-section-01-preview">
      <Section01ProjectNavigation
        backHref="../NZCU_PROJECT_PAGE/"
        nextHref="../CABZO_PROJECT_PAGE/"
      />
    </main>
  )
}
