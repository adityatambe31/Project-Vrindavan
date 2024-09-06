import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
];

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay },
  },
});

const History = () => {
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
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Dots for Current Slide Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Animated Heading */}
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold mb-8 text-left pt-16"
        >
          The History
        </motion.h1>

        {/* Content */}
        <motion.div
          variants={container(0.2)}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <p className="text-lg md:text-m lg:text-lg leading-relaxed text-gray-700">
            The International Society for Krishna Consciousness (ISKCON) was
            founded in New York City in 1966 by His Divine Grace A.C.
            Bhaktivedanta Swami Prabhupada, who went to the western world with
            the mission of spreading the transcendental message of Sri Chaitanya
            Mahaprabhu, the Supreme Personality of Godhead appearing as a
            devotee in this age of Kali. Being a part of the Brahma Madhva
            Gaudiya Vaishnava Sampradaya, one of the four vaishnava sampradayas,
            ISKCON comes in an authorized disciplic succession of great
            spiritual preceptors who have taught the science of self realization
            based on the teachings of the Bhagawat Gita and Srimad Bhagwatam.
          </p>

          <p className="text-lg md:text-m lg:text-lg leading-relaxed text-gray-700">
            The precepts and practices of ISKCON were taught and codified by Sri
            Chaitanya Mahaprabhu (1486-1532) along with His brother Nityananda
            Prabhu and six of His principal associates, the Goswamis of
            Vrindavana (Sanatana, Rupa, Jiva, Gopal Bhatta, Raghunatha Dasa and
            Raghunatha Bhatta).
          </p>

          <p className="text-lg md:text-m lg:text-lg leading-relaxed text-gray-700">
            The Bhagavad-gita, the principal scripture of The Hare Krishna
            Movement, is an eternal teaching, having Its written origins more
            than 5000-years ago, and before that time it was an oral tradition
            handed down from teacher to student from time immemorial.
          </p>

          <p className="text-lg md:text-m lg:text-lg leading-relaxed text-gray-700">
            Sri Chaitanya gave a powerful impetus for a massive bhakti
            (devotional) movement throughout India. Under His direction hundreds
            of volumes on the philosophy of Krishna consciousness were compiled.
            Many devotees followed in the preceptorial line of Sri Chaitanya
            Mahaprabhu including in the 19th century an outstanding Vaishnava
            theologian, Bhaktivinoda Thakura (1838-1914) who brought Krishna
            consciousness to a modern audience by first sending a book on the
            Teachings of Lord Caitanya to McGill University in Canada in 1896.
            Bhaktivinoda Thakur’s son, Bhaktisiddhanta Sarasvati Goswami (1874-
            1937), became the guru of Srila Prabhupada (1896-1977) and
            instructed him to spread Krishna consciousness to the English
            speaking people of the West. On this order, Srila A.C. Bhaktivedanta
            Swami Prabhupada took a perilous journey across the Atlantic Ocean
            to the USA in 1965, and consequently started the most auspicious
            spiritual movement, The International Society for Krishna
            Consciousness, for the fulfillment of his guru’s desire. ISKCON
            quickly spread to the major cities of the whole world in a mere 11
            years.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default History;
