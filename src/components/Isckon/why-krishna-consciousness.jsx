import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
];

const WhyKrishnaConsciousness = () => {
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
          className="text-3xl font-bold mb-8 text-left pt-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Krishna Consciousness?
        </motion.h1>

        {/* Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl lg:text-lg leading-relaxed text-gray-700">
            The search for happiness Everyone is looking for happiness but it
            elusively slips away from everyone. What is the reason that despite
            our numerous attempts we never feel completely satisfied and when we
            do feel happy, the bliss is short lived and once again we are
            plunged into the ocean of miseries. We suffer, even though we don’t
            want to suffer, we experience loss, heartaches, depression and all
            such undesirable feelings even though we never want to. What then
            forces us to go through such emotions and keeps us away from the
            happiness and peace that all of us are hankering after? The Krishna
            consciousness movement gives answers to all such questions and gives
            the perfect path leading to uninterrupted eternal happiness,
            untinged by any misery, which is to be experienced in the company of
            the blissful Lord Sri Krishna. The true nature of a living entity is
            to be eternal, full of knowledge and bliss, but this material
            creation which is running under the influence of time has a
            beginning and an end, unlike our actual eternal existence, and is a
            place of utter misery, unlike our inherent nature to be blissful.
          </p>

          <p className="text-lg md:text-xl lg:text-lg leading-relaxed text-gray-700">
            We can therefore conclude that we actually do not belong here and
            are meant to experience something much more sublime. However, we
            ourselves are responsible for being in this situation, as we made
            the wrong decision of trying to become that Master and Lord whereas
            we are by nature meant to be the servants of the Supreme Personality
            of Godhead. Seeing his subordinate souls straying away from their
            true nature, the Lord arranged for this material world where the
            living entity can attempt to enjoy independently, but due to being
            repeatedly unsuccessful, the person is sure to turn back to him and
            when that happens, the Lord mercifully calls him back to the
            spiritual realm where there is no birth, death, old age and disease,
            where there is no misery but true bliss and where the soul
            experiences ultimate pleasure, being situated in its true nature of
            loving and associating with Sri Krishna. This is the ultimate
            destination where true happiness can be realized.
          </p>

          <p className="text-lg md:text-xl lg:text-lg leading-relaxed text-gray-700">
            The process The path and the destination in the Krishna
            consciousness movement are one and the same with the only difference
            being in the quality of the experience in the stages of practice and
            perfection. The process therefore is most perfect for it strives to
            bring about the true nature of the soul from the very beginning of
            the process. The living entities who take up this Krishna
            consciousness are taught to love and serve Sri Krishna, the exact
            activity that will be performed in the perfected stage in the
            spiritual world. In the present situation, this includes chanting
            the names of the Lord, singing songs in his glorification, dancing
            for his pleasure, honoring his Mahaprasad, visiting the places where
            he performed his pastimes and so on.
          </p>

          <p className="text-lg md:text-xl lg:text-lg leading-relaxed text-gray-700">
            When performed with great faith and enthusiasm, the process itself
            gives rise to great pleasure, a bliss that cannot be experienced in
            anything material. The very first side effect of this glorious
            process is the removal of all miseries, which is what all of us are
            looking for. And that is just a side effect, the main result being
            unlimited bliss. Millions have joined this movement and are
            practicing regularly, experiencing a bliss which is making them
            desirous of tasting it even further.
          </p>

          <p className="text-lg md:text-xl lg:text-lg leading-relaxed text-gray-700">
            The Goal The goal is to be transported to the transcendental realm
            of Sri Krishna, the abode made up of pure eternal bliss and
            knowledge, where misery, old age, disease and death are non
            existent. The only experience there will be that of unalloyed love
            and devotion shared between the Supreme being Sri Krishna and the
            individual souls.
          </p>

          <p className="text-lg md:text-xl lg:text-lg leading-relaxed text-gray-700">
            That blissful abode is beyond material imagination, and the love
            experienced there is the zenith of all happiness. Sri Vrindavan
            dham, the abode where the flowering groves are full of fragrant
            flowers, the river banks studded with jewels, lotuses swaying on the
            cooling waters of the Yamuna river and birds and bees making sweet
            sounds, is the place where Sri Krishna enjoys various loving
            pastimes with his numerous associates such as his friends, parents,
            servants and beloved Gopis. It is this Vrindavan, the place of the
            most wondrous pastimes of Sri Krishna, that is the Goal of all the
            Gaudiya Vaishnavas.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyKrishnaConsciousness;
