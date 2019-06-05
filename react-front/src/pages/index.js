import React, { useEffect } from 'react';
import { store } from '../store';
import { connect } from 'react-redux';
import { ProductsList } from '../components/product/List';
import { Pagination } from '../components/navigation/Pagination';
import { Search } from '../components/navigation/Search';
import { loadProducts } from '../actions';

const mapStateToProductProps = state => ({
    products: state.products.list
});

const ProductListComponent = connect(mapStateToProductProps)(ProductsList);

const mapStateToPaginationProps = state => ({
    lastPage: state.products.lastPage 
});

const PaginationComponent = connect(mapStateToPaginationProps)(Pagination);

let searchQuery = { name: '' }; // store a searchValue for this component

export const HomePage = ({ match, history }) => {
    const changePageHandler = (page) => history.push(`/page/${page}`);

    const searchChangeHandler = ({ target: { value } }) => {
        searchQuery.name = value;
        history.push('/page/1');
    };

    const currentPage = +match.params.page || 1;

    useEffect(() => {
        store.dispatch(loadProducts(currentPage, 20, searchQuery));
    });
    
    return (
        <div className="container mt-5">
            <PaginationComponent currentPage={currentPage} changePage={changePageHandler} />
            <Search changeHandler={searchChangeHandler} value={searchQuery.name} />
            <ProductListComponent />
        </div>
    );
};