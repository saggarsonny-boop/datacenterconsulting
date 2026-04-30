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
