import { RoadmapItem } from "../types/roadmap";

export const roadmapData: RoadmapItem[] = [
  // --- PARTE DE CIMA: Reuniões em Grupo ---
  {
    id: "reuniao-1",
    title: "Kickoff e Alinhamento Inicial",
    date: "10 de Outubro, 2026",
    category: "meeting",
    description:
      "Primeira reunião da equipe para definir o escopo do projeto, escolher a stack tecnológica (Next.js, TypeScript e Tailwind) e delegar papéis.",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "reuniao-2",
    title: "Definição de Protótipo e Arquitetura",
    date: "15 de Outubro, 2026",
    category: "meeting",
    description:
      "Validação dos wireframes das telas principais, estruturação dos componentes e configuração inicial do repositório no GitHub.",
    imageUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
  },

  // --- PARTE DE BAIXO: Eventos do Hackathon ---
  {
    id: "hackathon-1",
    title: "Abertura do Hackathon e Lançamento do Desafio",
    date: "20 de Outubro, 2026",
    category: "hackathon",
    description:
      "Início oficial da maratona de programação. Divisão dos temas, brainstorm acelerado de ideias e primeiras linhas de código.",
    imageUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hackathon-2",
    title: "Sprint de Desenvolvimento Intensivo",
    date: "22 de Outubro, 2026",
    category: "hackathon",
    description:
      "Foco total na integração das APIs, refinamento visual com Tailwind CSS e resolução de bugs críticos de performance.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hackathon-3",
    title: "Pitch Final e Apresentação do MVP",
    date: "25 de Outubro, 2026",
    category: "hackathon",
    description:
      "Entrega final da aplicação desenvolvida, gravação do vídeo de demonstração e apresentação para a banca avaliadora.",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
  },
];
