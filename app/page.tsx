export default function Home() {
  return (
    <div className="page">
      {/* ── Header ── */}
      <header className="header">
        <div className="logo">Scalepoint</div>

        <h1 className="headline">
          We build the internal software your team actually uses.
        </h1>

        <p className="subheadline">
          Data &amp; AI consulting for companies that have outgrown off-the-shelf
          tools but don&apos;t have the bandwidth to build what they need in-house.
        </p>
      </header>

      {/* ── The Problem ── */}
      <section className="section">
        <div className="section-label">The problem</div>
        <p>
          Most companies hit the same wall. You&apos;ve got the systems, the data,
          the people — but the tools that tie it all together don&apos;t exist yet.
        </p>
        <p>
          Your operators are duct-taping spreadsheets. Your managers are waiting
          on reports that should take seconds. Nobody&apos;s building the internal
          products that would make the business run smoother, because it&apos;s never
          urgent enough to make the roadmap.
        </p>
      </section>

      {/* ── What We Do ── */}
      <section className="section">
        <div className="section-label">What we do</div>
        <p>
          We design and ship custom internal tools, workflow apps, and data
          products that sit between your systems and the people who rely on
          them — so your team spends less time chasing information and more
          time acting on it.
        </p>
      </section>

      {/* ── What We Build ── */}
      <section className="section">
        <div className="section-label">What we build</div>
        <ul className="build-list">
          <li>
            Custom internal tools that replace the spreadsheets and workarounds
            slowing your team down.
          </li>
          <li>
            Self-serve dashboards and portals so decision-makers get answers
            without waiting on anyone.
          </li>
          <li>
            Workflow apps that automate the repetitive work your team does
            every week.
          </li>
          <li>
            Data products built on your existing stack — no rip and replace,
            no six-month timeline.
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* ── Services ── */}
      <section className="section">
        <div className="section-label">Services</div>
        <ul className="services-list">
          <li>
            <div className="service-name">Agentic Analytics &amp; AI Context Engineering</div>
            <div className="service-desc">
              AI-powered analytics agents that understand your business context.
              Ask questions in plain English, get SQL-backed answers tailored to
              who&apos;s asking — an analyst gets granular breakdowns, a CFO gets
              cost trends.
            </div>
          </li>
          <li>
            <div className="service-name">Analytics Dashboarding</div>
            <div className="service-desc">
              Semantic layers, governed metrics, and self-serve dashboards that
              your team actually trusts. We define your metrics once and make
              sure every report tells the same story.
            </div>
          </li>
          <li>
            <div className="service-name">Data Integration</div>
            <div className="service-desc">
              Connect your systems, clean your data, and build the pipelines
              that keep everything in sync. From PDF extraction to warehouse
              loading — we handle the plumbing so your team can focus on insight.
            </div>
          </li>
          <li>
            <div className="service-name">Power Platform Projects</div>
            <div className="service-desc">
              Custom Power Apps, Power Automate flows, and Power BI solutions
              that extend what your Microsoft stack can do. Built for the way
              your team actually works.
            </div>
          </li>
          <li>
            <div className="service-name">Workflow Automation</div>
            <div className="service-desc">
              Identify the repetitive, manual processes costing your team hours
              every week and turn them into reliable, automated workflows.
              Less busy work, more real work.
            </div>
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* ── CTA ── */}
      <section className="cta-section">
        <p className="cta-text">
          If your team is spending more time managing tools than doing real
          work, let&apos;s talk.
        </p>
        <a
          href="mailto:your-email@scalepoint.com"
          className="cta-link"
        >
          Get in touch →
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-left">© 2026 Scalepoint</div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/harshil4076"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:your-email@scalepoint.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}
