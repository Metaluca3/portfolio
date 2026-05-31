export interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  images: string[];
  tags: string[];
  year?: number;
  order: number;
}
