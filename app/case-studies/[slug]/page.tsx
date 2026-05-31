import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { caseStudies, getCaseStudy } from '../../lib/caseStudies'

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) return {}
  return {
    title: `${cs.title} — Scalepoint`,
    description: cs.preview,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug)
  if (!cs) notFound()

  return (
    <div className="page">
      <header className="cs-page-header">
        <div className="logo">
          <Link href="/">
            <svg viewBox="-6 -6 283 54" width="200" height="38" role="img" aria-label="Scalepoint">
              <rect x="0" y="10" width="32" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              <rect x="18" y="0" width="32" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="25" cy="21" r="4" fill="currentColor"/>
              <text x="68" y="29" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="500" fontSize="22" letterSpacing="0.14em" fill="currentColor">SCALEPOINT</text>
            </svg>
          </Link>
        </div>

        <Link href="/#case-studies" className="cs-back">
          &larr; All case studies
        </Link>
      </header>

      <article className="cs-page-article">
        <div className="cs-meta">
          <span className="cs-tag">{cs.tag}</span>
          <span className="cs-sector">{cs.sector}</span>
        </div>

        <h1 className="cs-page-title">{cs.title}</h1>

        {cs.image && (
          <div className="cs-image-wrap">
            <Image
              src={cs.image}
              alt={cs.imageAlt ?? cs.title}
              width={1400}
              height={700}
              className="cs-image"
              priority
            />
          </div>
        )}

        <div className="cs-page-body">
          <div className="cs-block">
            <div className="cs-block-label">The situation</div>
            {cs.situation.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="cs-block">
            <div className="cs-block-label">What we built</div>
            {cs.whatWeBuilt.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="cs-block">
            <div className="cs-block-label">The outcome</div>
            {cs.outcome.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </article>

      <div className="cs-page-cta">
        <p className="cta-text">
          Have a project like this? Let&apos;s talk.
        </p>
        <a href="mailto:consult@scalepointdata.com" className="cta-link">
          Get in touch &rarr;
        </a>
      </div>

      <footer className="footer">
        <div className="footer-left">© 2026 Scalepoint</div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/company/data-expert-services" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:consult@scalepointdata.com">Email</a>
        </div>
      </footer>
    </div>
  )
}
