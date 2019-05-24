import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages/index.js';

function App(app) {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
