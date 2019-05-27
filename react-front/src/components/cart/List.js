import React from 'react';
import { CartProduct } from './Product';

export const CartList = ({ products }) => products.map(product => <CartProduct product={product} key={product.id} />);