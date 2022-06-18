<script lang="ts" setup>
import { reactive } from "vue";

interface link {
  title: string;
  url: string;
}
const links = reactive<Array<link>>([
  {
    title: "聯絡我們",
    url: "/contact",
  },
]);
</script>

<template>
  <footer>
    <div class="infos">
      <div class="detail">
        <i class="bx bxl-instagram"></i
        ><a
          target="_blank"
          href="https://www.instagram.com/beaproblemchild_2022/"
          >beaproblemchild_2022</a
        >
      </div>
    </div>
    <div class="linkBar">
      <router-link v-for="i in links" :to="i.url">{{ i.title }}</router-link>
    </div>
    <div class="copyright">
      Copyright © 2022 beaproblemchild. All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  color: #ffffff;
  padding: 50px 0 20px 0;

  .linkBar {
    margin-bottom: 20px;
  }
  .infos {
    margin-bottom: 10px;
    .detail {
      display: flex;
      i {
        font-size: 28px;
        margin-right: 10px;
        color: #ffffff;
      }
    }
  }
}
</style>
