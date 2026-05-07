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
    <header className="sticky top-0 z-40 border-b border-coal/15 bg-ivory/95 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="group">
          <p className="font-(--font-display) text-2xl uppercase tracking-[0.12em] text-coal transition group-hover:text-rust">
            PeakFix
          </p>
          <p className="-mt-1 text-[11px] uppercase tracking-[0.22em] text-concrete">Handyman Services</p>
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="order-2 inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-coal px-3 text-xs font-semibold uppercase tracking-[0.16em] text-coal transition hover:bg-coal hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-coal focus-visible:ring-offset-4 focus-visible:ring-offset-ivory md:hidden"
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
          className={`${isMenuOpen ? "flex" : "hidden"} order-4 w-full flex-col gap-4 border-t border-coal/15 pt-4 text-sm md:order-2 md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:pt-0`}
        >
          <ButtonLink
            href="/contact"
            className="w-full justify-center md:hidden"
            onClick={closeMenu}
          >
            Request a Quote
          </ButtonLink>

          <Link
            href="/"
            onClick={closeMenu}
            className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-concrete transition hover:text-rust"
          >
            Home
          </Link>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.16em] text-concrete transition hover:text-rust"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="order-3 hidden md:block">
          <ButtonLink
            href="/contact"
            onClick={closeMenu}
          >
            Request a Quote
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
