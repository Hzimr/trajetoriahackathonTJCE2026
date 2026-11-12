"use client";

import { RoadmapItem } from "../types/roadmap";
import { formatShortDate } from "../utils/roadmapDate";
import ThemeToggle from "./ThemeToggle";

interface RoadmapNavProps {
  items: RoadmapItem[];
}

const CIRCLE_COLORS = {
  meeting: "bg-blue-600 hover:bg-blue-500 focus-visible:ring-blue-400",
  hackathon: "bg-purple-600 hover:bg-purple-500 focus-visible:ring-purple-400",
} as const;

export default function RoadmapNav({ items }: RoadmapNavProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav
      suppressHydrationWarning
      className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-2 px-2 sm:px-4"
    >
      <div className="relative max-w-6xl mx-auto flex items-center gap-2">
        {/* Área dos círculos: ocupa o espaço restante e rola se não couber */}
        <div className="flex-1 min-w-0 overflow-x-auto overscroll-x-contain no-scrollbar md:px-16">
          {/* w-max + mx-auto: centraliza quando cabe, alinha à esquerda quando rola */}
          <div className="flex items-stretch w-max mx-auto">
            {items.map((item, index) => {
              const isMeeting = item.category === "meeting";
              const shortDate = formatShortDate(item.date);

              const circle = (
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`${index + 1}. ${item.title} (${item.date})`}
                  title={item.title}
                  className={`w-8 h-8 shrink-0 rounded-full text-xs font-bold text-white shadow-sm transition-transform active:scale-95 sm:hover:scale-110 focus:outline-none focus-visible:ring-2 ${
                    CIRCLE_COLORS[isMeeting ? "meeting" : "hackathon"]
                  }`}
                >
                  {index + 1}
                </button>
              );

              const dateLabel = (
                <span className="text-[9px] sm:text-[10px] font-medium uppercase leading-none text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {shortDate}
                </span>
              );

              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center w-10 sm:w-12 shrink-0"
                >
                  {/* Linha de cima: reuniões */}
                  <div className="h-12 flex flex-col items-center justify-end gap-1">
                    {isMeeting && (
                      <>
                        {dateLabel}
                        {circle}
                      </>
                    )}
                  </div>

                  {/* Divisória */}
                  <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-1" />

                  {/* Linha de baixo: hackathons */}
                  <div className="h-12 flex flex-col items-center justify-start gap-1">
                    {!isMeeting && (
                      <>
                        {circle}
                        {dateLabel}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tema: no fluxo (mobile) e absoluto à direita (md+) para não deslocar o centro */}
        <div className="hidden sm:flex shrink-0 items-center pl-2 border-l border-slate-200 dark:border-slate-800 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
