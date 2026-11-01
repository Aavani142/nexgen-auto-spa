declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module "react/jsx-runtime" {
  export function jsx(type: any, props?: any, key?: any): any;
  export function jsxs(type: any, props?: any, key?: any): any;
}

import { cn } from "../utils/cn";

export interface LogoProps {
  className?: string;
  variant?: "horizontal" | "stacked" | "mark";
  showTagline?: boolean; // kept for compatibility (the logo image already contains "AUTO SPA")
}

/**
 * Official NEXGEN AUTO SPA logo.
 * Uses ONE image: /public/images/nextganimg.jpeg
 * The photo has lots of black padding, so it is cropped with CSS
 * (no need to edit the image). An SVG filter turns the black background transparent,
 * so the logo sits cleanly on any dark background or photo.
 */
const SRC = "/images/nextganimg.jpeg";

// Crop boxes (in pixels) inside the 1080 x 1080 source image
const FULL = { x: 36, y: 374, w: 1039, h: 325 }; // symbol + NEXGEN + AUTO SPA
const MARK = { x: 40, y: 380, w: 190, h: 312 }; // only the "ng" frame

function Cropped({
  box,
  className,
  alt,
}: {
  box: { x: number; y: number; w: number; h: number };
  className?: string;
  alt: string;
}) {
  const SIZE = 1080;
  return (
    <span
      role="img"
      aria-label={alt}
      className={cn("relative inline-block shrink-0 select-none overflow-hidden", className)}
      style={{ aspectRatio: `${box.w} / ${box.h}` }}
    >
      {/* black -> transparent (alpha = brightness of pixel) */}
      <svg width="0" height="0" className="absolute" aria-hidden focusable="false">
        <filter id="nexgen-knockout" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    6 6 6 0 -0.9"
          />
        </filter>
      </svg>
      <img
        src={SRC}
        alt=""
        draggable={false}
        className="absolute max-w-none"
        style={{
          filter: "url(#nexgen-knockout)",
          width: `${(SIZE / box.w) * 100}%`,
          height: `${(SIZE / box.h) * 100}%`,
          left: `${-(box.x / box.w) * 100}%`,
          top: `${-(box.y / box.h) * 100}%`,
        }}
      />
    </span>
  );
}

export function NexgenLogo({ className, variant = "horizontal" }: LogoProps) {
  if (variant === "mark") {
    return <Cropped box={MARK} alt="Nexgen Auto Spa mark" className={cn("h-10", className)} />;
  }
  if (variant === "stacked") {
    return <Cropped box={FULL} alt="Nexgen Auto Spa" className={cn("h-20", className)} />;
  }
  // horizontal (default: navbar, footer, hero ...)
  return <Cropped box={FULL} alt="Nexgen Auto Spa" className={cn("h-11 sm:h-12", className)} />;
}

export default NexgenLogo;