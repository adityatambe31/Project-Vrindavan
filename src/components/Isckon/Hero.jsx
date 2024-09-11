import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
// Main Component
const Hero = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen relative"
      style={{
        backgroundImage: "url('/src/assets/Hero/img-4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* White overlay layer with reduced opacity */}
      <div className="absolute inset-0 bg-white opacity-20"></div>

      {/* Journey of Hari Govind Das */}
      <div className="relative rounded-lg shadow-lg p-4 sm:p-8 lg:p-10 justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="pt-40 sm:pt-60 md:pt-80 p-4 sm:p-10 md:p-20"
        >
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
            className="space-y-6 md:space-y-8 text-black lg:space-y-10 bg-black bg-opacity-50 rounded-lg p-4 sm:p-6 md:p-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 mb-2 sm:mb-4 md:mb-6">
              About Hari Govind Das{" "}
            </h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-200"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              In 1996, I started college in the 11th grade. My mother, always in
              search of spiritual wisdom, invited me to a lecture by H.S. Ram
              Roop Prabhu. Little did I know that this event would significantly
              alter the course of my life. The lecture, delivered in a crowded
              hall, was captivating. I was seated in the front row, feeling
              restless at first. However, as Ram Roop Prabhu spoke about a
              woodpecker and a lotus flower, I was deeply moved. The tale
              illustrated how we often get lost in temporary pleasures,
              neglecting our true spiritual essence.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-200"
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
              Jad Bharat. The Bhagavad Katha was profoundly inspiring, leading
              me to attend the full 8-day event. This experience was
              transformative, deepening my devotion and commitment to spiritual
              practices. By 1997, I took initiation from H.H. Radha Govind
              Goswami Maharaj. My family joined me in devotional service, and
              our commitment grew over the years. When my mother passed away,
              her final words were a reminder to maintain our devotional
              practices. In her honor, I began hosting kirtans and lectures at
              our home from 2018 to 2023.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-200"
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              In 2015, I started sharing my spiritual journey on Facebook. This
              led to the creation of ISKCON Ahmednagar Media, which I managed
              from 2016 to 2020, dedicating myself to spreading Krishna
              teachings. My daily routine begins at 3 AM with Japmala and
              exercise. I then create posts on my phone and dedicate myself to
              devotional service, balancing spiritual practices with personal
              life and work. The journey of Hari Govind Das continues with
              unwavering dedication to sharing spiritual wisdom and living a
              life devoted to Krishna. My experiences and commitment are a
              testament to the profound impact of devotion on one’s life.
            </motion.p>
            <motion.div
              className="flex justify-center space-x-6 md:space-x-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            >
              <motion.p
                className="text-base sm:text-lg md:text-xl text-slate-200"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
              >
                Connect with Hari Govind
              </motion.p>
              <Link
                to="https://www.facebook.com/harekrishnaahilyanagar"
                target="_blank"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaFacebook className="text-blue-300 text-2xl md:text-3xl" />
                </motion.div>
              </Link>
              <Link to="https://whatsapp.com" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaWhatsapp className="text-green-300 text-2xl md:text-3xl" />
                </motion.div>
              </Link>
              <Link to="https://instagram.com" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaInstagram className="text-pink-300 text-2xl md:text-3xl" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
