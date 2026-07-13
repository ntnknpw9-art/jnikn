import React, { useEffect, useState } from 'react';
import './PageFinal.css';

const PageFinal = ({ onPrevious }) => {
  const [showHeart, setShowHeart] = useState(false);
  const [showFirstMessage, setShowFirstMessage] = useState(false);
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setShowHeart(true);
    const timer1 = setTimeout(() => setShowFirstMessage(true), 1500);
    const timer2 = setTimeout(() => setShowSecondMessage(true), 4000);
    const timer3 = setTimeout(() => setShowButton(true), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleCelebrate = () => {
    setShowCelebration(true);
    // Play sound if available
    const audio = new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
    audio.play().catch(() => {});
    
    setTimeout(() => {
      setShowCelebration(false);
    }, 3000);
  };

  return (
    <div className="page-final">
      {/* Background */}
      <div className="final-bg"></div>
      <div className="stars-final"></div>
      <div className="moon-final"></div>

      {/* Content */}
      <div className="final-content">
        {showHeart && (
          <div className="beating-heart">
            <div className="heart"></div>
          </div>
        )}

        <div className="messages">
          {showFirstMessage && (
            <div className="message message-1">
              <p>נועה...</p>
            </div>
          )}

          {showSecondMessage && (
            <div className="message message-2">
              <p>תודה שנכנסת לי לחיים ❤️</p>
              <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
                אני מחכה לראות איזה פרקים עוד נכתוב ביחד
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Celebration effect */}
      {showCelebration && (
        <div className="celebration">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="floating-heart" style={{
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 0.5 + 's',
              animationDuration: (2 + Math.random() * 1) + 's',
            }}>
              ❤️
            </div>
          ))}
        </div>
      )}

      {/* Final button */}
      {showButton && (
        <div className="final-button-wrapper">
          <button className="celebrate-button" onClick={handleCelebrate}>
            לחצי כאן ❤️
          </button>
        </div>
      )}

      {/* Back button */}
      <button className="back-button" onClick={onPrevious}>
        ← חזרה
      </button>
    </div>
  );
};

export default PageFinal;
