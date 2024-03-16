import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MangaChapters from './MangaChapters';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chapters/:pk" element={<MangaChapters />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
