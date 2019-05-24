import React from 'react';
import { ProductCard } from './Card'

export const ProductsList = ({ products }) => (
    <div className="products-list row">
        {products.map(product => <div className="col-md-3 mb-4"><ProductCard product={product} /></div>)}
    </div>
);