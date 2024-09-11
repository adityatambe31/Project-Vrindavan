<div className="p-20">
  {/* Slider Section */}
  <div className="mt-10 relative">
    {/* Heading and View All button */}
    <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
      <h2 className="text-2xl font-bold mb-4 md:mb-0">
        Sholka of Srila Prabhupada
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

    {[...Array(7)].map((_, index) => (
      <div key={index} className="relative mb-10">
        {/* Container for the cards (slides) */}
        <div
          className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden"
          ref={sliderRef}
        >
          {[...Array(4)].map((_, cardIndex) => (
            <motion.div
              key={cardIndex} // Unique key for each card
              className="flex-shrink-0 w-80 md:w-[400px] rounded-lg overflow-hidden bg-white shadow-md mx-2"
              initial={{ opacity: 0, x: 100 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Final animation state
              exit={{ opacity: 0, x: -100 }} // Animation state when exiting
              transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
            >
              {/* Image and description for each card */}
              <div className="w-full h-64 relative">
                <img
                  src={`https://via.placeholder.com/300x200?text=Card ${
                    index * 4 + cardIndex + 1
                  }`}
                  alt={`Card ${index * 4 + cardIndex + 1}`}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h2 className="text-xl font-bold text-white">
                    Card {index * 4 + cardIndex + 1}
                  </h2>
                  <p className="text-sm text-gray-300 mt-2">
                    Description for Card {index * 4 + cardIndex + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Left Arrow for navigating cards */}
        <button
          onClick={() =>
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        >
          <FaChevronLeft className="text-blue-600" />
        </button>

        {/* Right Arrow for navigating cards */}
        <button
          onClick={() =>
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
        >
          <FaChevronRight className="text-blue-600" />
        </button>
      </div>
    ))}
  </div>
</div>;
