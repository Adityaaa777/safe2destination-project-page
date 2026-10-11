import type { ReactNode } from "react"
import Section01ProjectNavigation from "./sections/section-01-project-navigation/Section01ProjectNavigation"
import Section01Preview from "./sections/section-01-project-navigation/Section01Preview"
import Section02Cover from "./sections/section-02-cover/Section02Cover"
import Section02Preview from "./sections/section-02-cover/Section02Preview"
import Section03ProjectSummary from "./sections/section-03-project-summary/Section03ProjectSummary"
import Section03Preview from "./sections/section-03-project-summary/Section03Preview"
import Section04ScreenGallery from "./sections/section-04-screen-gallery/Section04ScreenGallery"
import Section04Preview from "./sections/section-04-screen-gallery/Section04Preview"
import Section05AppExperience from "./sections/section-05-app-experience/Section05AppExperience"
import Section05Preview from "./sections/section-05-app-experience/Section05Preview"
import Section06DriverGallery from "./sections/section-06-driver-gallery/Section06DriverGallery"
import Section06Preview from "./sections/section-06-driver-gallery/Section06Preview"
import Section07DesignSystem from "./sections/section-07-design-system/Section07DesignSystem"
import Section07Preview from "./sections/section-07-design-system/Section07Preview"
import Section08RelatedProjects from "./sections/section-08-related-projects/Section08RelatedProjects"
import Section08Preview from "./sections/section-08-related-projects/Section08Preview"
import Section09Footer from "./sections/section-09-footer/Section09Footer"
import Section09Preview from "./sections/section-09-footer/Section09Preview"

const availableSections: Record<number, ReactNode> = {
  1: <Section01Preview />,
  2: <Section02Preview />,
  3: <Section03Preview />,
  4: <Section04Preview />,
  5: <Section05Preview />,
  6: <Section06Preview />,
  7: <Section07Preview />,
  8: <Section08Preview />,
  9: <Section09Preview />,
}

/** Compose the nine approved sections in their supplied sequence. */
function Safe2DestinationProjectPage() {
  return (
    <main className="safe-project-page">
      <header className="safe-project-page__navigation">
        <Section01ProjectNavigation
          backHref="../NZCU_PROJECT_PAGE/"
          nextHref="../CABZO_PROJECT_PAGE/"
        />
      </header>
      <Section02Cover />
      <Section03ProjectSummary />
      <Section04ScreenGallery />
      <Section05AppExperience />
      <Section06DriverGallery />
      <Section07DesignSystem />
      <Section08RelatedProjects />
      <Section09Footer />
    </main>
  )
}

/** Query parameters preserve the individual approved review URLs. */
export default function App() {
  const requestedSection = new URLSearchParams(window.location.search).get("section")
  const section = requestedSection === null ? null : Number(requestedSection)

  return section !== null && Number.isInteger(section) && availableSections[section]
    ? availableSections[section]
    : <Safe2DestinationProjectPage />
}
