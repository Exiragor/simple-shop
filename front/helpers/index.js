import Vue from 'vue'

export function saveCartToLs(products, counts) {
    Vue.ls.set('cart.products', JSON.stringify(products))
    Vue.ls.set('cart.counts', JSON.stringify(counts))
}

export function getCartFromLs() {
    let products = Vue.ls.get('cart.products')
    let counts = Vue.ls.get('cart.counts')
    if (products && counts) {
      products = JSON.parse(products)
      counts = JSON.parse(counts)
    }
    // let counts = JSON.parse(Vue.ls.get('cart.counts'))
    return { products, counts }
}

export function getProduct(products, id) {
    let product = products.filter(p => p.id === id)[0]
    let index = products.indexOf(product)
    return { product, index }
}

export function formatPrice(price) {
    let val = (price / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}