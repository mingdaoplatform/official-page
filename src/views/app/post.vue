<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { apiUrl } from "../../api";
import { useRoute, useRouter } from "vue-router";
import { getDateFromCode, getSub } from "../../utils";
import axios from "axios";
const Route = useRoute();
const router = useRouter();
const params = Route.params;

interface postData {
  content: string;
  subject: number;
  id: string | any;
  time: number;
  imgUrl?: string;
}

interface replyData {
  content: string;
  replyTo: string;
  isAdmin: boolean;
}

const reply = ref("");

const postContent = ref<postData>({
  time: 0,
  content: "",
  subject: -1,
  id: params.id,
});

const replies = ref<Array<replyData>>([
  {
    content: "資料載入中",
    replyTo: "",
    isAdmin: true,
  },
]);

const newReply = async () => {
  if (reply.value == "") return;
  try {
    const token = localStorage.getItem("TOKEN") || "";
    console.warn(token);
    const res = await axios.post(
      `${apiUrl}/reply/new/${postContent.value.id}`,
      {
        content: reply.value,
        token: token,
      }
    );
    if (res.status == 200 || res.status == 201) {
      location.reload();
    } else {
      alert("執行階段錯誤(Runtime Error) Code" + res.status);
      router.push("/");
    }
  } catch (err) {
    const E = err as any;
    alert(`錯誤 ${E.status}`);
    console.error(err);
    router.push("/");
  }
};

onMounted(async () => {
  try {
    const response = await fetch(`${apiUrl}/post/${params.id}`, {});
    const data = (await response.json()) as postData;
    postContent.value = data;
  } catch (err) {
    alert("查無此問題");
    console.error(err);
    router.push("/");
  }
  try {
    const response = await fetch(`${apiUrl}/reply/${params.id}`);
    const data = (await response.json()) as replyData[];
    replies.value = data;
  } catch (err) {
    alert("查無此問題");
    console.error(err);
    router.push("/");
  }
});
</script>

<template>
  <div class="post">
    <div class="info">{{ getSub(postContent.subject) }}</div>
    <div class="content">{{ postContent.content }}</div>
    <div class="info" style="text-align: end">
      Posted at {{ getDateFromCode(postContent.time) }}
    </div>
    <img v-if="postContent.imgUrl" :src="postContent.imgUrl" />
    <div class="replies">
      <div class="add">
        <textarea
          type="text"
          v-model="reply"
          placeholder="回答一些答案......"
        />
        <button @click="newReply()">留言</button>
      </div>
      <h2>所有回答</h2>
      <div class="list">
        <div class="reply" v-for="i in replies">
          <div class="admin" v-show="i.isAdmin">官方回答</div>
          <div class="text" v-html="i.content.replace(/\n/g, '<br>')"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/global.scss";
.post {
  max-width: 1000px;
  width: 90vw;
  background-color: #fff;
  margin: 20px auto;
  padding: 20px;
  border-radius: 15px;
  .info {
    color: #696969;
    font-size: 0.9rem;
    margin: 15px 0;
  }
  .content {
    color: #232323;
    font-size: 1.3rem;
    font-weight: 300;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .replies {
    width: 100%;
    margin-top: 30px;
    .add {
      width: 100%;
      display: flex;
      align-items: center;
      textarea {
        width: 74%;
        margin-right: 1%;
        outline: none;
        border-radius: 5px;
        font-size: 1rem;
        padding: 5px 10px;
        height: 3rem;
        resize: none;
        border: 1.4px solid #888;
        transition: 0.2s;
        &:focus {
          border: 1.4px solid #fab340;
        }
      }
      button {
        width: 25%;
        height: 3rem;
        outline: none;
        font-size: 1.2rem;
        border-radius: 5px;
        border: 1px solid #fab340;
        color: #fff;
        background-color: #fab340;
        padding: 3px 0;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background-color: transparent;
          color: #fab340;
        }
      }
      @include phone {
        flex-direction: column;
        textarea,
        button {
          width: 100%;
          margin: 0;
        }

        textarea {
          height: 5rem;
        }

        button {
          margin-top: 10px;
          height: auto;
          font-size: 1rem;
        }
      }
    }
    h2 {
      margin: 20px 0;
    }
    .list {
      display: flex;
      flex-direction: column-reverse;
    }
    .reply {
      margin: 5 px 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .admin {
        padding: 1px 5px 2px 5px;
        text-align: center;
        font-size: 0.8rem;
        color: #fab340;
        background-color: #fab3407c;
        border-radius: 3px;
      }
      .text {
        font-size: 1.2rem;
        margin: 5px 0;
      }
      .text {
        border-left: 4px solid #fab340;
        padding: 0 10px;
      }
    }
  }
}
</style>
