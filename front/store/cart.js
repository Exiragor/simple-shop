import Vue from 'vue'
import { saveCartToLs, getCartFromLs, getProduct } from '../helpers'

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
      saveCartToLs(state.products, state.counts)
    }
  },
  loadCartFromLs({commit}) {
    let { products, counts } = getCartFromLs()
    commit('setProducts', products)
    commit('setCounts', counts)
    commit('setCount', counts.length)
  },
  changeCountOfProduct({state, commit}, { productId, number }) {
    let { index } = getProduct(state.products, productId)
    if (state.counts[index] + number > 0) {
      commit('changeProductCount', { index, number})
      saveCartToLs(state.products, state.counts)
    }
  },
  deleteProduct({state, commit}, { productId }) {
    let { index } = getProduct(state.products, productId)
    commit('removeProduct', index)
    saveCartToLs(state.products, state.counts)
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
  },
  removeProduct(state, index) {
    state.products.splice(index, 1)
    state.counts.splice(index, 1)
    state.count -= 1
  }
}
