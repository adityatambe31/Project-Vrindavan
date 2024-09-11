import {
  FaWhatsapp,
  FaFacebookF,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import bookPic from "/src/assets/QuotesImg/bhagwat.png";
import { motion } from "framer-motion";
import bgPaper from "/src/assets/QuotesImg/bg-paper.jpg";
import { useRef } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const slocks = [
  {
    no: 1,
    name: "Slock 1",
    description: "Description for Slock 1",
    imageUrl:
      "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/457149447_928144009357259_102457646148006404_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bFSWMHGU44EQ7kNvgHjQ63X&_nc_ht=scontent.fyzd1-2.fna&oh=00_AYDGC4cV8EkOu0soR5t78HTIw786DCJlGMUrDSERvklv-A&oe=66D5C8B7",
  },
  // Add more slocks as needed
];

const BhagwatGita = () => {
  const slockRef = useRef(null);

  return (
    <div className="px-4 py-10 md:px-10 lg:px-20 pt-40">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center bg-cover bg-center rounded-lg shadow-lg p-6 lg:p-10"
          style={{ backgroundImage: `url(${bgPaper})` }}
        >
          {/* Text Content */}
          <motion.div
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 mb-6 lg:mb-0 p-4 lg:p-10"
          >
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left text-[#8B4513]"
            >
              Bhagvad Gita
            </motion.h1>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-base lg:text-lg mb-6 text-[#A0522D]"
            >
              The Bhagavad Gita is a 700-verse Hindu scripture that is part of
              the Indian epic Mahabharata. It is a dialogue between Prince
              Arjuna and the god Krishna, who serves as his charioteer. The Gita
              addresses the moral and philosophical dilemmas faced by Arjuna on
              the battlefield and offers profound insights into duty,
              righteousness, and the nature of existence.
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex space-x-4 justify-center lg:justify-start"
            >
              <a
                href="https://chat.whatsapp.com/IVe5RylCnlD9AqPHDbrwRT"
                target="_blank"
                className="text-gray-700 hover:text-green-500 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
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

          {/* Book Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center lg:w-1/2 p-6"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <img
                src={bookPic}
                alt="Bhagvad Gita"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Slider Section */}
        <div className="mt-10">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-xl lg:text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
              Shloka for Bhagvad Gita
            </h2>
            <a
              href="https://www.facebook.com/harekrishnaahilyanagar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm md:text-base"
            >
              View All
            </a>
          </div>
          <div className="relative">
            <div
              className="flex overflow-x-scroll scrollbar-hidden"
              ref={slockRef}
            >
              {slocks.map((slock, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 lg:w-[400px] rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="w-full h-40 md:h-64 relative">
                    <img
                      src={slock.imageUrl}
                      alt={`Slock ${slock.no}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-sm md:text-lg font-bold text-white">
                        Slock {slock.no}: {slock.name}
                      </h2>
                      <p className="text-xs md:text-sm text-gray-300 mt-2">
                        {slock.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={() =>
                slockRef.current.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() =>
                slockRef.current.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BhagwatGita;
