import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StakeholderIntakeForm } from "@/components/stakeholder-intake-form";
import { TrackerContributionForm } from "@/components/tracker-contribution-form";
import { contributePaths } from "@/lib/site-content";

export const metadata = {
  title: "Contribute | DataCenterConsulting",
  description: "Submit structured stakeholder intake, contribute tracker data, and route public research requests, confidential project materials, and coordination work.",
};

export default function ContributePage() {
  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="panel section page-intro">
        <p className="section-kicker">Stakeholder contribution intake</p>
        <h1>Choose the path that matches what you need and what you can share.</h1>
        <p className="lede">
          Use the intake below to route public research requests, confidential opportunity materials,
          and multi-stakeholder coordination work.
        </p>
      </section>

      <section className="stakeholder-grid">
        {contributePaths.map((item) => (
          <article className="feature-card stakeholder-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <StakeholderIntakeForm />

      <section className="panel section narrative-grid">
        <div>
          <p className="section-kicker">Build the global tracker with us</p>
          <h2>Contribute data directly or upload your own entries internally</h2>
          <ul className="bullet-list">
            <li>External contributors can submit validated links, summaries, and regional details using the form below.</li>
            <li>Your internal team can submit the same form for manual entries from calls, meetings, or private documents.</li>
            <li>All contributions can be exported for normalization and merge into your master tracking database.</li>
          </ul>
        </div>
      </section>

      <TrackerContributionForm />
      <SiteFooter />
    </main>
  );
}
