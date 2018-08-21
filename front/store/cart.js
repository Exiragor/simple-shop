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
  changeCount(state, num) {
    state.count += num
  },
  setProducts(products) {

  },
  changeProductCount(state, {index, number}) {
    state.products[index].count += number
  }
}
