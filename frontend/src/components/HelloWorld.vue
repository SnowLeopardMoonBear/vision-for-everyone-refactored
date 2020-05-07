<template>
  <v-container no-gutters class="red lighten-5">
    <meta
      name="viewport"
      content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
    /> <!--to prevent zoom in/out-->
    <v-layout text-center wrap>
      <div style="height:3px"></div>
      <v-container no-gutters class="grey lighten-3">
        <menu-row/> <!--menu, store event, call staff buttons-->
      </v-container>
    </v-layout>
    <!-- <chat-module /> -->
    <new-chat-module /> <!--new chat window-->
    <!-- <font-size-row/> fontbigger, fontsmaller buttons -->
  </v-container>
</template>

<script>
import MenuRow from './MenuRow/MenuRow.vue';
// import ChatModule from './ChatModule/ChatModule.vue';
import NewChatModule from './NewChatModule/App.vue';
// import FontSizeRow from './FontSizeRow/FontSizeRow.vue';
export default {
  components: { MenuRow, NewChatModule },
};
</script>
