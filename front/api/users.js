import { authReq } from './request'

let mainUrl = '/users'

export const me = (token) => {
  return authReq(token).get(mainUrl + '/me')
}