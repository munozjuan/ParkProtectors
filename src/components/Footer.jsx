import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-700 text-secondary-100 px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
        {/* Left: Social Icons */}
        <div className="flex space-x-6 text-accent-400 text-2xl justify-center sm:justify-start">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaFacebook /></a>
        </div>

        {/* Center: Subscribe */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 text-secondary-100">
            Keep in Touch
          </h3>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black"
            />
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right: Navigation Links */}
        <div className="text-sm text-secondary-200 text-center sm:text-right space-x-4 mt-6 sm:mt-0">
          <Link to="/about" className="hover:text-white font-semibold">
            About Us
          </Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-white font-semibold">
            Contact
          </Link>
          <span>|</span>
          <a href="#" className="hover:text-white font-semibold">
            FAQ
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-secondary-300 mt-6">
        © 2025 Park Protectors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
