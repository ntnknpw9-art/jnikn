import React, { useEffect, useState } from 'react';
import './Page5Memories.css';

const Page5Memories = ({ onNext, onPrevious }) => {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const memories = [
    {
      id: 1,
      emotion: 'הו הרגע הזה גרם לי לחיכו'
    },
    {
      id: 2,
      emotion: 'אני לט אותך תמיד'
    },
    {
      id: 3,
      emotion: 'לא מזממני לכאן'
    },
    {
      id: 4,
      emotion: 'כאן לי פורקאן טבעי רגעים'
    },
    {
      id: 5,
      emotion: 'מומן הטוב שלנו ערב'
    },
    {
      id: 6,
      emotion: 'רגעים שאני בטחון חזר'
    },
  ];

  return (
    <div className="page5-memories">
      {/* Background */}
      <div className="memories-bg"></div>
      <div className="memories-light"></div>
      <div className="floating-dust"></div>

      <div className="page5-container">
        <h2 className="memories-title">הזכרויות שלנו</h2>

        <div className="memories-grid">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="memory-polaroid"
              onClick={() => setSelectedMemory(memory)}
              style={{
                animationDelay: `${memory.id * 0.1}s`,
              }}
            >
              <div className="memory-image"></div>
              <div className="memory-text">{memory.emotion}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected memory */}
      {selectedMemory && (
        <div className="memory-modal" onClick={() => setSelectedMemory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMemory(null)}>
              ×
            </button>
            <div className="modal-image"></div>
            <p className="modal-text">{selectedMemory.emotion}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="page-controls">
        <button className="nav-button prev" onClick={onPrevious}>
          ←
        </button>
        {showButton && (
          <button className="next-button" onClick={onNext}>
            דבר סופי →
          </button>
        )}
        <button className="nav-button next" onClick={onNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default Page5Memories;
