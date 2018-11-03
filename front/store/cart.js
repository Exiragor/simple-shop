import Vue from 'vue'

export const state = () => ({
  products: [],
  counts: [],
  sum: 0,
  count: 0,
})

export const actions = {
  addProductToCart({state, commit}, { product, app = null }) {
    if (state.products.indexOf(product) === -1) {
      commit('addNewCount', 1)
      commit('addProduct', product)
      commit('changeCount', 1)
      // if (app) {
      //   app.$ls.set('cart.products', state.products)
      // }
    }
  },
  loadCartFromLs({commit}, app) {
    
  },
  changeCountOfProduct({state, commit}, { productId, number }) {
    let product = state.products.filter(p => p.id === productId)[0]
    let index = state.products.indexOf(product)
    commit('changeProductCount', { index, number})
  }
}

export const mutations = {
  addProduct(state, product) {
    state.products.push(product)
  },
  addNewCount(state, count) {
    state.counts.push(count)
  },
  changeCount(state, num) {
    state.count += num
  },
  setProducts(products) {

  },
  changeProductCount(state, { index, number }) {
    let count = state.counts[index] + number
    Vue.set(state.counts, index, count)
  }
}
