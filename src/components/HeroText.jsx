import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";
import { AuroraText } from "./AuroraText";

const words = [
  "Scalable",
  "Secure",
  "Modern",
  "High-Performance",
  "Cloud-Native",
  "Innovative",
];
const HeroText = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="relative z-10 min-h-[60vh] flex items-center justify-center md:justify-start px-4 md:px-8 lg:px-12">
      {/* Desktop View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:block"
      >
        <div className="space-y-6">
          <motion.h1
            {...fadeInUp}
            className="text-5xl lg:text-6xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Hi, I'm <AuroraText>Soumabha</AuroraText>
          </motion.h1>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-3xl lg:text-4xl font-medium text-neutral-300">
              Aspiring Backend Software Engineer
            </p>

            <div className="flex flex-col gap-2">
              <p className="text-2xl lg:text-3xl font-medium text-neutral-400">
                Crafting
              </p>
              <div className="transform -translate-x-1">
                <FlipWords
                  words={words}
                  className="font-black text-white text-7xl lg:text-8xl"
                />
              </div>
              <p className="text-3xl lg:text-4xl font-medium bg-linear-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                Web Solutions
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile View */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:hidden text-center"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hi, I'm <AuroraText>Soumabha</AuroraText>
          </h1>
          <p className="text-2xl font-medium text-neutral-100 ">
            Aspiring Backend Software Engineer
          </p>
          <div className="space-y-2">
            <p className="text-xl font-medium text-neutral-200">Crafting</p>
            <FlipWords
              words={words}
              className="font-black text-white text-5xl"
            />
            <p className="text-2xl font-bold bg-linear-to-r from-neutral-50 to-neutral-100 bg-clip-text text-transparent">
              Web Solutions
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
