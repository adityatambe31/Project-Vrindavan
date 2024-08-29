import { motion } from 'framer-motion';

const videos = [
  { id: 1, url: 'https://www.youtube.com/embed/video_id1', name: 'Video 1' },
  { id: 2, url: 'https://www.youtube.com/embed/video_id2', name: 'Video 2' },
  { id: 3, url: 'https://www.youtube.com/embed/video_id3', name: 'Video 3' },
  { id: 4, url: 'https://www.youtube.com/embed/video_id4', name: 'Video 4' },
  { id: 5, url: 'https://www.youtube.com/embed/video_id5', name: 'Video 5' },
  { id: 6, url: 'https://www.youtube.com/embed/video_id6', name: 'Video 6' },
  // Add more videos here
];

const KirtanLectures = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center pt-20">Kirtan & Lectures</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <iframe
                width="100%"
                height="180"
                src={video.url}
                title={video.name}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="mt-2 text-center font-semibold">{video.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KirtanLectures;
