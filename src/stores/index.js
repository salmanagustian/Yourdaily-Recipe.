import Vue from 'vue'
import Vuex from 'vuex'
import recipe from '@/stores/recipe';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    set:(state, payload) => {
      state.loading = payload;
    },
  },
  actions: {
    set: ({commit}, payload) => {
        commit('set', payload);
    },
  },
  getters: {
    loading : (state) => state.loading,
  },
  modules: {
    recipe
  }
})
