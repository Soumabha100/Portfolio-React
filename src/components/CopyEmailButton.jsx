import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const CopyEmailButton = ({ email, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ scale: 1.02 }}
      className={`group relative flex items-center w-full py-2 text-neutral-300 hover:text-cyan-400 transition-colors duration-300 ${className}`}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            className="flex items-center gap-2 w-full"
            key="copied"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-center">{email}</span>
            <span className="text-green-400">(Copied!)</span>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center w-full"
            key="normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-left flex-1">{email}</span>
            <motion.span
              className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-hidden="true"
            >
              Copy
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
