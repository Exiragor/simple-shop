export const state = () => ({
  products: [],
  sum: 0,
  count: 0,
})

export const actions = {
  addProductToCart({state, commit}, product) {
    if (state.products.indexOf(product) === -1) {
      product.count = 1
      commit('addProduct', product)
      commit('changeCount', 1)
    }
  }
}

export const mutations = {
  addProduct(state, product) {
    state.products.push(product)
  },
  changeCount(state, num) {
    state.count += num
  }
}
