import React from 'react';
import { connect } from 'react-redux';
import { CartList } from '../components/cart/List';

const mapPropsToCartList = state => ({
    products: state.cart.products
});

const MappedCartList = connect(mapPropsToCartList)(CartList);

export const CartPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Cart</h1>
            <MappedCartList />
        </div>
    );
};