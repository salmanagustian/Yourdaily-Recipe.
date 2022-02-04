export default {
    namespaced: true,
    state: {
        recipe: {},
    },
    mutations: {
        set: (state, payload) => {
            state.recipe = payload;
        },
    },
    actions: {
        set: ({commit}, payload) => {
            commit('set', payload);
        },
    },
    getters: {
        all: state => state.recipe,
    },
}