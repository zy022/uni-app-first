import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    setuserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  action: {

  },
  // plugins: [createPersistedstate({
  //   paths: []
  // })]
})
export default store