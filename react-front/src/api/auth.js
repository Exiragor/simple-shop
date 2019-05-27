import req from './request'

let mainUrl = '/auth'

export const login = (email, password) => {
  return req.post(mainUrl + '/login', {
    email,
    password
  });
}
