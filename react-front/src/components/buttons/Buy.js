import React from 'react';
import cn from 'classnames';
import toasted from  'toasted-notes';
import { store } from '../../store';
import { addProductToCart } from '../../actions';
import { connect } from 'react-redux';

export const BuyBtnComponent = ({ classes, product, cartProducts }) => {
    const btnClassess = cn(['button', 'button--primary', ...classes || '']);
    const productInCart = () => cartProducts.find(item => item.id === product.id);

    const addToCart = () => {
        store.dispatch(addProductToCart(product));
        toasted.notify(`Product: ${product.name} has added to cart`);
    };

    if (productInCart()) {
        return <div className={ btnClassess }>In cart</div>;
    } else {
        return <div className={ btnClassess } onClick={addToCart}>Buy</div>;
    }
};

const mapProps = state => ({
    cartProducts: state.cart.products
})

export const BuyBtn = connect(mapProps)(BuyBtnComponent);
