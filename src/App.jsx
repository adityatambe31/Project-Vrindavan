import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Navbar Files section Nav imports
import Navbar from "./components/Navbar/Navbar";

//Hero File section Nav imports
import Hero from "./components/Isckon/Hero";

//Home Files section Nav imports
import Home from "./components/Home";

//Darshan Files section Nav imports
import DarshanGallery from "./components/DarshanGallery/DarshanGallery";

//import Blog from "./components/Blogs";

//Contact Files section Nav imports
import Contact from "./components/Contact/Contact";

//Footer Files section Nav imports
import Footer from "./components/Footer/Footer";
import TermsAndConditions from "./components/Footer/TermsAndConditions";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import Refund from "./components/Footer/Refund";
import Copyright from "./components/Footer/Copyright";

// Isckon file section Nav imports
import AboutUS from "./components/Isckon/AboutUs";
import Founder from "./components/Isckon/Founder";
import History from "./components/Isckon/History";
import WhyKrishnaConsciousness from "./components/Isckon/why-krishna-consciousness";
import Philosophy from "./components/Isckon/philosophy";

// Bhakti-Katha Files Nav Imports
import Katha from "./components/BhaktiKathas/Kathas";
import BhagwatGita from "./components/BhaktiKathas/BhagwatGita";
import Bhagvatam from "./components/BhaktiKathas/Bhagvatam";
import Chaitanya from "./components/BhaktiKathas/Chaitanya";
import Prabhupadlila from "./components/BhaktiKathas/Prabhupad-lila";
import PrabhupadVani from "./components/BhaktiKathas/Prabhupad-vani";

//Kirtan&Lectures Files Nav Imports
import KirtanLectures from "./components/Kirtan&Lectures/KirtanLectures";
import ReelContent from "./components/Kirtan&Lectures/ReelContent";
import FbPosts from "./components/Kirtan&Lectures/FbPosts";

// Quotes Files Nav Imports
import SrilaPrabhupad from "./components/Quotes/SrilaPrabhupad";
import RadhaGovindMah from "./components/Quotes/RadhaGovindMah";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Isckon Nav Section */}
            <Route path="/about/hero" element={<Hero />} />
            <Route path="about/about-us" element={<AboutUS />} />
            <Route path="about/founder" element={<Founder />} />
            <Route
              path="about/why-krishna-consciousness"
              element={<WhyKrishnaConsciousness />}
            />
            <Route path="about/history" element={<History />} />
            <Route path="about/philosophy" element={<Philosophy />} />

            {/* Quotes Gallery Section */}
            <Route
              path="/quotes/srila-prabhupad"
              element={<SrilaPrabhupad />}
            />
            <Route
              path="/quotes/radha-govind-gosawmi-mah"
              element={<RadhaGovindMah />}
            />

            {/* Katha Nav Section and sub-menus */}
            <Route path="/katha" element={<Katha />} />
            <Route path="/katha/darshan-gallery" element={<DarshanGallery />} />
            <Route path="/katha/bhagwat-gita" element={<BhagwatGita />} />
            <Route path="/katha/bhagvatam" element={<Bhagvatam />} />
            <Route path="/katha/chaitanya" element={<Chaitanya />} />
            <Route path="/katha/prabhupad-lila" element={<Prabhupadlila />} />
            <Route path="/katha/prabhupad-vani" element={<PrabhupadVani />} />

            {/* Kirtan & Lectures Section */}
            <Route path="/kirtan&lectures" element={<KirtanLectures />} />
            <Route path="/kirtan/reels" element={<ReelContent />} />
            <Route path="/kirtan/lectures" element={<KirtanLectures />} />
            <Route path="/kirtan/fbposts" element={<FbPosts />} />

            {/* Contact Section */}
            <Route path="/contact" element={<Contact />} />

            {/* Footer Section */}
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<Refund />} />

            {/* Hero section */}
          </Routes>
        </main>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
};

export default App;
