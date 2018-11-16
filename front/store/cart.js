import Vue from 'vue'
import { saveCartToLs, getCartFromLs, getProduct, isCartExist } from '../helpers'
import { makeOrder } from '~/api/orders'

export const state = () => ({
  products: [],
  counts: [],
  sum: 0,
  count: 0,
  clientInfo: {
    firstName: '',
    lastName: '',
    phone: ''
  }
})

export const actions = {
  addProductToCart({state, commit}, { product }) {
    if (state.products.indexOf(product) === -1) {
      commit('addNewCount', 1)
      commit('addProduct', product)
      commit('changeCount', 1)
      commit('changeSum')
      saveCartToLs(state.products, state.counts)
    }
  },
  loadCartFromLs({commit}) {
    if (isCartExist()) {
      let { products, counts } = getCartFromLs()
      commit('setProducts', products)
      commit('setCounts', counts)
      commit('setCount', counts.length)
      commit('changeSum')
    }
  },
  changeCountOfProduct({state, commit}, { productId, number }) {
    let { index } = getProduct(state.products, productId)
    if (state.counts[index] + number > 0) {
      commit('changeProductCount', { index, number})
      commit('changeSum')
      saveCartToLs(state.products, state.counts)
    }
  },
  deleteProduct({state, commit}, { productId }) {
    let { index } = getProduct(state.products, productId)
    commit('removeProduct', index)
    commit('changeSum')
    saveCartToLs(state.products, state.counts)
  },
  changeClientInfo({commit}, { name, value }) {
    switch (name) {
      case 'firstName':
        commit('changeClientInfoField', { name, value})
        break
      case 'lastName':
        commit('changeClientInfoField', { name, value})
        break
      case 'phone':
        commit('changeClientInfoField', { name, value})
        break
    }
  },
  async makeOrder({state}) {
    let fields = state.clientInfo
    fields.sum = state.sum
    let products = []
    for (let index in state.products) {
      let product = {
        id: state.products[index].id,
        count: state.counts[index]
      }
      products.push(product)
    }
    let { data } = await makeOrder(fields, products)
    return data === "OK"
  },
  clear({state, commit}) {
    commit('setProducts', [])
    commit('setCounts', [])
    commit('setCount', 0)
    commit('changeSum')
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
  },
  changeSum(state) {
    let sum = 0
    for (let index in state.products) {
      sum += state.products[index].price * state.counts[index]
    }
    state.sum = sum
  },
  changeClientInfoField(state, { name, value }) {
    state.clientInfo[name] = value
  }
}
