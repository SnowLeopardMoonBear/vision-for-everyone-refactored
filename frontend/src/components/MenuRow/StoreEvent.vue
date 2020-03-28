<template>
  <v-dialog v-model="isEventOn" width="500">
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
        <v-btn color="primary" text @click="isEventOn = false">
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
    return{
      isEventOn: false
    }
  },
  methods:{}
};
</script>
