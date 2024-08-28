import { FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import bookPic from '../assets/bhagwat.png';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const BhagwatGita = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col lg:flex-row items-center lg:items-start bg-cover bg-center rounded-lg shadow-lg pt-40"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row items-center lg:items-start bg-cover bg-center rounded-lg shadow-lg"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/brown-papyrus-paper_53876-14519.jpg?w=1380&t=st=1724798234~exp=1724798834~hmac=7ef60d426971f39a5de5e94641c27701ec535f090699005b6f23198253c64b8d')" }}
      >
        {/* Text Content */}
        <motion.div
          variants={container(0.3)}
          initial="hidden"
          animate="visible"
          className="flex-1 lg:mr-8 mb-8 lg:mb-0"
        >
          <div className='p-10'>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold mb-4 text-center text-[#8B4513]"
            >
              Bhagvad Gita
            </motion.h1>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-lg mb-6 text-[#A0522D]"
            >
              The Bhagavad Gita is a 700-verse Hindu scripture that is part of the Indian epic Mahabharata. It is a dialogue between Prince Arjuna and the god Krishna, who serves as his charioteer. The Gita addresses the moral and philosophical dilemmas faced by Arjuna on the battlefield and offers profound insights into duty, righteousness, and the nature of existence.
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex space-x-4"
            >
              <a 
                href="https://whatsapp.com" 
                target="_blank" 
                className="text-gray-700 hover:text-green-500 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} />
              </a>
              <a 
                href="https://www.facebook.com/harekrishnaahilyanagar" 
                target="_blank" 
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-1 rounded-full border-2 border-transparent hover:border-gray-400" 
                rel="noopener noreferrer"
              >
                <FaFacebookF size={30} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Book Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 flex justify-center items-center p-10"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-3"> {/* Added black border */}
            <img
              src={bookPic}
              alt="Bhagvad Gita"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default BhagwatGita;
