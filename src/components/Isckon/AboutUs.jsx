import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const itemVariants = (index) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  },
});

const AboutUS = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen pt-10 px-4 pb-16">
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

        {/* Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl font-bold mb-8 text-left pt-20"
        >
          About Us
        </motion.h1>

        {/* Content */}
        <motion.div initial="hidden" animate="visible" className="space-y-6">
          {[
            "The Sri Sri Krishna Balaram Mandir, situated in the Raman Reti area of Vrindavan, holds a special significance for the devotees of the International Society for Krishna Consciousness. This grand temple represents the fulfilled dream of Srila Prabhupada, Founder Acharya of ISKCON, who wished to construct a temple of unparalleled beauty for the worship of the transcendental brothers Krishna and Balaram in the same village where They played more than five thousand years ago. Srila Prabhupada directly oversaw all the aspects of design and construction and personally called the Lord to come and accept the worship of His devotees from around the world. He said, “Lord Balaram is the source of spiritual strength, and I have built this temple just to give strength to the devotees”.",
            "Today, the Sri Sri Krishna Balaram Mandir is a booming spiritual center. Every day of the week pilgrims flood in the gate in great numbers from all over the world. In fact, the large green government signs posted over the highway turn off to Vrindavan only give directions to two temples: Banke Bihari and ISKCON.",
            "Visitors to the temple first pass under the brilliant white marble archway of Srila Prabhupada’s samadhi, an architectural wonder of winding peacock stairways and intricately carved walls and domes. They then enter through the gigantic wooden temple doors and find themselves transported to the spiritual world upon seeing the palace of Krishna Balaram with its sunken black and white checkered marble courtyard, beautified by a living tamal tree. The music of the kartals, mrdanga and sweet harmonium of the 24 hour kirtaniyas enters the heart, and everyone, young and old, spontaneously raise their arms and dance in ecstasy.",
            "Ascending the courtyard steps, visitors approach the effulgent gorgeous forms of the source of all beauty, the presiding Lords Sri Sri Gaura Nitai, Krishna Balaram and Radha Shyamasundar. Standing transfixed with open eyes and folded hands, pilgrims drink in the dazzling vision of the Lord, lovingly decorated with no consideration of expense or effort, truly a festival for the eyes.",
            "This entire temple complex is a busy preaching powerhouse comprised of thirty departments including a guesthouse, welcome center, Samadhi museum, ten book stalls, bakery, restaurant, broadcast studio, residential Brahmacari ashram and a Deity department with one of the highest standards of worship in the world, engaging more than one hundred devotees directly in the seva everyday.",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={itemVariants(index)}
              className="text-lg md:text-xl lg:text-lg leading-relaxed text-gray-700"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUS;
