<script lang="ts" setup>
import { reactive } from "vue";
import { linkGroup } from "../data/link";
import type { Link } from "../data/link";
const links = reactive<Array<Link>>(linkGroup);
</script>

<template>
  <div class="linkBlock">
    <h2>連結區 Links</h2>
    <div class="links">
      <div class="linkBlock" v-for="i in links">
        <div class="link">
          <a :href="i.href">{{ i.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.linkBlock {
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
        max-width: 4000px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px 30px;
        a {
          font-size: 1.3rem;
          color: #ffcf90;
        }
      }
    }
  }
}
</style>
