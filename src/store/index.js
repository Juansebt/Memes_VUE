import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Memes",
    memes: [],
  },
  getters: {
  },
  mutations: {
    setMemes(state, payload) {
      state.memes = payload;
    }
  },
  actions: {
    async getMemes({commit}) {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();

        commit("setMemes", result.data.memes);

        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
