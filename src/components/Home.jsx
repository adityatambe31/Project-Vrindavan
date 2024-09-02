import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

// Image URLs for the slider and background
const images = [
  'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/67496136_2266851236731606_3034995037210411008_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=pXngMZRN2JsQ7kNvgGEd1MN&_nc_ht=scontent-ord5-1.xx&_nc_gid=AXF5WA5raZ45E4B7_h_4gCU&oh=00_AYA79do1n7xTYrOtLc5sf8ovm2w0ZK_MnD5WVA1ZVtA6eg&oe=66F86266',
  'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/67272415_2270638099686253_5135201484807340032_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=v8oVKnz0Hw0Q7kNvgHdevmS&_nc_ht=scontent-ord5-2.xx&oh=00_AYD8v8TRJTzJHMhVicFx86_peCbOi26qkGdEK4L8XYglZA&oe=66F88091',
  'https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/33788802_1646381012111968_5595745785665814528_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_ohc=GACvL0j9eY8Q7kNvgGV-RGo&_nc_ht=scontent-ord5-1.xx&oh=00_AYDn-e2EUT6g--PoQ1jaOk8KtvJnHYdz20x1IE8oo6-kdQ&oe=66F86946',
];
const parallaxImage = '/src/assets/img-5.png'; // Replace with your parallax image




const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const exploreRef = useRef(null);
  const kathaVaniRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
};

  return (
    
    <div className="bg-gray-100 min-h-screen pt-20 px-4 pb-16" >
        {/* Image Banner Section */}
      <div className="relative w-full max-w-6xl mx-auto mb-16 pt-20">
        <div className="relative overflow-hidden rounded-lg h-64 md:h-80 lg:h-96">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto object-fit: cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
          >
            <FaChevronLeft className="text-blue-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
          >
            <FaChevronRight className="text-blue-600" />
          </button>
          <div className="flex justify-center mt-4 space-x-2 ">
            {images.map((_, index) => (
              <motion.span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Add padding between sections */}
  <div className="py-8"></div>
      {/* Parallax Background - Welcome Section */}
<motion.div
  className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded"
  style={{ backgroundImage: `url(${parallaxImage})` }}
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="relative z-10 flex items-center justify-center h-full ">
    <a href="/" className='no-underline'><h1 className="text-white text-4xl font-bold ">WELCOME TO HARIGOVINDDAS.COM</h1></a>
    
  </div>
</motion.div>


{/* Parallax Background - About Hari Govind Section */}
<motion.div
  className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded-lg overflow-hidden"
  style={{ backgroundImage: `url(${parallaxImage})` }}
  initial="hidden"
  animate="visible"
  variants={slideIn}
>
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="max-w-6xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-4">About Hari Govind Das</h2>
      <p className="text-lg mb-6">
        In devotional service there is no frustration, even if we perform only a small amount, it will grow. devotional service is never lost. -- Hari Govind.</p>
      <motion.button
      type="button"
      className="text-white bg-text-blue-300 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      whileHover={{
        scale: [1, 1.1, 1],
        transition: { duration: 0.6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }
      }}
    >
      <Link to="/about/hero" className=" no-underline">Learn more </Link>
    </motion.button>
    </div>
  </div>
</motion.div>

{/* Parallax Background - Welcome Message */}
<motion.div
  className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded-lg overflow-hidden"
  style={{ backgroundImage: `url(${parallaxImage})` }}
  initial="hidden"
  animate="visible"
  variants={fadeIn}
>
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="max-w-6xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Welcome to Our Spiritual Community</h2>
      <p className="text-lg mb-6">
        We are delighted to have you visit our site. Join us on this spiritual journey and discover the profound teachings of the Bhagavad Gita and Srimad Bhagavatam.
      </p>
    </div>
  </div>
</motion.div>

{/* Parallax Background - Subscribe Section */}
<motion.div
  className="relative w-full h-96 bg-fixed bg-center bg-cover mb-16 rounded-lg overflow-hidden"
  style={{ backgroundImage: `url(${parallaxImage})` }}
  initial="hidden"
  animate="visible"
  variants={slideIn}
>
  <div className="absolute inset-0 bg-black opacity-30"></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="max-w-6xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Subscribe for Latest Updates</h2>
      <p className="text-lg mb-6">
        Stay connected with us for the latest updates, events, and spiritual insights.
      </p>
      <div className="flex justify-center space-x-6">
        <Link to="https://facebook.com" target="_blank">
          <FaFacebook className="text-blue-300 text-3xl" />
        </Link>
        <Link to="https://whatsapp.com" target="_blank">
          <FaWhatsapp className="text-green-300 text-3xl" />
        </Link>
        <Link to="https://instagram.com" target="_blank">
          <FaInstagram className="text-pink-300 text-3xl" />
        </Link>
      </div>
    </div>
  </div>
</motion.div>

     
        {/* Explore Section */}
        <div className="mb-16 pt-20">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Quotes</h2>
            <Link
              to="/quotes/srila-prabhupad"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden" ref={exploreRef}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Explore+${item}`}
                      alt={`Explore ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-lg font-semibold">Service {item}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => exploreRef.current.scrollBy({ left: -200, behavior: 'smooth' })}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
              >
              <FaChevronLeft className="text-blue-600" />
            </button>
            <button
              onClick={() => exploreRef.current.scrollBy({ left: 200, behavior: 'smooth' })}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
              >
              <FaChevronRight className="text-blue-600" />
            </button>
          </div>
        </div>

        {/* Kirtan &Lectures Reel Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Kirtan & Lectures</h2>
            <Link
              to="/kirtan/lectures"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden" ref={kathaVaniRef}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Service+${item}`}
                      alt={`Service ${item}`}
                      className="w-full h-48 object-cover"
                    />
                                           <div className="p-4">
                         <p className="text-lg font-semibold">Service {item}</p>
                       </div>
                     </Link>
                   </motion.div>
                 ))}
               </div>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: -200, behavior: 'smooth' })}
                 className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronLeft className="text-blue-600" />
               </button>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: 200, behavior: 'smooth' })}
                 className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronRight className="text-blue-600" />
               </button>
             </div>
           </div>

        {/* Blog Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">Blog</h2>
            <Link
              to="/kirtan/lectures"
              className="bg-blue-600 text-white py-2 px-4 rounded-full inline-block"
            >
              View All
            </Link>
          </div>
          <div className="relative">
            <div className="flex overflow-x-scroll scrollbar-hidden md:overflow-hidden" ref={kathaVaniRef}>
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80 rounded-lg overflow-hidden bg-white shadow-md mx-2"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Link to="/services">
                    <img
                      src={`https://via.placeholder.com/150?text=Service+${item}`}
                      alt={`Service ${item}`}
                      className="w-full h-48 object-cover"
                    />
                                           <div className="p-4">
                         <p className="text-lg font-semibold">Service {item}</p>
                       </div>
                     </Link>
                   </motion.div>
                 ))}
               </div>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: -200, behavior: 'smooth' })}
                 className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronLeft className="text-blue-600" />
               </button>
               <button
                 onClick={() => kathaVaniRef.current.scrollBy({ left: 200, behavior: 'smooth' })}
                 className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
               >
                 <FaChevronRight className="text-blue-600" />
               </button>
             </div>
           </div>

           
          

               {/* Blogs Section */}
       
             </div>
             </div>
     );
   };

   export default Home;

