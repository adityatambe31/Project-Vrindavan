import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaCheck,
} from "react-icons/fa";
import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start space-y-4 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start mb-4 md:mb-0 text-center md:text-left">
          <img src={logo} alt="Logo" className="w-24 mb-2 invert" />
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              29/2 Sriram Nagar, Near Ambika Tiles, <br />
              Athare Patil School Rd, Ahmednagar, <br /> Maharashtra 414003,
              India
            </p>
            <div className="flex space-x-2 md:ml-4 mt-2 md:mt-0">
              <a
                href="https://www.facebook.com/harekrishnaahilyanagar"
                target="_blank"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="text-gray-400 hover:text-pink-600 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                className="text-gray-400 hover:text-green-500 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.youtube.com/@ISKCONAhilyanagarofficial"
                target="_blank"
                className="text-gray-400 hover:text-red-600 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end mb-4 md:mb-0">
          <div className="w-full flex flex-col md:flex-row justify-center">
            {/* Our Services Section */}
            <div className="flex flex-col px-4 md:px-20 pt-2">
              <h3 className="text-lg font-semibold mb-2 py-4 text-center md:text-left">
                Our Services
              </h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="flex items-center">
                  <FaCheck className="mr-2" />
                  <a
                    href="/kirtan/reels"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Reel Content
                  </a>
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-2" />
                  <a
                    href="/kirtan/FbPosts"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Posts
                  </a>
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-2" />
                  <a
                    href="/kirtan/darshan-gallery"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Darshan Gallery
                  </a>
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-2" />
                  <a
                    href="/kirtan/lectures"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Lectures & Kirtan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center md:items-center pt-10">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center text-gray-400 text-m mb-2 py-2">
            <FaPhoneAlt className="mr-2" />
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <p>+91 7798980980</p>
            </a>
          </div>
          <div className="flex items-center text-gray-400 text-m">
            <FaEnvelope className="mr-2" />
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <p>tmahsh@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
