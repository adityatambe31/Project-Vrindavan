// Import icons from the 'react-icons' library
import {
  FaWhatsapp, // WhatsApp icon
  FaFacebookF, // Facebook icon
  FaChevronLeft, // Left arrow icon
  FaChevronRight, // Right arrow icon
} from "react-icons/fa";

// Import the image of the Bhagavad Gita
import bookPic from "/src/assets/bhagwat.png";

// Import motion component from the 'framer-motion' library for animations
import { motion } from "framer-motion";

// Import background image for the paper texture
import bgPaper from "/src/assets/bg-paper.jpg";

// Import 'useRef' hook from React for referencing DOM elements
import { useRef } from "react";

// Define an animation configuration for the container with a delay
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 }, // Start off-screen and invisible
  visible: {
    x: 0, // Move to the original position
    opacity: 1, // Become fully visible
    transition: { duration: 0.5, delay: delay }, // Animation duration and delay
  },
});

// Array of slocks (slides) containing their details
const slocks = [
  {
    no: 1, // Slide number
    name: "Slock 1", // Name of the slide
    description: "Description for Slock 1", // Short description
    imageUrl:
      "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/457149447_928144009357259_102457646148006404_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bFSWMHGU44EQ7kNvgHjQ63X&_nc_ht=scontent.fyzd1-2.fna&oh=00_AYDGC4cV8EkOu0soR5t78HTIw786DCJlGMUrDSERvklv-A&oe=66D5C8B7", // Image URL
  },
  // Add more slocks (slides) as needed
];

// Path to the parallax image
const parallaxImage = "/src/assets/P1.jpeg";

// Main functional component for the Bhagavad Gita section
const SrilaPrabhupad = () => {
  // Reference for the slocks (slides) container
  const slockRef = useRef(null);

  return (
    <div className="p-20">
      {/* Slider Section */}
      <div className="mt-10 relative">
        {/* Heading and View All button */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            Sholka of Srila Prabhupada
          </h2>
          <a
            href="https://www.facebook.com/harekrishnaahilyanagar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
          >
            View All
          </a>
        </div>

        <div className="relative">
          {/* Container for the slocks (slides) */}
          <div
            className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden"
            ref={slockRef}
          >
            {slocks.map((slock, index) => (
              <motion.div
                key={index} // Unique key for each slock (slide)
                className="flex-shrink-0 w-80 md:w-[400px] rounded-lg overflow-hidden bg-white shadow-md mx-2"
                initial={{ opacity: 0, x: 100 }} // Initial animation state
                animate={{ opacity: 1, x: 0 }} // Final animation state
                exit={{ opacity: 0, x: -100 }} // Animation state when exiting
                transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
              >
                {/* Image and description for each slock */}
                <div className="w-full h-64 relative">
                  <img
                    src={slock.imageUrl}
                    alt={`Slock ${slock.no}`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-xl font-bold text-white">
                      Slock {slock.no}: {slock.name}
                    </h2>
                    <p className="text-sm text-gray-300 mt-2">
                      {slock.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left Arrow for navigating slocks */}
          <button
            onClick={() =>
              slockRef.current.scrollBy({ left: -300, behavior: "smooth" })
            }
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>

          {/* Right Arrow for navigating slocks */}
          <button
            onClick={() =>
              slockRef.current.scrollBy({ left: 300, behavior: "smooth" })
            }
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
          >
            <FaChevronRight className="text-blue-600" />
          </button>
        </div>
      </div>

      <div className="pt-20"></div>

      {/* Parallax background section for Prabhupada */}
      <motion.div
        className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${parallaxImage})`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      >
        {/* Overlay for darkening the background */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Animated Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <a href="/" className="no-underline">
            <motion.h1
              className="text-white text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              About Srila Prabhupada
            </motion.h1>
          </a>
        </div>
      </motion.div>

      <div className="p-20">
        <motion.div
          initial={{ opacity: 0 }} // Initial state for fade-in effect
          animate={{ opacity: 1 }} // Final state for fade-in effect
          transition={{ duration: 1 }} // Duration of the fade-in effect
          className="flex flex-col lg:flex-row items-center lg:items-start bg-cover bg-center rounded-lg shadow-lg pt-20"
          style={{ backgroundImage: `url(${bgPaper})` }}
        >
          {/* Text Content */}
          <motion.div
            variants={container(0.3)} // Applying the container animation with a delay
            initial="hidden" // Initial hidden state
            animate="visible" // Animate to visible state
            className="flex-1 lg:mr-8 mb-8 lg:mb-0 p-10"
          >
            <motion.h1
              variants={container(0)} // Heading animation
              initial="hidden" // Initial hidden state
              animate="visible" // Animate to visible state
              className="text-4xl font-bold mb-4 text-center text-[#8B4513]"
            >
              Srila Prabhupada
            </motion.h1>
            <motion.p
              variants={container(0.6)} // Paragraph animation with a delay
              initial="hidden" // Initial hidden state
              animate="visible" // Animate to visible state
              className="text-lg mb-6 text-[#A0522D]"
            >
              The Bhagavad Gita is a 700-verse Hindu scripture that is part of
              the Indian epic Mahabharata. It is a dialogue between Prince
              Arjuna and the god Krishna, who serves as his charioteer. The Gita
              addresses the moral and philosophical dilemmas faced by Arjuna on
              the battlefield and offers profound insights into duty,
              righteousness, and the nature of existence.
            </motion.p>
            <motion.div
              variants={container(1)} // Social icons animation with a delay
              initial="hidden" // Initial hidden state
              animate="visible" // Animate to visible state
              className="flex space-x-4"
            >
              {/* WhatsApp Icon */}
              <a
                href="https://whatsapp.com"
                target="_blank"
                className="text-gray-700 hover:text-green-500 transition-colors duration-200"
              >
                <FaWhatsapp size={30} />
              </a>
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <FaFacebookF size={30} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0 }} // Initial state for image fade-in
            animate={{ opacity: 1 }} // Final state for image fade-in
            transition={{ duration: 1 }} // Duration of the fade-in effect
            className="flex-1"
          >
            {/* Display the image of Bhagavad Gita */}
            <img
              src={bookPic}
              alt="Srila Prabhupada"
              className="rounded-lg shadow-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SrilaPrabhupad;
