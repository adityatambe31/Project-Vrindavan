import { motion } from "framer-motion";

//Grid Img Settings
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
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

const content = [
  {
    name: "Quotes",
    imageUrl: "/src/assets/DarshanGallery/DG1.jpeg",
    link: "/quotes/grid-quotes-section",
  },
  {
    name: "Kathas",
    imageUrl: "/src/assets/DarshanGallery/DG2.jpg",
    link: "/kathas/grid-kathas-section",
  },
  {
    name: "Kirtan & Lectures",
    imageUrl: "/src/assets/DarshanGallery/DG3.jpg",
    link: "/kirtan/lectures",
  },
  {
    name: "Darshan Gallery",
    imageUrl: "/src/assets/DarshanGallery/DG4.jpg",
    link: "/kirtan/darshan-gallery",
  },
];

const Grids = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {content.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          rel="noopener noreferrer"
          className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
        >
          <motion.div
            variants={itemVariant}
            whileHover={{ scale: 1.05 }} // Zoom in effect on hover
            transition={{ type: "spring", stiffness: 300 }}
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
            >
              <motion.span
                className="text-white text-xl font-semibold text-center px-4 py-2 bg-opacity-80 rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.name}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Grids;
