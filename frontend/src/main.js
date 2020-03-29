// 클라이언트 사이드 엔트리 파일. 클라이언트-서버(우리측) 통신 접점이 등록됨
import Vue from "vue"; // 뷰 모듈을 불러와 할당
import { store } from "./store.js";
import App from "./App.vue";
import io from "socket.io-client";
import vuetify from "./plugins/vuetify";

// 백엔드 URL(3001번 포트)과 소켓을 만들어 연결.(client용 socket.io)
var socket = io.connect("http://52.78.69.255:3001"); // AWS 인스턴스 고정IP로 확정

// 소켓을 전역변수 등록해 모든 컴포넌트에서 $socket으로 접근 가능케 함.
Vue.prototype.$socket = socket;
Vue.config.productionTip = false; // 프로덕션 설정

// Vue 인스턴스를 export된 App.vue의 app에 마운트. 모든 Vue 컴포넌트의 뿌리가 되는 Vue 객체
new Vue({
  vuetify,
  store: store,
  render: h => h(App)
}).$mount("#app");
