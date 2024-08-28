import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Home from "./components/Home"; 
import Media from "./components/Katha";
import KirtanLectures from './components/KirtanLectures';
import DarshanGallery from './components/DarshanGallery';
import Services from "./components/Services";
import Founder from './components/Founder';
import History from './components/History';
import WhyKrishnaConsciousness from './components/why-krishna-consciousness';
import Philosophy from './components/philosophy';
import AboutUS from './components/AboutUs';
import Contact from './components/Contact';
import TermsAndConditions from './components/TermsAndConditions'; 
import PrivacyPolicy from './components/PrivacyPolicy'; 
import ReelContent from './components/ReelContent';
import InstaPosts from './components/InstaPosts';
import Quotes from './components/Quotes';
import BhagwatGita from './components/BhagwatGita';
import Refund from './components/Refund';
import Bhagvatam from './components/Bhagvatam';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog/reel-content" element={<ReelContent />} />
            <Route path="/blog/posts" element={<InstaPosts />} />
            <Route path="/blog/quotes" element={<Quotes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/kirtan-lectures" element={<KirtanLectures />} />
            <Route path="/media/darshan-gallery" element={<DarshanGallery />} />
            <Route path="/media/bhagwat-gita" element={<BhagwatGita />} />
            <Route path="/media/bhagvatam" element={<Bhagvatam />} />
            <Route path="/about/about-us" element={<AboutUS />} />
            <Route path="/about/founder" element={<Founder />} />
            <Route path="/about/why-krishna-consciousness" element={<WhyKrishnaConsciousness />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/philosophy" element={<Philosophy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
            <Route path="/refund-policy" element={<Refund />} /> 
            
            </Routes>
        </main>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
