import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { ProductDetail } from '../components/product/Detail';
import { loadProduct } from '../actions';

const mapStateToProductDetailProps = state => ({
    product: state.products.current
});

const ProductDetailComponent = connect(mapStateToProductDetailProps)(ProductDetail);

export const ProductDetailPage = ({ match }) => {

    const currentId = +match.params.id;

    useEffect(() => {
        store.dispatch(loadProduct(currentId));
    });
    
    return (
        <div className="container mt-5">
            <ProductDetailComponent />
        </div>
    )
};