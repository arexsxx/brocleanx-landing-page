"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import IconLink from "@/components/ui/icon-link";
import Marquee from "@/components/ui/marquee";

interface NavItem {
  label: string;
  href: string;
}

interface SearchItem {
  title: string;
  description: string;
  href: string;
  keywords: string[];
}

interface IndexedSearchItem extends SearchItem {
  searchText: string;
}

const navItems: NavItem[] = [
  { label: "Service", href: "/#service" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const searchItems: SearchItem[] = [
  {
    title: "Service",
    description: "Lihat daftar layanan dan harga cuci sepatu.",
    href: "/#service",
    keywords: ["service", "layanan", "harga", "pricing", "deep clean"],
  },
  {
    title: "About",
    description: "Kenapa trust Brocleanx untuk perawatan sepatu.",
    href: "/about",
    keywords: ["about", "tentang", "why trust", "drop off"],
  },
  {
    title: "Blog",
    description: "Tips dan news seputar perawatan sneakers.",
    href: "/blog",
    keywords: ["blog", "tips", "news", "artikel", "sneakers"],
  },
  {
    title: "How to Order",
    description: "Langkah mudah order layanan Brocleanx.",
    href: "/how-to-order",
    keywords: ["order", "cara order", "how to order", "booking"],
  },
];

const indexedSearchItems: IndexedSearchItem[] = searchItems.map((item) => ({
  ...item,
  searchText:
    `${item.title} ${item.description} ${item.keywords.join(" ")}`.toLowerCase(),
}));

const SEARCH_RESULT_LIMIT = 5;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchContainerRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
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

  useEffect(() => {
    const handleHotkey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }

      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleHotkey);
    return () => window.removeEventListener("keydown", handleHotkey);
  }, []);

  useEffect(() => {
    if (!isSearchOpen) {
      setSearchQuery("");
      return;
    }

    searchInputRef.current?.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    if (!isSearchOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!searchContainerRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    return () => window.removeEventListener("mousedown", handlePointerDown);
  }, [isSearchOpen]);

  const filteredSearchItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return indexedSearchItems.slice(0, SEARCH_RESULT_LIMIT);
    }

    return indexedSearchItems
      .map((item) => {
        const lowerTitle = item.title.toLowerCase();
        const keywordStartsWith = item.keywords.some((keyword) =>
          keyword.toLowerCase().startsWith(query),
        );

        const score = lowerTitle.startsWith(query)
          ? 0
          : keywordStartsWith
            ? 1
            : item.searchText.includes(query)
              ? 2
              : -1;

        return { item, score };
      })
      .filter((entry) => entry.score >= 0)
      .sort((a, b) => a.score - b.score)
      .slice(0, SEARCH_RESULT_LIMIT)
      .map((entry) => entry.item);
  }, [searchQuery]);

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

  const handleSearchNavigate = (href: string) => {
    setIsSearchOpen(false);

    if (href.startsWith("/#") && pathname === "/") {
      const anchor = href.replace("/#", "");
      const element = document.getElementById(anchor);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    router.push(href);
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
        <div className="relative mx-auto flex h-16 max-w-6xl items-center px-6 sm:h-20 sm:px-8 md:h-24 md:px-10">
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
            className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
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
              className="order-last md:order-none inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
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

            <div className="flex items-center gap-2">
              <div className="relative" ref={searchContainerRef}>
                <button
                  type="button"
                  aria-label="Search"
                  title="Search"
                  onClick={() => setIsSearchOpen((prev) => !prev)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
                >
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
                </button>

                {isSearchOpen ? (
                  <div className="absolute right-[-88px] sm:-right-8 md:right-0 top-12 z-[90] w-[calc(100vw-3rem)] max-w-[400px] sm:w-[440px] md:w-[480px] overflow-hidden rounded-xl border border-white/10 bg-[#071512] shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                    <div className="flex items-center border-b border-white/10 px-3 py-2.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="mr-2.5 h-4 w-4 text-white/60"
                      >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
                      </svg>

                      <input
                        ref={searchInputRef}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" && filteredSearchItems[0]) {
                            event.preventDefault();
                            handleSearchNavigate(filteredSearchItems[0].href);
                          }
                        }}
                        placeholder="Cari page atau section..."
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/45 focus:outline-none"
                      />

                      {searchQuery ? (
                        <button
                          type="button"
                          aria-label="Clear search"
                          onClick={() => {
                            setSearchQuery("");
                            searchInputRef.current?.focus();
                          }}
                          className="ml-2 text-xs font-semibold text-white/50 transition-colors hover:text-white/85"
                        >
                          Clear
                        </button>
                      ) : null}
                    </div>

                    <div className="max-h-72 overflow-y-auto p-1.5">
                      {filteredSearchItems.length > 0 ? (
                        filteredSearchItems.map((item) => (
                          <button
                            key={item.href}
                            type="button"
                            onClick={() => handleSearchNavigate(item.href)}
                            className="w-full rounded-lg px-2.5 py-2.5 text-left transition-colors hover:bg-white/8"
                          >
                            <p className="text-sm font-semibold text-white">
                              {item.title}
                            </p>
                            <p className="mt-1 text-xs text-white/60">
                              {item.description}
                            </p>
                          </button>
                        ))
                      ) : (
                        <div className="px-2.5 py-4 text-center text-xs text-white/60">
                          Tidak ada hasil untuk "{searchQuery}".
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>

              <IconLink 
                href="https://www.google.com/maps/place/Yogyakarta" 
                label="Location Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
              >
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
