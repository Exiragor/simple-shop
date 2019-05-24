import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from './pages/index';
import { HeaderTop } from './components/header/HeaderTop';

function App(app) {
  return (
    <div className="App">
      <HeaderTop />
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
