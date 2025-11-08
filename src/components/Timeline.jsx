"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data = [] }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Height calculation logic
  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Framer Motion scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>

      <div ref={ref} className="relative pb-20">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-start pt-8 md:pt-16"
            >
              {/* DOT */}
              <div className="absolute top-10 md:top-16 left-8 md:left-1/3 lg:left-1/4 flex items-center justify-center w-10 h-10 rounded-full -translate-x-1/2 bg-midnight z-10">
                <span className="absolute inline-flex w-3 h-3 rounded-full opacity-75 animate-ping bg-cyan-400" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-cyan-500" />
              </div>

              {/* LEFT COLUMN (Desktop Only): Reads from 'item?.year' */}
              <div className="sticky z-0 self-start top-40 w-1/3 lg:w-1/4 hidden md:flex flex-col items-end pr-12">
                <h3 className="text-3xl md:text-4xl font-bold text-neutral-300 text-right">
                  {item?.year}
                </h3>
              </div>

              {/* RIGHT COLUMN (Mobile & Desktop) */}
              <div className="relative w-full pl-16 md:pl-12 md:w-2/3 lg:w-3/4">
                {/* Mobile Date (top of card): Reads from 'item?.year' */}
                <div className="block mb-4 text-left text-neutral-300 md:hidden">
                  <h3 className="text-3xl font-bold">{item?.year}</h3>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-300">
                  {item?.title}
                </h3>
                {/* Job */}
                <h4 className="text-xl md:text-2xl text-neutral-400 font-semibold mb-2">
                  {item?.job}
                </h4>

                <p className="text-base md:text-lg text-neutral-500 mb-4">
                  {item?.duration}
                </p>

                {/* Content Paragraphs */}
                {Array.isArray(item?.contents) &&
                  item.contents.map((content, idx) => (
                    <p
                      className="mb-3 font-normal text-neutral-400"
                      key={`${index}-${idx}`}
                    >
                      {content}
                    </p>
                  ))}
              </div>
            </div>
          ))}

        {/* THE LINE */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 md:left-1/3 lg:left-1/4 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-700 to-transparent to-99% mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated part of the line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-cyan-500 via-cyan-500/50 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
};