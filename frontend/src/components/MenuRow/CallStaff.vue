<template>
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
</template>
<style lang="scss"></style>
<script>
export default {
  methods: {
    prepareCall() {
      window.alert(
        "직원호출 기능은 추후 점주와 협의하여 제공할 계획입니다."
      );
    }
  }
};
</script>
