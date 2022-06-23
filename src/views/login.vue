<script lang="ts" setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import navbarVue from "../components/navbar.vue";
import router from "../router";
const tokenInput = ref("");
const login = async () => {
  try {
    const res = await axios.post(
      `https://beaproblemchild.herokuapp.com/auth/${tokenInput.value}`
    );
    if (res.data == "") {
      alert("金鑰錯誤");
    } else {
      localStorage.setItem("TOKEN", res.data);
      alert("登入成功");
      location.assign("/");
    }
  } catch (err) {
    alert("伺服器錯誤");
    router.push("/");
  }
};
onMounted(() => {
  const token = localStorage.getItem("TOKEN");
  if (token) {
    localStorage.clear();
    alert("成功登出");
    location.assign("/");
  }
});
</script>

<template>
  <navbar-vue></navbar-vue>
  <div class="login">
    <h1>Admin Login 管理員登入</h1>
    <input type="text" v-model="tokenInput" placeholder="請輸入金鑰" />
    <button @click="login">登入</button>
  </div>
</template>

<style lang="scss" scoped>
.login {
  width: 500px;
  max-width: 90vw;
  background-color: #fff;
  margin: 20px auto;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
  input {
    margin: 20px;
    width: 80%;
    font-size: 1rem;
    padding: 2px 5px;
    border-radius: 5px;
    border: 1px solid #696969;
    outline: none;
    transition: 0.2s;
    &:focus {
      border: 1.4px solid #fab340;
    }
  }
  button {
    padding: 2px 15px;
    font-size: 1rem;
    border: none;
    background-color: #fab340;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
