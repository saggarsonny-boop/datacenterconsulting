import Link from "next/link";
import { siteNav } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="hero panel site-hero">
      <nav className="topbar site-topbar">
        <Link className="brand" href="/">
          <img src="/favicon.svg" alt="" className="brand-mark" aria-hidden="true" />
          <span className="brand-text">DataCenterConsulting</span>
        </Link>
        <div className="nav-links">
          {siteNav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link className="button button-secondary" href="/contribute">
            Submit Materials
          </Link>
        </div>
      </nav>
    </header>
  );
}
