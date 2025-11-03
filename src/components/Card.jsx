import { motion } from "framer-motion";

const Card = ({ text, image, style, containerRef, variants }) => {
  return (
    <>
      {image ? (
        <motion.img
          src={image}
          className="absolute w-15 cursor-grab"
          style={style}
          drag
          dragConstraints={containerRef}
          dragElastic={0.8} // Made drag a little tighter
          dragMomentum={false} // Prevents "stuck" feeling
          variants={variants} // For the intro stagger
          whileHover={{ scale: 1.15, zIndex: 10 }} // Removed `rotate`, increased scale
          whileTap={{ scale: 1.1, zIndex: 10, cursor: "grabbing" }} // Added feedback for click/drag
        />
      ) : (
        <motion.div
          className="absolute px-10 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-60 cursor-grab"
          style={style}
          drag
          dragConstraints={containerRef}
          dragElastic={0.8}
          dragMomentum={false}
          variants={variants}
          whileHover={{ scale: 1.15, zIndex: 10 }}
          whileTap={{ scale: 1.1, zIndex: 10, cursor: "grabbing" }}
        >
          {text}
        </motion.div>
      )}
    </>
  );
};

export default Card;
