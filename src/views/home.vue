<script lang="ts" setup>
import bannerVue from "../components/banner.vue";
import navbarVue from "../components/navbar.vue";
import welcomeVue from "../components/welcome.vue";
import goalVue from "../components/goal.vue";
import linksVue from "../components/links.vue";
import faqVue from "../components/faq.vue";
import membersVue from "../components/members.vue";
import footerVue from "../components/footer.vue";
import socialVue from "../components/social.vue";

import { apiUrl } from "../api";
import { topMemberList } from "../data/members";
import { onMounted } from "vue";
onMounted(() => {
  fetch(apiUrl);
});
</script>

<template>
  <div class="home">
    <navbar-vue></navbar-vue>
    <welcome-vue></welcome-vue>
    <goal-vue></goal-vue>
    <social-vue></social-vue>
    <links-vue></links-vue>
    <faq-vue></faq-vue>
    <members-vue
      title="核心成員 Core Members"
      :show-more="true"
      :list="topMemberList"
    ></members-vue>
    <footer-vue></footer-vue>
  </div>
</template>

<style lang="scss">
.home {
  width: 100vw;
  position: relative;
}
</style>
