<script lang="ts" setup>
import bannerVue from "../components/banner.vue";
import welcomeVue from "../components/welcome.vue";
import goalVue from "../components/goal.vue";
import linksVue from "../components/links.vue";
</script>

<template>
  <div class="home">
    <banner-vue></banner-vue>
    <welcome-vue></welcome-vue>
    <goal-vue></goal-vue>
    <links-vue></links-vue>
  </div>
</template>

<style lang="scss">
.home {
  width: 100vw;
  overflow-x: hidden;
}
</style>
