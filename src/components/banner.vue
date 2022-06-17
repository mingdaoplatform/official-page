<script lang="ts" setup>
import { Splide, SplideSlide, Options } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const options: Options = {
  rewind: true,
  autoplay: true,
  height: "20rem",
};
</script>

<template>
  <div class="banner">
    <Splide :options="options" aria-label="My Favorite Images">
      <SplideSlide>
        <p class="content">slide test 1</p>
      </SplideSlide>
      <SplideSlide>
        <p class="content">slide test 2</p>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  box-shadow: 0px 2px 22px 10px #cacaca;
}
.content {
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
}
</style>
