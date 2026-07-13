import React, { useEffect, useState } from 'react';
import './Page4LoveLetter.css';

const Page4LoveLetter = ({ onNext, onPrevious }) => {
  const [showLetter, setShowLetter] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLetter(true), 500);
    const timer2 = setTimeout(() => setShowButton(true), 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const letterContent = `נועה ❤️

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
    <div className="page4-love-letter">
      {/* Background */}
      <div className="letter-bg"></div>
      <div className="letter-light"></div>

      <div className="page4-container">
        {showLetter && (
          <div className="letter-paper">
            <div className="letter-content">
              {letterContent.split('\n').map((line, idx) => (
                <p
                  key={idx}
                  className="letter-line"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="signature">✨</div>
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
            הזכרויות שלנו →
          </button>
        )}
        <button className="nav-button next" onClick={onNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default Page4LoveLetter;
