import "./section09-footer.css"

const icons = "/assets/section-09-footer"

/** Closing project footer from Figma node 65:1750. */
export default function Section09Footer() {
  return (
    <footer className="safe-section-09" aria-labelledby="safe-footer-title" data-node-id="65:1750">
      <div className="safe-footer-content">
        <h2 id="safe-footer-title">Thanks for Exploring <span>This Project</span></h2>
        <div className="safe-footer-message">
          <p>I hope you enjoyed the process as much as I enjoyed creating it.</p>
          <p>Let’s build something impactful together.</p>
        </div>
        <div className="safe-footer-actions">
          <span className="safe-footer-contact">Contact Me <img src={`${icons}/send.svg`} alt="" /></span>
          <a className="safe-footer-projects" href="/?section=8">Explore More Projects <img src={`${icons}/arrow-right.svg`} alt="" /></a>
        </div>
        <div className="safe-footer-links" aria-label="Contact options">
          <span><img src={`${icons}/email.svg`} alt="" />Email</span>
          <span><img src={`${icons}/linkedin.svg`} alt="" />LinkedIn</span>
          <span><img src={`${icons}/phone.svg`} alt="" />Phone no.</span>
        </div>
      </div>
      <div className="safe-footer-copyright">©&nbsp; 2026, Shruti</div>
    </footer>
  )
}
