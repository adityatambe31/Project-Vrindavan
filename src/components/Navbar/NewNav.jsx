import { useState } from "react";
import { motion } from "framer-motion";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close dropdowns when toggling the mobile menu
  };

  return (
    <motion.nav
      className="text-grey rounded-full bg-stone-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 bg-stone-400 text-gray-900 rounded-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
          >
            <img
              className="mx-2 px-2 w-20 cursor-pointer "
              src={logo}
              alt="Logo"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {["Home", "Blogs", "About", "Contact"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="px-4 py-2 bg-black-700 text-black rounded-full hover:bg-grey-200 hover:text-grey-200"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.a>
            ))}

            {/* About Section for Hari Govind and 2 other */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
              >
                <span>About</span>
              </button>

              {openDropdown === "about" && (
                <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 md:w-56 lg:w-64 z-20">
                  {/* Dropdown Items */}
                  <Link
                    to="/about/hero"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                    onClick={() => toggleDropdown("about")}
                  >
                    Hari-Govind-Das
                  </Link>
                  <Link
                    to="/about/about-us"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                    onClick={() => toggleDropdown("about")}
                  >
                    ISCKON
                  </Link>
                  <Link
                    to="/about/founder"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                    onClick={() => toggleDropdown("about")}
                  >
                    Founder
                  </Link>
                  <Link
                    to="/about/history"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                    onClick={() => toggleDropdown("about")}
                  >
                    History
                  </Link>
                  <Link
                    to="/about/why-krishna-consciousness"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                    onClick={() => toggleDropdown("about")}
                  >
                    Why Krishna Consciousness?
                  </Link>
                  <Link
                    to="/about/philosophy"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base lg:text-lg"
                    onClick={() => toggleDropdown("about")}
                  >
                    Philosophy
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown for Quotes */}
            <div className="relative">
              <motion.button
                className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-white-400 hover:text-black"
                onClick={() => toggleDropdown("quotes")}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Quotes
              </motion.button>
              {openDropdown === "quotes" && (
                <motion.div
                  className="absolute bg-white-700 rounded-lg mt-2 py-2 w-48 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded-full"
                  >
                    Inspirational
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded-full"
                  >
                    Spiritual
                  </a>
                </motion.div>
              )}
            </div>

            {/* Dropdown for Bhakti-Katha */}
            <div className="relative">
              <motion.button
                className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-white-400 hover:text-black"
                onClick={() => toggleDropdown("bhaktiKatha")}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Bhakti-Katha
              </motion.button>
              {openDropdown === "bhaktiKatha" && (
                <motion.div
                  className="absolute bg-white-700 rounded-lg mt-2 py-2 w-48 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded-full"
                  >
                    Teachings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded-full"
                  >
                    Stories
                  </a>
                </motion.div>
              )}
            </div>

            {/* Dropdown for Kirtan & Lectures */}
            <div className="relative">
              <motion.button
                className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-white-400 hover:text-black"
                onClick={() => toggleDropdown("kirtanLectures")}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Kirtan & Lectures
              </motion.button>
              {openDropdown === "kirtanLectures" && (
                <motion.div
                  className="absolute bg-white-700 rounded-lg mt-2 py-2 w-48 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded-full"
                  >
                    Kirtans
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-300 rounded-full"
                  >
                    Lectures
                  </a>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "Blogs", "About", "Contact"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="block px-3 py-2 bg-gray-700 rounded-full text-white hover:bg-yellow-400 hover:text-black"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.a>
            ))}

            {/* Mobile Dropdowns */}
            <div>
              <motion.button
                className="block px-3 py-2 bg-gray-700 rounded-full text-white hover:bg-yellow-400 hover:text-black w-full text-left"
                onClick={() => toggleDropdown("quotes")}
              >
                Quotes
              </motion.button>
              {openDropdown === "quotes" && (
                <motion.div
                  className="bg-gray-700 rounded-lg mt-2 py-2 w-full text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-400">
                    Inspirational
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-400">
                    Spiritual
                  </a>
                </motion.div>
              )}
            </div>

            <div>
              <motion.button
                className="block px-3 py-2 bg-gray-700 rounded-full text-white hover:bg-yellow-400 hover:text-black w-full text-left"
                onClick={() => toggleDropdown("bhaktiKatha")}
              >
                Bhakti-Katha
              </motion.button>
              {openDropdown === "bhaktiKatha" && (
                <motion.div
                  className="bg-gray-700 rounded-lg mt-2 py-2 w-full text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-400">
                    Teachings
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-400">
                    Stories
                  </a>
                </motion.div>
              )}
            </div>

            <div>
              <motion.button
                className="block px-3 py-2 bg-gray-700 rounded-full text-white hover:bg-yellow-400 hover:text-black w-full text-left"
                onClick={() => toggleDropdown("kirtanLectures")}
              >
                Kirtan & Lectures
              </motion.button>
              {openDropdown === "kirtanLectures" && (
                <motion.div
                  className="bg-gray-700 rounded-lg mt-2 py-2 w-full text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-400">
                    Kirtans
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-yellow-400">
                    Lectures
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
