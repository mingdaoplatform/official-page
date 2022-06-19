<script lang="ts" setup>
import bannerVue from "../components/banner.vue";
import welcomeVue from "../components/welcome.vue";
import goalVue from "../components/goal.vue";
import linksVue from "../components/links.vue";
import faqVue from "../components/faq.vue";
import membersVue from "../components/members.vue";
import footerVue from "../components/footer.vue";

import { topMemberList } from "../data/members";
</script>

<template>
  <div class="home">
    <banner-vue></banner-vue>
    <welcome-vue></welcome-vue>
    <goal-vue></goal-vue>
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
  overflow-x: hidden;
}
</style>
