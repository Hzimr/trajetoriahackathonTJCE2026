export type RoadmapCategory = "meeting" | "hackathon";

export interface RoadmapItem {
  id: string;
  title: string;
  date: string;
  category: RoadmapCategory;
  description: string;
  imageUrl: string;
}
