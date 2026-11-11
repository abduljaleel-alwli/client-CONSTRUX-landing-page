type LuxFrameProps = {
  src: string;
  alt: string;
  /** Physical side of the frame that carries the vertical slats. */
  slats: "left" | "right";
  width?: number;
  height?: number;
  slatCount?: number;
  priority?: boolean;
  className?: string;
};

/**
 * Recessed plaster niche with bevelled walls, an integrated gold LED strip
 * around the photo and a bank of bronze/gold vertical slats on one side.
 * All visuals live in the `.lux-*` classes in styles.css.
 */
export function LuxFrame({
  src,
  alt,
  slats,
  width = 1600,
  height = 704,
  slatCount = 7,
  priority = false,
  className,
}: LuxFrameProps) {
  return (
    <figure className={["lux-frame", className].filter(Boolean).join(" ")} data-slats={slats}>
      <div className="lux-frame__niche">
        <span aria-hidden className="lux-wall lux-wall--top" />
        <span aria-hidden className="lux-wall lux-wall--bottom" />
        <span aria-hidden className="lux-wall lux-wall--side" />
        <div aria-hidden className="lux-slats">
          {Array.from({ length: slatCount }, (_, i) => (
            <span key={i} className="lux-slat" />
          ))}
        </div>
        <div className="lux-window">
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </div>
    </figure>
  );
}
