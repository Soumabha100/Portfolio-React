"use client";
import React from "react";

/**
 * A utility for conditionally joining class names.
 */
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = ["#0ea5e9", "#06b6d4", "#8b5cf6"],
  className,
  style,
  ...props
}) {
  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        backgroundImage: `radial-gradient(transparent,transparent, ${
          Array.isArray(shineColor) ? shineColor.join(",") : shineColor
        },transparent,transparent)`,
        backgroundSize: "300% 300%",
        mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "var(--border-width)",
        animation: "shine var(--duration) infinite linear",
        ...style,
      }} 
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]",
        className
      )}
      {...props}
    />
  );
}