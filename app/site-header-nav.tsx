"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GetInTouchButton from "./get-in-touch-button";
import { NAV_LINKS } from "./nav-links";

interface SiteHeaderNavProps {
  /** Matches the page background this header sits on. */
  theme: "light" | "dark";
}

export default function SiteHeaderNav({ theme }: SiteHeaderNavProps) {
  const pathname = usePathname();
  const isDark = theme === "dark";

  return (
    <header className="relative z-30 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 px-5 pt-5 sm:px-8 sm:pt-6 lg:absolute lg:inset-x-0 lg:top-0">
      <nav aria-label="Primary" className="lg:absolute lg:left-6 lg:top-6 xl:left-10">
        <ul
          className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium tracking-wide sm:gap-x-8 ${
            isDark ? "text-white/80" : "text-[#5B4B73]"
          }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors ${
                    isDark ? "hover:text-white" : "hover:text-[#2E1A47]"
                  } ${
                    isActive
                      ? isDark
                        ? "font-semibold text-white"
                        : "font-semibold text-[#2E1A47]"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <GetInTouchButton theme={theme} className="lg:absolute lg:right-4 lg:top-6" />
    </header>
  );
}
