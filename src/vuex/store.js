import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isAuthenticated: false
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_IS_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload
    }
  },
  actions: {
    join({ commit }, { email, password }) {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user)
          commit('SET_USER', user)
          commit('SET_IS_AUTHENTICATED', true)
        })
        .catch(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
    },
    login({ commit }, { email, password }) {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          console.log(user)
          commit('SET_USER', user)
          commit('SET_IS_AUTHENTICATED', true)
        })
        .catch(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
    },
    logout({ commit }) {
      return firebase
        .auth()
        .signOut()
        .then(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
        .catch(() => {
          commit('SET_USER', null)
          commit('SET_IS_AUTHENTICATED', false)
        })
    }
  },
  getters: {
    loggedIn(state) {
      return !!state.user
    }
  }
})