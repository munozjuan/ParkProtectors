import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-black text-white px-4 py-3 flex justify-between items-center w-full fixed top-0 z-50">
      <Link to="/" className="text-lg font-semibold border border-lime-400 px-3 py-1 hover:bg-lime-500 hover:text-black transition-all duration-200">
        PARK PROTECTORS
      </Link>

      {/* Desktop nav links */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-lime-100 text-lime-700 placeholder-lime-400 border border-lime-400 rounded-md py-1 px-3 text-sm w-40"
          />
          <FiSearch className="absolute right-2 top-1.5 text-lime-600" />
        </li>
      </ul>

      {/* Hamburger Menu for mobile */}
      <div className="md:hidden flex items-center space-x-3">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          <HiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-3 md:hidden z-40">
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/volunteer" onClick={() => setMenuOpen(false)}>Volunteer</Link></li>
          <li><Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
