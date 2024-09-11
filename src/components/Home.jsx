import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import headingImage from "../assets/Hero/harigovinddas-home.png";
import AboutImage from "../assets/Hero/about-hari-govind-das.png";

// Image URLs for the slider and background
const images = [
  "/src/assets/BannerImg/BG1.jpg",
  "/src/assets/BannerImg/BG2.jpg",
  "/src/assets/BannerImg/BG3.jpg",
  "/src/assets/BannerImg/BG4.jpg",
];

const parallaxImage = "/src/assets/Hero/img-5.png";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  //Grid Img Settings
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
  };

  const hoverVariant = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const content = [
    {
      name: "Quotes",
      imageUrl: "/src/assets/DarshanGallery/DG1.jpeg",
      link: "/quotes/grid-quotes-section",
    },
    {
      name: "Kathas",
      imageUrl: "/src/assets/DarshanGallery/DG2.jpg",
      link: "/kathas/grid-kathas-section",
    },
    {
      name: "Kirtan & Lectures",
      imageUrl: "/src/assets/DarshanGallery/DG3.jpg",
      link: "/kirtan/lectures",
    },
    {
      name: "Darshan Gallery",
      imageUrl: "/src/assets/DarshanGallery/DG4.jpg",
      link: "/kirtan/darshan-gallery",
    },
  ];

  return (
    <div className="bg-slate-300 min-h-screen pt-20 px-4 pb-16">
      {/* Image Banner Section */}
      <div className="relative w-full max-w-6xl mx-auto mb-2 pt-20">
        <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-auto h-100 object-fit: cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
          >
            <FaChevronRight className="text-blue-600" />
          </button>
          <div className="flex justify-center mt-4 space-x-2 ">
            {images.map((_, index) => (
              <motion.span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Add padding between sections */}
        <div className="py-6"></div>

        {/* Parallax Background - About Hari Govind Section */}
        <motion.div
          className="relative w-full h-72 md:h-96 bg-fixed bg-center bg-cover mb-6 rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Animated Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <a href="/" className="no-underline">
              <motion.h1
                className="text-white text-3xl md:text-4xl font-bold text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              >
                <motion.img
                  src={headingImage}
                  alt="Heading Text"
                  className="w-3/4 md:w-2/3 h-auto p-4 md:p-10 mx-auto"
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
          className="relative w-full h-72 md:h-96 bg-fixed bg-center bg-cover mb-6 rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Content Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-2">
            <div className="max-w-6xl mx-auto text-center text-white">
              <motion.h2
                className="text-2xl md:text-3xl font-bold "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <img
                  src={AboutImage}
                  alt="About Text"
                  className="w-3/4 md:w-1/2 h-auto p-4 md:p-10 mx-auto"
                />
              </motion.h2>

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
                    by the teachings of Lord Krishna.” - Hari Govind Das..
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

        {/* Parallax Background - Subscribe Section */}
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

        {/* Gird View  */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {content.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              rel="noopener noreferrer"
              className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
            >
              <motion.div
                variants={itemVariant}
                whileHover={{ scale: 1.05 }} // Zoom in effect on hover
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-full w-full"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <motion.div
                  variants={hoverVariant}
                  className="absolute inset-0 flex justify-center items-center bg-gradient-to-t from-black to-transparent"
                >
                  <motion.span
                    className="text-white text-xl font-semibold text-center px-4 py-2 bg-opacity-80 rounded-lg shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
