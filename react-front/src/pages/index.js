import React from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import { ProductsList } from '../components/product/List';
import { loadProducts } from '../actions'

store.dispatch(loadProducts(1, 20));

const mapStateToProps = state => ({
    products: state.products.list
})
  

const ProductListComponent = connect(
    mapStateToProps
)(ProductsList)

export const Home = () => {
    return (
        <div className="container mt-5">
            <ProductListComponent />
        </div>
    )
};