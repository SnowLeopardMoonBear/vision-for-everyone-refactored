<template>
  <div class="input-bar">
    <div class="message-input">
      <input
        @keyup.enter="sendMessage()"
        class="input"
        type="text"
        v-model="inputText"
        placeholder="메시지를 입력해주세요"
      />
      <div class="send-button" @click="sendMessage()">보내기</div>
    </div>
    <!-- style은 v-bind:style="(var name)"과 같이-->
  </div>
</template>

<script>
import { scrollToBottom } from "./scroll.js";
import generatedId from "../../../../ClientIdGenerator.js";
export default {
  mounted() {
    this.$socket.on("receive chat", (data) => {
      var msgToStore = {
        is_DF: true,
        content: data,
        time: this.getCurrentTime(),
      };
      this.$store.commit("pushMessage", msgToStore);
      this.sendChime();
      scrollToBottom();
    });
  },
  methods: {
    getCurrentTime() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      return `${hours > 9 ? `${hours}` : `0${hours}`}시 
      ${minutes > 9 ? `${minutes}` : `0${minutes}`}분`;
    },
    sendChime() {
      this.$chime.play();
    },
    sendMessage() {
      if (this.inputText !== "") {
        var msgToStore = {
          is_DF: false,
          content: this.inputText,
          time: this.getCurrentTime(),
        };
        var msgToSend = {
          msgText: this.inputText,
          clientId: this.clientId,
        };
        this.$socket.emit("send chat", msgToSend);
        this.$store.commit("pushMessage", msgToStore);
        this.inputText = "";
        this.sendChime();
        scrollToBottom();
      }
    },

    // sendMessage() {
    //   if (inputText === '') {
    //     return;
    //   }
    //   this.$store.commit("sendMsg", { inputText });
    //   inputText = '';
    // },
  },
  data: () => {
    return {
      inputText: "",
      clientId: generatedId,
    };
  },
};
</script>
<style>
.input-bar {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 1%;
  float: center;
  background-color: rgb(221, 252, 221);
  border-radius: 5px;
  vertical-align: bottom;
}
.send-button {
  width: 15%;
  height: 6%;
  margin-top: 1.25%;
  margin-right: 1%;
  border-radius: 3px;
  font-size: 12px;
  float: right;
  font-weight: bolder;
  background-color: #b7f803;
  color: rgb(151, 150, 150);
  text-align: center;
}
.send-button:hover {
  background-color: #f9fc3d;
}
.input {
  width: 80%;
  margin: 1%;
  float: center;
  border-radius: 3px;
}
</style>
