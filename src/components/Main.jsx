import { useState } from 'react';
import Navbar from './Navbar';
import Contact from './Contact'; // Import the Contact component

const Main = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <Navbar setShowContact={setShowContact} />
      {showContact ? (
        <Contact setShowContact={setShowContact} />
      ) : (
        <div>
          {/* Main content here */}
          <h1>Welcome to Our Website</h1>
        </div>
      )}
    </div>
  );
};

export default Main;
