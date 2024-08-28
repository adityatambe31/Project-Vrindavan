import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-10 flex-grow">
        <div className="text-3xl font-bold mb-10 mt-40 text-center">
          <h1>Contact Us</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-center">Contact Form</h2>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white w-full px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </form>
          </div>

          {/* Middle Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-6 text-center">Our Address</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Temple Address</h3>
                  <p className="text-gray-700">3, Kadambari Nagari Phase 4, Bhistabag, Ahmednagar, Maharashtra 414003, India</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Guest House</h3>
                  <p className="text-gray-700">456 Guest House Road, City, Country</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Person 1</h3>
                  <p className="text-gray-700">Hari Govind Das Prabhu</p>
                  <div className="flex items-center p-2 rounded-full ">
                    <FaPhoneAlt className="text-gray-700 mr-2 hover:bg-blue-100 transition duration-300" />
                    <a href="tel:+917798980980" className="text-blue-600 hover:no-underline">+91 7798980980</a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Person 2</h3>
                  <p className="text-gray-700">Dev Mangal Prabhu</p>
                  <div className="flex items-center">
                    <FaPhoneAlt className="text-gray-700 mr-2" />
                    <a href="tel:+0987654321" className="text-blue-600 hover:no-underline">+098 765 4321</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4 text-center">Reach Us</h2>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full hover:bg-blue-100 transition duration-300">
                  <FaEnvelope className="text-gray-700" />
                </div>
                <a href="mailto:info@example.com" className="ml-4 text-blue-600 hover:underline">tmahsh@gmail.com</a>
              </div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full hover:bg-blue-100 transition duration-300">
                  <FaPhoneAlt className="text-gray-700" />
                </div>
                <p className="ml-4 text-gray-700">Mon-Fri: 9 AM - 6 PM</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full hover:bg-blue-100 transition duration-300">
                  <FaMapMarkerAlt className="text-gray-700" />
                </div>
                <a href="https://www.google.com/maps/place/ISKCON+TEMPLE+AHMEDNAGAR/@19.1339393,74.7388064,17z/data=!4m6!3m5!1s0x3bdcba8b826480cb:0xfafaa255bc7f4684!8m2!3d19.1339393!4d74.7388064!16s%2Fg%2F11b6324_37?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-600 hover:underline">Navigate Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
