import { motion, AnimatePresence } from "framer-motion";

const Alert = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.9 },
  };

  // Icon definitions
  const icons = {
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6 text-cyan-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    danger: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6 text-red-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 bottom-10 left-1/2 -translate-x-1/2"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div
          className={`flex items-center gap-4 rounded-full py-3 px-5 shadow-lg 
            bg-black/50 backdrop-blur-md border 
            ${
              type === "danger"
                ? "border-red-500/50"
                : "border-cyan-500/50"
            }`}
        >
          {/* Use the icon based on the type */}
          {type === "danger" ? icons.danger : icons.success}
          <p className="font-medium text-white">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;