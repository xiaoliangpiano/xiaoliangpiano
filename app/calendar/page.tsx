import SiteHeaderNav from "../site-header-nav";
import Calendar from "./Calendar";

export default function Page() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#FAF7F1] via-[#F6F0FA] to-[#EEE3F9]">
      <SiteHeaderNav theme="light" />

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40 lg:pb-32">
        <Calendar />
      </div>
    </section>
  );
}
