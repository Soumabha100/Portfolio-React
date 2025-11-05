import { useRef, useState, useEffect } from "react"; // MODIFIED
import Card from "../components/Card.jsx";
import { Globe } from "../components/globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/FrameWorks.jsx";
import { FlipWords } from "../components/FlipWords.jsx";
import { motion } from "framer-motion"; // Import motion

const About = () => {
  const grid2Container = useRef();

  // Words for the new animation in Grid 1
  const aboutWords = [
    "Backend Engineer",
    "Java Developer",
    "Problem Solver",
    "AWS Enthusiast",
  ];

  // Variants for Grid 2 Stagger Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card animates 0.1s after the previous
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 }, // Start 30px down and faded out
    visible: { opacity: 1, y: 0 }, // Animate to original position and faded in
  };

  // --- NEW CODE START ---
  // Logic for the live clock
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Function to format the time to IST (Asia/Kolkata)
  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const localTime = formatTime(time);
  // --- NEW CODE END ---

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - MODIFIED */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            {/* Updated Name */}
            <p className="headtext">Hi, I'm Soumabha Majumder</p>

            {/* Replaced static text with dynamic FlipWords */}
            <div className="subtext">
              I'm a driven <br />
              <FlipWords
                words={aboutWords}
                className="text-white font-bold" // Added styling to make it pop
              />
              <br />
              focused on building robust and scalable solutions.
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - ANIMATION ADDED */}
        <div className="grid-default-color grid-2">
          <motion.div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
          >
            {/* The <p> tag now must also be a motion component with the variants */}
            <motion.p
              className="flex items-end text-5xl text-gray-500"
              variants={cardVariants}
            >
              CODE IS CRAFT
            </motion.p>

            {/* Principles */}
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="SOLID"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Design Patterns"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Microservices"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="System Design"
              containerRef={grid2Container}
              variants={cardVariants}
            />

            {/* Technologies (using assumed .svg icon paths) */}
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              image="assets/logos/java.svg"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/spring.svg"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/aws.svg"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/docker.svg"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "10deg", bottom: "10%", left: "5%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
              variants={cardVariants}
            />
            <Card
              style={{ rotate: "-30deg", bottom: "80%", left: "75%" }}
              image="assets/logos/github.svg"
              containerRef={grid2Container}
              variants={cardVariants}
            />
          </motion.div>
        </div>
        {/* --- GRID 3 - VISUALLY UPGRADED --- */}
        <motion.div
          className="grid-black-color grid-3 flex flex-col justify-between p-4" // Use flex-col and add padding
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Top Section: Text and Time */}
          <div className="z-10 w-full">
            {/* Dynamic Heading */}
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <p className="headtext mb-0">Live Status</p>
            </div>

            <p className="subtext mb-3">Based in Kolkata, India (GMT+5:30)</p>

            {/* Live Time with Pulse Animation */}
            <p className="text-sm text-neutral-400 mb-1">Local Time:</p>
            <div
              className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono animate-pulse" // Added animate-pulse
              suppressHydrationWarning // Prevents React hydration error
            >
              {localTime}
            </div>

            <p className="subtext pr-4 mt-3">
              Open for remote work with <br /> International oppurtunities
            </p>
          </div>

          {/* Bottom Section: Globe and Ping */}
          <div className="relative z-0 w-full flex items-center justify-center min-h-[8rem] md:min-h-[10rem]">
            {/* Globe - positioned in the background */}
            <div className="absolute w-full max-w-[200px] md:max-w-[250px] aspect-square">
              <Globe />
            </div>

            {/* Ping Animation - centered on top */}
            <div className="relative w-4 h-4 z-10">
              <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-75 animate-ping"></div>
              <div className="relative w-4 h-4 bg-cyan-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </motion.div>
        {/* --- END OF GRID 3 --- */}
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>{" "}
            {/* Note: Typo in "Teck", inherited from original */}
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
