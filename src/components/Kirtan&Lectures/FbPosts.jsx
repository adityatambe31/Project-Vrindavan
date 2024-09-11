import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    url: "/src/assets/Book-Distribution/BD1.jpg",
  },
  {
    id: 2,
    url: "/src/assets/Book-Distribution/BD2.jpg",
  },
  {
    id: 3,
    url: "/src/assets/Book-Distribution/BD3.jpg",
  },

  // Add more photos here
];
const FbPosts = () => {
  return (
    <div className="bg-gray-300 min-h-screen pt-16 px-4 pb-16">
      <h1 className="text-2xl font-bold mb-6 text-center pt-40">
        Book-Distribution
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 object-fit:cover">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="bg-white p-4 rounded-lg shadow-md "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-center font-semibold">{photo.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FbPosts;
