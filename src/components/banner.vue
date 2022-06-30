<script lang="ts" setup>
import { Splide, SplideSlide, Options } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import img from "../assets/SlideImage.jpg"
const options: Options = {
  rewind: true,
  autoplay: true,
  height: "30rem",
};
</script>

<template>
  <div class="banner">
    <Splide :options="options" aria-label="My Favorite Images">
      <SplideSlide>
        <img :src="img">
      </SplideSlide>
      <SplideSlide>
        <img :src="img">
      </SplideSlide>
    </Splide>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  box-shadow: 0px 2px 22px 10px #cacaca;
}
img{
  height: auto;
  width: 100%;
}
</style>
