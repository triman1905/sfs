import { useState } from 'react';
import { motion } from 'framer-motion';
import './SummaryPage.css';

const SummaryPage = () => {
  const [url, setUrl] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async () => {
    // Simulate summary generation (for demonstration purposes)
    setSummary(`Summary of the website at ${url}`);
  };

  return (
    <div className="summary-page">
      <motion.div
        className="summary-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Generate Summary
        </motion.h1>
        <motion.input
          type="url"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="url-input"
          whileFocus={{ scale: 1.05, boxShadow: "0 0 8px rgba(0, 200, 83, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.button
          onClick={handleSubmit}
          className="submit-button"
          whileHover={{ scale: 1.1, backgroundColor: "#00796b" }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
        {summary && (
          <motion.p
            className="summary-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {summary}
          </motion.p>
        )}
      </motion.div>
      <motion.div
        className="sparkles"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Animated sparkles */}
      </motion.div>
    </div>
  );
};

export default SummaryPage;
