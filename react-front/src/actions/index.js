import { loadProductsApi } from '../api/products'

export const loadProducts = (page, count, query = {}) => async dispatch => {
    let { data } = await loadProductsApi(count, page, query);

    dispatch ({
        type: 'SET_PRODUCTS',
        products: data.data,
        lastPage: data.meta.last_page
    })

    return data;
}

  