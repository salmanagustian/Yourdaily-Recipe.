export default {
   namespaced: true,

   state: {
      bookmark: [],
   },

   mutations:  {
      insert: (state, payload) => {
         state.bookmark.push(payload);
     },
   },

   actions: {
      add: ({commit}, payload) => {
         commit('insert', payload);
     },
   },

   getters: {
      bookmarkCount: (state) => state.bookmark.length,
      bookmarkRecipe: (state) => state.bookmark,
   }
}