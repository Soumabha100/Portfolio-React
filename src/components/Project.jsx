import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

// --- PROPS UPDATED ---
const Project = ({
  title,
  description,
  subDescription,
  githubUrl, // Renamed from 'href'
  liveUrl,   // New prop
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  
  // Use Framer Motion's AnimatePresence in the parent 
  // (Projects.jsx) for modal open/close animations.
  // For now, isHidden state works.

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-5 sm:flex sm:space-y-0 "
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="max-w-xl">
          <p className="text-2xl font-bold text-neutral-200">{title}</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span 
                key={tag.id}
                className="px-3 py-1 text-xs font-medium rounded-full bg-cyan-900/50 text-cyan-300"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setIsHidden(true)}
          className="items-center flex cursor-pointer gap-1 hover-animation text-neutral-400 hover:text-white"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="Read more" />
        </button>
      </div>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      
      {/* --- PROPS UPDATED --- */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          githubUrl={githubUrl} // Pass new prop
          liveUrl={liveUrl}     // Pass new prop
          tags={tags}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;