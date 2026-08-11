"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetInTouchButton from "./get-in-touch-button";
import { NAV_LINKS } from "./nav-links";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full overflow-x-hidden bg-[#E3D4ED] md:min-h-screen lg:h-screen lg:overflow-hidden">
      <header className="relative z-30 flex items-center justify-between gap-3 px-5 pt-5 sm:px-8 sm:pt-6 lg:absolute lg:inset-x-0 lg:top-0">
        <nav
          aria-label="Primary"
          className="hidden items-center rounded-full bg-white/40 px-6 py-2.5 backdrop-blur-md lg:absolute lg:left-[1.5vw] lg:top-6 lg:flex xl:px-8 xl:py-3"
        >
          <ul className="flex items-center gap-5 text-sm font-medium tracking-wide text-[#3B2166] xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.href === "/" ? "page" : undefined}
                  className={`transition-colors hover:text-[#7757CC] ${
                    link.href === "/" ? "font-semibold text-[#7757CC]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/40 text-[#3B2166] backdrop-blur-md lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <GetInTouchButton className="lg:absolute lg:right-4 lg:top-6" />
      </header>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="relative z-30 mx-5 mt-3 rounded-3xl bg-white/60 px-6 py-4 backdrop-blur-md sm:mx-8 lg:hidden"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium text-[#3B2166]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={link.href === "/" ? "page" : undefined}
                  className={link.href === "/" ? "font-semibold text-[#7757CC]" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="relative z-20 px-5 pt-8 sm:px-8 sm:pt-10 lg:absolute lg:left-[6vw] lg:top-[32vh] lg:z-10 lg:w-[30vw] lg:px-0 lg:pt-0">
        <h1 className="flex flex-col text-[clamp(3rem,13vw,4.75rem)] font-bold leading-[0.88] tracking-tight text-[#3B2166] md:text-[clamp(4rem,9vw,6rem)] lg:text-[clamp(5rem,7.5vw,8.5rem)] lg:font-semibold lg:leading-[0.85]">
          <span>XIAO</span>
          <span>LIANG</span>
        </h1>
        <p className="mt-3 text-base text-[#5B4B80] sm:text-lg lg:text-xl">
          Pianist · Educator · Researcher
        </p>
      </div>

      <div className="relative z-0 mt-6 aspect-[1672/941] w-full md:mt-6 md:aspect-auto md:h-[58vh] lg:absolute lg:inset-0 lg:mt-0 lg:h-auto lg:w-auto">
        <Image
          src="/images/hero-scene.png"
          alt="3D illustration of a girl playing a grand piano in a soft lavender room, with a pink teddy bear on the piano and a vase of tulips nearby"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom lg:translate-x-[4vw] lg:object-right-bottom"
        />
      </div>

      <div className="absolute inset-x-0 bottom-4 z-20 hidden justify-center sm:flex lg:bottom-6">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[#8B76A8]/60 p-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#8B76A8]" />
        </div>
      </div>
    </section>
  );
}
