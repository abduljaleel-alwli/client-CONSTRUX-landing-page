import type { ComponentType, SVGProps } from "react";
import { LuxFrame } from "./LuxFrame";

export type Project = {
  title: string;
  execution: string;
  scope: string;
  status: string;
  image: string;
  imageAlt: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
};

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  // Page is RTL: even rows put the frame on the right (slats on the outer right edge),
  // odd rows put it on the left (slats on the outer left edge).
  const frameOnRight = index % 2 === 0;
  const { Icon } = project;

  return (
    <article className="grid items-center gap-8 md:grid-cols-[1.32fr_1fr] md:gap-[3.5vw]">
      <div className={frameOnRight ? "md:order-1" : "md:order-2"}>
        <LuxFrame src={project.image} alt={project.imageAlt} slats={frameOnRight ? "right" : "left"} />
      </div>

      <div className={`px-2 md:px-0 ${frameOnRight ? "md:order-2" : "md:order-1"}`}>
        <h2 className="text-[clamp(1.45rem,2.3vw,2rem)] font-extrabold leading-snug text-foreground">
          {project.title}
        </h2>
        <span className="gold-rule mt-3 mb-6 w-20" />
        <div className="flex items-center gap-5 md:gap-7">
          <Icon className="text-gold-icon size-12 shrink-0 md:size-14" strokeWidth={1.6} />
          <dl className="space-y-1.5 text-base md:text-lg">
            <div>
              <dt className="inline font-bold">ביצוע: </dt>
              <dd className="inline text-foreground/85">{project.execution}</dd>
            </div>
            <div>
              <dt className="inline font-bold">היקף: </dt>
              <dd className="inline text-foreground/85">{project.scope}</dd>
            </div>
            <div>
              <dt className="inline font-bold">סטטוס: </dt>
              <dd className="inline text-foreground/85">{project.status}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
