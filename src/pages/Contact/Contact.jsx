import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Contact = () => {
  return (
    <div className="contact-page bg-primary-50 text-primary-900 min-h-screen overflow-auto p-4 py-10">
      <motion.h1
  className="text-4xl font-bold text-center text-primary-900 mb-2"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Contact Us
</motion.h1>
<motion.p
  className="text-center italic mb-2 text-primary-700"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.5 }}
>
  Have questions, ideas, or want to get involved? We’d love to hear from you!
</motion.p>
      <p className="text-center max-w-2xl mx-auto mb-8">
        Our parks thrive because of people like you. Whether you're looking to volunteer, donate, or just learn more, we’re here to help.
      </p>

      <div className="contact-container flex flex-col md:flex-row gap-6 items-start justify-center px-4">
        <div className="contact-info bg-primary-200 rounded-2xl p-6 shadow-md w-full md:w-[40%]">
          <h2 className="text-xl font-bold mb-4 text-primary-900">Get in Touch</h2>
          <p className="mb-4 text-sm text-primary-900">
            We’re here to help! Reach out to us and we’ll get back to you as soon as we can.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-primary-900" />
              <p><strong>Head Office:</strong><br />123 Greenway Trail, OH, 43212</p>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-primary-900" />
              <p><strong>Email Us:</strong><br />info@parkprotectors.org</p>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="mt-1 text-primary-900" />
              <p><strong>Call Us:</strong><br />(123) 456-7890</p>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="mt-1 text-primary-900" />
              <p><strong>Hours:</strong><br />Mon – Fri, 9AM – 5PM EST</p>
            </div>

            <div>
              <p className="font-semibold mb-1">Follow Us:</p>
              <div className="flex gap-3 text-xl">
                <FaInstagram className="hover:text-primary-600 cursor-pointer" />
                <FaYoutube className="hover:text-primary-600 cursor-pointer" />
                <FaTwitter className="hover:text-primary-600 cursor-pointer" />
                <FaFacebook className="hover:text-primary-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form bg-white rounded-2xl p-6 shadow-md w-full md:w-[50%]">
          <h2 className="text-xl font-bold mb-4 text-primary-900">Send Us a Message</h2>
          <p className="text-sm mb-4">
            Have a question or suggestion? Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="input-field" />
              <input type="email" placeholder="Email" className="input-field" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Phone" className="input-field" />
              <input type="text" placeholder="Company" className="input-field" />
            </div>
            <input type="text" placeholder="Subject" className="input-field w-full" />
            <textarea placeholder="Message" className="input-field w-full h-32" />
            <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-md w-full transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;