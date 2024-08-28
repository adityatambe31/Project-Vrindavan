
import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isKathaDropdownOpen, setisKathaDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [ setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleDropdownClick = (dropdown) => {
    if (dropdown === 'media') {
      setisKathaDropdownOpen(!isKathaDropdownOpen);
      setIsAboutDropdownOpen(false);
      setIsBlogDropdownOpen(false);
    } else if (dropdown === 'about') {
      setIsAboutDropdownOpen(!isAboutDropdownOpen);
      setisKathaDropdownOpen(false);
      setIsBlogDropdownOpen(false);
    } else if (dropdown === 'blog') {
      setIsBlogDropdownOpen(!isBlogDropdownOpen);
      setisKathaDropdownOpen(false);
      setIsAboutDropdownOpen(false);
    }
  };

  const handleLinkClick = () => {
    setisKathaDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsBlogDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isNavbarVisible ? 0 : -100, opacity: isNavbarVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        transform: `translate(${cursorPosition.x / 50}px, ${cursorPosition.y / 50}px)`,
        zIndex: 1000,
        backgroundColor: isNavbarVisible ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      }}
      className="fixed top-0 inset-x-0 mx-auto flex items-center justify-between py-4 shadow-md w-full max-w-7xl rounded-b-full md:px-16 transition-all duration-500"
    >
      <div className="flex items-center z-10">
        <Link to="/" className="flex-shrink-0" onClick={handleLinkClick}>
          <img className="mx-4 px-2 w-20 cursor-pointer " src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center z-10">
  
</div>

      </div>
      <div className="flex items-center space-x-6 text-lg z-10 hidden md:flex">
        <Link
          to="/"
          className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center"
        >
          <span>Home</span>
        </Link>
        <div className="relative">
          <button
            onClick={() => handleDropdownClick('about')}
            className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>ISCKON</span>
            {isAboutDropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          {isAboutDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20">
              <Link
                to="/about/about-us"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link
                to="/about/founder"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Founder
              </Link>
              <Link
                to="/about/history"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                History
              </Link>
              <Link
                to="/about/why-krishna-consciousness"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Why Krishna Consciousness?
              </Link>
              <Link
                to="/about/philosophy"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Philosophy
              </Link>
            </div>
          )}
        </div>




          {/* Katha Section */}
        <div className="relative">
          <button
            onClick={() => handleDropdownClick('media')}
            className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Bhakti-Kathas</span>
            {isKathaDropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          {isKathaDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20">
              <Link
                to="/media/kirtan-lectures"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Kirtan & Lectures
              </Link>
              <Link
                to="/media/darshan-gallery"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Darshan Gallery
              </Link>
              <Link
                to="/media/bhagwat-gita"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Bhagvad Gita
              </Link>
              <Link
                to="/media/darshan-gallery"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Bhagwatam
              </Link>
              <Link
                to="/media/darshan-gallery"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Chaitanya Charan Amrud
              </Link>
              <Link
                to="/media/darshan-gallery"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Srila-Prabhupad Lila
              </Link>
              <Link
                to="/media/darshan-gallery"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Srila-Prabhupad Amrud Vani
              </Link>
              <Link
                to="/media/darshan-gallery"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Bhakti Katha
              </Link>
            </div>
          )}
        </div>
        

        {/* Blog section */}
        <div className="relative">
          <button
            onClick={() => handleDropdownClick('blog')}
            className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Blogs</span>
            {isBlogDropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          {isBlogDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg  w-48 z-20">
              <Link
                to="/blog/reel-content"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Reel Content
              </Link>
              <Link
                to="/blog/posts"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Posts
              </Link>
              <Link
                to="/blog/quotes"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </div>
          )}
        </div>


            {/* Contact Section */}
            <Link
              to="/contact"
              className="py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
            

    </motion.nav>
  );
}

export default Navbar;
