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
    <input type="checkbox" id="menu" style="display: none" />
    <label for="menu"><i class="bx bx-menu"></i></label>
    <div class="nav">
      <router-link to="/members">成員</router-link>
      <router-link to="/contact">聯絡我們</router-link>
    </div>
    <div class="menu">
      <router-link to="/members">成員</router-link>
      <router-link to="/contact">聯絡我們</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../scss/global.scss";
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
  i {
    display: none;
    font-size: 28px;
    color: #fff;
  }
  .nav {
    a {
      margin-right: 15px;
      font-size: 1.1rem;
      color: #fff;
      text-decoration: none;
    }
  }
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
  .menu {
    position: absolute;
    top: 68px;
    left: 0;
    background-color: #fab340;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    display: none;
    transition: 0.2s;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 1rem;
      margin-bottom: 10px;
    }
  }
  @include phone {
    .menu {
      height: 0px;
    }
    #menu:checked ~ .menu {
      display: flex;
      height: auto;
    }
    i {
      display: inline;
    }
    .nav {
      display: none;
    }
  }
}
</style>
