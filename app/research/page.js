import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  frequencyComparisonRows,
  policyFaqItems,
  regionalGridModels,
  researchTracks,
  resourceDownloads
} from "@/lib/site-content";

export default function ResearchPage() {
  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="panel section page-intro">
        <p className="section-kicker">Research</p>
        <h1>Research that translates technical infrastructure into strategic clarity across global grids.</h1>
        <p className="lede">
          The institute focuses on the intersection of grid behavior, siting, implementation risk, public trust,
          and cross-stakeholder decision quality in both 50 Hz and 60 Hz operating environments.
        </p>
      </section>

      <section className="stack-grid">
        {researchTracks.map((track) => (
          <article className="panel section research-track" key={track.title}>
            <p className="section-kicker">Research track</p>
            <h2>{track.title}</h2>
            <p className="body-copy">{track.description}</p>
            <ul className="bullet-list">
              {track.outputs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="panel section">
        <p className="section-kicker">Regional grid models</p>
        <div className="stack-grid">
          {regionalGridModels.map((model) => (
            <article key={model.title} className="feature-card stakeholder-card">
              <p className="section-kicker">{model.frequency}</p>
              <h3>{model.title}</h3>
              <p>{model.summary}</p>
              <ul className="micro-list">
                {model.priorityMetrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section">
        <p className="section-kicker">50 Hz / 60 Hz comparison</p>
        <div className="table-wrap">
          <table className="insight-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>50 Hz context</th>
                <th>60 Hz context</th>
                <th>Implementation implication</th>
              </tr>
            </thead>
            <tbody>
              {frequencyComparisonRows.map((row) => (
                <tr key={row.topic}>
                  <td>{row.topic}</td>
                  <td>{row.hz50}</td>
                  <td>{row.hz60}</td>
                  <td>{row.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="panel section">
        <p className="section-kicker">Cross-border policy FAQ</p>
        <div className="stack-grid faq-stack">
          {policyFaqItems.map((item) => (
            <article key={item.question} className="feature-card stakeholder-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section">
        <p className="section-kicker">Current source materials</p>
        <div className="resource-grid">
          {resourceDownloads.map((item) => (
            <article className="feature-card" key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="text-link" href={item.href} target="_blank" rel="noreferrer">Open document</a>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
