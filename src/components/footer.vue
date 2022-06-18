<template>
  <footer>
    <div class="infos">
      <div class="detail">
        <i class="bx bxl-instagram"></i
        ><a
          target="_blank"
          href="https://www.instagram.com/beaproblemchild_2022/"
          >beaproblemchild_2022</a
        >
      </div>
    </div>
    <div class="copyright">
      Copyright © 2022 beaproblemchild. All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #232323;
  color: #ffffff;
  padding: 50px 0 20px 0;
  .infos {
    margin-bottom: 30px;
    .detail {
      display: flex;
      i {
        font-size: 28px;
        margin-right: 10px;
        color: #ffffff;
      }
      a {
        color: #ffffff;
      }
    }
  }
}
</style>
