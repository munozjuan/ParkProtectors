import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Protectors.css"; // still used for border radius, layout tweaks

const testimonials = [
  {
    name: "Jordan M.",
    role: "Trail Maintenance Volunteer",
    quote:
      "Volunteering gave me a deeper connection to my community. Seeing families enjoy the trails I helped restore is incredibly rewarding.",
    image: "/images/volunteer1.jpg",
  },
  {
    name: "Kara R.",
    role: "Wildlife Conservation Volunteer",
    quote:
      "I never thought I’d make such great friends while volunteering. We’re like a team — protecting the parks we love together.",
    image: "/images/volunteer2.jpg",
  },
  {
    name: "Paul T.",
    role: "Education & Outreach Volunteer",
    quote:
      "Teaching kids about local wildlife has been amazing. Knowing I’m inspiring the next generation of nature lovers keeps me coming back.",
    image: "/images/volunteer3.jpg",
  },
];

const Protectors = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      const section = document.querySelector(".protectors");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };
  
    // Try immediately after DOM paints
    setTimeout(handleVisibility, 100);
  
    window.addEventListener("scroll", handleVisibility);
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);
  

  return (
    <motion.section
      className="protectors bg-primary-500 text-white py-20 px-4 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Hear From Our Park Protectors
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg text-primary-100 mb-10"
      >
        Volunteers are the heart of our parks. Every trail restored, tree planted,
        and visitor guided happens because of people like you.
      </motion.p>

      <div className="testimonials flex flex-wrap justify-center gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="testimonial-card bg-primary-700 rounded-xl p-6 max-w-xs text-white shadow-lg hover:shadow-primary-300 transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
            whileHover={{ y: -8 }}
          >
            <img src={t.image} alt={t.name} className="volunteer-image mb-4 mx-auto" />
            <blockquote className="italic text-sm mb-4 text-primary-100">"{t.quote}"</blockquote>
            <p className="volunteer-name font-semibold text-primary-200">
              — {t.name}, {t.role}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Protectors;
