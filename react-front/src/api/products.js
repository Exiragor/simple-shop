import req from './request';

let mainUrl = '/products';

export function loadProductsApi(count, page, query = false) {
  let queryStr = '';
  if (query) {
    for (let param in query) {
      queryStr += `&${param}=${query[param]}`;
    }
  }
  return req.get(mainUrl + `?count=${count}&page=${page}` + queryStr);
}

export function loadProduct(id) {
  return req.get(mainUrl + `/${id}`);
}
