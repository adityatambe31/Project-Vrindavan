import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Content Credit and Usage
          </h2>
          <p className="text-gray-600 mt-2">
            All content on this website, including but not limited to text,
            images, videos, and audio clips, is either created, managed, and
            edited by Hari Govind Das or sourced from ISKCON Ahilya Nagar and
            ISKCON Vrindavan. If any content from this website is used
            elsewhere, it is required to provide appropriate credit to the
            original sources. Credit should be given to one or more of the
            following:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <a
                href="https://www.youtube.com/@ISKCONAhilyanagarofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-500 hover:underline"
              >
                ISKCON Ahilya Nagar
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/harigovinddas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-500 hover:underline"
              >
                Hari Govind Das Prabhu
              </a>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            If proper credit is not provided, or if there is any misuse of the
            content, we reserve the right to take serious action. This includes
            requesting that the content be either credited appropriately or
            removed entirely.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700">
            Compliance and Contact
          </h2>
          <p className="text-gray-600 mt-2">
            We expect full compliance with these terms to ensure that the
            content is used respectfully and ethically. If you have any
            questions or concerns regarding content usage or credits, please
            contact us immediately.
          </p>
          <p className="mt-4 font-bold text-gray-800">
            Hari Bol! Hare Krishna!
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
