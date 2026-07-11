import React, { useState } from 'react';
import './App.css';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [showHearts, setShowHearts] = useState(false);

  const pages = [
    <Page1 key="1" onNext={() => setCurrentPage(1)} />,
    <Page2 key="2" onNext={() => setCurrentPage(2)} />,
    <Page3 key="3" onNext={() => setCurrentPage(3)} />,
    <Page4 key="4" onNext={() => setCurrentPage(4)} />,
    <Page5 key="5" onNext={() => setCurrentPage(5)} />,
    <Page6 key="6" onHeartClick={() => setShowHearts(true)} showHearts={showHearts} />,
  ];

  return (
    <div className="app">
      {pages[currentPage]}
    </div>
  );
}

export default App;
