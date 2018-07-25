import { loadProducts, loadProduct } from '~/api/products'

export const state = () => ({
  list: [],
  current: {},
  lastPage: 0,
  query: {
    name: '',
  }
})

export const actions = {
  async loadProducts({commit, state}, { count, page }) {
    let { data } = await loadProducts(count, page, state.query)
    commit('setProducts', data.data)
    commit('setLastPage', data.meta.last_page)
  },
  async loadProduct({commit}, { productID }) {
    let { data } = await loadProduct(productID)
    let product = data.data
    if (product) {
      commit('setProduct', product)
    }
  },
  changeQuery({commit}, query) {
    for (let field in query) {
      commit('setQueryField', {name: field, value: query[field]})
    }
  },
}

export const mutations = {
  setProducts(state, items) {
    state.list = items
  },
  setLastPage(state, numPage) {
    state.lastPage = numPage
  },
  setProduct(state, item) {
    state.current = item
  },
  setQueryField(state, {name, value}) {
    state.query[name] = value
  },
}
