import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Contact from "./pages/Contact/Contact";
import Volunteer from "./pages/Volunteer/Volunteer";
import Footer from "./components/Footer";
import Home from "./components/Home"; // ✅ Home route wrapper
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="page-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ This now wraps Hero + Protectors */}
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
