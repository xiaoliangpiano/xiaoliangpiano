import Image from "next/image";
import Link from "next/link";
import SiteHeaderNav from "../site-header-nav";

const FIELDS = [
  {
    number: "01",
    title: "PERFORM",
    items: ["Solo", "Collaborative", "Chamber"],
  },
  {
    number: "02",
    title: "TEACH",
    items: ["Piano", "Pedagogy", "Creative Learning"],
  },
  {
    number: "03",
    title: "EXPLORE",
    items: ["Research", "Technology", "Cross-Cultural Projects"],
  },
];

const PANEL =
  "rounded-2xl border border-[#8B5CF6]/25 bg-white/[0.03] shadow-[0_0_30px_-12px_rgba(139,92,246,0.35)] backdrop-blur-sm";

export default function Page() {
  return (
    <section className="relative w-full overflow-x-hidden bg-gradient-to-b from-[#0b0620] via-[#150c33] to-[#1c1140] md:min-h-screen lg:h-screen lg:overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_48%,rgba(139,92,246,0.28),transparent_70%)]"
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full lg:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="connector-in" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="connector-out" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* left side: name panel and statement panel converging toward the character */}
        <path
          d="M34,38 C39,42 41,46 44,49.5"
          fill="none"
          stroke="url(#connector-in)"
          strokeWidth="0.12"
        />
        <path
          d="M34,71 C39,65 41,55 44,50.5"
          fill="none"
          stroke="url(#connector-in)"
          strokeWidth="0.12"
        />

        {/* right side: character branching toward PERFORM / TEACH / EXPLORE panels */}
        <path
          d="M63,50 L65,50"
          fill="none"
          stroke="#A78BFA"
          strokeOpacity="0.45"
          strokeWidth="0.12"
        />
        <path
          d="M65,50 C65.5,38 65.8,29 66,24.6"
          fill="none"
          stroke="url(#connector-out)"
          strokeWidth="0.12"
        />
        <path
          d="M65,50 C65.3,50.7 65.6,51.7 66,53"
          fill="none"
          stroke="url(#connector-out)"
          strokeWidth="0.12"
        />
        <path
          d="M65,50 C65.5,62 65.8,72 66,81.4"
          fill="none"
          stroke="url(#connector-out)"
          strokeWidth="0.12"
        />
      </svg>

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] hidden lg:block">
        <span
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD]/80 shadow-[0_0_6px_2px_rgba(196,181,253,0.35)]"
          style={{ left: "44%", top: "50%" }}
        />
        <span
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD]/80 shadow-[0_0_6px_2px_rgba(196,181,253,0.35)]"
          style={{ left: "63%", top: "50%" }}
        />
        <span
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD] shadow-[0_0_6px_2px_rgba(196,181,253,0.45)]"
          style={{ left: "66%", top: "24.6%" }}
        />
        <span
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD] shadow-[0_0_6px_2px_rgba(196,181,253,0.45)]"
          style={{ left: "66%", top: "53%" }}
        />
        <span
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD] shadow-[0_0_6px_2px_rgba(196,181,253,0.45)]"
          style={{ left: "66%", top: "81.4%" }}
        />
      </div>

      <SiteHeaderNav theme="dark" />

      <div
        className={`relative z-10 mx-5 mt-12 flex items-center px-6 py-4 sm:mx-8 sm:mt-16 sm:px-8 sm:py-5 ${PANEL} lg:absolute lg:left-[5vw] lg:top-[34vh] lg:mx-0 lg:mt-0 lg:w-[19vw] lg:px-6 lg:py-4 xl:left-[8vw] xl:w-[24vw] xl:px-8 xl:py-5`}
      >
        <div>
          <h1 className="whitespace-nowrap text-xl font-semibold tracking-tight text-white sm:text-2xl">
            XIAO LIANG
          </h1>

          <Link
            href="/about/biography"
            className="group mt-4 inline-flex items-center gap-2 text-[#A78BFA]/80 transition-colors duration-300 hover:text-[#C4B5FD] hover:[filter:drop-shadow(0_0_6px_rgba(196,181,253,0.45))]"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 shrink-0"
            >
              <path d="M6 3.5h9.5L19 7v13.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
              <path d="M15 3.5V7h4" />
              <path d="M8.5 12h7M8.5 15h7M8.5 9h3" />
            </svg>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
              Biography
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Link>
        </div>
      </div>

      <div className="relative z-0 mt-10 flex justify-center px-6 sm:mt-12 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center lg:justify-center lg:px-0">
        <Image
          src="/images/about-character.png"
          alt="3D illustration of Xiao Liang standing on a glowing circular platform in an elegant lavender gown"
          width={1536}
          height={1024}
          priority
          className="h-auto w-[80vw] max-w-[440px] md:h-[58vh] md:w-auto md:max-w-none lg:h-[60vh] lg:translate-x-[3vw] lg:translate-y-[2vh] xl:h-[69vh]"
          style={{
            maskImage:
              "radial-gradient(ellipse 58% 58% at 50% 50%, black 45%, transparent 88%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 58% 58% at 50% 50%, black 45%, transparent 88%)",
          }}
        />
      </div>

      <div
        className={`relative z-10 mx-5 mt-10 px-6 py-6 sm:mx-8 sm:mt-12 sm:px-8 sm:py-8 ${PANEL} lg:absolute lg:left-[5vw] lg:top-[62vh] lg:mx-0 lg:mt-0 lg:w-[19vw] lg:px-6 lg:py-6 xl:left-[8vw] xl:w-[24vw] xl:px-8 xl:py-8`}
      >
        <p className="text-sm leading-relaxed text-white/60 sm:text-base lg:text-sm xl:text-base">
          Bringing together performance, pedagogy, research, and technology to
          create new ways of experiencing and learning music.
        </p>
      </div>

      <div className="relative z-10 mx-5 mt-16 space-y-6 pb-16 sm:mx-8 sm:mt-20 sm:space-y-8 lg:absolute lg:left-[72vw] lg:top-[14vh] lg:bottom-[8vh] lg:mx-0 lg:mt-0 lg:flex lg:w-[24vw] lg:flex-col lg:justify-between lg:space-y-0 lg:pb-0 xl:left-[70vw] xl:w-[25vw]">
        {FIELDS.map((field) => (
          <div
            key={field.number}
            className={`px-6 py-6 sm:px-8 sm:py-8 ${PANEL} lg:px-5 lg:py-5 xl:px-6 xl:py-6`}
          >
            <span className="block text-xs font-medium tracking-[0.08em] text-[#A78BFA]/70">
              {field.number}
            </span>
            <h2 className="mt-2 font-serif text-2xl tracking-wide text-[#EDE7F6] sm:text-3xl lg:text-xl xl:text-2xl">
              {field.title}
            </h2>
            <ul className="mt-3 space-y-1.5">
              {field.items.map((item) => (
                <li key={item} className="text-sm text-white/55 sm:text-base lg:text-sm">
                  <span className="mr-2 text-[#A78BFA]/60">&bull;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
