"use client";

export function PortalClient() {
  return (
    <section className="portal-gate">
      <h3>Partner access is being staged carefully</h3>
      <p className="muted">
        The secure workspace for invited partners is being configured separately from the public institute site.
        For now, use this project as the public home for research, frameworks, and white papers.
      </p>
      <div className="portal-callouts">
        <article className="feature-card">
          <h3>For builders and developers</h3>
          <p>Request private diligence review, intake coordination, and research-informed project framing.</p>
        </article>
        <article className="feature-card">
          <h3>For utilities and communities</h3>
          <p>Engage on transparency standards, site evaluation criteria, and public-interest implementation guidance.</p>
        </article>
      </div>
    </section>
  );
}
