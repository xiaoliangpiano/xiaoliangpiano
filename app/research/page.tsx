import SiteHeaderNav from "../site-header-nav";

interface ConferenceEntry {
  displayDate: string;
  conference: string;
  location: string;
  presentations: string[];
}

const CONFERENCE_PRESENTATIONS: ConferenceEntry[] = [
  {
    displayDate: "11 / 2026",
    conference: "Sixty-Ninth National Conference of The College Music Society",
    location: "Grand Rapids, Michigan, United States",
    presentations: [
      "Instructional Clarity Beyond Language: Multimodal Teaching Practices in Collegiate Class Piano",
      "Prompt Design or Model Choice: What Drives Higher-Quality Applied-Piano Lesson Plans?",
    ],
  },
  {
    displayDate: "03 / 2026",
    conference:
      "2026 Music Teachers National Association (MTNA) National Conference",
    location: "Chicago, Illinois, United States",
    presentations: [
      "AI in Piano Teaching: How ChatGPT Can Help with Lesson Planning",
    ],
  },
  {
    displayDate: "10 / 2025",
    conference: "Sixty-Eighth National Conference of The College Music Society",
    location: "Spokane, Washington, United States",
    presentations: [
      "Tradition Transformed: Zhang Zhao’s Piano Works and Cross-Cultural Innovation",
    ],
  },
  {
    displayDate: "02 / 2025",
    conference: "The Southern Chapter of The College Music Society Conference",
    location: "Berry College, Georgia, United States",
    presentations: [
      "From Peking Opera to Piano: The Fusion of Traditions in Zhang Zhao’s Music",
    ],
  },
  {
    displayDate: "08 / 2024",
    conference: "ISME 36th World Conference",
    location: "Helsinki, Finland",
    presentations: [
      "From Anxiety to Artistry",
      "20th Chinese Piano Repertoire by Living Chinese Composer for Advanced-level Students",
      "Beyond Western Culture: Promoting Diversity in Group Piano Class",
    ],
  },
  {
    displayDate: "03 / 2024",
    conference: "2024 MTNA National Conference",
    location: "Atlanta, GA, United States",
    presentations: [
      "Beyond Western Culture: Promoting Diversity in Group Piano Class",
    ],
  },
  {
    displayDate: "10 / 2023",
    conference: "2023 FSMTA Conference",
    location: "Lakeland, FL, United States",
    presentations: [
      "Unlocking Peak Performance: Overcoming Music Performance Anxiety",
    ],
  },
  {
    displayDate: "03 / 2023",
    conference: "2023 MTNA National Conference",
    location: "Reno, NV, United States",
    presentations: [
      "Alternative Readings of Schumann’s Carnaval, Op. 9: A Comparative Analysis of the Neglected French Edition and the Currently Popular German Edition",
      "A Survival Guide for Small-handed Pianists—An Application of Taubman Technique",
    ],
  },
  {
    displayDate: "01 / 2023",
    conference: "2023 MTNA Collegiate Chapters Symposium",
    location: "Fort Worth, TX, United States",
    presentations: [
      "A Survival Guide for Small-handed Pianists—An Application of Taubman Technique",
    ],
  },
];

export default function Page() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#FAF7F1] via-[#F6F0FA] to-[#EEE3F9]">
      <SiteHeaderNav theme="light" />

      <div className="mx-auto max-w-4xl px-6 pt-28 pb-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40 lg:pb-32">
        <span className="block text-xs font-medium tracking-[0.35em] text-[#8B6FD9]">
          RESEARCH
        </span>
        <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] text-[#2E1A47]">
          Conference Presentations
        </h1>
        <p className="mt-4 text-base text-[#6B5B95] sm:text-lg">
          Selected national and international presentations
        </p>

        <ol className="relative mt-16 space-y-16 sm:mt-20 sm:space-y-20 lg:space-y-24">
          <div
            aria-hidden
            className="absolute bottom-2 left-[6px] top-2 w-px bg-[#8B6FD9]/20"
          />

          {CONFERENCE_PRESENTATIONS.map((entry) => {
            const isGrouped = entry.presentations.length > 1;
            return (
              <li key={`${entry.displayDate}-${entry.conference}`} className="relative pl-10 sm:pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 h-[13px] w-[13px] rounded-full border border-[#8B6FD9] bg-[#8B6FD9] shadow-[0_0_10px_2px_rgba(139,111,217,0.3)]"
                />

                <span className="block text-xs font-medium uppercase tracking-[0.25em] text-[#8B6FD9]">
                  {entry.displayDate}
                </span>

                {isGrouped ? (
                  <>
                    <h2 className="mt-3 font-serif text-2xl leading-tight text-[#2E1A47] sm:text-3xl">
                      {entry.conference}
                    </h2>
                    <p className="mt-2 text-sm text-[#6B5B95]/80 sm:text-base">
                      {entry.location}
                    </p>

                    <div className="mt-8 space-y-6 border-l border-[#8B6FD9]/15 pl-6 sm:pl-8">
                      {entry.presentations.map((presentation, index) => (
                        <div key={presentation}>
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B6FD9]/70 sm:text-xs">
                            {`Presentation ${String(index + 1).padStart(2, "0")}`}
                          </span>
                          <h3 className="mt-2 font-serif text-lg leading-snug text-[#2E1A47] sm:text-xl">
                            {presentation}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="mt-3 font-serif text-2xl leading-tight text-[#2E1A47] sm:text-3xl">
                      {entry.presentations[0]}
                    </h2>
                    <p className="mt-2 text-base font-medium text-[#6B5B95] sm:text-lg">
                      {entry.conference}
                    </p>
                    <p className="mt-1 text-sm text-[#6B5B95]/80">
                      {entry.location}
                    </p>
                  </>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mt-20 border-t border-[#8B6FD9]/15 pt-8 text-xs font-medium uppercase tracking-[0.25em] text-[#6B5B95]/60 sm:mt-24">
          Selected conference presentations, 2023–2026
        </p>
      </div>
    </section>
  );
}
