import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const people = [
  {
    id: 1,
    profilePic: '../src/assets/pic-1.jpeg',
    name: 'Person 1',
    description: 'Description for Person 1',
    whatsapp: '1234567890',
    facebook: 'person1', // Old data, will not be used
  },
  {
    id: 2,
    profilePic: '../src/assets/pic-2.jpeg',
    name: 'Person 2',
    description: 'Description for Person 2',
    whatsapp: '0987654321',
    facebook: 'person2', // Old data, will not be used
  },
  {
    id: 3,
    profilePic: '../src/assets/pic-3.jpeg',
    name: 'Person 3',
    description: 'Description for Person 3',
    whatsapp: '1122334455',
    facebook: 'person3', // Old data, will not be used
  },
  {
    id: 4,
    profilePic: '../src/assets/pic-3.jpeg',
    name: 'Person 4',
    description: 'Description for Person 4',
    whatsapp: '5566778899',
    facebook: 'person4', // Old data, will not be used
  },
  {
    id: 5,
    profilePic: '../src/assets/pic-3.jpeg',
    name: 'Person 5',
    description: 'Description for Person 5',
    whatsapp: '9988776655',
    facebook: 'person5', // Old data, will not be used
  },
  // Add more people here up to 10 entries
];

const Quotes = () => {
  return (
    <div className="mb-16 px-4 sm:px-6 lg:px-8 p-40">
      {people.map((person, index) => (
        <div key={index} className="mb-12 relative">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <motion.h2
          className="text-3xl font-bold mb-8 text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Quotes by {person.name}
        </motion.h2>
            <motion.Link
              to={`/quotes/${person.id}`}
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              View All Quotes
            </motion.Link>
          </div>
          <div className="relative">
            <motion.div
              className="flex overflow-x-auto scrollbar-hidden md:overflow-hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Link
                to={`/quotes/${person.id}`}
                className="flex-shrink-0 w-full md:w-80 lg:w-96 rounded-lg overflow-hidden bg-orange-400 shadow-md mx-2"
              >
                <div className="p-4 flex flex-col md:flex-row items-center">
                  <img
                    src={person.profilePic}
                    alt={person.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
                  />
                  <div className="flex-grow">
                    <p className="text-lg md:text-xl font-semibold">{person.name}</p>
                    <p className="text-gray-600 mt-2 md:mt-4">{person.description}</p>
                  </div>
                </div>
                <div className="flex justify-start p-4">
                  <a href={`https://wa.me/${person.whatsapp}`} className="text-green-500 mr-4">
                    <FaWhatsapp size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/media/set/?set=a.466898168815181&type=3"
                    className="text-blue-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
              </Link>
            </motion.div>
            <motion.button
              onClick={() => document.querySelector('.flex').scrollBy({ left: -250, behavior: 'smooth' })}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaChevronLeft className="text-blue-600" size={24} />
            </motion.button>
            <motion.button
              onClick={() => document.querySelector('.flex').scrollBy({ left: 250, behavior: 'smooth' })}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaChevronRight className="text-blue-600" size={24} />
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
