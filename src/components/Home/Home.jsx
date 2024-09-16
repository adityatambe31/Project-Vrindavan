import BannerSection from "./BannerSection";
import Grids from "./Grids";
import ParallaxBg from "./ParallaxBg";

const Home = () => {
  return (
    <div className="bg-slate-300 min-h-screen pt-20 px-4 pb-16 ">
      <div className="relative w-auto max-w-6xl mx-auto mb-2 pt-20 pb-10">
        {/* Image banners */}
        <BannerSection />

        {/* Parallax Section */}
        <ParallaxBg />

        {/* Grids Section */}
        <Grids />
      </div>
    </div>
  );
};

export default Home;
