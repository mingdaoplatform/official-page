<script lang="ts" setup>
import navbarVue from "../components/navbar.vue";
const subList = [
  {
    name: "國文",
    index: 0,
  },
  {
    name: "英文",
    index: 0,
  },
  {
    name: "數學",
    index: 0,
  },
  {
    name: "社會",
    index: 0,
  },
  {
    name: "自然",
    index: 0,
  },
];
</script>

<template>
  <div class="appPage">
    <navbar-vue></navbar-vue>
    <div class="app">
      <div class="wrap">
        <div class="subjects">
          <div class="sub" v-for="i in subList">
            {{ i.name }}
          </div>
        </div>
        <div class="posts"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.appPage {
  .app {
    .wrap {
      display: flex;
      max-width: 1440px;
      margin: 20px auto;
      .subjects {
        padding: 10px 0;
        background-color: #fff;
        border-radius: 8px;
        .sub {
          &:hover {
            background-color: #eee;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #eee;
          }
          cursor: pointer;
          transition: 0.2s;
          padding: 5px 120px;
          font-size: 1.2rem;
          text-align: center;
          color: #919191;
        }
      }
    }
  }
}
</style>
