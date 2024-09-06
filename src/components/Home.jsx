import { useState, useEffect, useRef } from "react";
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
  "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/67496136_2266851236731606_3034995037210411008_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=pXngMZRN2JsQ7kNvgGEd1MN&_nc_ht=scontent-ord5-1.xx&_nc_gid=AXF5WA5raZ45E4B7_h_4gCU&oh=00_AYA79do1n7xTYrOtLc5sf8ovm2w0ZK_MnD5WVA1ZVtA6eg&oe=66F86266",
  "https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/67272415_2270638099686253_5135201484807340032_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=v8oVKnz0Hw0Q7kNvgHdevmS&_nc_ht=scontent-ord5-2.xx&oh=00_AYD8v8TRJTzJHMhVicFx86_peCbOi26qkGdEK4L8XYglZA&oe=66F88091",
  "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/33788802_1646381012111968_5595745785665814528_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=GACvL0j9eY8Q7kNvgGV-RGo&_nc_ht=scontent-ord5-1.xx&oh=00_AYDn-e2EUT6g--PoQ1jaOk8KtvJnHYdz20x1IE8oo6-kdQ&oe=66F86946",
];

const parallaxImage = "/src/assets/Hero/img-5.png";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const exploreRef = useRef(null);
  const kathaVaniRef = useRef(null);

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

  return (
    <div className="bg-slate-200 min-h-screen pt-20 px-4 pb-16">
      {/* Image Banner Section */}
      <div className="relative w-full max-w-6xl mx-auto mb-16 pt-20">
        <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto object-fit: cover"
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
        <div className="py-8"></div>

        {/* Parallax Background - About Hari Govind Section */}
        <motion.div
          className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        >
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
                <motion.img
                  src={headingImage}
                  alt="Heading Text"
                  className="w-2/3 h-auto p-10 mx-auto"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
              </motion.h1>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${parallaxImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Content Animation */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-6xl mx-auto text-center text-white">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <img
                  src={AboutImage}
                  alt="Heading Text"
                  className="w-1/2 h-auto p-10 mx-auto"
                />
              </motion.h2>

              {/* Quote Section */}
              <motion.div
                className="relative w-full max-w-3xl mx-auto mb-16 px-4 md:px-8 lg:px-16 py-8 bg-black bg-opacity-40 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="text-center text-white">
                  <motion.blockquote
                    className="text-lg italic mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  >
                    “From restless youth to devoted servant, my life transformed
                    by the teachings of Lord Krishna.” -Hari Govind Das..
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
          className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded-lg overflow-hidden"
          style={{ backgroundImage: `url(${parallaxImage})` }}
          initial="hidden"
          animate="visible"
          variants={slideIn}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-6xl mx-auto text-center text-white">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                Subscribe for Latest Updates
              </motion.h2>
              <motion.blockquote
                className="text-lg italic mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              >
                “Chant the Holy name, Hare Krishna, Hare Krishna Krishna Krishna
                Hare Hare.... Hare Rama Hare Rama Rama Rama Hare Hare”
              </motion.blockquote>
              <motion.div
                className="flex justify-center space-x-10"
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
                    <FaFacebook className="text-blue-300 text-3xl" />
                  </motion.div>
                </Link>
                <Link to="https://whatsapp.com" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaWhatsapp className="text-green-300 text-3xl" />
                  </motion.div>
                </Link>
                <Link to="https://instagram.com" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaInstagram className="text-pink-300 text-3xl" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Quotes Section */}
        <div className="mb-16 pt-10">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Quotes</h2>
            <Link
              to="/quotes/srila-prabhupad"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div
              className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden"
              ref={exploreRef}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link to="/quotes/srila-prabhupad">
                    <img
                      src={`https://via.placeholder.com/150?text=Explore+${item}`}
                      alt={`Explore ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">Quotes {item}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() =>
                exploreRef.current.scrollBy({ left: -200, behavior: "smooth" })
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={() =>
                exploreRef.current.scrollBy({ left: 200, behavior: "smooth" })
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </div>

        {/* Bhakti-Slockas Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Kathas</h2>
            <Link
              to="/kirtan/lectures"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div
              className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden"
              ref={kathaVaniRef}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link to="/katha/bhagwat-gita">
                    <img
                      src={`https://via.placeholder.com/150?text=Service+${item}`}
                      alt={`Service ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">Kathas {item}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() =>
                kathaVaniRef.current.scrollBy({
                  left: -200,
                  behavior: "smooth",
                })
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={() =>
                kathaVaniRef.current.scrollBy({ left: 200, behavior: "smooth" })
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </div>

        {/* Kirtan &Lectures Reel Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">
              Kirtan & Lectures
            </h2>
            <Link
              to="/kirtan/lectures"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div
              className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden"
              ref={kathaVaniRef}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Service+${item}`}
                      alt={`Service ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">Lectures {item}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() =>
                kathaVaniRef.current.scrollBy({
                  left: -200,
                  behavior: "smooth",
                })
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={() =>
                kathaVaniRef.current.scrollBy({ left: 200, behavior: "smooth" })
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Blog</h2>
            <Link
              to="/kirtan/lectures"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div
              className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden"
              ref={kathaVaniRef}
            >
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Service+${item}`}
                      alt={`Service ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">Blog {item}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() =>
                kathaVaniRef.current.scrollBy({
                  left: -200,
                  behavior: "smooth",
                })
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={() =>
                kathaVaniRef.current.scrollBy({ left: 200, behavior: "smooth" })
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
            >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
