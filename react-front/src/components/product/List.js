import React from 'react';
import { ProductCard } from './Card';
import { ProductsType } from './types';

export const ProductsList = ({ products }) => (
    <div className="products-list row">
        {products.map(product => <div className="col-md-3 mb-4" key={product.id}><ProductCard product={product} /></div>)}
    </div>
);

ProductsList.propTypes = {
    products: ProductsType
}