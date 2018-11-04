import Vue from 'vue'

export function saveCartToLs(products, counts) {
    Vue.ls.set('cart.products', JSON.stringify(products))
    Vue.ls.set('cart.counts', JSON.stringify(counts))
}

export function getCartFromLs() {
    let products = JSON.parse(Vue.ls.get('cart.products'))
    let counts = JSON.parse(Vue.ls.get('cart.counts'))
    return { products, counts }
}

export function getProduct(products, id) {
    let product = products.filter(p => p.id === id)[0]
    let index = products.indexOf(product)
    return { product, index }
}