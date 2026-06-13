import data from "@/json/projects.json";

export type Project = {
  show: boolean;
  title: string;
  desc: string[];
  year: string;
  preview: string;
  code: string;
  Role: string;
  thumbnail: string;
  images: string[];
  tech: string[];
  slug: string;
  category: number[];
};

/** All visible projects */
export const PROJECTS: Project[] = data.Projects.filter((p) => p.show);

/** Lookup a single project by slug, returns undefined when not found */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
