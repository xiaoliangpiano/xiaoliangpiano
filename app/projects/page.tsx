import FiveElementsRing from "./FiveElementsRing";
import SiteHeaderNav from "../site-header-nav";

const ELEMENTS = ["Metal", "Water", "Wood", "Fire", "Earth"];

export default function Page() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#FAF7F1] via-[#F6F0FA] to-[#EEE3F9]">
      <SiteHeaderNav theme="light" />

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40 lg:pb-28">
        <span className="block text-xs font-medium tracking-[0.35em] text-[#8B6FD9]">
          PROJECTS
        </span>

        <div className="mt-12 lg:mt-20 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-x-16 xl:gap-x-24">
          <span className="block text-xs font-medium tracking-[0.3em] text-[#8B6FD9]/80 lg:col-start-1 lg:row-start-1">
            PROJECT 01
          </span>

          <h1 className="mt-4 whitespace-nowrap font-serif leading-[1.05] text-[#2E1A47] text-[clamp(2.25rem,10vw,3.25rem)] sm:text-[clamp(3rem,7vw,4rem)] lg:col-start-1 lg:row-start-2 lg:mt-6 lg:text-[clamp(2.75rem,4.5vw,4rem)] xl:text-[clamp(3.5rem,4vw,4.75rem)]">
            Five Elements
          </h1>

          <p className="mt-3 text-lg text-[#6B5B95] sm:text-xl lg:col-start-1 lg:row-start-3 lg:mt-4 lg:text-2xl">
            A Journey for Four Hands
          </p>

          <div className="mt-10 flex w-full items-center justify-center py-6 lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:mt-0 lg:h-full lg:py-0">
            <FiveElementsRing />
          </div>

          <p className="mt-10 max-w-md text-base leading-relaxed text-[#5B4B73] sm:text-lg lg:col-start-1 lg:row-start-4 lg:mt-8">
            A four-hands piano project inspired by Wuxing, connecting five
            musical works through sound, movement, color, and cross-cultural
            perspectives.
          </p>

          <p className="mt-6 text-sm font-medium tracking-[0.15em] text-[#8B6FD9] sm:text-base lg:col-start-1 lg:row-start-5">
            {ELEMENTS.join(" · ")}
          </p>

          <a
            href="https://www.unboundpianoduo.com/#featured-project"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#2E1A47] transition-colors hover:text-[#8B6FD9] lg:col-start-1 lg:row-start-6 lg:mt-12"
          >
            EXPLORE MORE
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
