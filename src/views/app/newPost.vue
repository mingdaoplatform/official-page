<script lang="ts" setup>
import { ref } from "vue";
import { apiUrl } from "../../api";
import router from "../../router";
import imgur from "imgur";
import axios from "axios";

let fileData: any = null;
let fileType = "";
const requestLoading = ref(false);
const fileHtml = ref(`拖曳或點按上傳檔案<br> < 3Mb x 1張`);
const fileChange = (e: Event | any) => {
  const itemArray = [...e.target.files];
  console.warn(itemArray);
  try {
    fileData = itemArray.find((i) => i.type.startsWith("image/"));
    if (fileData.type == "image/jpeg") fileType = ".jpeg";
    else if (fileData.type == "image/png") fileType = ".png";
    else {
      alert("檔案類型不支援 (僅支援 png、 jpeg)");
      fileData = null;
    }
  } catch {
    alert("請上傳圖片");
    return;
  }
  fileHtml.value = `以上傳 ${fileData.name}`;
};

const subjectSelected = ref("");
const content = ref("");
const add = async () => {
  if (subjectSelected.value == "") {
    alert("請選擇科目");
    return;
  }
  if (content.value == "") {
    alert("請填入問題內容");
    return;
  }
  requestLoading.value = true;
  let imgUrl = "";
  if (fileData != null) {
    try {
      const client = new imgur({ clientId: "fb27b0fc59c68a1" });
      const response: any = await client.upload({
        image: fileData,
        type: "stream",
      });
      imgUrl = response.data.link;
    } catch (err) {
      requestLoading.value = true;
      alert("圖片上傳失敗");
    }
  }
  const injectData = {
    subject: Number(subjectSelected.value),
    content: content.value,
    imgUrl: imgUrl,
  };
  console.warn(injectData);
  try {
    const result = await axios.post(`${apiUrl}/post/add`, injectData);
    requestLoading.value = true;
    const data = result.data;
    if (data.code) {
      alert("資料錯誤(403) 請至「聯繫我們」頁面聯繫技術人員");
    }
    location.assign("/app/");
  } catch (err) {
    requestLoading.value = true;
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
      <option value="">請選擇科目 (必填)</option>
      <option value="0">國文</option>
      <option value="1">英文</option>
      <option value="2">數學</option>
      <option value="3">社會</option>
      <option value="4">自然</option>
    </select>
    <input type="file" @change="fileChange" id="ImgUpload" />
    <label for="ImgUpload" v-html="fileHtml"></label>
    <button v-if="requestLoading"><i class="bx bx-loader bx-spin"></i></button>
    <button v-else @click="add">送出</button>
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

  input[type="file"] {
    display: none;
  }

  label {
    margin: 10px;
    padding: 10px 25px;
    border: 1px solid #fab340;
    background-color: #fab3404f;
    color: #fab340;
    text-align: center;
    border-radius: 5px;
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
    i {
      font-size: 20px;
    }
  }
}
</style>
