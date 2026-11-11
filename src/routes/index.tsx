import { createFileRoute } from "@tanstack/react-router";
import { Building, Building2, Landmark, Warehouse } from "lucide-react";

import residential from "@/assets/project-residential-towers.jpg";
import office from "@/assets/project-office-building.jpg";
import community from "@/assets/project-community-center.jpg";
import construction from "@/assets/project-construction-crane.jpg";
import logistics from "@/assets/project-logistics-center.jpg";
import { CraneIcon } from "@/components/construx/icons";
import { ProjectRow, type Project } from "@/components/construx/ProjectRow";
import { ProjectsHero } from "@/components/construx/ProjectsHero";
import { BrandMark, SiteHeader } from "@/components/construx/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "הפרויקטים שלנו | CONSTRUX בנייה וגמר" },
      {
        name: "description",
        content:
          "פרויקטי בנייה וגמר של CONSTRUX: מגורים, משרדים, מבני ציבור, מסחר ולוגיסטיקה – בסטנדרטים גבוהים של איכות ובטיחות.",
      },
      { property: "og:title", content: "הפרויקטים שלנו | CONSTRUX" },
      {
        property: "og:description",
        content: "מגוון פרויקטים בתחום הבנייה והגמר, בסטנדרטים גבוהים של איכות, בטיחות ועמידה בלוחות זמנים.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PROJECTS: Project[] = [
  {
    title: "פרויקט מגורים – מגדלי רמות",
    execution: "בניית 3 מגדלי מגורים",
    scope: "120 יחידות דיור",
    status: "הושלם",
    image: residential,
    imageAlt: "שלושה מגדלי מגורים לבנים עם מרפסות זכוכית וגינה ירוקה",
    Icon: Building2,
  },
  {
    title: "מבנה משרדים – מרכז העסקים",
    execution: "הקמה וגמר מלא",
    scope: "6,500 מ״ר",
    status: "הושלם",
    image: office,
    imageAlt: "מבנה משרדים מודרני עם חזית זכוכית וחיפוי אבן",
    Icon: Building,
  },
  {
    title: "מבנה ציבור – מרכז קהילתי",
    execution: "בנייה וגמר",
    scope: "3,200 מ״ר",
    status: "בתהליך ביצוע",
    image: community,
    imageAlt: "לובי מרכז קהילתי עם רצפת שיש, עמוד עגול וחלונות זכוכית גבוהים",
    Icon: Landmark,
  },
  {
    title: "בנייה מורכבת – מבנה מסחרי",
    execution: "שלד, גמר ותשתיות",
    scope: "8,000 מ״ר",
    status: "בביצוע",
    image: construction,
    imageAlt: "שלד בטון של מבנה מסחרי בבנייה עם עגורן",
    Icon: CraneIcon,
  },
  {
    title: "מרכז לוגיסטי – אזור תעשייה",
    execution: "הקמה מלאה",
    scope: "10,000 מ״ר",
    status: "הושלם",
    image: logistics,
    imageAlt: "מרכז לוגיסטי גדול עם רציפי פריקה",
    Icon: Warehouse,
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <ProjectsHero />
        <section
          id="projects"
          aria-label="רשימת פרויקטים"
          className="mx-auto flex max-w-[1400px] flex-col gap-14 px-[3.5vw] py-14 md:gap-[clamp(2.5rem,4vw,4rem)] md:py-[clamp(3rem,5vw,5rem)]"
        >
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </section>
      </main>
      <footer id="contact">
        <div className="gold-beam" />
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-3 px-[4vw] py-8 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} CONSTRUX · בנייה וגמר</span>
          <BrandMark className="text-xl text-foreground" />
        </div>
      </footer>
    </div>
  );
}
