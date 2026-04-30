import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { frameworkLibrary, resourceDownloads } from "@/lib/site-content";

export default function FrameworksPage() {
  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="panel section page-intro">
        <p className="section-kicker">Open frameworks</p>
        <h1>Reusable tools for making siting and power decisions legible.</h1>
        <p className="lede">
          These frameworks are designed to make stakeholder expectations comparable and transparent across land,
          utility, municipal, community, and builder conversations.
        </p>
      </section>

      <section className="stakeholder-grid">
        {frameworkLibrary.map((item) => (
          <article className="feature-card stakeholder-card" key={item.title}>
            <p className="section-kicker">For {item.forWhom}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="split-grid">
        <article className="panel section">
          <p className="section-kicker">How to use them</p>
          <ul className="bullet-list">
            <li>Use them early to determine whether a project is worth deeper diligence.</li>
            <li>Use them during outreach to make requests and assumptions explicit.</li>
            <li>Use them in public settings to keep discussions comparable and less political.</li>
          </ul>
        </article>

        <article className="panel section">
          <p className="section-kicker">Downloads</p>
          <ul className="bullet-list">
            {resourceDownloads.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
              </li>
            ))}
          </ul>
          <p className="body-copy">Need a stakeholder-specific adaptation? Use the <Link href="/contribute">contribution intake</Link> to request one.</p>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
