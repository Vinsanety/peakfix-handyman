import Link from "next/link";
import { navLinks } from "@/lib/site";
import { Container } from "./container";
import { ButtonLink } from "../ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand/15 bg-brand-muted/90 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
        <Link href="/" className="text-sm font-bold tracking-wide sm:text-base">
          <span className="text-brand-dark">PeakFix</span>
          <span className="text-charcoal"> Handyman Services</span>
        </Link>
        <nav className="order-3 flex w-full items-center gap-4 overflow-x-auto text-sm md:order-2 md:w-auto md:gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-slate transition hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/contact" className="order-2 px-4 py-2 text-xs sm:text-sm md:order-3">
          Request a Quote
        </ButtonLink>
      </Container>
    </header>
  );
}
