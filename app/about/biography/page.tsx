import Link from "next/link";
import SiteHeaderNav from "../../site-header-nav";

const SIDE_RAIL = ["Performance", "Teaching", "Research", "Technology"];

export default function Page() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#0b0620] via-[#150c33] to-[#1c1140]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_30%,rgba(139,92,246,0.22),transparent_70%)]"
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <span
          className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD]/70 shadow-[0_0_6px_2px_rgba(196,181,253,0.35)]"
          style={{ left: "8%", top: "22%" }}
        />
        <span
          className="absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4B5FD]/50 shadow-[0_0_5px_2px_rgba(196,181,253,0.25)]"
          style={{ left: "92%", top: "72%" }}
        />
      </div>

      <SiteHeaderNav theme="dark" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-20 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40 lg:pb-28">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-[#A78BFA]/70 transition-colors hover:text-[#C4B5FD]"
        >
          <span aria-hidden>←</span>
          About
        </Link>

        <div className="mt-10 lg:flex lg:items-start lg:gap-16 xl:gap-24">
          <div className="max-w-[720px]">
            <span className="block text-xs font-medium uppercase tracking-[0.35em] text-[#A78BFA]/70">
              Biography
            </span>

            <h1 className="mt-4 font-serif text-4xl leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl">
              Xiao Liang
            </h1>

            <p className="mt-4 text-base tracking-[0.08em] text-[#C4B5FD]/80 sm:text-lg">
              Pianist · Educator · Researcher
            </p>

            <div className="mt-8 h-px w-16 bg-gradient-to-r from-[#A78BFA]/70 to-transparent" />

            <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
              <p className="text-base leading-relaxed text-[#E7E1F5]/85 sm:text-lg sm:leading-relaxed">
                Xiao Liang is a pianist whose performance, teaching, and research span the United States, Italy, Finland, Malaysia, and China. She has received numerous honors, including First Prize at Italy’s Maccagno Young Artist Piano Festival and the AACE New York International Music Competition, the Best Etude Award at the USCI Young Artist Festival, and the Excellent Award at China’s CCTV Piano and Violin Competition.
              </p>
              <p className="text-base leading-relaxed text-[#E7E1F5]/85 sm:text-lg sm:leading-relaxed">
                A versatile musician, Liang performs as a soloist, collaborative pianist, and chamber musician. In 2021, she recorded MIDI piano accompaniments of Chinese art songs for the 4D Music Pocket Player app, where her recordings remain part of its permanent international library.
              </p>
              <p className="text-base leading-relaxed text-[#E7E1F5]/85 sm:text-lg sm:leading-relaxed">
                Liang’s research interests include cross-cultural repertoire, performance anxiety, and inclusive piano pedagogy. She has presented her work at national and international conferences, including NCKP, MTNA, ISME, FSMTA, the MTNA Collegiate Symposium, and CMS. She is a recipient of the VIVA Open Adopt Grant from the Academic Library Consortium of Virginia and the MTNA Teacher Enrichment Grant, supporting her work in open educational resources and the use of technology to enhance instructional clarity and student comprehension in music instruction.
              </p>
              <p className="text-base leading-relaxed text-[#E7E1F5]/85 sm:text-lg sm:leading-relaxed">
                Liang holds a B.A. in Musicology from Beijing Normal University, an M.M. in Piano Performance from the University of Florida, and a Performance Diploma from Indiana University, where she studied with Emile Naoumoff, the last protégé of Nadia Boulanger. She earned her Doctor of Music in Piano Performance with a specialized certificate in Piano Pedagogy from Florida State University. She currently serves on the piano faculty at the University of Virginia’s College at Wise, where she teaches class piano and music reading and serves as a collaborative pianist.
              </p>
            </div>

            <div className="mt-14 sm:mt-16">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#A78BFA]/80 transition-colors hover:text-[#C4B5FD]"
              >
                Back to About
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <aside
            aria-hidden
            className="mt-16 hidden shrink-0 flex-col gap-5 border-l border-[#8B5CF6]/20 pl-8 lg:mt-2 lg:flex"
          >
            {SIDE_RAIL.map((label) => (
              <span
                key={label}
                className="text-xs font-medium uppercase tracking-[0.25em] text-white/35"
              >
                {label}
              </span>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
