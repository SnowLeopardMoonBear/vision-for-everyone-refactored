import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fontSize: 150,
    feed: [
      {
        id: 1,
        author: "키위봇",
        contents:
          "안녕하세요, 함께하는 키오스크 키위입니다. 주문을 시작하시려면 안녕이라고 입력한 뒤 엔터 또는 리턴 키를 눌러주세요",
        date: ""
      }
    ],
    message: {
      
    }
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
