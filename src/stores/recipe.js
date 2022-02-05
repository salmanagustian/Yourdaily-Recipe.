export default {
    namespaced: true,
    state: {
        recipes: [],
    },
    mutations: {
        insert: (state, payload) => {
            state.recipes = payload;
        },
    },
    actions: {
        add: ({commit}, payload) => {
            commit('insert', payload);
        },
    },
    getters: {
        recipes: state => state.recipes,
    },
}