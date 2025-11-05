"use client";

import React, { memo } from "react";
import PropTypes from "prop-types"; // 1. Import PropTypes

// 2. The 'interface' block is completely removed.

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
  }) => {
    // 3. The ': AuroraTextProps' type annotation is removed from here.

    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
        colors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
);

// 4. Add JavaScript-based type-checking
AuroraText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  speed: PropTypes.number,
};

AuroraText.displayName = "AuroraText";