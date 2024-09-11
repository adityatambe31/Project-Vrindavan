import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Navbar Files section Nav imports
import Navbar from "./components/Navbar/Navbar";

//Hero File section Nav imports
import Hero from "./components/Isckon/Hero";

//Home Files section Nav imports
import Home from "./components/Home";

//import Blog from "./components/Blogs";

//Contact Files section Nav imports
import Contact from "./components/Contact/Contact";

//Footer Files section Nav imports
import Footer from "./components/Footer/Footer";
import TermsAndConditions from "./components/Footer/TermsAndConditions";
import CopyrightMediaDisclaimer from "./components/Footer/CopyrightMediaDisclaimer";
import Copyright from "./components/Footer/Copyright";

// Isckon file section Nav imports
import AboutUS from "./components/Isckon/AboutUs";

// Bhakti-Katha Files Nav Imports
import Katha from "./components/BhaktiKathas/GridKathas";
import BhagwatGita from "./components/BhaktiKathas/BhagwatGita";
import Bhagvatam from "./components/BhaktiKathas/Bhagvatam";
import Chaitanya from "./components/BhaktiKathas/Chaitanya";
import Prabhupadlila from "./components/BhaktiKathas/Prabhupad-lila";
import PrabhupadVani from "./components/BhaktiKathas/Prabhupad-vani";

//Kirtan&Lectures Files Nav Imports
//import ReelContent from "./components/Kirtan&Lectures/Reelcontent";

import KirtanLectures from "./components/Kirtan&Lectures/KirtanLectures";
import FbPosts from "./components/Kirtan&Lectures/FbPosts";
import Darshangallery from "./components/Kirtan&Lectures/DarshanGallery";

// Quotes Files Nav Imports
import RadhaGovindMah from "./components/Quotes/RadhaGovindMah";
import RadhaNathmah from "./components/Quotes/RadhaNathmah";

// Blog Files Nav Imports
import Blogs from "./components/Blogs/Blogs";

//Grid Section Imports
import GridQuotesSection from "./components/Quotes/GridQuotesSection";
import GridKathas from "./components/BhaktiKathas/GridKathas";
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

            {/* Quotes Gallery Section */}

            <Route
              path="/quotes/radha-govind-gosawmi-mah"
              element={<RadhaGovindMah />}
            />
            <Route path="/quotes/radhanath-mah" element={<RadhaNathmah />} />

            {/* Katha Nav Section and sub-menus */}
            <Route path="/katha" element={<Katha />} />
            <Route path="/katha/bhagwat-gita" element={<BhagwatGita />} />
            <Route path="/katha/bhagvatam" element={<Bhagvatam />} />
            <Route path="/katha/chaitanya" element={<Chaitanya />} />
            <Route path="/katha/prabhupad-lila" element={<Prabhupadlila />} />
            <Route path="/katha/prabhupad-vani" element={<PrabhupadVani />} />

            {/* Kirtan & Lectures Section */}
            <Route path="/kirtan&lectures" element={<KirtanLectures />} />
            {/* <Route path="/kirtan/reels" element={<ReelContent />} /> */}
            <Route path="/kirtan/lectures" element={<KirtanLectures />} />
            <Route path="/kirtan/fbposts" element={<FbPosts />} />
            <Route
              path="/kirtan/darshan-gallery"
              element={<Darshangallery />}
            />

            {/* Blog Section */}
            <Route path="/blogs" element={<Blogs />} />

            {/* Contact Section */}
            <Route path="/contact" element={<Contact />} />

            {/* Footer Section */}
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route
              path="/copyright-media-disclaimer"
              element={<CopyrightMediaDisclaimer />}
            />

            {/* Grid Section Routing Imports */}
            <Route
              path="/quotes/grid-quotes-section"
              element={<GridQuotesSection />}
            />
            <Route
              path="/kathas/grid-kathas-section"
              element={<GridKathas />}
            />
          </Routes>
        </main>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
};

export default App;
