import React, { useState } from "react";
// --- THIS IS THE FIX ---
// AnimatePresence was missing from this import
import { motion, AnimatePresence } from "framer-motion"; 

// 1. Accept 'setIsOpen' as a prop
function Navigation({ setIsOpen }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        {/* 2. Add onClick to all links */}
        <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work" onClick={() => setIsOpen(false)}>
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed insert-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            {" "}
            Soumabha
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="h-6 w-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            {/* 3. Pass setIsOpen (no-op for desktop) */}
            <Navigation setIsOpen={() => {}} />
          </nav>
        </div>
      </div>
      {/* 4. Use AnimatePresence for smooth open/close */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
          >
            <nav className="pb-5">
              {/* 5. Pass the *real* setIsOpen here */}
              <Navigation setIsOpen={setIsOpen} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;