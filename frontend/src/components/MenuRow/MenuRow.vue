<template>
  <v-row no-gutters>
    <v-col>
      <Menu />
    </v-col>
    <!-- 메뉴팝업끝 -->
    <!-- 여기서부터 이벤트메뉴-->
    <v-col>
      <StoreEvent />
    </v-col>
    <!-- 이벤트 팝업 끝 -->
    <!-- 직원호출버튼 -->
    <v-col>
      <CallStaff />
    </v-col>
    <!-- 직원호출버튼 끝 -->
  </v-row>
</template>
<style lang="scss"></style>
<script>
export default {
  components: {Menu, StoreEvent, CallStaff},

  data: () => {
    return {

    }
  }
};
</script>
