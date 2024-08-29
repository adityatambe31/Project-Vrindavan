import  { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  'https://www.iskconvrindavan.com/images/service/service-banner-2.jpg',
  'https://www.iskconvrindavan.com/images/service/service-banner-2.jpg',
  'https://www.iskconvrindavan.com/images/service/service-banner-2.jpg',
];

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

  return (
    <div className="bg-gray-100 min-h-screen pt-20 px-4 pb-16">
      {/* Image Banner Section */}
      <div className="relative w-full max-w-6xl mx-auto mb-16 pt-16">
        <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
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
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <motion.span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
        {/* Explore Section */}
        <div className="mb-16 pt-20">
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
            <div className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden" ref={exploreRef}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Explore+${item}`}
                      alt={`Explore ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">Service {item}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => exploreRef.current.scrollBy({ left: -200, behavior: 'smooth' })}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
              >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={() => exploreRef.current.scrollBy({ left: 200, behavior: 'smooth' })}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
              >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </div>

        {/* Kirtan &Lectures Reel Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Kirtan & Lectures</h2>
            <Link
              to="/kirtan/lectures"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden" ref={kathaVaniRef}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Service+${item}`}
                      alt={`Service ${item}`}
                      className="w-full h-48 object-cover"
                    />
                                           <div className="p-4">
                         <p className="text-lg font-semibold">Service {item}</p>
                       </div>
                     </Link>
                   </motion.div>
                 ))}
               </div>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: -200, behavior: 'smooth' })}
                 className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronLeft className="text-blue-600" />
               </button>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: 200, behavior: 'smooth' })}
                 className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronRight className="text-blue-600" />
               </button>
             </div>
           </div>

        {/* Blog Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Blo</h2>
            <Link
              to="/kirtan/lectures"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden" ref={kathaVaniRef}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Service+${item}`}
                      alt={`Service ${item}`}
                      className="w-full h-48 object-cover"
                    />
                                           <div className="p-4">
                         <p className="text-lg font-semibold">Service {item}</p>
                       </div>
                     </Link>
                   </motion.div>
                 ))}
               </div>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: -200, behavior: 'smooth' })}
                 className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronLeft className="text-blue-600" />
               </button>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: 200, behavior: 'smooth' })}
                 className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronRight className="text-blue-600" />
               </button>
             </div>
           </div>

           
          

               {/* Blogs Section */}
       
             </div>
           </div>
     );
   };

   export default Home;

