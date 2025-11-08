import React from 'react';
// Corrected import paths
import { mySocials } from '../constants/index.js'; // Reusing your existing social links [cite: soumabha100/portfolio-react/Portfolio-React-d9103e844574087c0233ffcbf0adf21aa55bfca9/src/constants/index.js]
import { AuroraText } from '../components/AuroraText.jsx'; // Reusing your AuroraText component [cite: soumabha100/portfolio-react/Portfolio-React-d9103e844574087c0233ffcbf0adf21aa55bfca9/src/components/AuroraText.jsx]

const Footer = () => {
  // Navigation links for the footer
  const footerNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  // Professional description derived from your "About Me"
  const description = "A backend-focused software engineer building robust, scalable solutions.";

  return (
    // Add a top border for a clean separation from the content above
    <footer className="bg-primary/40 backdrop-blur-lg mt-20 border-t border-neutral-700/50">
      
      {/* Uses c-space for consistent padding [cite: soumabha100/portfolio-react/Portfolio-React-d9103e844574087c0233ffcbf0adf21aa55bfca9/src/index.css] */}
      <div className="mx-auto max-w-7xl c-space py-12">
        
        {/* --- TOP TIER --- */}
        {/* - Stacks vertically on mobile (flex-col)
          - Becomes a row on medium screens and up (md:flex-row)
          - Distributes content: left, center, right (justify-between)
          - Aligns items to the center (items-center)
        */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* 1. LEFT: Name & Description */}
          {/* Aligns text center on mobile, and left on desktop */}
          <div className="text-center md:text-left">
            <a
              href="/"
              // Increased size to text-3xl for more impact
              className="text-3xl font-bold transition-colors text-neutral-400 hover:text-white"
            >
              <AuroraText>
                  Soumabha Majumder
              </AuroraText> 
            </a>
            <p className="text-neutral-400 mt-4 text-sm md:text-base max-w-md">
              {description}
            </p>
          </div>

          {/* 2. MIDDLE: Navigation */}
          {/* Adds top margin on mobile, resets it on desktop */}
          <nav className="mt-8 md:mt-0">
            {/* Reusing nav-link class for consistency [cite: soumabha100/portfolio-react/Portfolio-React-d9103e844574087c0233ffcbf0adf21aa55bfca9/src/index.css] */}
            <ul className="flex flex-wrap justify-center gap-6">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. RIGHT: Social Links */}
          {/* Adds top margin on mobile, resets it on desktop */}
          <div className="flex gap-4 mt-8 md:mt-0">
            {mySocials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/50"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>

        </div>

        {/* --- BOTTOM TIER (Copyright) --- */}
        {/* This remains centered at the very bottom */}
        <div className="w-full mt-12 pt-8 border-t border-neutral-700/50 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Soumabha Majumder. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;