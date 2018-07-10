import { loadProducts } from '~/api/products'

export const state = () => ({
  list: []
})

export const actions = {
  async loadProducts({commit}, { count, page }) {
    let { data } = await loadProducts(count, page)
    let products = data.data
    if (products.length)
      commit('setProducts', products)
  }
}

export const mutations = {
  setProducts(state, items) {
    state.list = items
  },
}
