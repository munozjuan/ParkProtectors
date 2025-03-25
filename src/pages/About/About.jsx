import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <div className="about-page bg-primary-50 text-primary-900 py-10 px-4 overflow-x-hidden">

      {/* Animated Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-primary-900 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get to Know Park Protectors
      </motion.h1>

      {/* Section 1 */}
      <div className="section flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto mb-16">
        <motion.img 
          src="/ParkProtectors/images/left-about.jpg" 
          alt="Mountain landscape" 
          className="side-image rounded-xl shadow-md" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          className="bento-box w-full lg:w-1/2" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-center mb-2">About Park Protectors</h2>
          <p className="italic text-center mb-4">Preserving Nature, Inspiring Change</p>
          <p className="text-sm text-center">
            At Park Protectors, we believe that everyone has a role in safeguarding our parks. From lush forests to winding trails, our mission is to protect and preserve these natural treasures for future generations.
          </p>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="section flex flex-col lg:flex-row-reverse items-center justify-center gap-10 max-w-7xl mx-auto mb-16">
        <motion.img 
          src="/ParkProtectors/images/left-about-2.jpg" 
          alt="People hiking" 
          className="side-image rounded-xl shadow-md" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          className="bento-box w-full lg:w-1/2" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-center mb-2">Our Mission</h2>
          <p className="text-sm">
            Our mission is to safeguard natural spaces by empowering communities to take an active role in conservation. We believe that parks are more than just beautiful landscapes — they’re vital ecosystems that sustain wildlife, provide clean air and water, and offer places for people to connect with nature.
          </p>
          <ul className="text-sm mt-4 list-disc list-inside">
            <li><strong>Conservation & Restoration:</strong> Restore trails, plant native species, and remove invasive plants.</li>
            <li><strong>Community Engagement:</strong> Inspire lifelong advocates through events, programs, and outreach.</li>
            <li><strong>Education & Awareness:</strong> Teach about wildlife, environmental issues, and sustainability.</li>
          </ul>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="section flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
        <motion.img 
          src="/ParkProtectors/images/right-about.jpg" 
          alt="Canyon view" 
          className="side-image rounded-xl shadow-md" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ duration: 0.6 }}
        />
        <motion.div 
          className="bento-box w-full lg:w-1/2" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-2 text-center">Our Story</h2>
          <p className="text-sm">
            Park Protectors began as a grassroots movement of volunteers who wanted to make a difference. What started as a small group cleaning trails has grown into a thriving community committed to environmental stewardship. Today, we collaborate with local parks, conservation groups, and passionate individuals like you to ensure our public lands are safe, accessible, and protected.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
