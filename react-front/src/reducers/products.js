const initialState = {
    list: [],
    current: {},
    lastPage: 0,
    query: {
        name: '',
    }
};

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                list: action.products
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
        case 'SET_QUERY_FIELD':
            let query = {};
            query[action.query.fieldName] = action.query.fieldValue
            return {
                ...state,
                query: {
                    ...state.query,
                    ...query
                }
            }
        default:
            return state
    }
  }
  
  export default products