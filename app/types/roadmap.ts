export type RoadmapCategory = "meeting" | "hackathon";
import { StaticImageData } from "next/image";
export interface RoadmapItem {
  id: string;
  title: string;
  date: string;
  category: RoadmapCategory;
  description: string;
  imageUrl: string | StaticImageData;
}
