import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Page4.css';

const Page4 = ({ onNext }) => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => setShowButton(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.02,
        duration: 0.15,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letter = `נועה ❤️

רציתי להכין לך משהו קטן,
משהו שהוא רק שלך.

אני אוהב את השיחות שלנו,
את הצחוקים,
את הרגעים הקטנים שאנחנו יוצרים.

אני אוהב את איך שאת גורמת לי להרגיש,
ואני שמח שהכרתי אותך.

אני לא יודע מה העתיד יביא,
אבל אני יודע שאני רוצה להמשיך להכיר אותך,
לצבור איתך עוד רגעים,
ולראות לאן הסיפור שלנו יגיע.

שלך, נתן ❤️`;

  return (
    <div className="page4">
      <motion.div
        className="letter-container"
        initial={{ opacity: 0, rotateY: -20 }}
        animate={showContent ? { opacity: 1, rotateY: 0 } : {}}
        transition={{ duration: 1 }}
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="letter"
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {letter.split('').map((char, i) => (
            <motion.span key={i} custom={i} variants={textVariants}>
              {char === '\n' ? <br /> : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="letter-seal"
        initial={{ opacity: 0, scale: 0 }}
        animate={showContent ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 5, duration: 0.5 }}
      >
        ✦
      </motion.div>

      {showButton && (
        <motion.button
          className="next-button page4-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          תמונות ✨
        </motion.button>
      )}
    </div>
  );
};

export default Page4;
