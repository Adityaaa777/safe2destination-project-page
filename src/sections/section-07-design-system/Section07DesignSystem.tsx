import "./section07-design-system.css"

const swatches = [
  { hex: "#FF9D08", label: "FF9D08" },
  { hex: "#035EFC", label: "035EFC" },
  { hex: "#EDC13D", label: "EDC13D" },
  { hex: "#FFFFFF", label: "FFFFFF" },
]

const typography = [
  { label: "Heading", size: "36px", weight: "heading" },
  { label: "Subheading", size: "24px", weight: "subheading" },
  { label: "Body", size: "16px", weight: "body" },
  { label: "Body light", size: "16px", weight: "light" },
  { label: "Body Bold", size: "16px", weight: "bold" },
]

/** Safe 2 Destination palette and type specimen from Figma node 67:3792. */
export default function Section07DesignSystem() {
  return (
    <section className="safe-section-07" aria-label="Safe 2 Destination design system" data-node-id="67:3792">
      <div className="safe-section-07-panel">
        <section className="safe-design-colors" aria-labelledby="safe-design-colors-title">
          <h2 id="safe-design-colors-title">Colors</h2>
          <div className="safe-design-rule" />
          <div className="safe-design-swatches">
            {swatches.map((swatch) => (
              <figure key={swatch.label}>
                <div className="safe-design-swatch" style={{ backgroundColor: swatch.hex }} />
                <figcaption>{swatch.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="safe-design-typography" aria-labelledby="safe-design-typography-title">
          <h2 id="safe-design-typography-title">Typography</h2>
          <div className="safe-design-rule" />
          <div className="safe-design-type-card">
            <header>
              <h3>Plus Jakarta Sans</h3>
              <div className="safe-design-alphabet" aria-label="Plus Jakarta Sans character set">
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>abcdefghijklmnopqrstuvwxyz</p>
              </div>
            </header>
            <div className="safe-design-type-rows">
              {typography.map((row) => (
                <div className={`safe-design-type-row safe-design-type-row--${row.weight}`} key={row.label}>
                  <p>Your destination is just one ride away.</p>
                  <span>{row.label}</span>
                  <span>{row.size}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
