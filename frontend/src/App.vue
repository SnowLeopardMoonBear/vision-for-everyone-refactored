<template>
  <v-app id="app">
    <router-view>
      <Home/>
    </router-view>
  </v-app>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
  }),
  methods: {
  }
};
</script>
