import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Example image imports (replace with your local images)
import image1 from "/src/assets/DarshanGallery/DG5.jpg";
import image2 from "/src/assets/DarshanGallery/DG3.jpg";
import image3 from "/src/assets/DarshanGallery/DG1.jpeg";

const BannerSection = () => {
  // List of images
  const images = [image1, image2, image3];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to handle the next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="relative w-auto max-w-6xl mx-auto mb-2 pt-20 pb-10">
        <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-96 shadow-lg ">
          {/* Animate the image slider */}
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto object-fit: cover rounded-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 hidden md:block"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200 hidden md:block"
          >
            <FaChevronRight className="text-blue-600" />
          </button>

          {/* Image indicators (dots) */}
          <div className="flex justify-center mt-4 space-x-2 md:space-x-4">
            {images.map((_, index) => (
              <motion.span
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setCurrentIndex(index)} // Clicking on a dot changes the image
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
