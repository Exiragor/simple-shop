import req from './request'

let mainUrl = '/products'

export function loadProducts(count, page) {
  return req.get(mainUrl + `?count=${count}&page=${page}`)
}

export function loadProduct(id) {
  return req.get(mainUrl + `/${id}`)
}
