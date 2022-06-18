<script lang="ts" setup>
import { reactive } from "vue";
import type { member } from "../data/members";
import { topMemberList } from "../data/members";
const list = reactive<Array<member>>(topMemberList);
</script>

<template>
  <div class="members">
    <h2>核心成員 Core Members</h2>
    <div class="memberList">
      <div class="memberBlock" v-for="i in list">
        <div class="member">
          <div class="name">{{ i.name }}</div>
          <div class="title">{{ i.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.members {
  width: 100vw;
  padding: 50px 0;
  h2 {
    text-align: center;
    font-size: 2rem;
    color: #232323;
  }
  .memberList {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px 10px;
    .memberBlock {
      margin: 20px;
      .member {
        cursor: default;
        user-select: none;
        width: 300px;
        max-width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background-color: #fff;
        border-radius: 5px;
        padding: 20px 40px;
        transition: 0.2s;
        text-align: center;
        .name {
          font-size: 2rem;
          font-weight: 400;
        }
        .title {
          font-size: 1rem;
          color: #a8a8a8;
          margin-left: 2px;
          margin-top: 10px;
        }
        &:hover {
          transform: scale(110%);
          .name {
            color: #fab340;
          }
        }
      }
    }
  }
}
</style>
