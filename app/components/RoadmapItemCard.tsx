import React from "react";
import Image from "next/image";
import { RoadmapItem } from "../types/roadmap";

interface RoadmapItemCardProps {
  item: RoadmapItem;
  index: number;
}

export default function RoadmapItemCard({ item, index }: RoadmapItemCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      id={item.id}
      className="scroll-mt-28 relative flex flex-col md:flex-row items-center my-12 group"
    >
      {/* Marcador central na linha do tempo vertical */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 z-10 hidden md:block shadow-md group-hover:scale-125 transition-transform" />

      {/* Conteúdo Alternado (Zigue-zague) */}
      <div
        className={`w-full md:w-1/2 ${
          isEven ? "md:pr-16 md:text-left" : "md:pl-16 md:ml-auto md:text-left"
        }`}
      >
        <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700/80 transition-all duration-300 hover:-translate-y-1">
          {/* Tag de Categoria */}
          <span
            className={`flex justify-center animate-pulse text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-3 ${
              item.category === "meeting"
                ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                : "bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400"
            }`}
          >
            {item.category === "meeting"
              ? "👥 Reunião em Grupo"
              : "🚀 Evento do Hackathon"}
          </span>

          {/* Data e Título h2 */}
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            {item.title}
          </h2>
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-1">
            {item.date}
          </span>
          {/* Imagem e Texto lado a lado dentro do card */}
          <div
            className={`flex flex-col sm:flex-row gap-5 items-center ${
              isEven ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Descrição */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-left flex-1">
              {item.description}
            </p>
            {/* Container da Imagem com tamanho aprimorado */}
            <div className="relative w-full sm:w-48 h-48 sm:h-36 shrink-0 rounded-xl overflow-hidden shadow-sm bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 192px"
                className="object-cover object-center h-48 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
