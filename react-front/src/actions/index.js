import { loadProducts } from '../api/products'

export const loadProducts = async (page, count, query = {}) => {
    let products = await loadProducts(page, count, query);

    return ({
        type: 'SET_PRODUCTS',
        products
    })
}
  
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
  