export type CaseStudy = {
  slug: string
  tag: string
  sector: string
  title: string
  preview: string
  situation: string[]
  whatWeBuilt: string[]
  outcome: string[]
  image?: string
  imageAlt?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'municipal-operations-analytics-platform',
    tag: 'Self-Serve Dashboards & Reporting',
    sector: 'Municipal Government · Ontario',
    title: 'One Version of the Truth: A Municipal Operations Analytics Platform on Microsoft Fabric',
    preview:
      'Five disconnected source systems. Finance, public works, 311, tax, and spreadsheets — none talking to each other. We built a unified analytics platform on Microsoft Fabric that delivered live Power BI dashboards to leadership in four weeks.',
    situation: [
      'A mid-size Ontario municipality had five operational data sources — their financial ERP, a Cityworks work order system, a 311 service request platform, a tax and billing system, and dozens of department spreadsheets in SharePoint and Excel — none of which talked to each other. Finance ran budget reports from manual exports. Public works had no live view of open work orders. The 311 team couldn\'t surface service request trends without pulling raw data and rebuilding it in Excel every week. Leadership was making decisions from numbers that were weeks old and often contradicted each other depending on who you asked.',
    ],
    whatWeBuilt: [
      'We designed and delivered a unified Municipal Operations Analytics Platform on Microsoft Fabric, hosted in Canada Central to meet data residency requirements — on the municipality\'s own tenant with no vendor lock-in.',
      'All five source systems were connected through Azure Data Factory pipelines and Dataflows Gen2, landing raw data into a Bronze Lakehouse in OneLake. From there, data was cleaned and conformed in a Silver Lakehouse, then modeled into a Gold Warehouse using a star schema in T-SQL. A single semantic model sits on top — metrics defined once, used everywhere — connected to Power BI via Direct Lake for fast, live reporting.',
      'We delivered three Power BI dashboards in two phases: a Budget & Finance dashboard and Operational KPIs dashboard in weeks one through four, followed by a Capital Projects dashboard and Public Works + 311 view in weeks five through eight. We also wired up Data Activator to send threshold alerts directly to Teams and email, so the operations team gets notified without needing to check a dashboard. Microsoft Entra ID handles authentication and row-level security, and Microsoft Purview tracks lineage and sensitivity labels across the platform.',
    ],
    outcome: [
      'Leadership now has a single, trusted number for every metric — budget vs. actuals, open work orders, 311 response times, capital project spend — pulled live from source systems. Department heads self-serve their own reports. The IT team owns the entire platform on their own infrastructure and Microsoft tenant, with no third-party analytics vendor involved. Initial dashboards went live in four weeks.',
    ],
    image: '/case-studies/municipal-architecture.png',
    imageAlt: 'Reference architecture diagram for the Municipal Operations Analytics Platform — Microsoft Fabric, Azure Data Factory, OneLake medallion, and Power BI',
  },
  {
    slug: 'analytics-pipeline-rebuild',
    tag: 'Data Integration',
    sector: 'Data Products SaaS · Canada',
    title: '3× Faster Data Loads: Rebuilding a Broken Analytics Pipeline',
    preview:
      'Sequential stored procedures taking hours to run. Power BI reports surfacing wrong numbers. Sales and marketing had stopped trusting the dashboards entirely. We rebuilt the pipeline from scratch and cut runtime by two-thirds.',
    situation: [
      'A growing data products company had operational data locked inside SQL Server with no reliable path to analytics. Stored procedures ran sequentially, taking hours to complete. Power BI reports were surfacing wrong numbers — missing columns and mismatched data types — and the sales and marketing team had stopped trusting the dashboards entirely.',
    ],
    whatWeBuilt: [
      'We built end-to-end ETL pipelines extracting from SQL Server, transforming via dbt and DuckDB, and writing partitioned Parquet files to Azure Data Lake Storage. We authored parallelized Airflow DAGs for stored procedure loads, cutting runtime by two-thirds. We fixed the data type and column gaps in the source procedures that were corrupting downstream reports. We also set up unit testing for the DAG suite using pytest and flake8, wired into GitHub Actions for continuous validation.',
    ],
    outcome: [
      'Pipeline runtime dropped 3×. Sales and marketing reclaimed their dashboards. The data team went from firefighting broken loads to shipping new pipelines — the infrastructure now has tests, automation, and documentation any engineer on the team can pick up.',
    ],
  },
  {
    slug: 'data-product-registry',
    tag: 'AI-Powered Analytics',
    sector: 'Data Products SaaS · Canada',
    title: 'Data Lineage at a Glance: Building a Self-Serve Data Product Registry',
    preview:
      'No shared component library, inconsistent UI, a fragile API layer blocking every sprint. We led full frontend development of a data discovery product — 50+ components, zero to production — and cut a $20K annual library cost along the way.',
    situation: [
      'A data management SaaS company needed a product that let enterprise customers find, understand, and request access to data products across their organization. Development was slow: no shared component library, inconsistent UI patterns, and a fragile API layer that was blocking feature work every sprint.',
    ],
    whatWeBuilt: [
      'We led end-to-end frontend development of the Data Product Registry on React, Remix, and TypeScript — 50+ reusable components across 20+ routes, shipped from zero to production. We established a shared design system with consistent props APIs, theming tokens, and documentation, which the broader team adopted for 70% of all new feature development. For data lineage views, we built interactive graph visualization using Cytoscape.js — handling pan, zoom, dynamic node rendering, and custom styling — replacing a paid library that was costing the company $20,000 per year.',
    ],
    outcome: [
      'Product development velocity increased 40%. The $20K annual library subscription was eliminated. The component library became the foundation the internal team builds on today.',
    ],
  },
  {
    slug: 'erp-integration-people-analytics',
    tag: 'Workflow Automation',
    sector: 'Municipal Government · Ontario',
    title: 'Connecting Disconnected Systems: ERP Integration Across a Municipal Operations Stack',
    preview:
      'ERP, CRM, and Parking Enforcement running in complete isolation. Staff re-keying data manually between systems. People Analytics stuck on a slow legacy platform. We automated the data flows and migrated the analytics layer.',
    situation: [
      'The municipality\'s ERP, CRM, and Parking Enforcement systems operated in isolation. Staff were re-keying data between platforms manually. Meanwhile, the People Analytics function was running on a legacy vendor platform that was slow, expensive, and too rigid to adapt to the organization\'s reporting needs.',
    ],
    whatWeBuilt: [
      'We designed and built integration service applications connecting the ERP to the CRM and Parking Enforcement system via REST APIs, with admin views for staff to monitor and manage data flows without IT involvement. In parallel, we drove the migration of People Analytics from the legacy vendor platform to a modern stack, re-architecting the data layer for performance on large HR datasets.',
    ],
    outcome: [
      'Manual data re-entry across departments was eliminated. People Analytics loads that previously timed out now run reliably. The IT team regained time they had been spending on cross-system reconciliation every week.',
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug)
}
