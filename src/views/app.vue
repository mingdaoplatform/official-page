<script lang="ts" setup>
import navbarVue from "../components/navbar.vue";
</script>

<template>
  <div class="appPage">
    <navbar-vue></navbar-vue>
    <router-view></router-view>
  </div>
</template>
