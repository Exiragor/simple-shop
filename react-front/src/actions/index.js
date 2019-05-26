import { loadProductsApi, loadProductApi } from '../api/products'

export const loadProducts = (page, count) => async (dispatch, getState) => {
    let { products: { query }} = getState();
    let { data } = await loadProductsApi(count, page, query || {});

    dispatch({
        type: 'SET_PRODUCTS',
        products: data.data,
        lastPage: data.meta.last_page
    });

    return data;
}

export const loadProduct = id => async dispatch => {
    let { data } = await loadProductApi(id);

    if (data.data) {
        dispatch({
            type: 'SET_PRODUCT',
            product: data.data
        });
    }

    return data;
}

// example: query = { name: '' }
export const changeProductQuery = query => dispatch => {
    dispatch({
        type: 'SET_QUERY_FIELDS',
        query
    });
}  