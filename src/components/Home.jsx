import React from "react";
import Hero from "./Hero";
import Protectors from "./Protectors";
import UpcomingOpportunities from "./UpcomingOpportunities";
import ParkMap from "./ParkMap";
import ErrorBoundary from "./ErrorBoundary";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Protectors />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <UpcomingOpportunities />
      </motion.div>
      <ErrorBoundary>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ParkMap />
        </motion.div>
      </ErrorBoundary>
    </motion.div>
  );
};

export default Home;
