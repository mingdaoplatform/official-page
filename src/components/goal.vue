<script lang="ts" setup>
import { reactive } from "vue";
import "animate.css";
const texts = reactive([
  "黃金七八月感到迷惘嗎?",
  "黃金七八月想要找人一起讀書嗎?",
  "黃金七八月沒有人問問題嗎?",
  "歡迎來到「做個問題兒童」平台~",
  "在這個平台 一年前與你們走過相同路的學長姐",
  "來幫你們了!",
  "討論問題 小試身手 甚至於分享心路歷程",
  "都在這裡找我們呦~",
  "培養問問題的能力，會成為你成功路上的跳板",
  "做個問題兒童，考試科科沒問題！",
]);
</script>

<template>
  <div class="goal">
    <p class="animate__wobble" v-for="i in texts" :key="i">
      {{ i }}
    </p>
  </div>
</template>

<style lang="scss">
.goal {
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 0 10px 50px 10px;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 25px;
    font-size: 1.3rem;
    font-weight: 400;
    color: #7e7e7e;
    width: 100%;
    text-align: center;
    transition: 0.3s;
    &:hover {
      color: #232323;
      cursor: default;
      transform: scale(110%);
    }
  }
}
</style>
