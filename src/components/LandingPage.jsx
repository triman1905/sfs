import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="landing-page">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          SightForSight
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="subtitle"
        >
          Your gateway to the best visual experiences
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#4caf50", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLoginClick}
          className="login-button"
        >
          Login
        </motion.button>
        <motion.div
          className="floating-elements"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Floating elements */}
        </motion.div>
        <motion.div
          className="sparkle-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;
