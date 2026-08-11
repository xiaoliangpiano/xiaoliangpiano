"use client";

import { useEffect, useRef, useState } from "react";
import { calendar } from "./calendar-data";
import {
  formatAbbreviatedDate,
  formatFullDate,
  getCityStateAbbreviated,
  getNextUpcomingPerformance,
  getYearRange,
  sortPerformancesByDate,
} from "./calendar-utils";

export default function Calendar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stops = sortPerformancesByDate(calendar);
  const nextStop = getNextUpcomingPerformance(stops) ?? stops[0];
  const activeStop = stops.find((stop) => stop.date === hoveredDate) ?? nextStop;
  const yearRange = getYearRange(stops);
  const isShowingNextStop = activeStop?.date === nextStop?.date;

  return (
    <div ref={sectionRef} className={`relative w-full ${isInView ? "cal-in-view" : ""}`}>
      <div className="cal-title-in flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="block text-xs font-medium tracking-[0.35em] text-[#8B6FD9]">
            CALENDAR
          </span>
          <h1 className="mt-4 font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] text-[#2E1A47]">
            Upcoming Performances
          </h1>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B5B95]">
          {yearRange}
        </p>
      </div>

      {activeStop && (
        <div className="cal-next-in mt-12 border-t border-[#8B6FD9]/15 pt-8 sm:mt-14 sm:pt-10">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#8B6FD9]">
            {isShowingNextStop ? "Next Performance" : formatAbbreviatedDate(activeStop.date)}
          </span>
          <h2 className="mt-3 font-serif text-2xl leading-tight text-[#2E1A47] sm:text-3xl lg:text-[2.25rem]">
            {activeStop.venue}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6B5B95]">
            {formatFullDate(activeStop.date)} · {activeStop.city}
            {activeStop.time !== "TBA" ? ` · ${activeStop.time}` : ""}
          </p>
          <p
            className={`mt-1 text-sm text-[#8B6FD9]/80 ${
              activeStop.location === "TBA" ? "invisible" : ""
            }`}
          >
            {activeStop.location === "TBA" ? "Location TBA" : activeStop.location}
          </p>
        </div>
      )}

      <div className="mt-16 sm:mt-20">
        {/* Desktop / tablet — horizontal journey */}
        <div className="relative hidden md:block" onMouseLeave={() => setHoveredDate(null)}>
          <div className="cal-line absolute left-0 right-0 top-[7px] h-px origin-left bg-[#8B6FD9]/20" />
          <ol className="relative grid grid-cols-4 gap-8">
            {stops.map((stop, index) => {
              const isActive = stop.date === activeStop?.date;
              return (
                <li
                  key={stop.date}
                  className="cal-marker flex flex-col items-start"
                  style={{ animationDelay: `${0.6 + index * 0.25}s` }}
                  onMouseEnter={() => setHoveredDate(stop.date)}
                >
                  <span
                    className={`block h-[13px] w-[13px] rounded-full border transition-colors duration-500 ${
                      isActive
                        ? "border-[#8B6FD9] bg-[#8B6FD9]"
                        : "border-[#8B6FD9]/35 bg-white"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`mt-4 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-500 ${
                      isActive ? "text-[#8B6FD9]" : "text-[#8B6FD9]/50"
                    }`}
                  >
                    {formatAbbreviatedDate(stop.date)}
                  </span>
                  <span
                    className={`mt-1 text-sm transition-colors duration-500 ${
                      isActive ? "text-[#2E1A47]" : "text-[#6B5B95]"
                    }`}
                  >
                    {getCityStateAbbreviated(stop.city)}
                  </span>
                  <span className="mt-1 text-xs text-[#6B5B95]/70">{stop.venue}</span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile — vertical journey */}
        <ol className="relative flex flex-col gap-8 md:hidden">
          <div className="cal-line-vertical absolute bottom-0 left-[6px] top-0 w-px origin-top bg-[#8B6FD9]/20" />
          {stops.map((stop, index) => {
            const isNext = stop.date === nextStop?.date;
            return (
              <li
                key={stop.date}
                className="cal-marker relative flex items-start gap-4 pl-8"
                style={{ animationDelay: `${0.6 + index * 0.25}s` }}
              >
                <span
                  className={`absolute left-0 top-[4px] block h-[13px] w-[13px] rounded-full border ${
                    isNext
                      ? "border-[#8B6FD9] bg-[#8B6FD9]"
                      : "border-[#8B6FD9]/35 bg-white"
                  }`}
                  aria-hidden="true"
                />
                <div>
                  <span
                    className={`block text-[11px] font-medium uppercase tracking-[0.18em] ${
                      isNext ? "text-[#8B6FD9]" : "text-[#8B6FD9]/50"
                    }`}
                  >
                    {formatAbbreviatedDate(stop.date)}
                  </span>
                  <span
                    className={`mt-1 block text-sm ${
                      isNext ? "text-[#2E1A47]" : "text-[#6B5B95]"
                    }`}
                  >
                    {getCityStateAbbreviated(stop.city)} — {stop.venue}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
