import { useState, useEffect } from "react";
import "./Hero.css";
import { motion } from 'framer-motion';


const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  console.log("Hero component is rendering");

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const newIndex = (prevImage + 1) % images.length;
        console.log("Switching to image index:", newIndex);
        return newIndex;
      });
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
              onClick={() => window.location.href = "/donate"}
              className="bg-primary-600/80 hover:bg-primary-600/100 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Donate Now
            </button>
            <button
              onClick={() => window.location.href = "/volunteer"}
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
