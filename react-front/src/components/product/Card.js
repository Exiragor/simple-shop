import React from 'react';
import "./Card.css"

export const ProductCard = ({product}) => (
    <div className="card">
        <img className="card-img-top" src={product.img || '/images/no-product-img.png'} alt={product.name} />
        <div className="card-body">
            <h5 className="card-title">{ product.name }</h5>
            <h4>{ product.price }</h4>
        </div>
        <div className="card-body btns">
            <a href="#" className="button button--primary">More</a>
            <div className="button button--primary">Buy</div>
        </div>
    </div>
);