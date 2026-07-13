import React, { useEffect, useState } from 'react';
import './Page1Opening.css';

const Page1Opening = ({ onNext }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle1, setShowSubtitle1] = useState(false);
  const [showSubtitle2, setShowSubtitle2] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowTitle(true);
    const timer1 = setTimeout(() => setShowSubtitle1(true), 3000);
    const timer2 = setTimeout(() => setShowSubtitle2(true), 6000);
    const timer3 = setTimeout(() => setShowButton(true), 9000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleClick = () => {
    onNext();
  };

  return (
    <div className="page1-opening">
      {/* Night sky background */}
      <div className="sky-background">
        <div className="stars"></div>
        <div className="moon"></div>
        <div className="floating-particles"></div>
      </div>

      {/* Content */}
      <div className="page1-content">
        {showTitle && (
          <div className="handwritten-title">
            <h1>לנועה</h1>
            <span className="heart">❤️</span>
          </div>
        )}

        {showSubtitle1 && (
          <div className="subtitle animated-subtitle">
            <p>יש אנשים שפוגשים במקרה...</p>
          </div>
        )}

        {showSubtitle2 && (
          <div className="subtitle-2 animated-subtitle">
            <p>ומגלים שהם הגיעו בדיוק בזמן.</p>
          </div>
        )}
      </div>

      {/* Button */}
      {showButton && (
        <button className="story-button" onClick={handleClick}>
          פתחי את הסיפור שלנו ✨
        </button>
      )}
    </div>
  );
};

export default Page1Opening;
