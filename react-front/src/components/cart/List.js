import React from 'react';
import { CartProduct } from './Product';

export const CartList = ({ products }) => {
    window.localStorage.setItem('cart-products', JSON.stringify(products))
    return products.map(product => <CartProduct product={product} key={product.id} />);
}