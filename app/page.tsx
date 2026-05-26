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
          We embed with your team and build the data and AI projects you don&apos;t have the bandwidth to tackle yourself
        </h1>

        <p className="subheadline">
          Our engineers work alongside your team to ship data analytics and AI
          projects — dashboards, integrations, AI-powered analytics, and
          workflow automation. Built on your stack, owned by you.
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
          The projects that would actually move the needle keep getting pushed
          to next quarter.
        </p>
      </section>

      {/* ── What We Do ── */}
      <section className="section">
        <div className="section-label">What we do</div>
        <p>
          We send engineers who embed directly with your team to build the data
          and AI projects that keep getting deprioritized. We work alongside
          you — not as a vendor you hand work off to, but as technical partners
          who sit in your environment, use your tools, and ship real things.
        </p>
        <p>
          Everything we build lives on your infrastructure. You own it. No
          vendor lock-in, no black boxes, no six-month timelines.
        </p>
      </section>

      {/* ── Who We Work With ── */}
      <section className="section">
        <div className="section-label">Who we work with</div>
        <ul className="build-list">
          <li>
            Teams with a backlog of data and AI projects and no one to build
            them.
          </li>
          <li>
            CIOs and IT leaders being pulled into analytics work that falls
            outside their team&apos;s core mandate.
          </li>
          <li>
            Chief Data and AI Officers who need execution capacity fast — not
            more strategy decks.
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
            We start with a discovery session: what&apos;s on the backlog,
            what&apos;s blocking the team, what leadership has been asking for.
          </li>
          <li>
            We assess your systems, data, and current stack — typically in one
            to two days.
          </li>
          <li>
            We propose a clear scope, cost, and timeline. Most engagements ship
            initial results in 4 to 8 weeks.
          </li>
          <li>
            We embed with your team and build. We work in your environment,
            alongside your people, on your infrastructure.
          </li>
          <li>
            You own everything we build. We can stay on to evolve it as your
            needs grow.
          </li>
        </ul>
      </section>

      <hr className="divider" />

      {/* ── Case Studies ── */}
      <section className="section">
        <div className="section-label">Case studies</div>
        <ul className="case-studies-list">

          <li className="case-study">
            <div className="cs-meta">
              <span className="cs-tag">Self-Serve Dashboards &amp; Reporting</span>
              <span className="cs-sector">Municipal Government &middot; Ontario</span>
            </div>
            <h3 className="cs-title">
              From Spreadsheets to Real-Time Operations: A Public Works Dashboard Platform
            </h3>
            <div className="cs-body">
              <div className="cs-block">
                <div className="cs-block-label">The situation</div>
                <p>
                  A mid-size Ontario municipality&apos;s public works team was tracking
                  inspections, project status, and field activity across disconnected
                  spreadsheets and email chains. Leadership had no real-time visibility.
                  The IT team was being asked to produce reports their tools weren&apos;t
                  built for.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">What we built</div>
                <p>
                  We embedded with the IT and operations teams to design and deliver an
                  interactive Power BI reporting platform covering project analytics across
                  the organization. We applied a consistent design system — defined color
                  tokens, spacing scales, and typography — so every dashboard told a
                  coherent story. We also defined REST API contracts between the ERP and
                  operational systems, giving the dashboards a live, accurate data source
                  rather than stale exports.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">The outcome</div>
                <p>
                  Leadership gained a single, trusted view of project status across
                  departments. The IT team handed off a governed reporting platform they
                  own and maintain — no vendor dependency, no ongoing licensing cost.
                </p>
              </div>
            </div>
          </li>

          <li className="case-study">
            <div className="cs-meta">
              <span className="cs-tag">Data Integration</span>
              <span className="cs-sector">Data Products SaaS &middot; Canada</span>
            </div>
            <h3 className="cs-title">
              3&times; Faster Data Loads: Rebuilding a Broken Analytics Pipeline
            </h3>
            <div className="cs-body">
              <div className="cs-block">
                <div className="cs-block-label">The situation</div>
                <p>
                  A growing data products company had operational data locked inside SQL
                  Server with no reliable path to analytics. Stored procedures ran
                  sequentially, taking hours to complete. Power BI reports were surfacing
                  wrong numbers — missing columns and mismatched data types — and the
                  sales and marketing team had stopped trusting the dashboards entirely.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">What we built</div>
                <p>
                  We built end-to-end ETL pipelines extracting from SQL Server,
                  transforming via dbt and DuckDB, and writing partitioned Parquet files
                  to Azure Data Lake Storage. We authored parallelized Airflow DAGs for
                  stored procedure loads, cutting runtime by two-thirds. We fixed the
                  data type and column gaps in the source procedures that were corrupting
                  downstream reports. We also set up unit testing for the DAG suite using
                  pytest and flake8, wired into GitHub Actions for continuous validation.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">The outcome</div>
                <p>
                  Pipeline runtime dropped 3&times;. Sales and marketing reclaimed their
                  dashboards. The data team went from firefighting broken loads to
                  shipping new pipelines — the infrastructure now has tests, automation,
                  and documentation any engineer on the team can pick up.
                </p>
              </div>
            </div>
          </li>

          <li className="case-study">
            <div className="cs-meta">
              <span className="cs-tag">AI-Powered Analytics</span>
              <span className="cs-sector">Data Products SaaS &middot; Canada</span>
            </div>
            <h3 className="cs-title">
              Data Lineage at a Glance: Building a Self-Serve Data Product Registry
            </h3>
            <div className="cs-body">
              <div className="cs-block">
                <div className="cs-block-label">The situation</div>
                <p>
                  A data management SaaS company needed a product that let enterprise
                  customers find, understand, and request access to data products across
                  their organization. Development was slow: no shared component library,
                  inconsistent UI patterns, and a fragile API layer that was blocking
                  feature work every sprint.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">What we built</div>
                <p>
                  We led end-to-end frontend development of the Data Product Registry
                  on React, Remix, and TypeScript — 50&plus; reusable components across
                  20&plus; routes, shipped from zero to production. We established a shared
                  design system with consistent props APIs, theming tokens, and
                  documentation, which the broader team adopted for 70% of all new
                  feature development. For data lineage views, we built interactive graph
                  visualization using Cytoscape.js — handling pan, zoom, dynamic node
                  rendering, and custom styling — replacing a paid library that was
                  costing the company $20,000 per year.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">The outcome</div>
                <p>
                  Product development velocity increased 40%. The $20K annual library
                  subscription was eliminated. The component library became the
                  foundation the internal team builds on today.
                </p>
              </div>
            </div>
          </li>

          <li className="case-study">
            <div className="cs-meta">
              <span className="cs-tag">Workflow Automation</span>
              <span className="cs-sector">Municipal Government &middot; Ontario</span>
            </div>
            <h3 className="cs-title">
              Connecting Disconnected Systems: ERP Integration Across a Municipal Operations Stack
            </h3>
            <div className="cs-body">
              <div className="cs-block">
                <div className="cs-block-label">The situation</div>
                <p>
                  The municipality&apos;s ERP, CRM, and Parking Enforcement systems operated
                  in isolation. Staff were re-keying data between platforms manually.
                  Meanwhile, the People Analytics function was running on a legacy vendor
                  platform that was slow, expensive, and too rigid to adapt to the
                  organization&apos;s reporting needs.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">What we built</div>
                <p>
                  We designed and built integration service applications connecting the
                  ERP to the CRM and Parking Enforcement system via REST APIs, with admin
                  views for staff to monitor and manage data flows without IT
                  involvement. In parallel, we drove the migration of People Analytics
                  from the legacy vendor platform to a modern stack, re-architecting the
                  data layer for performance on large HR datasets.
                </p>
              </div>
              <div className="cs-block">
                <div className="cs-block-label">The outcome</div>
                <p>
                  Manual data re-entry across departments was eliminated. People Analytics
                  loads that previously timed out now run reliably. The IT team regained
                  time they had been spending on cross-system reconciliation every week.
                </p>
              </div>
            </div>
          </li>

        </ul>
      </section>

      <hr className="divider" />

      {/* ── CTA ── */}
      <section className="cta-section">
        <p className="cta-text">
          If you have data and AI projects that keep getting pushed to next
          quarter, let&apos;s talk.
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
