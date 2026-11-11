"use client";

import { RoadmapItem } from "../types/roadmap";
import ThemeToggle from "./ThemeToggle";

interface RoadmapNavProps {
  items: RoadmapItem[];
}

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
      className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3 px-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between overflow-x-auto gap-4 no-scrollbar">
        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
          Roadmap:
        </span>
        <div className="flex items-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-full transition-all whitespace-nowrap border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
            >
              {index + 1}. {item.title.split(" ")[0]}...
            </button>
          ))}
        </div>
        {/* Botão de Alternância de Tema */}
        <div className="flex items-center pl-2 border-l border-slate-200 dark:border-slate-800">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
