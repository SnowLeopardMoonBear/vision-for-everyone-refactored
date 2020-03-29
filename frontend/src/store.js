import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fontSize: 150
  },
  getters: {
    chatStyle: function(state) {
      return `font-size:${state.fontSize}%`;
    }
  },
  mutations: {
    fontBigger: function(state, payload) {
      if (state.fontSize < 200) {
        return (state.fontSize += payload.percentage);
      }
    },
    fontSmaller: function(state, payload) {
      if (state.fontSize > 100) {
        return (state.fontSize -= payload.percentage);
      }
    }
  }
});
