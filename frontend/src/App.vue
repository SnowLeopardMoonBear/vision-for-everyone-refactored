<template>
  <!-- 최상위 Vue 컴포넌트 -->
  <v-app>
    <div>
      <v-dialog v-model="dialog" width="500" height="700">
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
            alt="키위 앱 해더"
          >
            키위 소개
          </v-card-title>

          <v-card-text style="font-size:150%" alt="키위 소개 내용 문단">
            <br />
            <h3>키위 간단 시작 가이드</h3>
            <br />
            <ul style="background-color:#f0f0f0;">
              <b>1.</b>
              함께하는 키오스크 키위는, 버튼 세 개 아래에 채팅창이 있어요.<br />
              <br />
            </ul>

            <ul>
              <b>2.</b>
              버튼을 눌러 메뉴와 이벤트를 확인하거나 직원을 호출할 수 있어요.<br />
              <br />
            </ul>

            <ul style="background-color:#f0f0f0;">
              <b>3.</b>
              채팅창에서는 카톡처럼 대화하며 어디서 뭘 먹을지 고르고 결제까지 할
              수 있답니다.<br />
              <br />
            </ul>

            <ul>
              <b>4.</b>
              주문을 도와주는 인공지능, 키위봇과 대화를 시작해요. 텍스트입력
              창에 안녕, 또는 ㅎㅇ처럼 초성을 입력해주세요.<br />
              <br />
            </ul>

            <ul style="background-color:#f0f0f0;">
              <b>5.</b>
              키위봇이 대답하면 원하는 식당을 알려주세요. 테스트할 식당으로
              애기능 또는 ㅇㄱㄴ을 입력합니다.<br />
              <br />
            </ul>

            <ul>
              <b>6.</b>
              키위봇이 주문할 메뉴의 이름과 수량을 입력해주세요. 짜장면 3 혹은
              ㅉㅈㅁ3 처럼요.<br />
              <br />
            </ul>

            <ul style="background-color:#f0f0f0;">
              <b>7.</b>
              카카오페이, 삼성페이, 토스 등 결제방법을 선택해주세요. 예를 들면
              삼성페이, ㅋㅋㅇ와 같이요.<br />
              <br />
            </ul>

            <ul>
              <b>8.</b>
              웹훅으로 결제모듈 연결이란 메시지가 나오면 대화가 끝나요. 앞으로
              결제 사이트와 식당에 연결하는 부분을 넣을 거예요. 대화를 처음부터
              다시 시작하시려면 안녕 또는 ㅎㅇ라고 입력해주세요.<br />
              <br />
            </ul>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="Change()" alt="베타테스트 버튼">
              테스트하러 가기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <v-app-bar app color="#8ff381" dark>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2 body-1">홈으로</span>
      </v-btn>
      <v-toolbar-title>
        <span class="font-weight-bold headline"></span>
        <span class="font-weight-light headline"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2 body-1">마이페이지</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    dialog: true,
    forVoiceover: true
  }),
  methods: {
    Change() {
      this.dialog = false;
      this.forVoiceover = false;
    }
  }
};
</script>
<style lang="scss"></style>
