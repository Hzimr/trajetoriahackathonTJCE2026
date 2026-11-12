import React from "react";
import Image from "next/image";
import { RoadmapItem } from "../types/roadmap";

interface RoadmapItemCardProps {
  item: RoadmapItem;
}

const CATEGORY_CONFIG = {
  meeting: {
    label: "👥 Reunião em Grupo",
    badge: "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400",
    dot: "bg-blue-600",
  },
  hackathon: {
    label: "🚀 Evento do Hackathon",
    badge:
      "bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400",
    dot: "bg-purple-600",
  },
} as const;

export default function RoadmapItemCard({ item }: RoadmapItemCardProps) {
  const isMeeting = item.category === "meeting";
  const config = isMeeting
    ? CATEGORY_CONFIG.meeting
    : CATEGORY_CONFIG.hackathon;

  return (
    <article
      id={item.id}
      className="scroll-mt-28 w-full my-8 flex items-center justify-center"
    >
      <div
        className={`w-full flex flex-col md:flex-row items-center ${
          isMeeting ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Card */}
        <div className="w-full md:w-1/2 md:px-8">
          <div className="group bg-white dark:bg-slate-800/90 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700/85 transition-all duration-300 hover:-translate-y-1">
            {/* Categoria */}
            <div
              className={`flex mb-3 ${isMeeting ? "justify-start" : "justify-end"}`}
            >
              <span
                className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${config.badge}`}
              >
                {config.label}
              </span>
            </div>

            {/* Data e título */}
            <section className="flex flex-col justify-center text-center items-center">
              <time className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-1">
                {item.date}
              </time>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                {item.title}
              </h2>
            </section>

            {/* Imagem + texto */}
            <div
              className={`flex flex-col sm:flex-col gap-5 sm:items-center ${
                isMeeting ? "sm:flex-col" : ""
              }`}
            >
              {/* Imagem inteira, sem cortes */}
              {item.imageUrl && (
                <div className="w-full sm:w-1/2 shrink-0 rounded-xl overflow-hidden shadow-sm bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <p
                className={`text-sm text-center text-slate-600 dark:text-slate-300 leading-relaxed flex-1 `}
              >
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* Marcador da timeline */}
        <div className="hidden md:flex justify-center items-center shrink-0 w-8">
          <div
            className={`w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 shadow-md ${config.dot}`}
          />
        </div>

        {/* Espaçador do zigue-zague */}
        <div className="hidden md:block w-1/2" />
      </div>
    </article>
  );
}
