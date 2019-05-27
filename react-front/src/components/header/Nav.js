import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
    <div className="nav d-flex ml-auto">
        <div className="shopping-cart">
            <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
        </div>
    </div>
);