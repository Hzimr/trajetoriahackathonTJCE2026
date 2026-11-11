import { RoadmapItem } from "../types/roadmap";

// Importando as imagens locais
import img2309 from "../imgs/Img(1) 23-09.png";
import img3009 from "../imgs/Img(1) 30-09.png";
import img0210 from "../imgs/Img(2) 02-10.jpeg";
import img0710 from "../imgs/Img(2) 07-10.jpeg";
import img1410 from "../imgs/Img(2) 14-10.jpeg";
import img2110 from "../imgs/Img(2) 21-10.jpeg";
import img2810 from "../imgs/Img(2) 28-10.jpg";

export const roadmapData: RoadmapItem[] = [
  {
    id: "reuniao-1",
    title: "Kickoff e Alinhamento Inicial",
    date: "23 de Setembro, 2026",
    category: "meeting",
    description:
      "Primeira reunião da equipe para definir o escopo do projeto, escolher a stack tecnológica (Next.js, TypeScript e Tailwind) e delegar papéis.",
    imageUrl: img2309,
  },
  {
    id: "reuniao-2",
    title: "Definição de Protótipo e Arquitetura",
    date: "30 de Setembro, 2026",
    category: "meeting",
    description:
      "Validação dos wireframes das telas principais, estruturação dos componentes e configuração inicial do repositório no GitHub.",
    imageUrl: img3009,
  },

  // --- HACKATHON / ETAPAS ---
  {
    id: "hackathon-1",
    title: "Abertura do Hackathon e Lançamento do Desafio",
    date: "2 de Outubro, 2026",
    category: "hackathon",
    description:
      "Início oficial da maratona de programação. Divisão dos temas, brainstorm acelerado de ideias e primeiras linhas de código.",
    imageUrl: img0210,
  },
  {
    id: "hackathon-2",
    title: "Sprint de Desenvolvimento Intensivo",
    date: "7 de Outubro, 2026",
    category: "hackathon",
    description:
      "Foco total na integração das APIs, refinamento visual com Tailwind CSS e resolução de bugs críticos de performance.",
    imageUrl: img0710,
  },
  {
    id: "hackathon-3",
    title: "Evolução e Ajustes do Projeto",
    date: "14 de Outubro, 2026",
    category: "hackathon",
    description:
      "Revisão parcial do código, testes de usabilidade e implementação de melhorias sugeridas na semana anterior.",
    imageUrl: img1410,
  },
  {
    id: "hackathon-4",
    title: "Validação Prévia e Testes Gerais",
    date: "21 de Outubro, 2026",
    category: "hackathon",
    description:
      "Verificação geral de fluxos, validação de responsividade e ajustes finais na interface do usuário.",
    imageUrl: img2110,
  },
  {
    id: "hackathon-5",
    title: "Pitch Final e Apresentação do MVP",
    date: "28 de Outubro, 2026",
    category: "hackathon",
    description:
      "Entrega final da aplicação desenvolvida, gravação do vídeo de demonstração e apresentação para a banca avaliadora.",
    imageUrl: img2810,
  },
];
