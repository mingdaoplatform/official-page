<script lang="ts" setup>
import { reactive } from "vue";
import { linkGroup } from "../data/link";
import type { Link } from "../data/link";
const links = reactive<Array<Link>>(linkGroup);
</script>

<template>
  <div class="linksBlock">
    <h2>我們需要你的戳戳 Links</h2>
    <div class="links">
      <div class="linkBlock" v-for="i in links">
        <div class="link">
          <a target="_blank" :href="i.href">{{ i.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.linksBlock {
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #232323;
  }
  .links {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px 10px;
    .linkBlock {
      margin: 20px;
      .link {
        width: 300px;
        max-width: 90vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px 30px;
        transition: 0.2s;
        text-align: center;
        &:hover {
          transform: scale(110%);
        }
        a {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
