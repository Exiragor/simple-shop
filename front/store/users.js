import Vue from 'vue'
import { login } from '~/api/auth'
import { me } from '~/api/users'

export const state = () => ({
  me: null,
  token: '',
})

export const actions = {
  async login({commit}, { email, password }) {
      try {
        return await login(email, password)
      } catch (err) {
        return false
      }
  },
  setToken({commit}, token) {
    commit('setToken', token)
    Vue.ls.set('user.token', token.toString())
  },
  getTokenFromLs({commit, state}) {
      if (!state.token) {
        let token = Vue.ls.get('user.token')
        commit('setToken', token)
      }
  },
  async me({commit, state}) {
    try {
      let { data } = await me(state.token)
      if (data) {
        commit('setMe', data.data)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setMe(state, user) {
    state.me = user
  }
}