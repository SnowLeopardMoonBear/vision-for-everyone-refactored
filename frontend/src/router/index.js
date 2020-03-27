import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Kiwe from "@/views/Kiwe.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/kiwe",
      name: "Kiwe",
      component: Kiwe
    }
  ]
});
