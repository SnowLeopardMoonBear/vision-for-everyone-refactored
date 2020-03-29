<template>
  <v-container style="z-index: -2" no-gutters class="grey lighten-3">
    <v-row no-gutters>
      <v-col>
        <font-smaller />
      </v-col>
      <v-col>
        <font-bigger />
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss"></style>
<script>
import FontBigger from "./FontBigger";
import FontSmaller from "./FontSmaller";

export default {
  components: { FontBigger, FontSmaller },
  data: () => {},
  methods: {}
};
</script>
