import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isKathaDropdownOpen, setisKathaDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuotesDropdownOpen, setIsQuotesDropdownOpen] = useState(false);
  const [isKirtanLectureDropdownOpen, setIsKirtanLectureDropdownOpen] =
    useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleDropdownClick = (dropdown) => {
    switch (dropdown) {
      case "media":
        setisKathaDropdownOpen(!isKathaDropdownOpen);
        setIsAboutDropdownOpen(false);
        setIsKirtanLectureDropdownOpen(false);
        setIsQuotesDropdownOpen(false);
        break;
      case "about":
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
        setisKathaDropdownOpen(false);
        setIsKirtanLectureDropdownOpen(false);
        setIsQuotesDropdownOpen(false);
        break;
      case "kirtan&lectures":
        setIsKirtanLectureDropdownOpen(!isKirtanLectureDropdownOpen);
        setisKathaDropdownOpen(false);
        setIsAboutDropdownOpen(false);
        setIsQuotesDropdownOpen(false);
        break;
      case "quotes":
        setIsQuotesDropdownOpen(!isQuotesDropdownOpen);
        setIsKirtanLectureDropdownOpen(false);
        setisKathaDropdownOpen(false);
        setIsAboutDropdownOpen(false);
        break;
      default:
        setisKathaDropdownOpen(false);
        setIsAboutDropdownOpen(false);
        setIsKirtanLectureDropdownOpen(false);
        setIsQuotesDropdownOpen(false);
    }
  };

  const handleLinkClick = () => {
    // Close all dropdowns when a link is clicked
    setisKathaDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setIsKirtanLectureDropdownOpen(false);
    setIsQuotesDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: isNavbarVisible ? 0 : -100,
        opacity: isNavbarVisible ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      style={{
        transform: `translate(${cursorPosition.x / 50}px, ${
          cursorPosition.y / 50
        }px)`,
        zIndex: 1000,
        backgroundColor: isNavbarVisible
          ? "rgba(255, 255, 255, 0.9)"
          : "transparent",
      }}
      className="fixed top-0 inset-x-0 mx-auto flex items-center justify-between py-2 shadow-md w-full max-w-6xl rounded-b-full md:px-12 transition-all duration-500"
    >
      <div className="flex items-center z-10">
        <Link to="/" className="flex-shrink-0" onClick={handleLinkClick}>
          <img
            className="mx-2 px-2 w-20 cursor-pointer "
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Icon */}
      <div className="flex items-center z-10 md:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-800">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Desktop Menu */}
      <div
        className={`flex items-center space-x-6 text-lg z-10 hidden md:flex`}
      >
        <Link
          to="/"
          className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center"
        >
          <span>Home</span>
        </Link>

        {/* Isckon About Dropdown */}
        <div className="relative">
          <button
            onClick={() => handleDropdownClick("about")}
            className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>ISCKON</span>
            {isAboutDropdownOpen ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          {isAboutDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20">
              {/* Dropdown Items */}
              <Link
                to="/about/hero"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                About Hari-Govind-Das
              </Link>
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

        {/* Quotes Section */}
        <div className="relative">
          <button
            onClick={() => handleDropdownClick("quotes")}
            className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Quotes</span>
            {isQuotesDropdownOpen ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          {isQuotesDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg w-64 z-20">
              <Link
                to="/quotes/srila-prabhupad"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsQuotesDropdownOpen(false)} // Close dropdown on click
              >
                Srila Prabhupad
              </Link>
              <Link
                to="/quotes/radha-govind-gosawmi-mah"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsQuotesDropdownOpen(false)} // Close dropdown on click
              >
                Radha Govind Gosawmi Maharaj
              </Link>
              <Link
                to="/quotes/radhanath-mah"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsQuotesDropdownOpen(false)} // Close dropdown on click
              >
                Radhanath Maharaj
              </Link>
              <Link
                to="/quotes/nav-yogendra-sawami-mah"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsQuotesDropdownOpen(false)} // Close dropdown on click
              >
                Nav Yogendra Sawami Maharaj
              </Link>
              <Link
                to="/quotes/gopal-krishna-mah"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsQuotesDropdownOpen(false)} // Close dropdown on click
              >
                Gopal Krishna Maharaj
              </Link>
              <Link
                to="/quotes/krishna-prem-satsang"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsQuotesDropdownOpen(false)} // Close dropdown on click
              >
                Krishna Prem Satsang
              </Link>
              <Link
                to="/quotes/sant-vani"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={() => setIsQuotesDropdownOpen(false)} // Close dropdown on click
              >
                Sant Vani
              </Link>
            </div>
          )}
        </div>

        {/* Bhakti-Kathas Dropdown */}
        <div className="relative">
          <button
            onClick={() => handleDropdownClick("media")}
            className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Bhakti-Kathas</span>
            {isKathaDropdownOpen ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          {isKathaDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20">
              {/* Dropdown Items */}
              <Link
                to="/katha/bhagwat-gita"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Bhagvad Gita
              </Link>
              <Link
                to="/katha/bhagvatam"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Bhagvatam
              </Link>
              <Link
                to="/katha/chaitanya"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Chaitanya Charan Amrud
              </Link>
              <Link
                to="/katha/prabhupad-lila"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Srila-Prabhupad Lila
              </Link>
              <Link
                to="/katha/prabhupad-vani"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Srila-Prabhupad Amrud Vani
              </Link>
            </div>
          )}
        </div>

        {/* Blog section */}
        {/* <div className="relative">
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
 */}
        {/* Kirtan & Lecture section */}

        <div className="relative">
          <button
            onClick={() => handleDropdownClick("kirtan&lectures")}
            className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>Kirtan & Lectures</span>
            {isKirtanLectureDropdownOpen ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
          {isKirtanLectureDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg w-48 z-20">
              <Link
                to="/kirtan/reels"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Reels
              </Link>
              <Link
                to="/kirtan/lectures"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Lectures
              </Link>
              <Link
                to="/kirtan/FbPosts"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Posts
              </Link>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <Link
          to="/contact"
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-full transition-colors duration-300"
          onClick={handleLinkClick}
        >
          Contact
        </Link>
        {/* Darshan Gallery Section  */}
      </div>
    </motion.nav>
  );
};

export default Navbar;
