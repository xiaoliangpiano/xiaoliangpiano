import Image from "next/image";
import SiteHeaderNav from "../site-header-nav";
import ScrollCue from "./ScrollCue";

const PERFORMANCES = [
  {
    number: "01",
    image: "/images/performances/schumann-fantasie.jpg",
    alt: "Xiao Liang performing Schumann Fantasie in C Major, Op. 17",
    composer: "Robert Schumann",
    work: "Fantasie in C Major, Op. 17",
    movement: "III. Langsam getragen. Durchweg leise zu halten.",
    youtube: "https://www.youtube.com/watch?v=RLIPdewGqBI",
  },
  {
    number: "02",
    image: "/images/performances/schumann-carnaval.jpg",
    alt: "Xiao Liang performing Schumann Carnaval, Op. 9",
    composer: "Robert Schumann",
    work: "Carnaval, Op. 9",
    movement: "Eusebius & Florestan",
    youtube: "https://www.youtube.com/watch?v=hoge7mr32so",
  },
  {
    number: "03",
    image: "/images/performances/ravel-concerto.jpg",
    alt: "Xiao Liang performing Ravel Piano Concerto in G Major",
    composer: "Maurice Ravel",
    work: "Piano Concerto in G Major",
    movement: "I. Allegramente",
    youtube: "https://www.youtube.com/watch?v=6E6zpvfz1OA",
  },
] as const;

export default function Page() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#FAF7F1] via-[#F6F0FA] to-[#EEE3F9]">
      <SiteHeaderNav theme="light" />

      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40 lg:pb-32">
        <span className="block text-xs font-medium tracking-[0.35em] text-[#8B6FD9]">
          PERFORMANCES
        </span>
        <h1 className="mt-4 max-w-2xl font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] text-[#2E1A47]">
          Selected Performances
        </h1>
        <p className="mt-4 text-base text-[#6B5B95] sm:text-lg">
          Live performance recordings
        </p>

        <ScrollCue />

        <div className="mt-20 flex flex-col gap-24 sm:gap-28 lg:mt-28 lg:gap-36">
          {PERFORMANCES.map((performance, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={performance.work}
                id={`performance-${index + 1}`}
                className="scroll-mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:scroll-mt-32 xl:gap-20"
              >
                <a
                  href={performance.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch performance: ${performance.composer} — ${performance.work}`}
                  className={`group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-[#8B6FD9]/15 bg-white/40 shadow-[0_25px_60px_-30px_rgba(91,75,149,0.45)] ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={performance.image}
                    alt={performance.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.03]"
                  />
                </a>

                <div className={`mt-8 lg:mt-0 ${isReversed ? "lg:order-1" : ""}`}>
                  <span className="block text-xs font-medium tracking-[0.3em] text-[#8B6FD9]/45">
                    {performance.number}
                  </span>
                  <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.25em] text-[#8B6FD9] sm:text-sm">
                    {performance.composer}
                  </span>
                  <h2 className="mt-3 font-serif text-2xl leading-tight text-[#2E1A47] sm:text-3xl lg:text-[2.25rem]">
                    {performance.work}
                  </h2>
                  <p className="mt-3 text-sm italic leading-relaxed text-[#6B5B95] sm:text-base">
                    {performance.movement}
                  </p>
                  <a
                    href={performance.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#2E1A47] transition-colors hover:text-[#8B6FD9] sm:text-sm"
                  >
                    Watch Performance
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
