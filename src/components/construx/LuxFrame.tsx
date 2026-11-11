type LuxFrameProps = {
  src: string;
  alt: string;
  /** Physical side of the niche that carries the wooden slat panel. */
  slats: "left" | "right";
  width?: number;
  height?: number;
  slatCount?: number;
  priority?: boolean;
  className?: string;
};

/**
 * A niche cut into the plaster wall: shaded soffit, lit sill, plain side return,
 * fluted wood slats on one side and a warm LED line around the photo.
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
      <div className="lux-frame__opening">
        <span aria-hidden className="lux-wall lux-wall--top" />
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
        <span aria-hidden className="lux-wall lux-wall--sill" />
      </div>
    </figure>
  );
}
