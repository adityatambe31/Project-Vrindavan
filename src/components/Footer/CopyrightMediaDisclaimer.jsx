import { motion } from "framer-motion";

const CopyrightMediaDisclaimer = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4 pt-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Copyright and Media Disclaimer
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Media Creation and Management
          </h2>
          <p className="text-gray-600 mt-2">
            All media content on this website has been created, managed, and
            edited by Hari Govind Das. We acknowledge that a portion of the
            YouTube content has been sourced from ISKCON Ahilya Nagar, and we
            extend our gratitude and credit to them for their contributions.
            However, the majority of the content on this website has been
            developed by Hari Govind Das and his son. This initiative is not
            intended to replicate or copy any existing content but is a sincere
            effort to serve Shree Lord Krishna through our digital platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Inspiration and Acknowledgments
          </h2>
          <p className="text-gray-600 mt-2">
            Our website has been inspired by the ISKCON Vrindavan website. We
            have drawn inspiration from their design and content but have
            created our own unique platform. We have also given due credit to
            ISKCON Vrindavan, acknowledging their influence on our work.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Original Content and Community Seva
          </h2>
          <p className="text-gray-600 mt-2">
            All videos, quotes, and shlokas created by Hari Govind Das are
            handcrafted and have been shared on Facebook over the years. This
            website aims to consolidate these valuable resources to make them
            accessible to all devotees. The content represents years of
            dedicated service by Hari Govind Das Prabhu.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">
            Terms and Conditions
          </h2>
          <p className="text-gray-600 mt-2">
            We agree to the terms and conditions set forth by ISKCON Vrindavan
            and respect their contributions to the community.
          </p>
          <p className="mt-4 font-bold text-gray-800">
            Hari Bol! Hare Krishna!
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default CopyrightMediaDisclaimer;
