import Link from "next/link";
import { resourceDownloads, siteNav } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="panel section site-footer">
      <div>
        <p className="section-kicker">DatacenterConsulting.org</p>
        <p className="body-copy">
          Independent research, open frameworks, and stakeholder coordination for data center siting,
          power stewardship, and public-trust infrastructure decisions.
        </p>
      </div>
      <div>
        <h3>Explore</h3>
        <ul className="footer-list">
          {siteNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul className="footer-list">
          {resourceDownloads.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
