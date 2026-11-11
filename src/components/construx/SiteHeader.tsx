import { Link } from "@tanstack/react-router";

const NAV = [
  { label: "בית", href: "#top" },
  { label: "פרויקטים", href: "#projects", active: true },
  { label: "לקוחות", href: "#projects" },
  { label: "אודות", href: "#about" },
  { label: "צור קשר", href: "#contact" },
] as const;

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span dir="ltr" className={`font-brand font-bold tracking-[0.04em] ${className}`}>
      CONSTRU<span className="text-gold">X</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header id="top" className="relative">
      <div className="mx-auto flex max-w-[1320px] flex-col-reverse items-center justify-between gap-1 px-[4vw] py-3 sm:h-[72px] sm:flex-row sm:py-0 md:h-[84px]">
        <nav aria-label="ניווט ראשי" className="flex items-center gap-5 sm:gap-8 md:gap-14">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={"active" in item ? "page" : undefined}
              className={`relative whitespace-nowrap py-2 text-sm transition-colors sm:text-base md:text-lg ${
                "active" in item
                  ? "font-extrabold text-foreground"
                  : "font-medium text-foreground/85 hover:text-bronze"
              }`}
            >
              {item.label}
              {"active" in item && (
                <span className="gold-rule absolute -bottom-1 -inset-x-3 md:-inset-x-4" />
              )}
            </a>
          ))}
        </nav>
        <Link to="/" aria-label="CONSTRUX – דף הבית" className="text-foreground">
          <BrandMark className="text-xl sm:text-2xl md:text-[34px]" />
        </Link>
      </div>
      <div className="gold-beam" />
    </header>
  );
}
