import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Page2.css';

const Page2 = ({ onNext }) => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => setShowButton(true), 5000);
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

  const title = 'איך הכל התחיל...';
  const content = `זה התחיל במקום הכי רגיל בעולם...\nבעבודה.\n\nלא חיפשתי משהו מיוחד,\nלא ידעתי שאני עומד להכיר מישהי\nשתיכנס לי כל כך מהר ללב.\n\nואז הכרתי אותך, נועה.`;

  return (
    <div className="page2">
      {/* Paper texture background */}
      <div className="paper-texture"></div>

      <motion.div
        className="page2-content"
        initial={{ opacity: 0, y: 20 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.div
          className="page2-title"
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

        {/* Content with typewriter effect */}
        <motion.div
          className="page2-text"
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

        {/* Decorative elements */}
        <motion.div
          className="decorative-line"
          initial={{ scaleX: 0 }}
          animate={showContent ? { scaleX: 1 } : {}}
          transition={{ delay: 3, duration: 0.8 }}
        ></motion.div>
      </motion.div>

      {showButton && (
        <motion.button
          className="next-button page2-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          המשיכי ➜
        </motion.button>
      )}
    </div>
  );
};

export default Page2;
