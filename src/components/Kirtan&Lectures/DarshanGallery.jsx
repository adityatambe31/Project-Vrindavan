import { motion } from "framer-motion";
import content from "/src/constants/darshanGallery";

// Grid Img Settings
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariant = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
};

const hoverVariant = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const DarshanGallery = () => {
  return (
    <div className="bg-slate-300 min-h-screen pt-16 px-4 pb-20">
      <h1 className="text-2xl font-bold mb-6 text-center pt-40">
        Darshan Gallery
      </h1>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2"
      >
        {content.map((item, index) => (
          <motion.a
            key={index}
            className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
          >
            <motion.div
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative h-full w-full"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.div
                variants={hoverVariant}
                className="absolute inset-0 flex justify-center items-center bg-gradient-to-t from-black to-transparent"
              ></motion.div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default DarshanGallery;
