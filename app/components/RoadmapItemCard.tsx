import React from "react";
import Image from "next/image";
import { RoadmapItem } from "../types/roadmap";

interface RoadmapItemCardProps {
  item: RoadmapItem;
}

export default function RoadmapItemCard({ item }: RoadmapItemCardProps) {
  const isMeeting = item.category === "meeting";

  return (
    <div
      id={item.id}
      className="scroll-mt-28 w-full my-8 flex items-center justify-center"
    >
      {/* Container principal flexível para alternar o lado baseado na categoria */}
      <div
        className={`w-full flex flex-col md:flex-row items-center ${isMeeting ? "" : "md:flex-row-reverse"}`}
      >
        {/* Lado do Card (Ocupa 50% no desktop) */}
        <div className="w-full md:w-1/2 md:px-8">
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl border border-slate-100 dark:border-slate-700/85 transition-all duration-300 hover:-translate-y-1">
            {/* Tag de Categoria com cor específica */}
            <div
              className={`flex ${isMeeting ? "justify-start" : "justify-end"} mb-3`}
            >
              <span
                className={`inline-block animate-pulse text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                  isMeeting
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"
                    : "bg-purple-50 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400"
                }`}
              >
                {isMeeting ? "👥 Reunião em Grupo" : "🚀 Evento do Hackathon"}
              </span>
            </div>

            {/* Data e Título */}
            <span className="block text-xs font-medium text-slate-400 dark:text-slate-500 mb-1">
              {item.date}
            </span>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              {item.title}
            </h2>

            {/* Conteúdo Interno: Imagem e Texto lado a lado */}
            <div
              className={`flex flex-col sm:flex-row gap-5 items-center ${
                isMeeting ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* Imagem preenchendo perfeitamente sem cortes exagerados */}
              <div className="relative w-full sm:w-44 h-36 shrink-0 rounded-xl overflow-hidden shadow-sm bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 176px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Descrição */}
              <p
                className={`text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 ${isMeeting ? "md:text-right" : "text-left"}`}
              >
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* Marcador Central / Bolinha da Linha do Tempo */}
        <div className="hidden md:flex justify-center items-center shrink-0 w-8">
          <div
            className={`w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 shadow-md transition-transform ${
              isMeeting ? "bg-blue-600" : "bg-purple-600"
            }`}
          />
        </div>

        {/* Espaço vazio do outro lado para manter o balanceamento do zigue-zague */}
        <div className="hidden md:block w-1/2" />
      </div>
    </div>
  );
}
