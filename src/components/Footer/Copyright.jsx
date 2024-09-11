import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="bg-gray-800 text-gray-400">
      <div className="container mx-auto text-center justify-center">
        <p>
          {" | "}
          <Link
            to="/copyright-media-disclaimer"
            target="_blank"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            ©2024 HG Media All rights Reserved.
          </Link>
          {" | "}

          <Link
            to="/terms-and-conditions"
            target="_blank"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Terms and Conditions
          </Link>
          {"  | "}
        </p>
      </div>
    </div>
  );
};

export default Copyright;
