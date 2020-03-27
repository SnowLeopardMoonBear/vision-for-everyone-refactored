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
        <!-- 여기서부터 메뉴버튼 -->
        <v-row no-gutters>
          <v-col>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on }">
                <v-btn
                  class="title font-weight-bold"
                  color="green lighten-1"
                  height="30px"
                  :elevation="5"
                  width="100%"
                  dark
                  v-on="on"
                >
                  메뉴
                </v-btn>
              </template>
              <!-- 메뉴팝업 안에 들어가는 내용 -->
              <v-card>
                <v-card-title>메뉴</v-card-title>
                <v-card-text style="font-size:20px;">{{ menu }}</v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    닫기
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <!-- 메뉴팝업끝 -->
          <!-- 여기서부터 이벤트메뉴-->
          <v-col>
            <v-dialog v-model="dialog2" width="500">
              <template v-slot:activator="{ on }">
                <v-btn
                  class="title font-weight-bold"
                  color="green lighten-1"
                  height="30px"
                  :elevation="5"
                  width="100%"
                  dark
                  v-on="on"
                >
                  이벤트
                </v-btn>
              </template>
              <!-- 이벤트 팝업 안에 들어가는 내용 -->
              <v-card>
                <v-card-title>신년맞이 이벤트!</v-card-title>
                <v-card-text style="font-size:20px;">{{ event }}</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog2 = false">
                    닫기
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <!-- 이벤트 팝업 끝 -->
          <!-- 직원호출버튼 -->
          <v-col>
            <v-btn
              class="title font-weight-bold"
              color="red lighten-4"
              height="30px"
              :elevation="5"
              width="100%"
              @click="prepareCall"
            >
              직원호출
            </v-btn>
          </v-col>
          <!-- 직원호출버튼 끝 -->
        </v-row>
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
    <v-container style="z-index: -2" no-gutters class="grey lighten-3">
      <v-row no-gutters>
        <v-col>
          <v-btn
            class="title font-weight-bold"
            color="red lighten-3"
            height="30px"
            :elevation="5"
            width="100%"
            dark
            @click="fontSmaller"
          >
            글자 줄이기
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="title font-weight-bold"
            color="red lighten-1"
            height="30px"
            :elevation="5"
            width="100%"
            dark
            @click="fontBigger"
          >
            글자 키우기
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
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
export default {
  components: { BasicVueChat },
  data: () => {
    return {
      chatStyle: "font-size: 150%;",
      fontSize: 150,
      isBig: true,
      clientId: generatedId,
      dialog: false, //메뉴팝업창 여부 결정 플래그. True가 될 시 팝업 나타남.
      dialog2: false, //이벤트팝업창 여부 결정 플래그
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
      menu: "짜장면: 사천원, 짬뽕: 오천원, 탕수육: 만원", // 메뉴팝업에 넣을 내용
      event: "앗! 짜장면, 신발보다 싸다!" // 이벤트팝업에 넣을 내용
    };
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

    fontBigger() {
      if (this.fontSize < 200) {
        this.fontSize += 25;
        this.chatStyle = `font-size: ${this.fontSize}%`;
      }
    },

    fontSmaller() {
      if (this.fontSize > 100) {
        this.fontSize -= 25;
        this.chatStyle = `font-size: ${this.fontSize}%`;
      }
    },

    changeFs() {
      if (this.isBig === true) {
        this.chatStyle = "font-size: 100%;";
        this.changeTextString = "글자크기 크게 변경";
        this.isBig = false;
      } else {
        this.chatStyle = "font-size: 150%;";
        this.changeTextString = "글자크기 작게 변경";
        this.isBig = true;
      }
    },

    prepareCall() {
      window.alert("직원호출 기능은 추후 점주와 협의하여 제공할 계획입니다.");
    },

    // chime() {
    //   var chime = new Audio();
    //   chime.src = "./chime.mp3";
    //   chime.volume = 100;
    //   this.chime.play();
    // }
    playChime() {
      var audio = new Audio();
      audio.src = '../../public/chime.mp3';
      audio.play();
    }
  }
};
</script>
