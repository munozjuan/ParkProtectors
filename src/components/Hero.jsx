import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 💡 Add this
import { motion } from 'framer-motion';
import "./Hero.css";

const images = [
  "/ParkProtectors/images/hero1.jpg",
  "/ParkProtectors/images/hero2.jpg",
  "/ParkProtectors/images/hero3.jpg",
];

export default function Hero() {
  const navigate = useNavigate(); // 💡 Hook for internal routing
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero w-full h-screen relative bg-black overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index}`}
          className={`hero-image ${index === currentImage ? "active" : ""}`}
        />
      ))}
      <div className="hero-overlay">
        <div className="hero-content">
          <motion.h1
            className="text-5xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore, Support, and Protect America's National Parks
          </motion.h1>

          <motion.p
            className="text-lg text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Join us in preserving the beauty of national parks for future generations.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              onClick={() => navigate("/ParkProtectors/donate")}
              className="bg-primary-600/80 hover:bg-primary-600/100 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Donate Now
            </button>
            <button
              onClick={() => navigate("/volunteer")}
              className="bg-primary-600/80 hover:bg-primary-600/100 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
