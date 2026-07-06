"use client";

export function PortalClient() {
  return (
    <section className="portal-gate">
      <h3>Partner access is being staged carefully</h3>
      <p className="muted">
        The secure workspace for invited partners is being configured separately from the public institute site.
        For now, use the public stakeholder intake to share your role, your materials, and the output you need.
      </p>
      <div className="portal-callouts">
        <article className="feature-card">
          <h3>For builders and developers</h3>
          <p>Request confidential diligence review, stakeholder mapping, procurement framing, and research-informed project positioning.</p>
        </article>
        <article className="feature-card">
          <h3>For utilities and communities</h3>
          <p>Share constraints, questions, and public-interest concerns through a structured contact path that clarifies what you need and what you can provide.</p>
        </article>
      </div>
    </section>
  );
}



<!-- Stripe Checkout Block -->
<div id="stripe-checkout-cta" style="margin: 2rem auto; padding: 2rem; border-radius: 12px; background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.2); text-align: center; font-family: sans-serif; max-width: 600px;">
    <h3 style="margin-top: 0; color: #fff;">Activate Premium License</h3>
    <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 1.5rem;">Get instant access to all advanced capabilities and integration features.</p>
    <a href="https://buy.stripe.com/6oU00lb2L6F37bIazv0RG0J" target="_blank" style="display: inline-block; padding: 0.8rem 2rem; background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; text-decoration: none; transition: background 0.2s;">Unlock Now</a>
</div>
