export const state = () => ({
  products: [],
  sum: 0,
  count: 0,
})

export const actions = {
  addProductToCart({state, commit}, { product, app = null }) {
    if (state.products.indexOf(product) === -1) {
      product.count = 1
      commit('addProduct', product)
      commit('changeCount', 1)
      if (app) {
        app.$ls.set('cart.products', state.products)
      }
    }
  },
  loadCartFromLs({commit}, app) {
    
  }
}

export const mutations = {
  addProduct(state, product) {
    state.products.push(product)
  },
  changeCount(state, num) {
    state.count += num
  },
  setProducts(products) {

  }
}
