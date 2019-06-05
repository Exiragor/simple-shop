import React from 'react';
import './App.css';
import 'toasted-notes/src/styles.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { store } from './store';
import { cartSetProducts } from './actions';
import { HeaderTop } from './components/header/HeaderTop';
import { HomePage } from './pages/index';
import { ProductDetailPage } from './pages/productDetail';
import { CartPage } from './pages/cart';
import { page404 } from './404'

const App = (app) => {
  let cartProducts = window.localStorage.getItem('cart-products');
  if (cartProducts) {
    store.dispatch(cartSetProducts(JSON.parse(cartProducts)))
  }

  return (
    <div className="App">
      <Router>
        <HeaderTop />
        <Switch>
          <Route exact path={['/', '/page/:page']} component={HomePage} />
          <Route path="/product/:id" component={ProductDetailPage} />
          <Route path="/cart" component={CartPage} />
          <Route component={page404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
