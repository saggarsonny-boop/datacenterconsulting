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



<!-- Stripe Checkout Block -->
<div id="stripe-checkout-cta" style="margin: 2rem auto; padding: 2rem; border-radius: 12px; background: rgba(59,130,246,0.05); border: 1px solid rgba(59,130,246,0.2); text-align: center; font-family: sans-serif; max-width: 600px;">
    <h3 style="margin-top: 0; color: #fff;">Activate Premium License</h3>
    <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 1.5rem;">Get instant access to all advanced capabilities and integration features.</p>
    <a href="https://buy.stripe.com/6oU00lb2L6F37bIazv0RG0J" target="_blank" style="display: inline-block; padding: 0.8rem 2rem; background: #3b82f6; color: #fff; font-weight: bold; border-radius: 8px; text-decoration: none; transition: background 0.2s;">Unlock Now</a>
</div>
