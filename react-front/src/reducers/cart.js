const initialState = {
    products: [],
    count: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'CART_ADD_PRODUCT':
            return {
                ...state,
                count: state.count + 1,
                products: [
                    ...state.products,
                    {
                        ...action.product,
                        count: 1
                    }
                ]
            }
        case 'CART_PRODUCT_CHANGE_COUNT':
            return {
                ...state,
                products: state.products.map(product =>
                    (product.id === action.id)
                    ? { ...product, count: product.count + action.count}
                    : product
                )
            }
        case 'CART_DELETE_PRODUCT':
            let index = state.products.indexOf(state.products.filter(p => p.id === action.id)[0]);
            let products = [...state.products];
            products.splice(index, 1);
            return {
                ...state,
                products,
                count: state.count - 1
            }
        case 'CART_CLEAR':
            return {
                ...initialState,
            }
        default:
            return state
    }
  }
  
  export default cart