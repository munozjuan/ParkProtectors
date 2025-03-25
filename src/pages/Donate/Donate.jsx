import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Donate.css';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
  const [frequency, setFrequency] = useState('one-time');
  const [amount, setAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  return (
    <div className="donate-page bg-primary-50 text-primary-900 py-10 px-4 overflow-auto" style={{
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?forest,nature)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
      <motion.h1
        className="text-4xl font-bold text-center text-primary-900 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Support Our Parks
      </motion.h1>

      <p className="text-center text-lg text-primary-800 max-w-2xl mx-auto mb-10">
        Protect Nature for Future Generations — Your donation helps protect our parks, preserve wildlife habitats,
        and maintain safe, accessible trails for everyone to enjoy. Together, we can make a lasting impact.
      </p>

      <form onSubmit={handleSubmit} className="bento-container flex flex-col lg:flex-row gap-6 justify-center items-start">
        <motion.div className="bento-box w-full lg:w-1/3"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-xl font-semibold mb-4">Donation Details</h2>
          <div className="flex gap-4 mb-4 justify-center">
            {['one-time', 'monthly'].map((type) => (
              <button key={type} type="button" className={`donate-btn ${frequency === type ? 'active' : ''}`} onClick={() => setFrequency(type)}>
                {type === 'one-time' ? 'One-Time' : 'Monthly'}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[25, 50, 100, 250].map((val) => (
              <button type="button" key={val} className={`donate-btn ${amount === val ? 'active' : ''}`} onClick={() => handleAmountClick(val)}>
                ${val}
              </button>
            ))}
            <button type="button" className={`donate-btn ${amount === 'other' ? 'active' : ''}`} onClick={() => handleAmountClick('other')}>
              Other
            </button>
          </div>
          {amount === 'other' && (
            <input type="number" placeholder="Enter custom amount" className="input-field mt-4" value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} />
          )}
        </motion.div>

        <motion.div className="bento-box w-full lg:w-1/3"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
          <input type="text" placeholder="Cardholder Name" className="input-field" />
          <input type="text" placeholder="Card Number" className="input-field" />
          <div className="flex gap-4">
            <input type="text" placeholder="Expiry Date (MM/YY)" className="input-field w-full" />
            <input type="text" placeholder="CVV" className="input-field w-full" />
          </div>
        </motion.div>

        <motion.div className="bento-box w-full lg:w-1/3"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-xl font-semibold mb-4">Your Information</h2>
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="email" placeholder="Email Address" className="input-field" />
          <input type="text" placeholder="Street Address" className="input-field" />
          <input type="tel" placeholder="Phone Number" className="input-field" />
        </motion.div>
      </form>

      <motion.div className="text-center mt-8"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="submit-button px-10 py-3 text-lg" type="submit" onClick={handleSubmit}>
          Donate
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div className="popup-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="popup-content"
              initial={{ scale: 0.8, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h2 className="text-2xl font-bold mb-4">Thank You for Your Donation!</h2>
              <p className="mb-4">Your generous support helps us protect our national parks!</p>
              <button className="close-button" onClick={() => setShowPopup(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Donate Section */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Why Donate?</h2>
        <p className="text-lg mb-10">Your contribution directly supports:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { src: '/images/trail.jpg', title: 'Trail Maintenance', desc: 'Keeping paths clear, safe, and enjoyable for visitors' },
            { src: '/images/wildlife.jpg', title: 'Wildlife Protection', desc: 'Restoring natural habitats and caring for endangered species' },
            { src: '/images/education.jpg', title: 'Educational Programs', desc: 'Inspiring future generations to care for our environment' },
            { src: '/images/volunteer.jpg', title: 'Park Staff & Volunteers', desc: 'Providing tools, training, and resources to make a difference' },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <img src={item.src} alt={item.title} className="rounded-lg mx-auto h-28 w-full object-cover mb-3" />
              <h4 className="font-bold">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-100 p-6 rounded-lg max-w-3xl mx-auto mb-20">
          <h3 className="text-xl font-semibold mb-4">Your Impact</h3>
          <ul className="text-left text-sm space-y-2">
            <li><strong>$25</strong> – Provides materials for trail markers and signs</li>
            <li><strong>$50</strong> – Supports native tree planting efforts</li>
            <li><strong>$100</strong> – Funds park guide training and educational resources</li>
            <li><strong>$250+</strong> – Directly supports major restoration projects</li>
          </ul>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="bg-white rounded-lg p-6 max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-2">Other Ways to Help</h2>
        <p className="text-center mb-8">If you can’t give financially, consider:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { src: '/images/volunteer-group.jpg', title: 'Volunteering your time', action: 'Volunteer Now', path: '/volunteer' },
            { src: '/images/lake.jpg', title: 'Sharing our mission on social media', icons: true },
            { src: '/images/fundraiser.jpg', title: 'Attending Fundraising Events', action: 'Upcoming Events', path: '/volunteer' },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-primary-50 shadow p-4">
              <img src={item.src} className="rounded-md mb-3 h-36 w-full object-cover" />
              <p className="font-semibold">{item.title}</p>
              {item.action && <button className="donate-btn mt-2" onClick={() => navigate(item.path)}>{item.action}</button>}
              {item.icons && (
                <div className="flex justify-center gap-4 mt-3 text-xl">
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-facebook"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Donate;