<script lang="ts" setup>
import memberList from "../components/members.vue";
import { topMemberList } from "../data/members";
import { normalMemberList } from "../data/members";
</script>

<template>
  <div class="member">
    <member-list
      title="核心成員 Core Members"
      :show-more="false"
      :list="topMemberList"
    ></member-list>
    <member-list
      title="其他成員 Members"
      :show-more="false"
      :list="normalMemberList"
    ></member-list>
  </div>
</template>
