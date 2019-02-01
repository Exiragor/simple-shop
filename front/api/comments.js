import req from './request'

let mainUrl = '/comments'

export function loadComments(count, page) {
  let resalt = req.get(mainUrl + `?count=${count}&page=${page}` )
  return console.log(resalt)
}
