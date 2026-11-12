import RoadmapNav from "./components/RoadmapNav";
import RoadmapItemCard from "./components/RoadmapItemCard";
import { roadmapData } from "./data/roadmapData";
import { sortRoadmapItems } from "./utils/roadmapDate";

const sortedItems = sortRoadmapItems(roadmapData);

export default function Home() {
  return (
    <main
      suppressHydrationWarning
      className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20"
    >
      {/* Navegação fixa no topo */}
      <RoadmapNav items={sortedItems} />

      {/* Cabeçalho da Página */}
      <header className="max-w-4xl mx-auto text-center pt-16 pb-10 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Roadmap do Projeto & Hackathon
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          Acompanhe o progresso das reuniões da equipe e a evolução dos eventos
          do hackathon em tempo real.
        </p>
      </header>

      {/* Container Principal do Roadmap */}
      <div className="max-w-360 mx-auto px-4 relative">
        {/* Linha vertical central da timeline (visível apenas em desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-linear-to-b from-blue-500 via-indigo-500 to-purple-500 hidden md:block opacity-30" />

        {/* Legenda dos lados */}
        <div className="flex justify-around mb-8 relative z-10">
          <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
            Reuniões em Grupo
          </span>
          <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
            Eventos do Hackathon
          </span>
        </div>

        {/* Timeline única, em ordem cronológica */}
        <div className="space-y-4">
          {sortedItems.map((item) => (
            <RoadmapItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
