"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import GetInTouchButton from "./get-in-touch-button";
import { NAV_LINKS } from "./nav-links";

export default function GlobalNav() {
  const pathname = usePathname();

  if (
    pathname === "/" ||
    pathname.startsWith("/about") ||
    pathname === "/projects" ||
    pathname === "/performances" ||
    pathname === "/calendar" ||
    pathname === "/research"
  ) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 p-4">
      <nav>
        <ul>
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={isActive ? "font-semibold underline" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <GetInTouchButton />
    </div>
  );
}
