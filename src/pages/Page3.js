import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Page3.css';

const Page3 = ({ onNext }) => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => setShowButton(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.2,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const title = 'שלושה שבועות';
  const content = `אני יודע...\nאנחנו מכירים רק שלושה שבועות.\n\nאבל יש אנשים שהזמן איתם מרגיש אחרת.\n\nכאילו אתה מכיר אותם הרבה יותר.`;

  return (
    <div className="page3">
      {/* Polaroid-style layout */}
      <motion.div
        className="page3-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={showContent ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Clock illustration */}
        <motion.div
          className="clock-container"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <svg className="clock" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#c4a77d" strokeWidth="2" />
            <circle cx="50" cy="50" r="3" fill="#c4a77d" />
            <line x1="50" y1="50" x2="50" y2="25" stroke="#c4a77d" strokeWidth="2" />
            <line x1="50" y1="50" x2="70" y2="50" stroke="#c4a77d" strokeWidth="2" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.div
          className="page3-title"
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {title.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={textVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          className="page3-text"
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {content.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={textVariants}>
              {char === '\n' ? <br /> : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {showButton && (
        <motion.button
          className="next-button page3-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          המשיכי 💕
        </motion.button>
      )}
    </div>
  );
};

export default Page3;
