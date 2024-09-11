import { useState } from "react";
import { motion } from "framer-motion"; // For animations
import videos from "/src/constants/video.js"; // Correct import path

const KirtanLectures = () => {
  // State to track which video is playing
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <div className="bg-slate-300">
      <div className="container mx-auto px-4 py-20">
        {/* Page heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-8 pt-20"
        >
          Kirtan & Lectures
        </motion.h1>

        {/* Video cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            // Each card is animated using framer-motion
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-sky-100 rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() =>
                setPlayingVideo(playingVideo === video.id ? null : video.id)
              }
            >
              {/* Video iframe (loaded only when clicked) */}
              {playingVideo === video.id ? (
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "56.25%" }}
                >
                  {video.platform === "facebook" ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                        video.link
                      )}&show_text=false&width=560`}
                      title={video.name}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.link}
                      title={video.name}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  )}
                </div>
              ) : (
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src="/src/assets/play.png"
                    alt="Play"
                    className="w-1/3 mx-auto"
                  />
                </div>
              )}

              {/* Video name */}
              <h2 className="text-xl font-semibold text-center mt-4">
                {video.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KirtanLectures;
