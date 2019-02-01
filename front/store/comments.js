import { loadComments } from '~/api/comments'

export const state = () => ({
  list: [],
  current: {},
  lastPage: 0,
})

export const actions = {
  async loadComments({commit, state}, { count, page }) {
    let { data } = await loadComments(count, page)
    commit('setComments', data.data)
    commit('setLastPage', data.meta.last_page)
  }
}

export const mutations = {
  setComments(state, items) {
    state.list = items
  },
  setLastPage(state, numPage) {
    state.lastPage = numPage
  }
}