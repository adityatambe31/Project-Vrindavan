import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "/src/assets/hero/img-4.jpg";

// Animation variants
const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Carousel Component
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16 pt-40">
      <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInOut}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
        >
          &gt;
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Prop Types for Carousel
Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Main Component
const Hero = () => {
  // Array of image URLs for the carousel
  const imageUrls = [
    "/src/assets/img-1.jpg",
    "/src/assets/img-2.jpg",
    "/src/assets/img-3.jpg",
    "/src/assets/img-4.jpg",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Carousel */}
      <Carousel images={imageUrls} />

      {/* Hero Section */}
      <motion.div
        className="relative w-full max-w-6xl mx-auto mb-16 pt-40 px-4 md:px-8 lg:px-16 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
          <div className="relative z-10 flex items-center justify-center h-full mb-20">
            <h1 className="text-white text-4xl font-bold text-center p-4">
              Journey Of Hari Govind Das
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Journey of Hari Govind Das */}
      <div className="bg-gray-100 rounded-lg shadow-lg lg:p-40 justify-center sm:p-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="p-10"
        >
          <h2 className="text-3xl font-bold mb-4">About Hari Govind Das </h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="space-y-6"
          >
            <motion.p
              className="text-lg text-gray-700"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              In 1996, I started college in the 11th grade. My mother, always in
              search of spiritual wisdom, invited me to a lecture by H.S. Ram
              Roop Prabhu. Little did I know that this event would significantly
              alter the course of my life.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              The lecture, delivered in a crowded hall, was captivating. I was
              seated in the front row, feeling restless at first. However, as
              Ram Roop Prabhu spoke about a woodpecker and a lotus flower, I was
              deeply moved. The tale illustrated how we often get lost in
              temporary pleasures, neglecting our true spiritual essence.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              That night, I was restless, my thoughts consumed by the nature of
              the soul. I attended the Mangala Aarti the next morning, and soon
              after, I heard about a Bhagavad Katha by H.H. Radha Govind Goswami
              Maharaj. This led me to listen to the first lecture on the devotee
              Jad Bharat.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.9 }}
            >
              The Bhagavad Katha was profoundly inspiring, leading me to attend
              the full 8-day event. This experience was transformative,
              deepening my devotion and commitment to spiritual practices. By
              1997, I took initiation from H.H. Radha Govind Goswami Maharaj.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
            >
              My family joined me in devotional service, and our commitment grew
              over the years. When my mother passed away, her final words were a
              reminder to maintain our devotional practices. In her honor, I
              began hosting kirtans and lectures at our home from 2018 to 2023.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
            >
              In 2015, I started sharing my spiritual journey on Facebook. This
              led to the creation of ISKCON Ahmednagar Media, which I managed
              from 2016 to 2020, dedicating myself to spreading Krishna
              teachings.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.8 }}
            >
              My daily routine begins at 3 AM with Japmala and exercise. I then
              create posts on my phone and dedicate myself to devotional
              service, balancing spiritual practices with personal life and
              work.
            </motion.p>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 2.1 }}
            >
              The journey of Hari Govind Das continues with unwavering
              dedication to sharing spiritual wisdom and living a life devoted
              to Krishna. My experiences and commitment are a testament to the
              profound impact of devotion on one’s life.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
