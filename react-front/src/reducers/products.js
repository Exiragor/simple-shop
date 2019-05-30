const initialState = {
    list: [],
    current: {},
    lastPage: 0
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                list: action.products,
                lastPage: action.lastPage
            }
        case 'SET_LAST_PAGE':
            return {
                ...state,
                lastPage: action.lastPage
            }
        case 'SET_PRODUCT':
            return {
                ...state,
                current: action.product
            }
        case 'SET_QUERY_FIELDS':
            return {
                ...state,
                query: {
                    ...state.query,
                    ...action.query
                }
            }
        default:
            return state
    }
  }
  
  export default products