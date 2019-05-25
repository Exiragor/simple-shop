import React, { useEffect } from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import { ProductsList } from '../components/product/List';
import { Pagination } from '../components/navigation/Pagination';
import { loadProducts } from '../actions';

const mapStateToProductProps = state => ({
    products: state.products.list
});

const ProductListComponent = connect(mapStateToProductProps)(ProductsList);

const mapStateToPaginationProps = state => ({
    lastPage: state.products.lastPage 
});

const PaginationComponent = connect(mapStateToPaginationProps)(Pagination)

export const Home = ({ match, history }) => {
    const changePageHandler = (page) => history.push(`/page/${page}`);
    const currentPage = +match.params.page || 1;

    useEffect(() => {
        store.dispatch(loadProducts(currentPage, 20));
    });
    return (
        <div className="container mt-5">
            <PaginationComponent currentPage={ currentPage } changePage={changePageHandler} />
            <ProductListComponent />
        </div>
    );
};