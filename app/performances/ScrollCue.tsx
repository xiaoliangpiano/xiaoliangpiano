"use client";

const TARGET_ID = "performance-2";

function scrollToNextPerformance(event: React.MouseEvent<HTMLAnchorElement>) {
  const target = document.getElementById(TARGET_ID);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

const CIRCLE =
  "group flex items-center justify-center rounded-full border border-[#8B6FD9]/30 bg-white/50 shadow-[0_15px_40px_-20px_rgba(91,75,149,0.45)] backdrop-blur-sm transition-all duration-300 hover:border-[#8B6FD9]/60 hover:shadow-[0_20px_50px_-15px_rgba(91,75,149,0.55)]";

const LABEL =
  "text-[10px] font-medium uppercase tracking-[0.3em] text-[#6B5B95] sm:text-xs";

function Arrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-[#2E1A47] transition-transform duration-300 group-hover:translate-y-1 sm:h-5 sm:w-5"
    >
      <path d="M12 4v15" />
      <path d="M5.5 13.5 12 20l6.5-6.5" />
    </svg>
  );
}

export default function ScrollCue() {
  return (
    <>
      {/* Desktop: right side of the first viewport */}
      <a
        href={`#${TARGET_ID}`}
        onClick={scrollToNextPerformance}
        aria-label="Scroll to next performance"
        className="absolute right-10 top-[38vh] z-20 hidden flex-col items-center gap-3 lg:flex xl:right-16"
      >
        <span className={`h-16 w-16 xl:h-20 xl:w-20 ${CIRCLE}`}>
          <Arrow />
        </span>
        <span className={LABEL}>Scroll to Explore</span>
      </a>

      {/* Tablet / mobile: centered below the page heading */}
      <a
        href={`#${TARGET_ID}`}
        onClick={scrollToNextPerformance}
        aria-label="Scroll to next performance"
        className="mt-10 flex flex-col items-center gap-2 lg:hidden"
      >
        <span className={`h-12 w-12 sm:h-14 sm:w-14 ${CIRCLE}`}>
          <Arrow />
        </span>
        <span className={LABEL}>Scroll to Explore</span>
      </a>
    </>
  );
}
