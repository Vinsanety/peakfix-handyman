 "use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";
import { Container } from "./container";
import { ButtonLink } from "../ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand/15 bg-brand-muted/90 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3">
        <Link href="/" className="text-sm font-bold tracking-wide sm:text-base">
          <span className="text-brand-dark">PeakFix</span>
          <span className="text-charcoal"> Handyman Services</span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="order-2 inline-flex items-center rounded-md border border-brand/20 px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-brand/10 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition ${isMenuOpen ? "translate-y-[-7px] -rotate-45" : ""}`}
            />
          </span>
        </button>

        <nav
          id="mobile-nav"
          className={`${isMenuOpen ? "flex" : "hidden"} order-4 w-full flex-col gap-3 border-t border-brand/15 pt-3 text-sm md:order-2 md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:pt-0`}
        >
          <ButtonLink
            href="/contact"
            className="w-full justify-center md:hidden"
            onClick={closeMenu}
          >
            Request a Quote
          </ButtonLink>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="whitespace-nowrap text-slate transition hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="order-3 hidden md:block">
          <ButtonLink
            href="/contact"
            className="px-4 py-2 text-sm"
            onClick={closeMenu}
          >
            Request a Quote
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
