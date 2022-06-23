<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
const Route = useRoute();
const params = Route.params;

interface replyData {
  content: string;
  replyTo: string;
  isAdmin: boolean;
}

const replies = ref<Array<replyData>>([
  {
    content: "哈哈哈哈哈",
    replyTo: "iddddd",
    isAdmin: true,
  },
]);
</script>

<template>
  <div class="post">
    <div class="info">國文</div>
    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
      saepe nobis fuga distinctio quasi blanditiis commodi ut, quidem quis,
      placeat, nostrum quisquam dignissimos. Nihil praesentium a commodi nulla
      perspiciatis odit.
    </div>
    <div class="info" style="text-align: end">Posted at 2022 6 22</div>
    <div class="replies">
      <div class="add">
        <input type="text" placeholder="回答一些答案......" />
        <button>留言</button>
      </div>
      <div class="reply" v-for="i in replies">
        <div class="admin" v-show="i.isAdmin">官方回答</div>
        <div class="text">{{ i.content }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  .replies {
    width: 100%;
    .add {
      width: 100%;
      display: flex;
      align-items: center;
      input {
        width: 74%;
        margin-right: 1%;
        outline: none;
        border-radius: 5px;
        font-size: 0.8rem;
        padding: 3px 10px;
        border: 1.4px solid #888;
        transition: 0.2s;
        &:focus {
          border: 1.4px solid #fab340;
        }
      }
      button {
        width: 25%;
        outline: none;
        border-radius: 5px;
        border: 1px solid #fab340;
        color: #fff;
        background-color: #fab340;
        font-size: 1rem;
        padding: 1px 0;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background-color: transparent;
          color: #fab340;
        }
      }
    }
    .reply {
      margin: 20px 0;
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
      .text.admin {
        border-left: 2px solid #fab340;
        padding: 0 10px;
      }
    }
  }
}
</style>
