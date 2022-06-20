<script lang="ts" setup>
import Logo from "../assets/logo.png";
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <img :src="Logo" />
      <div class="title">
        <h1>做個問題兒童</h1>
        <h2>Beaproblemchild</h2>
      </div>
    </div>
    <div class="nav">
      <router-link to="/members">成員</router-link>
      <router-link to="/contact">聯絡我們</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100vw;
  padding: 10px 20px;
  background-color: #fab340;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      height: 40px;
      width: auto;
      margin-right: 10px;
    }
    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        font-size: 1.5rem;
        color: #232323;
      }
      h2 {
        margin-top: -5px;
        margin-left: 2px;
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
