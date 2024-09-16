import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

import headingImage from "/src/assets/Hero/harigovinddas-home.png";

const ParallaxBg = () => {
  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const parallaxImage = "/src/assets/Hero/img-5.png";

  return (
    <div>
      {/* Parallax Hero Section */}
      <motion.div
        className="relative w-full h-72 md:h-96 bg-fixed bg-center bg-cover mb-6 rounded-lg overflow-hidden shadow-lg"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0 "></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8 lg:px-16 text-center md:text-left ">
          <a href="/" className="no-underline">
            <motion.h1
              className="text-white text-3xl md:text-4xl font-bold text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <motion.img
                src={headingImage}
                alt="Heading Text"
                className="w-3/4 md:w-2/3 h-auto p-4 md:p-10 mx-auto "
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              />
            </motion.h1>
          </a>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="relative w-full h-72 md:h-96 bg-fixed bg-center bg-cover mb-6 rounded-lg overflow-hidden shadow-lg"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 md:px-8 lg:px-16 text-center">
          <div className="max-w-6xl mx-auto text-center text-white mb-8 md:mb-16 md:text-left">
            <div className="text-2xl md:text-3xl font-bold mb-4">
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-4 text-center pt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                About Hari Govind
              </motion.h2>
            </div>
            {/* Quote Section */}
            <motion.div
              className="relative w-full max-w-3xl mx-auto mb-16 px-4 md:px-8 lg:px-20 py-8 bg-black bg-opacity-40 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="text-center text-white">
                <motion.blockquote
                  className="text-lg md:text-xl italic mb-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                >
                  “From restless youth to devoted servant, my life transformed
                  by the teachings of Lord Krishna.” - Hari Govind Das.
                </motion.blockquote>

                <motion.a
                  href="/about/hero"
                  className="inline-block mt-8 px-6 py-2 bg-gray-500 text-white rounded-full text-lg font-medium hover:bg-gray-700 transition-all duration-300 ease-in-out"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                  Learn More {" >"}
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Subscribe Section */}
      <motion.div
        className="relative w-full h-72 md:h-96 bg-fixed bg-center bg-cover mb-6 rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${parallaxImage})` }}
        initial="hidden"
        animate="visible"
        variants={slideIn}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              Hari Bol Hari Krishna 🙏
            </motion.h2>
            <motion.blockquote
              className="text-lg md:text-xl italic mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            >
              “Chant Hare Krishna, Hare Krishna Krishna Krishna Hare Hare....
              <br /> ....Hare Rama Hare Rama Rama Rama Hare Hare”
            </motion.blockquote>
            <motion.div
              className="flex justify-center space-x-6 md:space-x-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              <Link
                to="https://www.facebook.com/harekrishnaahilyanagar"
                target="_blank"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaFacebook className="text-blue-300 text-2xl md:text-3xl" />
                </motion.div>
              </Link>
              <Link to="https://whatsapp.com" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaWhatsapp className="text-green-300 text-2xl md:text-3xl" />
                </motion.div>
              </Link>
              <Link to="https://instagram.com" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaInstagram className="text-pink-300 text-2xl md:text-3xl" />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxBg;
