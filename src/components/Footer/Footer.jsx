import { motion } from "framer-motion";
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-600 text-white py-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center mb-2 md:mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            className="h-auto md:h-10 invert"
          />
        </motion.div>

        {/* Address */}
        <motion.div
          className="flex items-center mb-2 md:mb-0 text-xs md:text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaHome className="text-base md:text-lg mr-1 md:mr-2" />
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <span>
              29/2 Athare Patil School Rd, Ahmednagar, Maharashtra, 414001
            </span>
          </Link>
        </motion.div>

        {/* Contact Information */}
        <div className="flex flex-row items-center mb-2 md:mb-0 space-x-4">
          <motion.div
            className="flex items-center text-xs md:text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaEnvelope className="text-base md:text-lg mr-1 md:mr-2" />
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <span>tmahsh@gmail.com</span>
            </Link>
          </motion.div>
          <motion.div
            className="flex items-center text-xs md:text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaPhone className="text-base md:text-lg mr-1 md:mr-2" />
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <span>+91 7798-980-980</span>
            </Link>
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          className="flex space-x-2 text-xs md:text-sm mb-2 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="https://instagram.com" target="_blank">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaInstagram className="text-pink-300 text-2xl md:text-3xl" />
            </motion.div>
          </Link>
          <Link to="https://whatsapp.com" target="_blank">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaWhatsapp className="text-green-300 text-2xl md:text-3xl" />
            </motion.div>
          </Link>
          <Link
            to="https://www.facebook.com/harekrishnaahilyanagar"
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaFacebook className="text-blue-300 text-2xl md:text-3xl" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="bg-amber-500 text-gray-400 py-1 mt-2 rounded-b-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto text-center flex justify-center space-x-4">
          <p className="text-xs">
            <Link
              to="/copyright-media-disclaimer"
              target="_blank"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              ©2024 HG Media All rights Reserved.
            </Link>
          </p>
          <p className="text-xs">
            <Link
              to="/terms-and-conditions"
              target="_blank"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Terms and Conditions
            </Link>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
