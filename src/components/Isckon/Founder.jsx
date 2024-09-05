import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
  "https://www.iskconvrindavan.com/images/service/service-banner-2.jpg",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Founder = () => {
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
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold mb-8 text-left pt-10"
        >
          The Founder
        </motion.h1>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {[
            "His Divine Grace A.C. Bhaktivedanta Swami Prabhupada appeared in this world in 1896 in Calcutta, India. He first met his spiritual master, Srila Bhaktisiddhanta Sarasvati Gosvami, in Calcutta in 1922. Bhaktisiddhanta Sarasvati, a prominent religious scholar and the founder of sixty-four Gaudiya Mathas (Vedic institutes), liked this educated young man and convinced him to dedicate his life to teaching Vedic knowledge. Srila Prabhupada became his student and, in 1933, his formally initiated disciple.",
            "At their first meeting, in 1922, Srila Bhaktisiddhanta Sarasvati requested Srila Prabhupada to broadcast Vedic knowledge in English. In the years that followed, Srila Prabhupada wrote a commentary on the Bhagavad-gita, assisted the Gaudiya Matha in its work, and, in 1944, started Back to Godhead, an English fortnightly magazine. Single-handedly, Srila Prabhupada edited it, typed the manuscripts, checked the galley proofs, and even distributed the individual copies. The magazine is now being continued by his disciples in the West.",
            "In 1950 Srila Prabhupada retired from married life, adopting the vanaprastha (retired) order to devote more time to his studies and writing. He traveled to the holy city of Vrndavana, where he lived in humble circumstances in the historic temple of Radha-Damodara. There he engaged for several years in deep study and writing. He accepted the renounced order of life (sannyasa) in 1959. At Radha-Damodara, Srila Prabhupada began work on his life’s masterpiece: a multivolume commentated translation of the eighteen-thousand-verse Srimad-Bhagavatam (Bhagavata Purana). He also wrote Easy Journey to Other Planets.",
            "After publishing three volumes of the Bhagavatam, Srila Prabhupada came to the United States, in September 1965, to fulfill the mission of his spiritual master. Subsequently, His Divine Grace wrote more than fifty volumes of authoritative commentated translations and summary studies of the philosophical and religious classics of India.",
            "When he first arrived by freighter in New York City, Srila Prabhupada was practically penniless. Only after almost a year of great difficulty did he establish the International Society for Krishna Consciousness, in July of 1966. Before he passed away on November 14, 1977, he had guided the Society and seen it grow to a worldwide confederation of more than one hundred asramas, schools, temples, institutes, and farm communities.",
            "In 1972 His Divine Grace introduced the Vedic system of primary and secondary education in the West by founding the gurukula school in Dallas, Texas. Since then his disciples have established similar schools throughout the United States and the rest of the world.",
            "Srila Prabhupada also inspired the construction of several large international cultural centers in India. The center at Sridhama Mayapur, in West Bengal, is the site for a planned spiritual city, an ambitious project for which construction will extend over many years to come. In Vrndavana are the magnificent Krsna-Balarama Temple and International Guesthouse, gurukula school, and Srila Prabhupada Memorial and Museum. There is also a major cultural and educational center in Mumbai. Other centers are planned in a dozen important locations on the Indian subcontinent.",
            "Srila Prabhupada on ISKCON Vrindavana",
            "Our Vrindavan temple is perhaps our nicest building in the whole movement, and I want that our Vrindavan temple to be the first-class temple of India. Already people are saying that it surpasses all temples of the district in beauty, and I think it surpasses all temples in India.",
            "Mayapur and Vrindavan are places of spiritual inspiration for all devotees of ISKCON. They are the best places in the world to come and chant Hare Krishna and prepare for going back to home, back to Godhead.",
            "Vrindavana is the most sacred place within this cosmic universe, and people seeking to achieve spiritual emancipation by entering the kingdom of God may make a home at Vrindavana and become serious students of the six Gosvamis, who were instructed by Lord Sri Caitanya Mahaprabhu.",
            "His Divine Grace A. C. Bhaktivedanta Swami Srila Prabhupada, Founder Acharya of the International Society for Krishna Consciousness, inaugurated the Krishna Balaram Mandir in Sri Vrindavana Dhama and installed the most beautiful Deities of Sri Sri Krishna Balaram, Sri Sri Radha Shyamasundar, Lalita Devi and Vishakha Devi and Sri Sri Gaura Nitai on Ram Navami Day, 20 April 1975.",
            "Srila Prabhupada's most significant contribution, however, is his books. Highly respected by scholars for their authority, depth, and clarity, they are used as textbooks in numerous college courses. His writings have been translated into over fifty languages. The Bhaktivedanta Book Trust, established in 1972 to publish the works of His Divine Grace, has thus become the world's largest publisher of books in the field of Indian religion and philosophy.",
            "In just twelve years, despite his advanced age, Srila Prabhupada circled the globe fourteen times on lecture tours that took him to six continents. In spite of such a vigorous schedule, Srila Prabhupada continued to write prolifically. His writings constitute a veritable library of Vedic philosophy, religion, literature, and culture.",
            "Srila Prabhupada spent several years in Vrindavan before going to America. Through his travels and preaching he revealed the glory of Vrindavan-dham to the whole world.",
            "Srila Prabhupada Chronology",
            "1954 Left family, vanaprastha",
            "1956 Vrindavan residence, Vamsi Gopal temple",
            "1959 Begins translating Srimad Bhagavatam in Delhi",
            "July Moves upstairs Radha-Damodara temple",
            "Sept. 17, Takes sannyasa, renounced order of life",
            "1960 Fall Publishes first book, paperback Easy Journey to Other Planets",
            "1962 July Moves into downstairs rooms at Radha-Damodara",
            "Sept. Publishes Volume one, Srimad Bhagavatam in Delhi",
            "1963 December Publishes volume two Srimad Bhagavatam",
            "1964 December Publishes volume three Srimad Bhagavatam",
            "1965 August 13, arrives in New York City by ship",
            "1966 July 17, establishes International Society for Krishna Consciousness",
            "1967 July Establishes first temple in San Francisco",
            "1968 May 1 First Kirtan, ISKCON London",
            "1969 May Opens first temple in Montreal, Canada",
            "1970 November Opens first temple in Paris, France",
            "1971 October 15 Inaugurates Sri Krishna-Balarama Mandir, Vrindavan",
            "1972 May 1 Opens first temple in Mumbai, India",
            "1973 December Opens first temple in Sydney, Australia",
            "1974 November 5 Opens first temple in Tokyo, Japan",
            "1975 April 14 Opens first temple in Nairobi, Kenya",
            "1976 April 16 Opens first temple in Honolulu, Hawaii",
            "1977 November 14, passes away in Vrindavan",
          ].map((text, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-lg md:text-m lg:text-2xl leading-relaxed text-gray-700"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Founder;
