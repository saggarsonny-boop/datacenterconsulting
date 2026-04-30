import { AdminReviewConsole } from "@/components/admin-review-console";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AdminPage() {
  return (
    <main className="page-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="panel section page-intro">
        <p className="section-kicker">Admin</p>
        <h1>Review intake records and export datasets for database merge.</h1>
        <p className="lede">
          Use your admin key to load recent submissions, inspect entries, and export CSV files for cleanup,
          normalization, and import into your master tracking database.
        </p>
      </section>

      <AdminReviewConsole />
      <SiteFooter />
    </main>
  );
}