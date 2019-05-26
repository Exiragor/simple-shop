import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HeaderTop } from './components/header/HeaderTop';
import { HomePage } from './pages/index';
import { ProductDetailPage } from './pages/productDetail';

function App(app) {
  return (
    <div className="App">
      <HeaderTop />
      <Router>
        <Route exact path={['/', '/page/:page']} component={HomePage} />
        <Route path="/product/:id" component={ProductDetailPage} />
      </Router>
    </div>
  );
}

export default App;
