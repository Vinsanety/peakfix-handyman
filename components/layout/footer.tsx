import { siteConfig } from "@/lib/site";
import { Container } from "./container";
import Link from "next/link";
import { navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-coal/20 bg-coal py-14 text-ivory">
      <Container className="grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-(--font-display) text-2xl uppercase tracking-widest">PeakFix</h3>
          <p className="mt-2 max-w-xs text-sm text-ivory/75">
            Reliable handyman services for homes, rental properties, and small businesses.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-ivory/50">{siteConfig.location}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory/60">Navigation</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-ivory/85 transition hover:text-rustlight">
                Home
              </Link>
            </li>
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ivory/85 transition hover:text-rustlight">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory/60">Trust Signals</h3>
          <ul className="mt-3 space-y-2 text-sm text-ivory/85">
            <li>Licensed & insured</li>
            <li>Transparent estimates</li>
            <li>Arrival windows you can plan around</li>
            <li>Craftsmanship warranty</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ivory/60">Contact</h3>
          <p className="mt-3 text-sm text-ivory/85">{siteConfig.email}</p>
          <p className="text-sm text-ivory/85">{siteConfig.phone}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-ivory/50">{siteConfig.serviceArea}</p>
        </div>
      </Container>
    </footer>
  );
}
