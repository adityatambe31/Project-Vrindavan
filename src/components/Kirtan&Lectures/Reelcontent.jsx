import { useState } from "react";
import { motion } from "framer-motion"; // For animations
import reels from "/src/constants/reel.js"; // Correct import path

const ReelContent = () => {
  // State to track which reel is playing
  const [playingReel, setPlayingReel] = useState(null);

  return (
    <div className="bg-stone-300 ">
      <div className="container mx-auto px-4 py-10 pt-40">
        {/* Page heading with animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-8 pt-20"
        >
          Reels 🛕🙏
        </motion.h1>

        {/* Reel cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            // Each card is animated using framer-motion
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
              onClick={() =>
                setPlayingReel(playingReel === reel.id ? null : reel.id)
              }
            >
              {/* Reel player (loaded only when clicked) */}
              {playingReel === reel.id ? (
                <video
                  width="100%"
                  height="100%"
                  controls
                  src={`/src/constants/Reels/${reel.link}`}
                />
              ) : (
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    src="/src/assets/play.png"
                    alt="Play"
                    className="w-1/3 mx-auto"
                  />
                </div>
              )}

              {/* Reel name */}
              <h2 className="text-xl font-semibold text-center mt-4">
                {reel.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelContent;
