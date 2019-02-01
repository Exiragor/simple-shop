import req from './request'

let mainUrl = '/comments'

export function loadComments(count, page) {
  return req.get(mainUrl + `?count=${count}&page=${page}` )
}
