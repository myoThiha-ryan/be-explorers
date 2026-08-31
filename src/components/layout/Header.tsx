"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Only the homepage has a full-bleed hero for the header to sit over.
  const overlay = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = !overlay || scrolled || menuOpen;
  const tone = solid ? "light" : "dark";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo tone={tone} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "text-[0.9375rem] transition-colors",
                      solid
                        ? isActive
                          ? "text-navy-800"
                          : "text-ink-muted hover:text-navy-800"
                        : isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Wrapper, not a `hidden` class on the button: the button sets its own
              display utility and the two would fight for precedence. */}
          <span className="hidden sm:block">
            <Button href="/contact" variant={solid ? "primary" : "onDark"}>
              Enquire Now
            </Button>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={cn(
              "-mr-2 flex size-11 items-center justify-center rounded-full transition-colors lg:hidden",
              solid ? "text-navy-800 hover:bg-mist" : "text-white hover:bg-white/10",
            )}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              aria-hidden="true"
              className="size-6"
            >
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
        >
          <Container className="flex h-full flex-col py-8">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {mainNav.map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 font-display text-2xl text-navy-800"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className="mt-8"
              onClick={(event) => {
                // Close the panel when the CTA inside it is followed.
                if ((event.target as HTMLElement).closest("a")) setMenuOpen(false);
              }}
            >
              <Button href="/contact" size="lg" className="w-full">
                Enquire Now
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
