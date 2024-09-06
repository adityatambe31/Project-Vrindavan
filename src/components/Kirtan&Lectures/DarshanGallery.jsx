import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    url: "https://scontent.fykz1-1.fna.fbcdn.net/v/t39.30808-6/457016149_926315756206751_6026729787020638588_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Iu5XPtzML0QQ7kNvgHSJexz&_nc_ht=scontent.fykz1-1.fna&oh=00_AYCEDaKOS68XRaG1LtyQ8yXyJUPvIsTtHXBwbwTHvT5Xtw&oe=66D2DDEE",
    name: "Photo 1",
  },
];
const DarshanGallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16 px-4 pb-16">
      <h1 className="text-2xl font-bold mb-6 text-center pt-20">
        Darshan Gallery
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="bg-white p-4 rounded-lg shadow-md"
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

export default DarshanGallery;
