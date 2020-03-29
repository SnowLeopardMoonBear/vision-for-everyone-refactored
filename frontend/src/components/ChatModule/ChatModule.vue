<template>
  <basic-vue-chat
    v-bind:style="chatStyle"
    :title="'아래는 키위 채팅창입니다'"
    @newOwnMessage="sendToServer"
    :new-message="message"
    :initial-feed="feed"
  />
</template>
<style lang="scss">
.whitetext {
  color: white;
}

// scss로 채팅모듈의 색상값을 변경했으나 오류 있음
$primary: #00cc33;
$secondary: #663322;
$window-width: 100%;

@import "~basic-vue-chat/src/assets/scss/main.scss";

// (버그) run serve 한 뒤에 import를 주석달았다 해제하면 스타일 반영됨. 브라우저상에서 새로고침하면 또 안됨 ㄷ
// 게다가 오버라이드 반영될 땐 오가는 채팅이 늘수록 계속 창 길이 늘어남.
</style>
<script>
// Variables only used in this vue file are stored below.
import BasicVueChat from "basic-vue-chat";
import generatedId from "../ClientIdGenerator.js";
export default {
  components: { BasicVueChat },
  data: () => {
    return {
      clientId: generatedId,
      feed: [
        {
          id: 1,
          author: "키위봇",
          contents:
            "안녕하세요, 함께하는 키오스크 키위입니다. 주문을 시작하시려면 안녕이라고 입력한 뒤 엔터 또는 리턴 키를 눌러주세요",
          date: ""
        }
      ],
      message: {}
    };
  },
  computed: {
    chatStyle() {
      return this.$store.getters.chatStyle;
    }
  },
  mounted() {
    this.$socket.on("receive chat", data => {
      this.feed.push({
        id: 1,
        author: "키위봇",
        contents: data,
        date: "" //date에 빈 스트링을 넣은 이유는, 불필요한 구성요소 제거하여 voiceover사용시 스와이프 횟수 줄이기 위함
      });
    //   this.playChime();
      // 메시지 회신시 알림벨, 작동하지 않음(버그)
      // var chime = new Audio();
      // chime.src = "./chime.mp3";
      // chime.volume = 100;
      // this.chime.play();
    });
  },
  methods: {
    //send message to our server to communicate with DF
    sendToServer(msgString) {
      var msg = {
        msgText: msgString,
        clientId: this.clientId
      };
      this.$socket.emit("send chat", msg);
    },
    // Chime error...
    playChime() {
      var audio = new Audio();
      audio.src = '../../public/chime.mp3';
      audio.play();
    }
  }
};
</script>
