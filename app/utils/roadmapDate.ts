import { RoadmapItem } from "../types/roadmap";

const MONTHS = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const MONTHS_SHORT = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

// "17 de Setembro, 2026" -> { day: 17, month: 8, year: 2026 }
function parseDate(date: string) {
  const match = date
    .toLowerCase()
    .match(/(\d{1,2})\s+de\s+([a-zçãé]+),?\s+(\d{4})/);
  if (!match) return null;

  const month = MONTHS.indexOf(match[2]);
  if (month === -1) return null;

  return { day: Number(match[1]), month, year: Number(match[3]) };
}

export function getTimestamp(date: string): number {
  const parsed = parseDate(date);
  if (!parsed) return Number.MAX_SAFE_INTEGER; // datas inválidas vão pro final
  return new Date(parsed.year, parsed.month, parsed.day).getTime();
}

// "17 de Setembro, 2026" -> "17 set"
export function formatShortDate(date: string): string {
  const parsed = parseDate(date);
  if (!parsed) return "";
  return `${String(parsed.day).padStart(2, "0")} ${MONTHS_SHORT[parsed.month]}`;
}

// Ordena por data (estável: na mesma data, mantém a ordem do array original)
export function sortRoadmapItems(items: RoadmapItem[]): RoadmapItem[] {
  return [...items].sort((a, b) => getTimestamp(a.date) - getTimestamp(b.date));
}
