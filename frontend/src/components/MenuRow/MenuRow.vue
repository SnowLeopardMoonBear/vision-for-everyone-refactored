<template>
  <v-row no-gutters>
    <v-col>
      <Menu/> <!-- Can't figure out why 'menu' isn't recognized. Component naming convention in template is kebab-case-->
    </v-col>
    <!-- 메뉴팝업끝 -->
    <!-- 여기서부터 이벤트메뉴-->
    <v-col>
      <store-event />
    </v-col>
    <!-- 이벤트 팝업 끝 -->
    <!-- 직원호출버튼 -->
    <v-col>
      <call-staff />
    </v-col>
    <!-- 직원호출버튼 끝 -->
  </v-row>
</template>
<style lang="scss"></style>
<script>
//To distinguish them from other variables, use upper camel case for components in script.
import Menu from './Menu.vue';
import StoreEvent from './StoreEvent.vue';
import CallStaff from './CallStaff';
export default {
  components: {Menu, StoreEvent, CallStaff},

  data: () => {
    return {

    }
  }
};
</script>
