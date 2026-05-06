export default function Home() {
  return (
    <div className="page">
      {/* ── Header ── */}
      <header className="header">
        <div className="logo">
          <svg viewBox="-6 -6 283 54" width="200" height="38" role="img" aria-label="Scalepoint">
            <rect x="0" y="10" width="32" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
            <rect x="18" y="0" width="32" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="25" cy="21" r="4" fill="currentColor"/>
            <text x="68" y="29" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="500" fontSize="22" letterSpacing="0.14em" fill="currentColor">SCALEPOINT</text>
          </svg>
        </div>

        <h1 className="headline">
          We build and run the data infrastructure for companies that don&apos;t have a data team
        </h1>

        <p className="subheadline">
          We build and manage the data layer for growing companies: dashboards,
          integrations, AI-powered analytics, and automated workflows. Deployed
          on your infrastructure, run by us.
        </p>
      </header>

      {/* ── The Problem ── */}
      <section className="section">
        <div className="section-label">The problem</div>
        <p>
          Your technology team keeps the lights on: infrastructure, security,
          vendor management, helpdesk. But the business keeps asking for more.
          Real-time dashboards. Connected systems. Intelligent automation.
          That&apos;s not an IT problem. It&apos;s a data and AI problem. And
          it&apos;s not what your team was built to solve.
        </p>
        <p>
          So it falls through the cracks. Finance builds their own spreadsheets.
          Sales tracks pipeline in their heads. Operations emails around CSV
          files. Every department has a different number for the same metric.
          You know you need a data capability, but building a full team from
          scratch takes months and costs a fortune.
        </p>
      </section>

      {/* ── What We Do ── */}
      <section className="section">
        <div className="section-label">What we do</div>
        <p>
          We become your data and AI team without you having to build one. We
          design, deploy, and manage your data infrastructure on your cloud, on
          your terms. Your technology team stays focused on what they&apos;re
          good at. Your business gets the dashboards, automations, and
          intelligence they&apos;ve been asking for.
        </p>
        <p>
          Everything we build lives on your infrastructure. You own it. We run
          it. No vendor lock-in, no black boxes, no six-month timelines.
        </p>
      </section>

      {/* ── Who We Work With ── */}
      <section className="section">
        <div className="section-label">Who we work with</div>
        <ul className="build-list">
          <li>
            Companies that have outgrown spreadsheets and manual reporting but
            aren&apos;t ready to build a full data function in-house.
          </li>
          <li>
            CIOs and IT leaders being pulled into data and analytics work that
            falls outside their team&apos;s core mandate.
          </li>
          <li>
            Chief Data and AI Officers standing up a new data capability and
            need execution capacity fast.
          </li>
          <li>
            Operations, finance, and revenue leaders who are tired of waiting
            weeks for answers that should take seconds.
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* ── Services ── */}
      <section className="section">
        <div className="section-label">Services</div>
        <ul className="services-list">
          <li>
            <div className="service-name">Self-Serve Dashboards &amp; Reporting</div>
            <div className="service-desc">
              Your leadership and operations teams get dashboards they can
              actually use, with no more emailing someone for a number. We
              define your metrics once, build a governed semantic layer, and
              make sure every report across the organization tells the same
              story.
            </div>
          </li>
          <li>
            <div className="service-name">Data Integration</div>
            <div className="service-desc">
              Connect your ERP, CRM, HRIS, accounting software, and other
              systems into a single source of truth. We handle the plumbing,
              from API connections to document extraction to warehouse design,
              so your data flows where it needs to go.
            </div>
          </li>
          <li>
            <div className="service-name">AI-Powered Analytics</div>
            <div className="service-desc">
              Ask your data questions in plain English and get answers in
              seconds. We build analytics agents that understand your business
              context and tailor responses to who&apos;s asking: your operations
              manager sees different insights than your CFO.
            </div>
          </li>
          <li>
            <div className="service-name">Workflow Automation</div>
            <div className="service-desc">
              That report your team builds manually every Monday? The invoice
              data someone re-keys from PDFs? The status updates someone copies
              between systems? We automate it. Less busy work, more real work.
            </div>
          </li>
          <li>
            <div className="service-name">Power Platform Projects</div>
            <div className="service-desc">
              Custom Power Apps, Power Automate flows, and Power BI solutions
              that extend what your Microsoft stack can do. Built for the way
              your organization actually works.
            </div>
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* ── How It Works ── */}
      <section className="section">
        <div className="section-label">How it works</div>
        <ul className="build-list">
          <li>
            We start with a discovery session: what&apos;s broken, what takes
            too long, what does leadership wish they could see.
          </li>
          <li>
            We assess your systems, data, and current capabilities, typically
            in one to two days.
          </li>
          <li>
            We propose a solution with a clear scope, cost, and timeline. Most
            engagements ship initial results in 4 to 8 weeks.
          </li>
          <li>
            We build and deploy on your infrastructure. You own everything.
          </li>
          <li>
            We stay on to manage, monitor, and evolve the solution as your
            needs grow.
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* ── CTA ── */}
      <section className="cta-section">
        <p className="cta-text">
          If your organization needs a data capability but isn&apos;t ready to
          build one from scratch, let&apos;s talk.
        </p>
        <a
          href="mailto:consult@scalepointdata.com"
          className="cta-link"
        >
          Get in touch &rarr;
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-left">© 2026 Scalepoint</div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/company/data-expert-services"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:consult@scalepointdata.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}
