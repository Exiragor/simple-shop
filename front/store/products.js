import { loadProducts, loadProduct } from '~/api/products'

export const state = () => ({
  list: [],
  current: {},
  lastPage: 0,
})

export const actions = {
  async loadProducts({commit}, { count, page }) {
    let { data } = await loadProducts(count, page)
    let products = data.data
    if (products.length) {
      commit('setProducts', products)
      commit('setLastPage', data.meta.last_page)
    }
  },
  async loadProduct({commit}, { productID }) {
    let { data } = await loadProduct(productID)
    let product = data.data
    if (product) {
      commit('setProduct', product)
    }
  }
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
  }
}
