<template>
<div class="message-window" id="message-window">
  <div
    v-for="(message, index) in feed"
    :key="index">
    <user-message v-if="!message.is_DF" :msg="message"/>
    <df-message v-if="message.is_DF" :msg="message"/>
  </div>
</div>

</template>
<script>
import UserMessage from './UserMessage.vue';
import DfMessage from './DfMessage.vue';

export default {
  components: {UserMessage, DfMessage},
  methods: {},
  data: function () {
      return {
          feed: this.$store.state.newChat.messageList
      }
  },
};
</script>
<style>
.message-window{
    float: center;
    /* width: 50%; */
    height: 90%;
    background-color: #f8f6f6;
    border-radius: 10px;
    overflow-y: scroll;
}
.message-line{
    width:100%;
}
</style>
