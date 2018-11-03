import Vue from 'vue'

export const state = () => ({
  products: [],
  counts: [],
  sum: 0,
  count: 0,
})

export const actions = {
  addProductToCart({state, commit}, { product }) {
    if (state.products.indexOf(product) === -1) {
      commit('addNewCount', 1)
      commit('addProduct', product)
      commit('changeCount', 1)
      saveCartToLs(state)
    }
  },
  loadCartFromLs({commit}) {
    let products = JSON.parse(Vue.ls.get('cart.products'))
    let counts = JSON.parse(Vue.ls.get('cart.counts'))
    commit('setProducts', products)
    commit('setCounts', counts)
    commit('setCount', counts.length)
  },
  changeCountOfProduct({state, commit}, { productId, number }) {
    let product = state.products.filter(p => p.id === productId)[0]
    let index = state.products.indexOf(product)
    if (state.counts[index] + number > 0) {
      commit('changeProductCount', { index, number})
      saveCartToLs(state)
    }
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
  setCount(state, count) {
    state.count = count
  },
  setProducts(state, products) {
    state.products = products
  },
  setCounts(state, counts) {
    state.counts = counts
  },
  changeProductCount(state, { index, number }) {
    let count = state.counts[index] + number
    Vue.set(state.counts, index, count)
  }
}

function saveCartToLs(state) {
  Vue.ls.set('cart.products', JSON.stringify(state.products))
  Vue.ls.set('cart.counts', JSON.stringify(state.counts))
}