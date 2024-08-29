import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://www.iskconvrindavan.com/images/service/service-banner-2.jpg',
  'https://www.iskconvrindavan.com/images/service/service-banner-2.jpg',
  'https://www.iskconvrindavan.com/images/service/service-banner-2.jpg',
];

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay }
  }
});

const Philosophy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pt-20 px-4 pb-16">
      {/* Image Banner Section */}
      <div className="relative w-full max-w-6xl mx-auto mb-16 pt-16">
        <div className="overflow-hidden rounded-lg h-64">
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
        </div>

        {/* Dots for Current Slide Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Animated Heading */}
        <motion.h1
          variants={container(0)}
          initial='hidden'
          animate='visible'
          className="text-3xl font-bold mb-8 text-left pt-16"
        >
          Philosophy
        </motion.h1>

        {/* Content */}
        <motion.div
          variants={container(0.2)}
          initial='hidden'
          animate='visible'
          className="space-y-6"
        >
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
            Probably you have already seen members of the Hare Krsna movement singing and dancing in the streets or you have been asked for donation for a book or a magazine. You could also see us in TV or read about us in newspapers. How many times have you asked yourselves: Who are they? Why do they dress in this way? What do they believe in? Why do they always sing? Who is Krsna?
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
            To enable you to better understand us, we want to show you the Hare Krsna movement in detail and tell you who we are. You will be probably surprised by learning that to become a part of the Hare Krsna movement one does not need to wear traditional dress or change ones hairstyle or religion. You will discover that Krsna consciousness is much more than religion. It is a spiritual, universal, time-proven process enabling to achieve inner happiness, satisfaction and higher consciousness.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
            Hare Krsna movement makes spiritual reality and culture derived from it known to the widest public. This makes it unique. When you speak with a devotee from the Hare Krsna movement, eat spiritual food served in our restaurants, take part in the Sunday festival in a temple, read any of our books or chant Hare Krsna at least once, your consciousness will change. And this spiritual change of consciousness is the key to improvement of the quality of life on this planet.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
            Michael Grant (Mukunda Goswami)
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Philosophy;
