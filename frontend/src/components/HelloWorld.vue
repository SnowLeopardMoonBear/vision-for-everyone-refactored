<template>
  <!-- Hellowolrd.vue는 채팅페이지 전반을 담은 단일파일컴포넌트 -->
  <!-- 아래는 컴포넌트 템플릿 -->
  <v-container no-gutters class="grey lighten-3">
    <!-- 아래 한 줄은 input 창 눌러도 확대되지 않도록 페이지 고정하는 역할 -->
    <meta
      name="viewport"
      content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
    />
    <v-layout text-center wrap>
      <div style="height:3px"></div>
      <v-container no-gutters class="grey lighten-3">
        <menu-row/> <!-- row with menu, store event, call staff buttons -->
      </v-container>
    </v-layout>
    <!-- 이하는 npm에서 내려받은 basic-vue-chat 모듈. 
    모듈의 편의성이 아쉽고 버그가 있어, 추후 이 모듈을 수정해 github에 올린 뒤 거기서 불러오는 방식으로 바꿀 계획-->
    <BasicVueChat
      v-bind:style="chatStyle"
      :title="'아래는 키위 채팅창입니다'"
      @newOwnMessage="dfCom"
      :new-message="message"
      :initial-feed="feed"
    />
    <font-size-row/> <!-- row with fontbigger, fontsmaller buttons -->
  <div> {{this.$store.state.fontSize}} {{this.$store.getters.chatStyle}}</div>
  </v-container>
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
import BasicVueChat from "basic-vue-chat";
import generatedId from "./ClientIdGenerator";
import MenuRow from './MenuRow/MenuRow.vue';
import FontSizeRow from './FontSizeRow/FontSizeRow.vue';
export default {
  components: { BasicVueChat, MenuRow, FontSizeRow },
  data: () => {
    return {
      fontSize: 150,
      clientId: generatedId,
      // 채팅 모듈에 기본으로 뜨는 메시지. 여러 개도 가능.
      feed: [
        {
          id: 1,
          author: "키위봇",
          contents:
            "안녕하세요, 함께하는 키오스크 키위입니다. 주문을 시작하시려면 안녕이라고 입력한 뒤 엔터 또는 리턴 키를 눌러주세요",
          date: ""
        }
      ],
      // 채팅창에 띄워줄 DF의 응답메시지를 저장
      message: {},
    };
  },
  computed: {
    chatStyle () {
      return this.$store.getters.chatStyle;
    }
  },
  // 뷰 인스턴스 마운트시 DF에서 우리측 서버로 온 메시지를 받는 소켓 이벤트 등록
  mounted() {
    this.$socket.on("receive chat", data => {
      this.feed.push({
        id: 1,
        author: "키위봇",
        contents: data,
        date: "" //date에 빈 스트링을 넣은 이유는, 불필요한 구성요소 제거하여 voiceover사용시 스와이프 횟수 줄이기 위함
      });
      this.playChime();
      // 메시지 회신시 알림벨, 작동하지 않음(버그)
      // var chime = new Audio();
      // chime.src = "./chime.mp3";
      // chime.volume = 100;
      // this.chime.play();
    });
  },

  methods: {
    // send 버튼과 연동되어 메시지를 보내는 함수. 마운트시 등록된 소켓 이벤트를 유발
    dfCom(msgString) {
      var msg = {
        msgText: msgString,
        clientId: this.clientId
      };
      this.$socket.emit("send chat", msg); // "send chat" 이벤트에 msg 이름으로 메시지 스트링 보냄.
      // this.chime();
    },

    playChime() {
      var audio = new Audio();
      audio.src = '../../public/chime.mp3';
      audio.play();
    }
  }
};
</script>
