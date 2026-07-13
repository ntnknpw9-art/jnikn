import React, { useEffect, useState } from 'react';
import './Page2HowItStarted.css';

const Page2HowItStarted = ({ onNext, onPrevious }) => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowContent(true);
    const timer = setTimeout(() => setShowButton(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const text = `זה התחיל במקום הכי רגיל בעולם...\nבעבודה.\n\nלא חיפשתי משהו מיוחד,\nלא ידעתי שאני עומד להכיר מישהי שתיכנס לי כל כך מהר ללב.\n\nואז הכרתי אותך, נועה.\nוכל דבר השתנה.`;

  return (
    <div className="page2-how-it-started">
      {/* Paper texture background */}
      <div className="paper-background"></div>

      {/* Soft lighting */}
      <div className="soft-light"></div>

      <div className="page2-container">
        {showContent && (
          <div className="page2-content">
            <h2 className="page2-title">איך הכל התחיל...</h2>

            <div className="text-container">
              {text.split('\n').map((line, idx) => (
                <p
                  key={idx}
                  className="typewriter-text"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="page-controls">
        <button className="nav-button prev" onClick={onPrevious} title="עמוד קודם">
          ←
        </button>
        {showButton && (
          <button className="next-button" onClick={onNext}>
            הבא →
          </button>
        )}
        <button className="nav-button next" onClick={onNext} title="עמוד הבא">
          →
        </button>
      </div>
    </div>
  );
};

export default Page2HowItStarted;
