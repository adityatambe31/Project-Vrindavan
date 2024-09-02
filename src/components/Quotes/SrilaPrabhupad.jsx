import { FaWhatsapp, FaFacebookF, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bookPic from "/src/assets/Srila-Prabhupada.jpeg";
import { motion } from "framer-motion";
import bgPaper from "/src/assets/bg-paper.jpg";
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
  { no: 1, name: "Slock 1", description: "Description for Slock 1", imageUrl: "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/457149447_928144009357259_102457646148006404_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bFSWMHGU44EQ7kNvgHjQ63X&_nc_ht=scontent.fyzd1-2.fna&oh=00_AYDGC4cV8EkOu0soR5t78HTIw786DCJlGMUrDSERvklv-A&oe=66D5C8B7" },
  // Add more slocks as needed
];

const SrilaPrabhupad = () => {
  const slockRef = useRef(null);

  return (
    <div className="p-10">
    {/* Slider Section */}
        <div className=" p-20 mt-10 relative">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Slocks</h2>
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
            <div className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden" ref={slockRef}>
              {slocks.map((slock, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 md:w-[400px] rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <div className="w-full h-64 relative">
                    <img
                      src={slock.imageUrl}
                      alt={`Slock ${slock.no}`}
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

            {/* Left Arrow */}
            <button
              onClick={() => slockRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => slockRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
              </div>
              </div>
        

      <div className="p-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center lg:items-start bg-cover bg-center rounded-lg shadow-lg pt-10"
          style={{ backgroundImage: `url(${bgPaper})` }}
        >
          {/* Text Content */}
          <motion.div
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="flex-1 lg:mr-8 mb-8 lg:mb-0 p-10"
          >
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold mb-4 text-center text-[#8B4513]"
            >
              Srila-Prabhupada 
            </motion.h1>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-m mb-6 text-[#A0522D]"
            >
              Srila Prabhupada (1896–1977) was a visionary spiritual leader and the beloved founder of the International Society for Krishna Consciousness (ISKCON), also known as the Hare Krishna movement. Born as Abhay Charan De in Kolkata, India, he embarked on a divine mission to share the timeless teachings of Lord Krishna, rooted in the ancient scriptures like the Bhagavad Gita and the Srimad Bhagavatam.</motion.p>

              <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-m mb-6 text-[#A0522D]"
            >
              At the age of 69, with nothing but unshakable faith and devotion, Srila Prabhupada sailed to the United States in 1965, determined to spread the wisdom of bhakti-yoga (devotion to God). Despite humble beginnings, his relentless dedication sparked the global rise of ISKCON, now a vibrant spiritual community with hundreds of temples and millions of followers across the world.
            </motion.p>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-m mb-6 text-[#A0522D]"
            >Srila Prabhupada profound translations and insightful commentaries on sacred texts continue to illuminate the path of spiritual consciousness, inspiring countless souls to embrace a life of devotion, compassion, and service. His legacy lives on, guiding hearts toward the eternal truth of Krishna love.
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex space-x-4 text-right"
            >
              <a
                href="https://whatsapp.com"
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

          {/* Prabhupad's image Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-1 flex justify-center items-center pt-20"
          >
            <div className="w-84 h-84 rounded-full overflow-hidden shadow-lg">
              <img
                src={bookPic}
                alt="Bhagvad Gita"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default SrilaPrabhupad;
