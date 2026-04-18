"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import IconLink from "@/components/ui/icon-link";
import Marquee from "@/components/ui/marquee";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Service", href: "/#service" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (!href.startsWith("/#")) {
      router.push(href);
      setIsMobileMenuOpen(false);
      return;
    }

    if (pathname !== "/") {
      // Jika tidak di landing page, navigate ke landing page dulu
      router.push(href);
    } else {
      // Jika sudah di landing page, scroll ke anchor
      const anchor = href.replace("/#", "");
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 h-9 overflow-hidden border-b border-white/5 bg-gray-950">
        <Marquee message="Gapapa malas nyuci, biar kami yang beraksi." />
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? "top-11 mx-auto w-[calc(100%-2rem)] max-w-6xl rounded-2xl border border-[#0a2e22]/80 bg-[#030F0F]/80 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:w-[calc(100%-3rem)]"
            : "top-9 w-full border-b border-[#0a2e22] bg-[#030F0F]/90"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-6xl items-center px-4 sm:h-20 sm:px-6 md:h-24 md:px-8">
          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-300 md:flex">
            {pathname !== "/" && (
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            )}
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/assets/logo2.png"
              alt="Brocleanx icon"
              className="h-12 w-auto object-contain sm:h-16 md:h-20"
              width={160}
              height={80}
              priority
            />
          </Link>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
            >
              {isMobileMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>

            <div className="hidden items-center gap-2 md:flex">
              <IconLink href="#search" label="Search">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
                </svg>
              </IconLink>

              <IconLink href="#location" label="Location">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path d="M12 21s6-4.6 6-11a6 6 0 10-12 0c0 6.4 6 11 6 11z" />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
              </IconLink>
            </div>

            <Button
              asChild
              variant="secondary"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Link href="/how-to-order">
                <span className="hidden sm:inline">How to Order?</span>
                <span className="sm:hidden">Order</span>
              </Link>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen ? (
          <div className="border-t border-white/10 px-3 pb-3 pt-2 md:hidden">
            <nav className="flex flex-col gap-2 text-sm font-semibold text-gray-200">
              {pathname !== "/" && (
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    🏠 Home
                  </Link>
                </Button>
              )}

              {navItems.map((item) => (
                <button
                  key={`mobile-${item.label}`}
                  onClick={() => handleNavClick(item.href)}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-left transition-colors hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}

              <Button
                asChild
                variant="secondary"
                size="sm"
                className="mt-1 w-full"
              >
                <Link
                  href="/how-to-order"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How to Order?
                </Link>
              </Button>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
