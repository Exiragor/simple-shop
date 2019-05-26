import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HeaderTop } from './components/header/HeaderTop';
import { HomePage } from './pages/index';
import { ProductDetailPage } from './pages/productDetail';
import { page404 } from './404'

function App(app) {
  return (
    <Router>
      <div className="App">
        <HeaderTop />
        <Switch>
          <Route exact path={['/', '/page/:page']} component={HomePage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route component={page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
