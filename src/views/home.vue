<script lang="ts" setup>
import bannerVue from "../components/banner.vue";
import welcomeVue from "../components/welcome.vue";
import goalVue from "../components/goal.vue";
import linksVue from "../components/links.vue";
import faqVue from "../components/faq.vue";
import membersVue from "../components/members.vue";
import footerVue from "../components/footer.vue";
</script>

<template>
  <div class="home">
    <banner-vue></banner-vue>
    <welcome-vue></welcome-vue>
    <goal-vue></goal-vue>
    <links-vue></links-vue>
    <faq-vue></faq-vue>
    <members-vue></members-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<style lang="scss">
.home {
  width: 100vw;
  overflow-x: hidden;
}
</style>
