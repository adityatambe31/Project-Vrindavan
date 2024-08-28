import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Blog = () => {
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsBlogDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleDropdownClick}
        className="px-4 py-2 text-gray-800 rounded-full hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
      >
        Blog
        {isBlogDropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </button>
      {isBlogDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20">
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
            Blog-Posts
          </Link>
          <Link
            to="/blog/quotes"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Quotes
          </Link>
        </div>
      )}
    </div>
  );
};

export default Blog;
