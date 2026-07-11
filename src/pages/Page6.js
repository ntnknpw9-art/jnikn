import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Page6.css';

const Page6 = ({ onHeartClick, showHearts }) => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowFirstText(true);
    const timer1 = setTimeout(() => setShowSecondText(true), 3000);
    const timer2 = setTimeout(() => setShowButton(true), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.04,
        duration: 0.2,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const text1 = 'נועה...\n\nתודה שנכנסת לי לחיים ❤️';
  const text2 = 'אני מחכה לראות איזה פרקים עוד נכתוב ביחד.';

  return (
    <div className="page6">
      {/* Animated background */}
      <motion.div
        className="page6-background"
        animate={showHearts ? { opacity: 0.3 } : { opacity: 0.1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Hearts animation */}
      {showHearts && (
        <>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-heart"
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight,
                opacity: 1,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: i * 0.1,
                ease: 'easeOut',
              }}
            >
              ❤️
            </motion.div>
          ))}
        </>
      )}

      {/* Main content */}
      <div className="page6-content">
        {/* Pulsing heart */}
        <motion.div
          className="center-heart"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          ❤️
        </motion.div>

        {/* First text */}
        {showFirstText && (
          <motion.div
            className="page6-text first-text"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {text1.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariants}>
                {char === '\n' ? <br /> : char}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Second text */}
        {showSecondText && (
          <motion.div
            className="page6-text second-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {text2.split('').map((char, i) => (
              <motion.span key={i} custom={i} variants={textVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>

      {/* Final button */}
      {showButton && (
        <motion.button
          className="final-button"
          onClick={onHeartClick}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          לחצי כאן ❤️
        </motion.button>
      )}

      {/* Success message */}
      {showHearts && (
        <motion.div
          className="success-message"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          אני אוהב אותך ❤️
        </motion.div>
      )}
    </div>
  );
};

export default Page6;
