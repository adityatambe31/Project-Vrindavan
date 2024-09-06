import { motion } from "framer-motion";

const photos = [
  { id: 1, url: "https://via.placeholder.com/300", name: "Photo 1" },
  { id: 2, url: "https://via.placeholder.com/300", name: "Photo 2" },
  { id: 3, url: "https://via.placeholder.com/300", name: "Photo 3" },
  { id: 4, url: "https://via.placeholder.com/300", name: "Photo 4" },
  { id: 5, url: "https://via.placeholder.com/300", name: "Photo 5" },
  { id: 6, url: "https://via.placeholder.com/300", name: "Photo 6" },
  { id: 7, url: "https://via.placeholder.com/300", name: "Photo 7" },
  { id: 8, url: "https://via.placeholder.com/300", name: "Photo 8" },
  // Add more photos here
];

const Blogs = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16 px-4 pb-16">
      <h1 className="text-2xl font-bold mb-6 text-center pt-20">
        Blogs By Hari Govind
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
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

export default Blogs;
