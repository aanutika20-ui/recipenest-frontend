// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ChefProfile from './components/ChefProfile';
import RecipePortfolio from './components/RecipePortfolio';
import ChefDashboard from './components/ChefDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chef/:id" element={<ChefProfile />} />
        <Route path="/recipes" element={<RecipePortfolio />} />
        <Route path="/dashboard" element={<ChefDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
