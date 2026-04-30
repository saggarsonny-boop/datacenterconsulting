import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { researchTracks, resourceDownloads } from "@/lib/site-content";

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
