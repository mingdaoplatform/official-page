<script lang="ts" setup>
import { ref } from "vue";
import { apiUrl } from "../../api";
import router from "../../router";
import axios from "axios";

const subjectSelected = ref("");
const content = ref("");
const add = async () => {
  const injectData = {
    subject: Number(subjectSelected.value),
    content: content.value,
  };
  try {
    if (subjectSelected.value == "") {
      alert("請選擇科目");
      return;
    }
    if (content.value == "") {
      alert("請填入問題內容");
      return;
    }
    const result = await axios.post(`${apiUrl}/post/add`, injectData);
    const data = result.data;
    if (data.code) {
      alert("資料錯誤(403) 請至「聯繫我們」頁面聯繫技術人員");
    }
    location.assign("/app/");
  } catch (err) {
    console.error(err);
    alert("伺服器錯誤 (500)");
    router.push("/");
  }
};
</script>

<template>
  <div class="new">
    <h1>新增問題</h1>
    <textarea name="content" v-model="content" id="content"></textarea>
    <select name="subject" v-model="subjectSelected" id="subject">
      <option value="0">國文</option>
      <option value="1">英文</option>
      <option value="2">數學</option>
      <option value="3">社會</option>
      <option value="4">自然</option>
    </select>
    <button @click="add">送出</button>
  </div>
</template>

<style lang="scss" scoped>
.new {
  width: 85vw;
  max-width: 1000px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    margin: 50px 20px 20px 20px;
    width: 100%;
    max-width: 800px;
    resize: none;
    font-size: 1rem;
    line-height: 25px;
    outline: none;
    border: none;
    background-color: #eeeeeee0;
    padding: 10px 15px;
    border-radius: 8px;
  }

  select {
    width: 100%;
    max-width: 200px;
    outline: none;
  }

  button {
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
    max-width: 300px;
    background-color: #fab340;
    border: 1px solid #fab340;
    outline: none;
    border-radius: 5px;
    padding: 5px 0;
    color: #fff;
  }
}
</style>
