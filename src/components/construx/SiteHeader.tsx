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
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-[4vw] md:h-[84px]">
        <nav aria-label="ניווט ראשי" className="flex items-center gap-4 sm:gap-8 md:gap-14">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={"active" in item ? "page" : undefined}
              className={`relative py-2 text-[13px] transition-colors sm:text-base md:text-lg ${
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
