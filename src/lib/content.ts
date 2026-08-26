import siteJson from "@/content/site.json";
import caseStudiesJson from "@/content/case-studies.json";

/** Cover key -> bundled image. Add new entries when you add new artwork. */
const DEFAULT_COVER =
  "https://placehold.co/800x600/eeeeee/999999?text=Case+Study+1";

const covers: Record<string, string> = {
  "case-1": "/KwavooLogo.png",
  "case-2": "/AGO.png",
  "case-3": "https://placehold.co/800x600/eeeeee/999999?text=Case+Study+3",
  "process-research": "https://placehold.co/800x600/eeeeee/999999?text=Process+Research",
  "process-wireframes": "https://placehold.co/800x600/eeeeee/999999?text=Process+Wireframes",
  "process-explorations": "https://placehold.co/800x600/eeeeee/999999?text=Process+Explorations",
  "process-testing": "https://placehold.co/800x600/eeeeee/999999?text=Process+Testing",
  "process-system": "https://placehold.co/800x600/eeeeee/999999?text=Process+System",
  "process-final": "https://placehold.co/800x600/eeeeee/999999?text=Process+Final",
};

export const portrait = "/portrait.png";
export const landscape1 = "/landscape1.JPG";
export const landscape2 = "/landscape2.JPG";
export const landscape3 = "/landscape3.JPG";
export const landscape4 = "/landscape4.JPG";

export type Social = { label: string; href: string };
export type Capability = { title: string; body: string };
export type Experience = { role: string; company: string; period: string; summary: string };
export type SkillGroup = { group: string; items: string[] };

export type Site = {
  name: string;
  role: string;
  tagline: string;
  availability: string;
  email: string;
  location: string;
  socials: Social[];
  capabilities: Capability[];
  about: {
    portraitAlt: string;
    paragraphs: string[];
    experience: Experience[];
    skills: SkillGroup[];
    currently: string[];
  };
};

export type ProcessBlock = {
  heading: string;
  body: string;
  bullets?: string[];
  image: string | null;
  imageAlt?: string;
};

export type Result = { metric: string; label: string };
export type Finding = { title: string; body: string };
export type Decision = { title: string; body: string };

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  timeline: string;
  team: string;
  tools: string[];
  featured: boolean;
  comingSoon?: boolean;
  cover: string;
  overview: string;
  context?: string;
  problem: string;
  problemPoints?: string[];
  goals?: string[];
  research?: { summary: string; findings: Finding[] };
  process: ProcessBlock[];
  decisions?: Decision[];
  results: Result[];
  outcome: string;
  testimonial?: { quote: string; author: string };
  learnings?: string[];
  reflection: string;
};

export const site = siteJson as Site;
export const caseStudies = caseStudiesJson as CaseStudy[];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCoverImage(key: string): string {
  return covers[key] ?? DEFAULT_COVER;
}

export function getNextCaseStudy(slug: string): CaseStudy | undefined {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return undefined;
  return caseStudies[(i + 1) % caseStudies.length];
}
