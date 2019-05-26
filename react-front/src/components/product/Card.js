import React from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from './types';
import "./Card.css";

export const ProductCard = ({ product }) => (
    <div className="card">
        <img className="card-img-top" src={ product.img || '/images/no-product-img.png' } alt={ product.name } />
        <div className="card-body">
            <h5 className="card-title">{ product.name }</h5>
            <h4>{ product.price }</h4>
        </div>
        <div className="card-body btns">
            <Link to={ '/product/' + product.id } className="button button--primary">More</Link>
            <div className="button button--primary">Buy</div>
        </div>
    </div>
);

ProductCard.propTypes = {
    product: ProductType
};