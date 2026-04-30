import Link from "next/link";
import { PortalClient } from "@/components/portal-client";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  faqItems,
  frameworkLibrary,
  resourceDownloads,
  researchTracks,
  stakeholders
} from "@/lib/site-content";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="hero panel hero-home">
        <section className="hero-content">
          <p className="eyebrow">Independent research institute</p>
          <h1>Independent guidance for data center siting, power stewardship, and stakeholder alignment.</h1>
          <p className="lede">
            DataCenterConsulting.org is a neutral think tank built to help landowners, utilities, builders,
            municipalities, capital partners, and communities understand what matters, what to bring, and what to ask
            before infrastructure decisions harden into conflict or wasted effort across global markets.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Start a Stakeholder Path</Link>
            <Link className="button button-secondary" href="/frameworks">Explore Open Frameworks</Link>
          </div>
          <div className="hero-metrics" aria-label="Institute priorities">
            <article>
              <strong>Open by default</strong>
              <span>Frameworks, briefs, and implementation guidance are designed to be reused publicly.</span>
            </article>
            <article>
              <strong>Impartial by design</strong>
              <span>The institute compares tradeoffs across stakeholders instead of functioning as a captive operator voice.</span>
            </article>
            <article>
              <strong>Actionable immediately</strong>
              <span>Every stakeholder path makes clear what you should send, what you can expect back, and what comes next.</span>
            </article>
          </div>
        </section>
      </section>

      <section className="panel section narrative-grid" id="stakeholders">
        <div>
          <p className="section-kicker">Stakeholder paths</p>
          <h2>Choose the path that matches who you are</h2>
          <p className="body-copy">
            Each stakeholder view is built around two questions: why this institute is useful to you, and what you are expected to provide or will receive in return.
          </p>
        </div>
        <div className="stakeholder-grid">
          {stakeholders.map((item) => (
            <article className="feature-card stakeholder-card" key={item.key}>
              <p className="section-kicker">{item.label}</p>
              <p>{item.useful}</p>
              <div className="micro-grid">
                <div>
                  <strong>Bring</strong>
                  <ul className="micro-list">
                    {item.provide.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Receive</strong>
                  <ul className="micro-list">
                    {item.receive.map((value) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section narrative-grid" id="agenda">
        <div>
          <p className="section-kicker">Research agenda</p>
          <h2>What the institute is publishing and operationalizing</h2>
          <p className="body-copy">Educational outputs are written for technical and non-technical audiences and designed for adaptation across regions, not only one country.</p>
        </div>
        <div className="agenda-grid">
          {researchTracks.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-grid">
        <article className="panel section" id="publications">
          <p className="section-kicker">Public reports</p>
          <h2>Research and resource library</h2>
          <ul className="bullet-list">
            {resourceDownloads.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel section" id="frameworks">
          <p className="section-kicker">Framework library</p>
          <h2>Free tools the ecosystem can use</h2>
          <ul className="bullet-list">
            {frameworkLibrary.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
          <p className="body-copy"><Link href="/frameworks">Go deeper into the frameworks library.</Link></p>
        </article>
      </section>

      <section className="split-grid">
        <article className="panel section">
          <p className="section-kicker">Independence</p>
          <h2>A neutral operating posture</h2>
          <p className="body-copy">
            The institute exists to improve decision quality across the sector, not to function as the house research arm
            for a single builder. That separation matters because public-interest guidance, implementation frameworks,
            and comparative evaluation standards carry more trust when they are published independently.
          </p>
        </article>

        <article className="panel section">
          <p className="section-kicker">FAQ and contact paths</p>
          <h2>What people ask before they engage</h2>
          <ul className="bullet-list">
            {faqItems.slice(0, 4).map((item) => (
              <li key={item.question}>{item.question}</li>
            ))}
          </ul>
          <p className="body-copy"><Link href="/faq">See the full FAQ</Link> or <Link href="/contact">submit stakeholder intake</Link>.</p>
        </article>
      </section>

      <section className="panel section partner-panel" id="partner-portal">
        <div className="partner-intro">
          <div>
            <p className="section-kicker">Private workspace</p>
            <h2>Partner portal</h2>
          </div>
          <p className="body-copy">
            The secure portal supports confidential intake, diligence materials, and collaboration with invited partners.
            It is intentionally secondary to the public mission of publishing neutral research, open frameworks, and fair-process standards.
          </p>
        </div>
        <PortalClient />
      </section>

      <SiteFooter />
    </main>
  );
}
