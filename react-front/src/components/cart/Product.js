import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Product.css';
import { formatPrice } from '../../helpers'
import { store } from '../../store';
import { cartProductChangeCount, cartDeleteProduct } from '../../actions';

export const CartProduct = ({ product }) => {
    const changeCount = count => store.dispatch(cartProductChangeCount(product.id, count));
    const removeProduct = () => store.dispatch(cartDeleteProduct(product.id));

    return (
        <div className="product-cart">
            <img src={product.img || '/images/no-product-img.png'} className="product-cart__image" alt={product.name || ''} />
            <Link to={'/product/' + product.id}>{ product.name || '' }</Link>
            <div className="price mr-2">{ formatPrice(product.price * product.count) }</div>
            <div className="count">
                <div className="count__btn" onClick={() => changeCount(1)}><span>+</span></div>
                <div className="count__number">{ product.count }</div>
                <div className="count__btn" onClick={() => changeCount(-1)}><span>-</span></div>
            </div>
            <div className="actions ml-2">
                <span onClick={removeProduct}>Remove</span>
            </div>
        </div>
    );
}

CartProduct.propTypes = {
    product: PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    })
};