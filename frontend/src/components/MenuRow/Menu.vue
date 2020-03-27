<template>
  <v-dialog v-model="isMenuOn" width="500">
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
        <v-btn color="primary" text @click="isMenuOn = false">
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<style lang="scss"></style>
<script>
export default {
  data: () => {
    return {
      menu: "짜장면: 사천원, 짬뽕: 오천원, 탕수육: 만원",
      isMenuOn: false
    };
  }
};
</script>
