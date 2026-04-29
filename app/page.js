import { PortalClient } from "@/components/portal-client";

export default function HomePage() {
  const researchAgenda = [
    {
      title: "Grid-aware siting",
      description: "Publish plain-language frameworks for evaluating land, transmission, load growth, water, and permitting tradeoffs before projects harden into sunk-cost decisions."
    },
    {
      title: "Transparent procurement",
      description: "Create neutral bid and evaluation standards so utilities, landowners, communities, and builders can compare proposals on consistent terms."
    },
    {
      title: "Public-interest implementation",
      description: "Release open checklists, governance templates, and implementation playbooks that help communities participate without needing specialist jargon."
    }
  ];

  const frameworkLibrary = [
    "Open siting checklist for non-experts",
    "Utility and community diligence rubric",
    "Procurement transparency framework",
    "Public-benefit implementation playbook"
  ];

  const advisoryBoard = [
    "Grid and utility operators",
    "Land-use and permitting counsel",
    "Construction and delivery partners",
    "Community, public health, and policy advisors"
  ];

  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="hero panel">
        <nav className="topbar">
          <div className="brand">
            <img src="/favicon.svg" alt="Datacenter Consulting" className="brand-mark" />
            <span>Datacenter Consulting</span>
          </div>
          <a className="button button-secondary" href="#partner-portal">Partner Access</a>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">Independent research institute</p>
          <h1>Independent guidance for data center siting, power stewardship, and public trust.</h1>
          <p className="lede">
            DataCenterConsulting.org is being built as a neutral think tank: a place to publish open frameworks,
            translate infrastructure decisions for non-experts, and help builders, utilities, landowners, and
            communities evaluate projects through a shared public-interest lens.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#frameworks">Explore Open Frameworks</a>
            <a className="button button-secondary" href="#partner-portal">Partner Portal</a>
          </div>
          <div className="hero-metrics" aria-label="Institute priorities">
            <article>
              <strong>Open by default</strong>
              <span>Frameworks and implementation guidance will be released publicly whenever possible.</span>
            </article>
            <article>
              <strong>Impartial by design</strong>
              <span>The institute is positioned to work across bidders and stakeholders rather than advocate for one in-house builder.</span>
            </article>
            <article>
              <strong>Legible to non-experts</strong>
              <span>Every major research output should make siting and power tradeoffs understandable to civic and community audiences.</span>
            </article>
          </div>
        </section>
      </header>

      <section className="panel section narrative-grid" id="agenda">
        <div>
          <p className="section-kicker">Research agenda</p>
          <h2>What this institute is here to do</h2>
        </div>
        <div className="agenda-grid">
          {researchAgenda.map((item) => (
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
          <h2>Publishing roadmap</h2>
          <ul className="bullet-list">
            <li>Founding thesis on transparent data center siting and power stewardship.</li>
            <li>White paper on how communities, utilities, and developers can evaluate proposals on comparable terms.</li>
            <li>Annual state-of-the-market brief on bottlenecks, permitting risk, and grid constraints.</li>
          </ul>
        </article>

        <article className="panel section" id="frameworks">
          <p className="section-kicker">Framework library</p>
          <h2>Free tools the ecosystem can use</h2>
          <ul className="bullet-list">
            {frameworkLibrary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
          <p className="section-kicker">Advisory board</p>
          <h2>Cross-disciplinary oversight</h2>
          <ul className="bullet-list">
            {advisoryBoard.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
    </main>
  );
}
