import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    albums: [],
    posts: []
  },
  mutations: {
    fillUsers(state, usuarios) {
      state.users = usuarios
    },

    fillAlbums(state, albumes) {
      state.albums = albumes
    },

    fillPosts(state, posteos) {
      state.posts = posteos
    }
  },
  actions: {
    async getUsers({commit}) {
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
      const info = await data.json()

      commit('fillUsers', info)
    },

    async getAlbums({commit}) {
      const data = await fetch("https://jsonplaceholder.typicode.com/albums")
      const info = await data.json("")

      commit('fillAlbums', info)
    },

    async getPosts({commit}) {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts")
      const info = await data.json("")

      commit('fillPosts', info)
    }
  },
})
