import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

// Navigation component with smooth scroll
function Navigation({ setIsOpen }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navHeight = 80; // Adjust this value based on your navbar height
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Wait for scroll to complete before closing menu
      const checkIfScrollComplete = setInterval(() => {
        if (Math.abs(window.scrollY - targetPosition) < 2) {
          clearInterval(checkIfScrollComplete);
          setIsOpen(false);
        }
      }, 100);

      // Failsafe: close menu after 1.5s if scroll hasn't completed
      setTimeout(() => {
        clearInterval(checkIfScrollComplete);
        setIsOpen(false);
      }, 1500);
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          className="nav-link"
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#about"
          onClick={(e) => handleNavClick(e, "#about")}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#work"
          onClick={(e) => handleNavClick(e, "#work")}
        >
          Work
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link"
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

// --- THIS COMPONENT BELOW IS UNCHANGED ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
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
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
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
