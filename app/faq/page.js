import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { faqItems, policyFaqItems } from "@/lib/site-content";

export default function FaqPage() {
  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="panel section page-intro">
        <p className="section-kicker">FAQ</p>
        <h1>Answers for land, utility, builder, municipal, capital, and community stakeholders.</h1>
        <p className="lede">
          This page is meant to reduce ambiguity before a deeper conversation starts.
        </p>
      </section>

      <section className="stack-grid faq-stack">
        {faqItems.map((item) => (
          <article className="panel section faq-item" key={item.question}>
            <h2>{item.question}</h2>
            <p className="body-copy">{item.answer}</p>
          </article>
        ))}
      </section>

      <section className="stack-grid faq-stack">
        <article className="panel section">
          <p className="section-kicker">Global policy and transmission</p>
          <h2>Cross-border and regional planning questions</h2>
        </article>
        {policyFaqItems.map((item) => (
          <article className="panel section faq-item" key={item.question}>
            <h2>{item.question}</h2>
            <p className="body-copy">{item.answer}</p>
          </article>
        ))}
      </section>

      <SiteFooter />
    </main>
  );
}
