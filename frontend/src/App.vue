<template>
<!-- 최상위 Vue 컴포넌트 -->
  <v-app>
    <div>
      <v-dialog
        v-model="dialog"
        width="500"
        height="700" 
        >
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
            alt="키위 앱 해더"
          >
            키위 소개
          </v-card-title>

          <v-card-text style="font-size:120%" alt="키위 소개 내용 문단">
            <h3>사용 방법</h3>
<ul>1. 텍스트입력 창에 ㅎㅇ 입력합니다.</ul>
<ul>2. 식당 이름으로  ㅇㄱㄴ 입력합니다.</ul>
<ul>3. 메뉴 이름으로 ㅉㅈㅁ3 입력합니다.</ul>
<ul>4. 결제방법은 ㅋㅋㅇ 입력합니다.</ul>
<ul>5. 웹훅으로 결제모듈 연결이란 메시지가 나오면 대화의 마지막입니다. 이 다음엔 추후 결제 사이트와 가맹식당에 연결하는 부분이 들어가게 됩니다. 대화를 처음부터 다시 시작하시려면 안녕 또는 ㅎㅇ라고 입력해주세요.</ul>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="Change()"
              alt="베타테스트 버튼"
            >
              테스트하러 가기
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <div v-bind:aria-hidden="forVoiceover" :key="forVoiceover">
      {forVoiceover}
      <v-app-bar app color="green lighten-1" dark>
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
        <HelloWorld/>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    dialog: true,
    forVoiceover: true,
  }),
  methods: {
    Change() {
      this.dialog = false;
      this.forVoiceover = false;
    }
  }
};
</script>