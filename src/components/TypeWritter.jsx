"use client";

import { twMerge } from "tailwind-merge";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react"; // <-- MODIFIED: Added useRef

// --- 1. TypewriterEffect (FIXED) ---
// This is for your static heading, e.g., "My Tech Stack"
//
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [isTypingComplete, setIsTypingComplete] = useState(false); // <-- FIX 1: State to hide cursor

  useEffect(() => {
    if (isInView) {
      const controls = animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );

      // --- FIX 2: Correctly wait for animation to finish ---
      controls.finished.then(() => {
        setIsTypingComplete(true);
      });
      // --- END OF FIX ---
    }
  }, [isInView, animate]); // Added animate to deps

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={twMerge(
                  `dark:text-white text-black opacity-0 hidden`,
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={twMerge(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}

      {/* --- FIX 3: Conditionally render the cursor --- */}
      {!isTypingComplete && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={twMerge(
            "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
            cursorClassName
          )}
        />
      )}
      {/* --- END OF FIX --- */}
    </div>
  );
};

// --- 2. TypewriterEffectSmooth (Unchanged) ---
//
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <span
                key={`char-${index}`}
                className={twMerge(
                  `dark:text-white text-black `,
                  word.className
                )}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={twMerge("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={twMerge(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

// --- 3. TypewriterLoop (COMPLETELY REWRITTEN & STABLE) ---
// This is for your looping skills animation
//
export const TypewriterLoop = ({
  words,
  className,
  cursorClassName,
  typeSpeed = 80,
  deleteSpeed = 60,
  pauseDuration = 1500,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Refs to manage animation frame and timestamps
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(0);
  const charIndexRef = useRef(0);
  const pauseEndRef = useRef(0);

  useEffect(() => {
    // This function runs the animation loop
    const animateText = (timestamp) => {
      // Initialize lastTimeRef on the first frame
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }
      
      // Calculate delta time to keep animation speed consistent
      const deltaTime = timestamp - lastTimeRef.current;
      const currentWord = words[wordIndex];
      const speed = isDeleting ? deleteSpeed : typeSpeed;

      // Check if we are currently pausing
      if (pauseEndRef.current > 0) {
        if (timestamp >= pauseEndRef.current) {
          pauseEndRef.current = 0; // End pause
          setIsDeleting(true); // Start deleting
        }
      } 
      // Check if enough time has passed to update the text
      else if (deltaTime >= speed) {
        lastTimeRef.current = timestamp; // Reset timer
        
        if (isDeleting) {
          // --- DELETING LOGIC ---
          if (charIndexRef.current > 0) {
            // Delete one character
            charIndexRef.current--;
            setText(currentWord.substring(0, charIndexRef.current));
          } else {
            // Finished deleting, switch to next word
            setIsDeleting(false);
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            // charIndexRef is already 0, so typing will start from scratch
          }
        } else {
          // --- TYPING LOGIC ---
          if (charIndexRef.current < currentWord.length) {
            // Type one character
            charIndexRef.current++;
            setText(currentWord.substring(0, charIndexRef.current));
          } else {
            // Finished typing, start pausing
            pauseEndRef.current = timestamp + pauseDuration;
          }
        }
      }

      // Continue the animation loop
      animFrameRef.current = requestAnimationFrame(animateText);
    };

    // Start the animation loop
    animFrameRef.current = requestAnimationFrame(animateText);

    // Clean up the animation frame on component unmount
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [
    words,
    wordIndex,
    isDeleting,
    typeSpeed,
    deleteSpeed,
    pauseDuration,
  ]);

  return (
    <div
      className={twMerge(
        "inline-block text-left align-middle",
        className
      )}
    >
      <span className="min-h-[1em]">{text}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={twMerge(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-8 bg-blue-500 ml-1",
          cursorClassName
        )}
      />
    </div>
  );
};