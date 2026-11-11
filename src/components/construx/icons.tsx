import type { SVGProps } from "react";

/** Tower crane outline icon, drawn to match lucide's stroke style. */
export function CraneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M8 22V4" />
      <path d="M11 22V4" />
      <path d="M8 7l3 3M11 10l-3 3M8 13l3 3M11 16l-3 3" />
      <path d="M3 4h19" />
      <path d="M3 7h19" />
      <path d="M8 4l1.5-2L11 4" />
      <path d="M13 4l2 3M16 4l2 3M19 4l2 3" />
      <path d="M3 4v3" />
      <path d="M20 7v5" />
      <path d="M18.5 12h3v2h-3z" />
      <path d="M5 22h9" />
    </svg>
  );
}
