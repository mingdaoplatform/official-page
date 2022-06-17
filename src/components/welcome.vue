<script lang="ts" setup>
import { onMounted, ref } from "vue";
const txt = "Beaproblemchild";
const speed = 80;
const content = ref<string>("");
let timeOut: ReturnType<typeof setTimeout> | undefined;

let i = 0;
function typeWriter() {
  if (i < txt.length) {
    content.value += txt.charAt(i);
    i++;
    timeOut = setTimeout(typeWriter, speed);
  } else {
    i = 0;
    timeOut = setTimeout(() => {
      content.value = "";
      typeWriter();
    }, 1000);
  }
}

onMounted(() => {
  typeWriter();
});
</script>

<template>
  <div class="welcome">
    <h1>
      Welcome To <span>{{ content }} </span>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.welcome {
  width: 100vw;
  text-align: center;
  padding: 60px 0;
  h1 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    span {
      background: linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b);
      background: -webkit-linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
</style>
