import { motion } from 'framer-motion';

const photos = [
  { id: 1, url: 'https://fb.watch/ucScJm267n/', name: 'Photo 1' },
  { id: 2, url: 'https://www.facebook.com/reel/1038307231068429', name: 'Photo 2' },
  { id: 3, url: 'https://www.facebook.com/reel/1051938719869359', name: 'Photo 3' },
  { id: 4, url: 'https://www.facebook.com/reel/1038307231068429', name: 'Photo 4' },
  // Add more photos here
];

const getFacebookEmbedUrl = (url) => {
  // Extract the video ID from the URL
  const videoIdMatch = url.match(/(?:video|reel)\/(\d+)/);
  if (videoIdMatch) {
    const videoId = videoIdMatch[1];
    return `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/${videoId}/`;
  }
  return '';
};

const ReelContent = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16 px-4 pb-16">
      <h1 className="text-2xl font-bold mb-6 text-center pt-20">Reel Content</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="w-full h-60">
                <iframe
                  src={getFacebookEmbedUrl(photo.url)}
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={photo.name}
                />
              </div>
              <p className="mt-2 text-center font-semibold">{photo.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelContent;
