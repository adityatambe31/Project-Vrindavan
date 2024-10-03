import { motion } from "framer-motion";

const GridQuotesSection = () => {
  const people = [
    {
      id: 1,
      name: "Srila Prabhupada",
      quotes: [
        { id: 1, url: "/src/assets/SrilaPrabhuPada/SP1.jpg", name: "Quote 1" },
        { id: 2, url: "/src/assets/SrilaPrabhuPada/SP2.jpg", name: "Quote 2" },
        { id: 3, url: "/src/assets/SrilaPrabhuPada/SP3.jpg", name: "Quote 3" },
        { id: 3, url: "/src/assets/SrilaPrabhuPada/SP4.jpg", name: "Quote 4" },
      ],
      facebookUrl: "https://www.facebook.com/harekrishnaahilyanagar/photos",
    },
    {
      id: 2,
      name: "Radha Govind Maharaj",
      quotes: [
        {
          id: 1,
          url: "/src/assets/QuotesGridPage/RadhaGovindMah/RG1.jpg",
          name: "Quote 1",
        },
        {
          id: 2,
          url: "/src/assets/QuotesGridPage/RadhaGovindMah/RG2.jpg",
          name: "Quote 2",
        },
        {
          id: 3,
          url: "/src/assets/QuotesGridPage/RadhaGovindMah/RG4.jpg",
          name: "Quote 3",
        },
        {
          id: 4,
          url: "/src/assets/QuotesGridPage/RadhaGovindMah/RG3.jpg",
          name: "Quote 4",
        },
      ],
      facebookUrl: "https://www.facebook.com/harekrishnaahilyanagar/photos",
    },
    {
      id: 3,
      name: "Radha Nath Maharaj",
      quotes: [
        {
          id: 1,
          url: "/src/assets/QuotesGridPage/RadhaNathMahj/RN1.jpg",
          name: "Quote 1",
        },
        {
          id: 2,
          url: "/src/assets/QuotesGridPage/RadhaNathMahj/RN2.jpg",
          name: "Quote 2",
        },
        {
          id: 3,
          url: "/src/assets/QuotesGridPage/RadhaNathMahj/RN3.jpg",
          name: "Quote 3",
        },
        {
          id: 4,
          url: "/src/assets/QuotesGridPage/RadhaNathMahj/RN4.jpg",
          name: "Quote 4",
        },
      ],
      facebookUrl: "https://www.facebook.com/harekrishnaahilyanagar/photos",
    },
    {
      id: 4,
      name: "Nav Yogendra Swami Maharaj",
      quotes: [
        {
          id: 1,
          url: "/src/assets/QuotesGridPage/NavYogendraMaharaj/NY1.jpg",
          name: "Quote 1",
        },
        {
          id: 2,
          url: "/src/assets/QuotesGridPage/NavYogendraMaharaj/NY2.jpg",
          name: "Quote 2",
        },
        {
          id: 3,
          url: "/src/assets/QuotesGridPage/NavYogendraMaharaj/NY3.jpg",
          name: "Quote 3",
        },
        {
          id: 4,
          url: "/src/assets/QuotesGridPage/NavYogendraMaharaj/NY4.jpg",
          name: "Quote 4",
        },
      ],
      facebookUrl: "https://www.facebook.com/harekrishnaahilyanagar/photos",
    },
    {
      id: 7,
      name: "Krishna Prem",
      quotes: [
        {
          id: 1,
          url: "/src/assets/QuotesGridPage/KrishnaPrem/KP1.jpg",
          name: "Quote 1",
        },
        {
          id: 2,
          url: "/src/assets/QuotesGridPage/KrishnaPrem/KP2.jpg",
          name: "Quote 2",
        },
        {
          id: 3,
          url: "/src/assets/QuotesGridPage/KrishnaPrem/KP3.jpg",
          name: "Quote 3",
        },
        {
          id: 4,
          url: "/src/assets/QuotesGridPage/KrishnaPrem/KP4.jpg",
          name: "Quote 3",
        },
      ],
      facebookUrl: "https://www.facebook.com/harekrishnaahilyanagar/photos",
    },
    {
      id: 5,
      name: "Gopal Krishna Maharaj",
      quotes: [
        {
          id: 1,
          url: "/src/assets/QuotesGridPage/GopalKrishnaMaharaj/GK1.jpg",
          name: "Quote 1",
        },
      ],
      facebookUrl: "https://www.facebook.com/bobjohnson",
    },

    {
      id: 6,
      name: "Sant Vani",
      quotes: [
        {
          id: 1,
          url: "/src/assets/QuotesGridPage/SantVani/SV1.jpg",
          name: "Quote 1",
        },
        {
          id: 2,
          url: "/src/assets/QuotesGridPage/SantVani/SV2.jpg",
          name: "Quote 2",
        },
        {
          id: 3,
          url: "/src/assets/QuotesGridPage/SantVani/SV3.jpg",
          name: "Quote 3",
        },
        {
          id: 3,
          url: "/src/assets/QuotesGridPage/SantVani/SV4.jpg",
          name: "Quote 3",
        },
      ],
      facebookUrl: "https://www.facebook.com/harekrishnaahilyanagar/photos",
    },
  ];

  return (
    <motion.div
      className="container mx-auto p-10 pt-6 md:p-6 lg:p-12"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-3xl font-bold mb-4 pt-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        ✨ Handcrafted Quotes by HG Media ✨
      </motion.h1>

      {people.map((person) => (
        <motion.div
          key={person.id}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* New wrapper with flex to align name and button */}
          <div className="flex justify-between items-center mb-4 pt-10">
            <motion.h2
              className="text-2xl font-bold"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {person.name}
            </motion.h2>

            {/* Updated View All button alignment */}
            <motion.a
              href="https://www.facebook.com/harekrishnaahilyanagar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-4 rounded-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              View All
            </motion.a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {person.quotes.map((quote) => (
              <motion.div
                key={quote.id}
                className="bg-white pt-4 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src={quote.url}
                  alt={quote.name}
                  className="w-full h-auto rounded-lg"
                />
                <motion.p
                  className="mt-2 text-center font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {quote.name}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GridQuotesSection;
