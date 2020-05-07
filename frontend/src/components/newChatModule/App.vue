<template>
  <div class="app" id="app">
    <message-window />
    <input-bar />
  </div>
</template>

<script>
import MessageWindow from "./components/chat/message/MessageWindow.vue";
import InputBar from "./components/chat/input/InputBar.vue";

export default {
  name: "App",
  components: {
    MessageWindow,
    InputBar,
  },
};
</script>

<style>
/* 지금 남아있는 문제점
1. 클래스마다 특정 값이 지정되어있는데, 변수값으로 다이나믹하게 스타일을 바꾸는게 불가능
2. 메시지 하나마다 DOM 줄바꿈이 안 됨
3. style은 아니지만 메시지 송수신 로직이 구현 안됨
 */
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#app {
  /* my code */
  float: center;
  height:50vh;
  background-color: #f8f6f6;
  border-radius: 10px;
}
.time {
  font-size: 10px;
}
</style>
