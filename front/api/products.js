import req from './request'

export function loadProducts(count, page) {
  let url = `/products?count=${count}&page=${page}`
  return req.get(url)
}
