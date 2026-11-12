import { RoadmapItem } from "../types/roadmap";

// Importando as imagens locais
import img1 from "../imgs/Img1.jpeg";
import img2 from "../imgs/Img2 23-09.png";
import img3 from "../imgs/Img3 24-09.jpeg";
import img4 from "../imgs/Img4 30-09.png";
import img5 from "../imgs/Img5 02-10.jpeg";
import img6 from "../imgs/Img6 07-10.jpeg";
import img7 from "../imgs/Img7 08-10.jpeg";
import img8 from "../imgs/Img8 14-10.jpeg";
import img9 from "../imgs/Img9 21-10.jpeg";
import img10 from "../imgs/Img10 28-10.jpg";
import img11 from "../imgs/Img11.jpeg";

export const roadmapData: RoadmapItem[] = [
  {
    id: "hackathon-1",
    title: "Cerimônia de Abertura do Hackathon TJ-CE",
    date: "17 de Setembro, 2026",
    category: "hackathon",
    description:
      "Dia 1 - Cerimônia de abertura, aprofundamento sobre os desafios da VEMA/TJCE e interação das equipes",
    imageUrl: img1,
  },
  {
    id: "reuniao-1",
    title: "Brainstorming Inicial",
    date: "23 de Setembro, 2026",
    category: "meeting",
    description:
      "Primeira encontro de alinhamento e cocriação da equipe. O objetivo da sessão é estruturar as ideias-base, explorar soluções inovadoras para os desafios do projeto e definir com clareza os papéis e responsabilidades de cada integrante.",
    imageUrl: img2,
  },
  {
    id: "hackathon-2",
    title: "1º Workshop do evento: ideação, validação e prototipagem dasolução",
    date: "24 de Setembro, 2026",
    category: "hackathon",
    description: "Dia 2 - Workshop: Canva do Experimento e Teoria da Mudança",
    imageUrl: img3,
  },
  {
    id: "reuniao-2",
    title: "Alinhamento de Objetivos e Metas",
    date: "30 de Setembro, 2026",
    category: "meeting",
    description:
      "Esta reunião focou no alinhamento estratégico em compreender mais o problema que irá ser atacado, aprimorar as ideias iniciais.",
    imageUrl: img4,
  },

  {
    id: "hackathon-3",
    title: "1º Mentoria do Hackathon TJ-CE",
    date: "02 de Outubro, 2026",
    category: "hackathon",
    description:
      "Mentorias com profissionais do TJCE, da VEMA/TJCE, do LabLuz/TJCE e da UFC",
    imageUrl: img5,
  },

  {
    id: "reuniao-3",
    title: "Reconhecer o Cenário do problema e adaptar a solução",
    date: "07 de Outubro, 2026",
    category: "meeting",
    description:
      "Propor as tecnologias que farão parte da solução e se aprofundar no problema e adaptar as soluções propostas",
    imageUrl: img6,
  },

  {
    id: "hackathon-4",
    title: "Dia 3 - Workshop: estruturação de pitch de impacto",
    date: "08 de Outubro, 2026",
    category: "hackathon",
    description:
      "Foco na construção de uma boa apresentação e quais pontos são mais relevantes para o pitch.",
    imageUrl: img7,
  },

  {
    id: "reuniao-4",
    title: "Evolução e Ajustes do Projeto",
    date: "14 de Outubro, 2026",
    category: "meeting",
    description: ".",
    imageUrl: img8,
  },
  {
    id: "reuniao-5",
    title: "Validação Prévia e Testes Gerais",
    date: "21 de Outubro, 2026",
    category: "meeting",
    description:
      "Verificação geral de fluxos, validação de responsividade e ajustes finais na interface do usuário.",
    imageUrl: img9,
  },
  {
    id: "reuniao-6",
    title: "Construção e aprimoramento das entregas do hackathon",
    date: "28 de Outubro, 2026",
    category: "meeting",
    description:
      "Construção, aprimoramento e apresentação dos membros das equipes das entregas construídas ao longo dos encontros",
    imageUrl: img10,
  },
  {
    id: "hackathon-5",
    title:
      "Dia 4 - Oficina de aprimoramento do pitch / Demolation: simulação da apresentação do pitch",
    date: "28 de Outubro, 2026",
    category: "hackathon",
    description:
      "Oficina de aprimoramento do pitch e Demolation: simulação da apresentação do pitch e coleta de críticas e feedbacks",
    imageUrl: img1,
  },
  {
    id: "reuniao-7",
    title: "Reuniões 04/11, 07/11 & 10/11",
    date: "04 de Novembro, 2026",
    category: "meeting",
    description: "Ajustes finais da apresentação e do figma do projeto.",
    imageUrl: img11,
  },
];
