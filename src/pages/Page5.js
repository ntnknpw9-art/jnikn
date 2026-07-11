import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Page5.css';

const Page5 = ({ onNext }) => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [expandedPhoto, setExpandedPhoto] = useState(null);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const photos = [
    { id: 1, caption: 'הרגע הזה גרם לי לחייך' },
    { id: 2, caption: 'זה הרגע שבו ידעתי' },
    { id: 3, caption: 'כל רגע איתך חשוב' },
    { id: 4, caption: 'הצחוק שלך הוא המוזיקה שלי' },
    { id: 5, caption: 'אני אוהב את העיניים שלך' },
    { id: 6, caption: 'את הופכת את הכל טוב יותר' },
  ];

  const photoVariants = {
    hidden: { opacity: 0, rotate: -10, y: 20 },
    visible: (i) => ({
      opacity: 1,
      rotate: (Math.random() - 0.5) * 8,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="page5">
      <motion.div
        className="page5-title"
        initial={{ opacity: 0, y: -20 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        רגעים יקרים
      </motion.div>

      <motion.div
        className="photos-grid"
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            custom={i}
            variants={photoVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
            className="polaroid"
            onClick={() => setExpandedPhoto(photo)}
            whileHover={{ scale: 1.05, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="polaroid-image">
              <div
                className="placeholder-image"
                style={{
                  background: `linear-gradient(135deg, hsl(${photo.id * 60}, 70%, 60%), hsl(${photo.id * 60 + 30}, 70%, 70%))`,
                }}
              >
                <span className="image-number">{photo.id}</span>
              </div>
            </div>
            <div className="polaroid-text">{photo.caption}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded photo modal */}
      {expandedPhoto && (
        <motion.div
          className="photo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedPhoto(null)}
        >
          <motion.div
            className="expanded-polaroid"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="expanded-image">
              <div
                className="placeholder-image large"
                style={{
                  background: `linear-gradient(135deg, hsl(${expandedPhoto.id * 60}, 70%, 60%), hsl(${expandedPhoto.id * 60 + 30}, 70%, 70%))`,
                }}
              >
                <span className="image-number">{expandedPhoto.id}</span>
              </div>
            </div>
            <div className="expanded-text">{expandedPhoto.caption}</div>
            <motion.div
              className="close-btn"
              whileHover={{ scale: 1.1 }}
              onClick={() => setExpandedPhoto(null)}
            >
              ✕
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {showButton && (
        <motion.button
          className="next-button page5-button"
          onClick={onNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          לסוף הסיפור 🌟
        </motion.button>
      )}
    </div>
  );
};

export default Page5;
