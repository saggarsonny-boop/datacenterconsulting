import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StakeholderIntakeForm } from "@/components/stakeholder-intake-form";
import { contactPaths } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="panel section page-intro">
        <p className="section-kicker">Contact paths</p>
        <h1>Choose the path that matches what you need and what you can share.</h1>
        <p className="lede">
          Use the intake below to route public research requests, confidential opportunity materials,
          and multi-stakeholder coordination work.
        </p>
      </section>

      <section className="stakeholder-grid">
        {contactPaths.map((item) => (
          <article className="feature-card stakeholder-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <StakeholderIntakeForm />
      <SiteFooter />
    </main>
  );
}
