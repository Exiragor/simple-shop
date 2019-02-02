import req from './request'

let mainUrl = '/comments'

export function loadComments(count, page, product_id) {
  console.log(product_id)
  return req.get(mainUrl + `?count=${count}&page=${page}&product_id=${product_id}` )

}
