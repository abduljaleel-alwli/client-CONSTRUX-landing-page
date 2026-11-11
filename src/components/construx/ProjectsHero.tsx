import heroImage from "@/assets/project-construction-crane.jpg";
import { BrandMark } from "./SiteHeader";

export function ProjectsHero() {
  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden shadow-[var(--shadow-raised)]"
    >
      <div className="relative h-[500px] sm:h-[340px] md:h-[clamp(300px,25vw,380px)]">
        <img
          src={heroImage}
          alt="שלד בניין בבנייה עם עגורן צריח בשקיעה"
          width={1600}
          height={768}
          className="absolute inset-y-0 left-0 h-full w-full object-cover object-left sm:w-[64%]"
        />
        <div className="hero-panel absolute inset-y-0 right-0 w-full sm:w-[56%]">
          <div className="charcoal-panel absolute inset-0" />
          <span aria-hidden className="hero-panel__edge" />
          <div className="relative flex h-full flex-col items-start justify-center gap-4 pe-[6%] ps-[8%] text-charcoal-foreground sm:ps-[4vw] sm:pe-[24%]">
            <BrandMark className="text-2xl text-charcoal-foreground md:text-[34px]" />
            <h1
              id="hero-title"
              className="text-4xl font-black leading-tight md:text-[clamp(2.4rem,4.2vw,3.6rem)]"
            >
              הפרויקטים שלנו
            </h1>
            <span className="gold-rule w-28" />
            <p className="max-w-[34rem] text-sm leading-relaxed text-charcoal-foreground/85 md:text-[17px]">
              מגוון פרויקטים בתחום הבנייה והגמר,
              <br className="hidden sm:block" />
              בסטנדרטים גבוהים של איכות, בטיחות ועמידה בלוחות זמנים.
            </p>
          </div>
        </div>
      </div>
      <div className="gold-beam" />
    </section>
  );
}
