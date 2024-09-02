import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaInstagram} from 'react-icons/fa';
import bgImg from '/src/assets/img-4.jpg';

// Animation variants
const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInOut = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
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
            className="w-full h-auto object-cover p-10"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeInOut}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
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
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
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
    '/src/assets/img-1.jpg',
    '/src/assets/img-2.jpg',
    '/src/assets/img-3.jpg',
    '/src/assets/img-4.jpg',
  ];



  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Carousel */}
      
      <Carousel images={imageUrls} />

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16"
        style={{ backgroundImage: `url(${bgImg})` }}
        initial="hidden"
        animate="visible"
        variants={fadeInOut}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold text-center p-4">
            About Hari Govind Das
          </h1>
        </div>
      </motion.div>

      {/* About Section */}
      
      {/* Service and Outreach Section */}
      <motion.div
        className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mb-16"
        initial="hidden"
        animate="visible"
        variants={slideInOut}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Service & Outreach
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Hari Govind Das has been instrumental in organizing spiritual events and offering Bhagavad Gita classes. His outreach includes extensive digital presence where he shares his teachings through Facebook.
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <Link to="https://facebook.com" target="_blank">
            <FaFacebook className="text-blue-600 text-3xl hover:text-blue-800 transition" />
          </Link>
          <Link to="https://whatsapp.com" target="_blank">
            <FaWhatsapp className="text-green-600 text-3xl hover:text-green-800 transition" />
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <FaInstagram className="text-pink-600 text-3xl hover:text-pink-800 transition" />
          </Link>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="max-w-6xl mx-auto text-center  p-4"
        initial="hidden"
        animate="visible"
        variants={fadeInOut}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Connect with Us
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Explore more about Hari Govind Das and his services. Join us in the spiritual journey and stay updated with the latest teachings and events.
        </p>
        <Link to="/services" className="text-blue-600 underline text-lg">
          Explore Our Services
        </Link>
      </motion.div>
    
    {/* Journey of Hari Govind Das */}
   <div className="bg-gray-100 rounded-lg shadow-lg">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    className="p-40"
  >
    <motion.h2
      className="text-4xl font-bold text-gray-800 mb-6 text-center"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      The Journey of Hari Govind Das
    </motion.h2>
    <motion.p
      className="text-lg text-gray-700 mb-6 pt-10"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      It was the year 1996, and I had just joined college, entering the 11th grade. My mother, who was always seeking spiritual knowledge, attended a lecture by H.S. Ram Roop Prabhu and asked me to tag along. 
      Reluctantly, I agreed, not knowing how that day would change my life forever.
    </motion.p>
    <motion.p
      className="text-lg text-gray-700 mb-6"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
    >
      The hall was packed, and I found myself sitting in the front row, directly in front of the speaker. At 16, I was restless, wondering how I’d endure the next hour. But as the lecture began, something extraordinary happened. 
      Ram Roop Prabhu started telling a story about a woodpecker and a lotus flower. The woodpecker, drawn by the sweetness of the lotus, would get lost in its scent, only to be trapped inside as the petals closed at sunset. 
      The moral was clear: in the materialistic world, we often lose ourselves in fleeting pleasures, forgetting our true spiritual nature.
    </motion.p>
    <motion.p
      className="text-lg text-gray-700 mb-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
    >
      This story stirred something deep within me. That night, I couldn’t sleep, my mind racing with thoughts about the nature of the soul. 
      The next morning, I woke up at 3 AM and attended the Mangala Aarti. On my way home, I overheard someone mentioning a Bhagavad Katha by H.H. Radha Govind Goswami Maharaj. 
      Intrigued, I stayed to listen to the first lecture, which was about the devotee Jad Bharat. 
    </motion.p>
    <motion.p
      className="text-lg text-gray-700 mb-6"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.9 }}
    >
      That lecture captivated me so deeply that I stayed for the entire 8-day Katha, absorbing every word. This experience transformed me, changing my thinking and my life. 
      I became a regular visitor to the temple, attending every program, every weekend, and eventually, in 1997, I took initiation from H.H. Radha Govind Goswami Maharaj.
    </motion.p>
    <motion.p
      className="text-lg text-gray-700 mb-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.2 }}
    >
      My parents also embraced devotional service, and our family’s commitment deepened over the years. 
      When my mother passed away, her last words to me were a reminder to take care of our devotional service. 
      Honoring her memory, I started hosting kirtans and lectures at our home from 2018 to 2023, fulfilling her last wish.
    </motion.p>
    <motion.p
      className="text-lg text-gray-700 mb-6"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.5 }}
    >
      In 2015, I began sharing my journey on Facebook, posting about devotional service and spreading the teachings of Krishna. 
      This led to the founding of ISKCON Ahmednagar Media, which I managed from 2016 to 2020, dedicating myself to the service at its peak.
    </motion.p>
    <motion.p
      className="text-lg text-gray-700 mb-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.8 }}
    >
      My daily routine starts at 3 AM with Japmala, followed by exercise. I then create handcrafted posts on my phone before heading to work. 
      At my job, I often counsel colleagues on the teachings of the Bhagavad Gita, distributing copies to those interested. 
      This allows me to balance my material responsibilities with my spiritual mission, living a life dedicated to both worldly duties and divine service.
    </motion.p>
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay: 2.1 }}
      className="inline-block mt-4"
    >
      <p className="text-lg text-gray-700 text-center">
        This is the journey of Hari Govind Das—a life of devotion, transformation, and unwavering dedication to the teachings of Lord Krishna.
      </p>
    </motion.div>
  </motion.div>
</div>


      {/* Banner section for about  */}
      


    </div>
    


  );
};

export default Hero;
