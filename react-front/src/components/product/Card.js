import React from 'react';
import "./Card.css"

export const ProductCard = ({product}) => (
    <div className="card">
        <img class="card-img-top" src={product.img || '/images/no-product-img.png'} alt={product.name} />
        <div class="card-body">
        <h5 class="card-title">{ product.name }</h5>
        <h4>{ product.price }</h4>
        </div>
        <div class="card-body btns">
        <a class="button button--primary">More</a>
        <div class="button button--primary">Buy</div>
        </div>
    </div>
);