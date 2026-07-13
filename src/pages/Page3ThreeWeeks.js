import React, { useEffect, useState } from 'react';
import './Page3ThreeWeeks.css';

const Page3ThreeWeeks = ({ onNext, onPrevious }) => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => setShowButton(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const text = `אני יודע...\nאנחנו מכירים רק שלושה שבועות.\n\nאבל יש אנשים שהזמן איתם מרגיש אחרט.\n\nכאילו אתה מכירה הרבה יותר.\nהצחוקים הקטנים,\nהרגעים הימיים\nשאנחנו יוצרים.‍`;

  return (
    <div className="page3-three-weeks">
      {/* Background with luxury feel */}
      <div className="luxury-bg"></div>
      <div className="page3-light"></div>

      <div className="page3-container">
        {showContent && (
          <div className="page3-content">
            <div className="clock-icon"></div>

            <div className="text-wrapper">
              {text.split('\n').map((line, idx) => (
                <p
                  key={idx}
                  className="page3-text"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="polaroid-gallery">
              <div className="polaroid polaroid-1">
                <div className="polaroid-content"></div>
                <p>יחד</p>
              </div>
              <div className="polaroid polaroid-2">
                <div className="polaroid-content"></div>
                <p>זמן</p>
              </div>
              <div className="polaroid polaroid-3">
                <div className="polaroid-content"></div>
                <p>מיוחד</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="page-controls">
        <button className="nav-button prev" onClick={onPrevious}>
          ←
        </button>
        {showButton && (
          <button className="next-button" onClick={onNext}>
            המשך →
          </button>
        )}
        <button className="nav-button next" onClick={onNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default Page3ThreeWeeks;
