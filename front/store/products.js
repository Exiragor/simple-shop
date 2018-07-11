import { loadProducts } from '~/api/products'

export const state = () => ({
  list: [],
  perPageCount: 20,
  lastPage: 0,
})

export const actions = {
  async loadProducts({commit, state}, { page }) {
    let { data } = await loadProducts(state.perPageCount, page)
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
