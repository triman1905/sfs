import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LoginPage.css';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/summary');
  };

  return (
    <div className="login-page">
      <motion.div
        className="login-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="title"
        >
          Login
        </motion.h1>
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          className="login-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="input-field"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.button
            type="button"
            onClick={handleNextClick}
            className="next-button"
            whileHover={{ scale: 1.1, backgroundColor: "#81c784" }}
            whileTap={{ scale: 0.95 }}
          >
            Next
          </motion.button>
        </motion.form>
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

export default LoginPage;
