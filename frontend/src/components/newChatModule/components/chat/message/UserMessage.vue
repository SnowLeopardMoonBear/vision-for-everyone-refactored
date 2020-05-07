<template>
<div class="message-line">
  <p class="user-message">
    <span class="time">{{ msg.time}}</span> {{ msg.content }} 
  </p>
</div>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style>
.user-message {
  color: rgb(85, 85, 85);
  position:relative;
  text-align:right;
  width:50%;
  float: right;
  background-color: rgb(143, 243, 129);
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 15px;
  padding: 3px;
}
.user-message:after {
 border-top:10px solid rgb(143, 243, 129);
 border-left: 0px solid transparent;
 border-right: 10px solid transparent;
 border-bottom: 0px solid transparent;
 content:"";
 position:absolute;
 top:5px;
 right:-10px;
}
.message-line{
  /* width:100%; */
}
</style>
