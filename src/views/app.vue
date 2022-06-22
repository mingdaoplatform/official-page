<script lang="ts" setup>
import { ref, onMounted } from "vue";
import navbarVue from "../components/navbar.vue";
import { apiUrl } from "../api";
import { useRouter } from "vue-router";
const router = useRouter();

interface postData {
  content: string;
  subject: number;
  id: string;
  time: number;
}

function getDateFromCode(code: number) {
  const date = new Date(code);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

function getSub(id: number): string {
  if (id === 0) {
    return "國文";
  }
  if (id === 1) {
    return "英文";
  }
  if (id === 2) {
    return "數學";
  }
  if (id === 3) {
    return "社會";
  }
  if (id === 4) {
    return "自然";
  }
  return "自訂";
}

const subList = [
  {
    name: "國文",
    index: 0,
  },
  {
    name: "英文",
    index: 0,
  },
  {
    name: "數學",
    index: 0,
  },
  {
    name: "社會",
    index: 0,
  },
  {
    name: "自然",
    index: 0,
  },
];
const postList = ref<Array<postData>>([]);
const isLoad = ref(false);
onMounted(async () => {
  try {
    const response = await fetch(`${apiUrl}/post/`);
    const data = (await response.json()) as postData[];
    postList.value = data;
    isLoad.value = true;
  } catch (err) {
    alert("伺服器錯誤");
    // console.error(err);
    router.push("/");
  }
});
</script>

<template>
  <div class="appPage">
    <navbar-vue></navbar-vue>
    <div class="app">
      <div class="wrap">
        <div class="subjects">
          <div class="sub" v-for="i in subList">
            {{ i.name }}
          </div>
        </div>
        <div class="posts">
          <div class="loading" v-if="!isLoad">
            資料載入中 <i class="bx bx-loader bx-spin"></i>
          </div>
          <div class="post" v-for="i in postList">
            <div class="info">
              {{ getSub(i.subject) }} {{ getDateFromCode(i.time) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.appPage {
  .app {
    padding: 20px;
    .wrap {
      display: flex;
      max-width: 1440px;
      margin: 20px auto;
      .subjects {
        width: 30%;
        max-width: 270px;
        padding: 10px 0;
        background-color: #fff;
        border-radius: 8px;
        .sub {
          &:hover {
            background-color: #eee;
          }
          &:not(:last-child) {
            border-bottom: 1px solid #eee;
          }
          cursor: pointer;
          transition: 0.2s;
          padding-top: 5px;
          padding-bottom: 5px;
          font-size: 1.2rem;
          text-align: center;
          color: #919191;
        }
      }
      .posts {
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70%;
        .loading {
          background-color: #90fc4863;
          color: #41a100;
          padding: 8px 60px;
          margin-top: 20px;
          border-radius: 5px;
          line-height: 24px;
          i {
            font-size: 24px;
            position: relative;
            top: 3.6px;
            left: 10px;
          }
        }
        .post {
          background-color: #fff;
          border-radius: 10px;
          padding: 10px;
        }
      }
    }
  }
}
</style>
