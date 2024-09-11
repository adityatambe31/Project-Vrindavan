// Importing necessary icons from react-icons library
import {
  FaWhatsapp,
  FaFacebookF,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Importing an image of Radha-Govind from the assets directory
import bookPic from "/src/assets/QuotesGridPage/RadhaNathMahj/Radha-Nath-Maharaj.jpg";

// Importing motion for animations from the framer-motion library
import { motion } from "framer-motion";

// Importing a background image of paper from the assets directory
import bgPaper from "/src/assets/QuotesImg/bg-paper.jpg";

// Importing the useRef hook for creating a reference to a DOM element
import { useRef } from "react";

// Defining a function to create animation containers with customizable delay
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 }, // Initial hidden state
  visible: {
    x: 0, // Final visible state
    opacity: 1,
    transition: { duration: 0.5, delay: delay }, // Transition duration and delay
  },
});

// Array containing the details of "Slocks" with their respective information
const slocks = [
  {
    no: 1, // Slock number
    name: "Slock 1", // Name of the Slock
    description: "Description for Slock 1", // Description for the Slock
    imageUrl:
      "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/457149447_928144009357259_102457646148006404_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bFSWMHGU44EQ7kNvgHjQ63X&_nc_ht=scontent.fyzd1-2.fna&oh=00_AYDGC4cV8EkOu0soR5t78HTIw786DCJlGMUrDSERvklv-A&oe=66D5C8B7", // URL of the Slock's image
  },
  // Add more slocks as needed
];

// Component to display information about Radha Govind Maharaj and the slocks
const RadhaNathmah = () => {
  // Creating a reference to the slock container for scrolling
  const slockRef = useRef(null);

  return (
    <div className="p-10 bg-no-repeat bg-cover bg-center h-auto">
      {/* Slider Section */}
      <div className="p-20 mt-10 relative">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            Slocks of Radha Govind Maharaj
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

        {/* Container for the slock cards with horizontal scrolling */}
        <div className="relative">
          <div
            className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden"
            ref={slockRef}
          >
            {slocks.map((slock, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 md:w-[400px] rounded-lg overflow-hidden bg-white shadow-md mx-2"
                initial={{ opacity: 0, x: 100 }} // Initial animation state for each slock
                animate={{ opacity: 1, x: 0 }} // Final animation state for each slock
                exit={{ opacity: 0, x: -100 }} // Exit animation state for each slock
                transition={{ duration: 0.5, ease: "easeInOut" }} // Transition timing
              >
                <div className="w-full h-64 relative">
                  <img
                    src={slock.imageUrl}
                    alt={`Slock ${slock.no}`} // Alt text for the slock image
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h2 className="text-xl font-bold text-white">
                      Quot {slock.no}: {slock.name}
                    </h2>
                    <p className="text-sm text-gray-300 mt-2">
                      {slock.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left Arrow Button for sliding the slocks to the left */}
          <button
            onClick={() =>
              slockRef.current.scrollBy({ left: -300, behavior: "smooth" })
            }
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>

          {/* Right Arrow Button for sliding the slocks to the right */}
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

      {/* Main Content Section */}
      <div className="p-20">
        <motion.div
          initial={{ opacity: 0 }} // Initial fade-in state
          animate={{ opacity: 1 }} // Final fade-in state
          transition={{ duration: 1 }} // Duration of the fade-in effect
          className="flex flex-col lg:flex-row items-center lg:items-start bg-cover bg-center rounded-lg shadow-lg pt-10"
          style={{ backgroundImage: `url(${bgPaper})` }} // Applying the background image
        >
          {/* Text Content */}
          <motion.div
            variants={container(0.3)} // Delayed animation container
            initial="hidden" // Initial hidden state
            animate="visible" // Final visible state
            className="flex-1 lg:mr-8 mb-8 lg:mb-0 p-20"
          >
            <motion.h1
              variants={container(0)} // No delay for the heading animation
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold mb-4 text-center text-[#8B4513] p-10"
            >
              Radha Nath Maharaj
            </motion.h1>
            <motion.p
              variants={container(0.6)} // Slight delay for the paragraph animation
              initial="hidden"
              animate="visible"
              className="text-m mb-6 text-[#A0522D]"
            >
              His Holiness Radha Govinda Maharaja is a respected resident of Sri
              Vrndavan Dham and a renowned narrator of the Srimad Bhagavatam. He
              has shared the teachings of the Bhagavatam in many countries,
              including Europe, Africa, Asia, America, and Canada.
            </motion.p>

            <motion.p
              variants={container(0.6)} // Same delay as the previous paragraph
              initial="hidden"
              animate="visible"
              className="text-m mb-6 text-[#A0522D]"
            >
              Through his heartfelt narrations, Maharaja connects deeply with
              his audience, bringing the wisdom of Lord Krishna to people around
              the world. His discourses inspire devotion, peace, and spiritual
              growth in all who listen.
            </motion.p>
            <motion.div
              variants={container(1)} // Additional delay for the social media icons
              initial="hidden"
              animate="visible"
              className="flex space-x-4 text-right"
            >
              {/* Whatsapp Icon */}
              <a
                href="https://whatsapp.com"
                target="_blank"
                className="text-gray-700 hover:text-green-500 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/harekrishnaahilyanagar"
                target="_blank"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={30} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image of Radha-Govind */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }} // Initial animation state for image
            animate={{ scale: 1, opacity: 1 }} // Final animation state for image
            transition={{ duration: 0.8, delay: 0.6 }} // Duration and delay for the image animation
            className="flex-1 flex justify-center items-center pt-10 mb-10"
          >
            <img
              src={bookPic}
              alt="Radha-Govind Maharaj"
              className="w-[500px] h-auto max-w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RadhaNathmah;
