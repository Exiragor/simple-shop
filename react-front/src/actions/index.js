import { loadProductsApi } from '../api/products'

export const loadProducts = (page, count) => async (dispatch, getState) => {
    let { products: { query }} = getState();
    let { data } = await loadProductsApi(count, page, query || {});

    dispatch({
        type: 'SET_PRODUCTS',
        products: data.data,
        lastPage: data.meta.last_page
    })

    return data;
}

// example: query = { name: '' }
export const changeProductQuery = query => dispatch => {
    dispatch({
        type: 'SET_QUERY_FIELDS',
        query
    })
}  