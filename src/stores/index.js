import Vue from 'vue'
import Vuex from 'vuex'
import recipe from '@/stores/recipe';
import bookmark from '@/stores/bookmark';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    resultRecipe: false,
  },
  mutations: {
    set:(state, payload) => {
      state.loading = payload;
    },
    setResultRecipe: (state, payload) => {
       state.resultRecipe = payload;
    },
  },
  actions: {
    set: ({commit}, payload) => {
        commit('set', payload);
    },
    setResultRecipe: ({commit}, payload) => {
        commit('setResultRecipe', payload);
    },
  },
  getters: {
    loading : (state) => state.loading,
    resultRecipe : (state) => state.resultRecipe,
  },
  modules: {
    recipe,
    bookmark
  }
})
