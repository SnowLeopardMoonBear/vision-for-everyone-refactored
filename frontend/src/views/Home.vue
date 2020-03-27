<template>
  <div class="app">
    <v-app-bar app color="green lighten-1" dark>
      <div
          primary-title
          alt="키위 앱 해더"
        >
        키위 소개
      </div>
    </v-app-bar>

    <v-card class="card">
      <v-card-text class="card-text" alt="키위 소개 내용 문단">
        <h3>키위 간단 시작 가이드</h3>
        <ul style="background-color:#f0f0f0;">
          <div class="textbox">
            <b>1.</b> <div class="textbox-content">
              함께하는 키오스크 키위는, 버튼 세 개 아래에 채팅창이 있어요.
            </div>
          </div>
        </ul>
        <ul>
          <div class="textbox">
            <b>2.</b> <div class="textbox-content">
              버튼을 눌러 메뉴와 이벤트를 확인하거나 직원을 호출할 수 있어요.
            </div>
          </div>
        </ul>
        <ul style="background-color:#f0f0f0;">
          <div class="textbox">
            <b>3.</b> <div class="textbox-content">
              채팅창에서는 카톡처럼 대화하며 어디서 뭘 먹을지 고르고 결제까지
              할 수 있답니다.
            </div>
          </div>
        </ul>
        <ul>
          <div class="textbox">
            <b>4.</b> <div class="textbox-content">
              주문을 도와주는 인공지능, 키위봇과 대화를 시작해요. 텍스트입력
              창에 안녕, 또는 ㅎㅇ처럼 초성을 입력해주세요.
            </div>
          </div>
        </ul>
        <ul style="background-color:#f0f0f0;">
          <div class="textbox">
            <b>5.</b> <div class="textbox-content">
              키위봇이 대답하면 원하는 식당을 알려주세요. 테스트할 식당으로
              애기능 또는 ㅇㄱㄴ을 입력합니다.
            </div>
          </div>
        </ul>
        <ul>
          <div class="textbox">
            <b>6.</b> <div class="textbox-content">
              키위봇이 주문할 메뉴의 이름과 수량을 입력해주세요. 짜장면 3
              혹은 ㅉㅈㅁ3 처럼요.
            </div>
          </div>
        </ul>
        <ul style="background-color:#f0f0f0;">
          <div class="textbox">
            <b>7.</b> <div class="textbox-content">
              카카오페이, 삼성페이, 토스 등 결제방법을 선택해주세요. 예를
              들면 삼성페이, ㅋㅋㅇ와 같이요.
            </div>
          </div>
        </ul>
        <ul>
          <div class="textbox">
            <b>8.</b> <div class="textbox-content">
              웹훅으로 결제모듈 연결이란 메시지가 나오면 대화가 끝나요.
              앞으로 결제 사이트와 식당에 연결하는 부분을 넣을 거예요. 대화를
              처음부터 다시 시작하시려면 안녕 또는 ㅎㅇ라고 입력해주세요.
            </div>
          </div>
        </ul>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn rounded color="#66bb6a" class="button" @click="$router.push('/kiwe')" alt="베타테스트 버튼">
          테스트하러 가기
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
ul {
  height: 120px;
}

h3 {
  margin: 100px 0px 50px 0px;
}

.card {
  .card-text {
    font-size: 150%;
    .textbox {
      display: flex;
      padding-top: 15px;
      .textbox-content {
        text-align: justify;
        margin-left: 10px;
      }
    }
  }
  .button {
    width: 100%;
    margin-top: 25px;
    color: white;
    font-size: 150%;
    font-weight: bold;
  }
}
</style>