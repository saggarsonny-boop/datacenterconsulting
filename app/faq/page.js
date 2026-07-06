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



<!-- Stripe Checkout Block -->
<div id="stripe-checkout-cta" style="margin: 2rem auto; padding: 2rem; border-radius: 12px; background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.2); text-align: center; font-family: sans-serif; max-width: 600px;">
    <h3 style="margin-top: 0; color: #fff;">Activate Premium License</h3>
    <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 1.5rem;">Get instant access to all advanced capabilities and integration features.</p>
    <a href="https://buy.stripe.com/6oU00lb2L6F37bIazv0RG0J" target="_blank" style="display: inline-block; padding: 0.8rem 2rem; background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; text-decoration: none; transition: background 0.2s;">Unlock Now</a>
</div>
