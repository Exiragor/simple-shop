import React, { useEffect } from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import { ProductsList } from '../components/product/List';
import { Pagination } from '../components/navigation/Pagination';
import { Search } from '../components/navigation/Search';
import { loadProducts, changeProductQuery } from '../actions';

const mapStateToProductProps = state => ({
    products: state.products.list
});

const ProductListComponent = connect(mapStateToProductProps)(ProductsList);

const mapStateToPaginationProps = state => ({
    lastPage: state.products.lastPage 
});

const PaginationComponent = connect(mapStateToPaginationProps)(Pagination);

export const Home = ({ match, history }) => {
    const changePageHandler = (page) => history.push(`/page/${page}`);

    const searchChangeHandler = ({ target: { value } }) => {
        store.dispatch(changeProductQuery({ name: value }));
        history.push('/page/1');
    };

    const currentPage = +match.params.page || 1;

    useEffect(() => {
        store.dispatch(loadProducts(currentPage, 20));
    });
    
    return (
        <div className="container mt-5">
            <PaginationComponent currentPage={ currentPage } changePage={changePageHandler} />
            <Search changeHandler={searchChangeHandler} />
            <ProductListComponent />
        </div>
    );
};