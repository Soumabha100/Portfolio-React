import { motion } from "framer-motion";
import React, { useState } from "react"; // Import useState

const ProjectDetails = ({
  title,
  description,
  subDescription,
  githubUrl,
  liveUrl,
  image,
  tags,
  closeModal,
}) => {
  // --- NEW: State for fullscreen image modal ---
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Handle backdrop click for the main modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-md p-4"
        onClick={handleBackdropClick}
      >
        <motion.div
          className="relative max-w-4xl w-full border shadow-2xl rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10 
                     overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close Button (Main Modal) */}
          <button
            onClick={closeModal}
            className="absolute p-2 rounded-full top-4 right-4 z-50 bg-black/50 hover:bg-white/20 transition-all"
          >
            <img src="assets/close.svg" className="w-6 h-6" alt="Close modal" />
          </button>

          {/* --- LEFT COLUMN (Image) --- */}
          <motion.div 
            className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0 relative bg-black/30" // Added dark bg for object-contain
            variants={contentVariants}
          >
            {/* --- NEW: Fullscreen Button --- */}
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="absolute top-4 left-4 z-40 p-2 rounded-full bg-black/50 hover:bg-white/20 transition-all"
              aria-label="View fullscreen image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </button>

            {/* --- IMAGE FIX: Changed to object-contain --- */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain" // No more cropping!
            />
          </motion.div>

          {/* --- RIGHT COLUMN (Details) --- */}
          <div className="md:w-1/2 w-full overflow-y-auto p-6 md:p-8">
            <motion.h5
              className="mb-3 text-3xl font-bold text-white"
              variants={contentVariants}
            >
              {title}
            </motion.h5>
            
            <motion.p
              className="mb-4 font-normal text-neutral-400"
              variants={contentVariants}
            >
              {description}
            </motion.p>
            
            <motion.ul
              className="list-disc list-inside space-y-2 mb-6 marker:text-cyan-400"
              variants={contentVariants}
            >
              {subDescription.map((subDesc, index) => (
                <li
                  className="font-normal text-neutral-400"
                  key={index}
                >
                  {subDesc}
                </li>
              ))}
            </motion.ul>
            
            <motion.div className="mb-6" variants={contentVariants}>
              <h6 className="text-sm font-semibold text-neutral-300 mb-3">TECHNOLOGIES USED</h6>
              <div className="flex gap-3 flex-wrap">
                {tags.map((tag) => (
                  <div key={tag.id} className="p-2 bg-black/30 rounded-lg hover-animation">
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="rounded-lg size-8"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* --- BUTTONS FIX: Overlap Fixed --- */}
            <motion.div 
              className="flex flex-col md:flex-row gap-4 mt-8" // Changed sm:flex-row to md:flex-row
              variants={contentVariants}
            >
              {/* GitHub Button (Secondary) */}
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-lg font-semibold text-center text-white rounded-lg cursor-pointer bg-black/30 border border-neutral-700 hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
              >
                <img src="assets/socials/github.svg" className="size-6" alt="GitHub" />
                View on GitHub
              </a>
              
              {/* Live Demo Button (Primary) */}
              {liveUrl && (
                <a 
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-lg font-semibold text-center text-white rounded-lg cursor-pointer bg-radial from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-[1.02]"
                >
                  <img src="assets/arrow-up.svg" className="size-5" alt="Live Demo" />
                    View Live Demo
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* --- NEW: IMAGE LIGHTBOX MODAL --- */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* Close Button (Image Modal) */}
          <button
            className="absolute p-2 rounded-full top-6 right-6 z-50 bg-black/50 hover:bg-white/20 transition-all"
          >
            <img src="assets/close.svg" className="w-8 h-8" alt="Close modal" />
          </button>
          
          {/* Fullscreen Image */}
          <motion.img
            src={image}
            alt={title}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking image
          />
        </div>
      )}
    </>
  );
};

export default ProjectDetails;