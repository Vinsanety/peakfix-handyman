import { siteConfig } from "@/lib/site";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="border-t border-brand/15 bg-gradient-to-b from-brand-muted/60 to-white py-10">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-dark">PeakFix Handyman Services</h3>
          <p className="mt-2 text-sm text-slate">{siteConfig.location}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate">Trust Badges</h3>
          <ul className="mt-2 space-y-1 text-sm text-charcoal">
            <li>Licensed & insured</li>
            <li>Upfront pricing</li>
            <li>Satisfaction guarantee</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate">Contact</h3>
          <p className="mt-2 text-sm text-charcoal">{siteConfig.email}</p>
          <p className="text-sm text-charcoal">{siteConfig.phone}</p>
        </div>
      </Container>
    </footer>
  );
}
