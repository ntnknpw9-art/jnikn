import React, { useState, useEffect } from 'react';
import './NoaLoveStory.css';
import Page1Opening from './pages/Page1Opening';
import Page2HowItStarted from './pages/Page2HowItStarted';
import Page3ThreeWeeks from './pages/Page3ThreeWeeks';
import Page4LoveLetter from './pages/Page4LoveLetter';
import Page5Memories from './pages/Page5Memories';
import PageFinal from './pages/PageFinal';

const NoaLoveStory = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pages = [
    Page1Opening,
    Page2HowItStarted,
    Page3ThreeWeeks,
    Page4LoveLetter,
    Page5Memories,
    PageFinal,
  ];

  const CurrentPage = pages[currentPage];

  const goToNextPage = () => {
    if (!isTransitioning && currentPage < pages.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const goToPreviousPage = () => {
    if (!isTransitioning && currentPage > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsTransitioning(false);
      }, 600);
    }
  };

  return (
    <div className="noa-love-story">
      <div className="story-container">
        <div className={`page-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
          <CurrentPage onNext={goToNextPage} onPrevious={goToPreviousPage} />
        </div>
      </div>

      {/* Page indicators */}
      <div className="page-indicators">
        {pages.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentPage ? 'active' : ''}`}
            onClick={() => !isTransitioning && index < currentPage && goToPreviousPage()}
          />
        ))}
      </div>

      {/* Navigation hints */}
      {currentPage < pages.length - 1 && (
        <div className="nav-hint next-hint">↓</div>
      )}
      {currentPage > 0 && (
        <div className="nav-hint prev-hint">↑</div>
      )}
    </div>
  );
};

export default NoaLoveStory;
