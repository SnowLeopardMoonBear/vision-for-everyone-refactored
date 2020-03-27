<template>
  <v-row no-gutters>
    <v-col>
      <Menu />
    </v-col>
    <!-- 메뉴팝업끝 -->
    <!-- 여기서부터 이벤트메뉴-->
    <v-col>
      <Event />
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
</template>
<style lang="scss"></style>
<script>
export default {};
</script>
