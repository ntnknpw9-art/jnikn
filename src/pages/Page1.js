import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Page1.css';

const Page1 = ({ onNext }) => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSecondLine(true), 3000);
    const timer2 = setTimeout(() => setShowThirdLine(true), 6000);
    const timer3 = setTimeout(() => setShowButton(true), 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const text1 = 'לנועה';
  const text2 = 'יש אנשים שפוגשים במקרה...';
  const text3 = 'ומגלים שהם הגיעו בדיוק בזמן.';

  return (
    <div className="page1">
      {/* Animated stars and background */}
      <div className="stars">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Dust particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="page1-content">
        <motion.div
          className="handwriting-title"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {text1.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={textVariants}>
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="heart-icon"
          >
            ❤️
          </motion.span>
        </motion.div>

        {showSecondLine && (
          <motion.div
            className="handwriting-text secondary"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {text2.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}

        {showThirdLine && (
          <motion.div
            className="handwriting-text tertiary"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {text3.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>

      {showButton && (
        <motion.button
          className="next-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          פתחי את הסיפור שלנו ✨
        </motion.button>
      )}
    </div>
  );
};

export default Page1;
