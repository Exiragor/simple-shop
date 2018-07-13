import { loadProducts } from '~/api/products'

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
  }
}

export const mutations = {
  setProducts(state, items) {
    state.list = items
  },
  setLastPage(state, numPage) {
    state.lastPage = numPage
  },
}
