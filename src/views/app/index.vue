<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { apiUrl } from "../../api";
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
    console.error(err);
    router.push("/");
  }
});
</script>

<template>
  <div class="index">
    <div class="wrap">
      <div class="subjects">
        <div class="sub" v-for="i in subList">
          {{ i.name }}
        </div>
      </div>
      <div class="posts">
        <router-link to="/app/add" class="new">新增問題</router-link>
        <div class="loading" v-if="!isLoad">
          資料載入中 <i class="bx bx-loader bx-spin"></i>
        </div>
        <div class="list">
          <div class="post" v-for="i in postList">
            <div class="info">
              {{ getSub(i.subject) }}
            </div>
            <div class="content">{{ i.content }}</div>
            <div class="info" style="text-align: end">
              Post at: {{ getDateFromCode(i.time) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/global.scss";
.index {
  padding: 20px;
  .wrap {
    display: flex;
    max-width: 1440px;
    margin: 20px auto;
    flex-direction: row;
    @include phone {
      flex-direction: column;
    }
    .subjects {
      width: 30%;
      max-width: 270px;
      padding: 10px 0;
      background-color: #fff;
      border-radius: 8px;
      max-height: 214px;
      @include phone {
        width: 100%;
        max-width: 100vw;
      }
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
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 70%;
      @include phone {
        margin: 50px 0;
        width: 100%;
      }
      .new {
        width: 100%;
        text-align: center;
        background-color: #fff;
        border-radius: 10px;
        margin: 10px 0;
        padding: 8px 0;
        color: #fab340;
        text-decoration: none;
      }
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
      .list {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        .post {
          cursor: pointer;
          background-color: #fff;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
          width: 100%;
          transition: 0.2s;
          &:hover {
            transform: scale(103%);
          }
          .info {
            color: #696969;
            font-size: 0.8rem;
          }
          .content {
            margin: 10px 0;
            font-size: 1.2rem;
            font-weight: 300;
          }
        }
      }
    }
  }
}
</style>
