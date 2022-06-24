<script lang="ts" setup>
import navbarVue from "../components/navbar.vue";
</script>

<template>
  <div class="contact">
    <navbar-vue></navbar-vue>
    <header>Contact Us</header>
    <div class="contactBlock">
      <h2>Official</h2>
      <ul>
        <li>
          <i class="bx bxl-instagram"></i
          ><a
            target="_blank"
            href="https://www.instagram.com/beaproblemchild_2022/"
            >beaproblemchild_2022</a
          >
        </li>
        <li>
          <i class="bx bxl-gmail"></i>
          <span>beaproblemchild@gmail.com</span>
        </li>
      </ul>
    </div>
    <div class="contactBlock">
      <h2>總召（王千育）</h2>
      <ul>
        <li><i class="bx bx-phone bx-tada"></i><span>0906562470</span></li>
        <li>
          <i class="bx bxl-gmail"></i>
          <span>wcy0906562470@gmail.com</span>
        </li>
      </ul>
    </div>
    <div class="contactBlock">
      <h2>技術顧問</h2>
      <ul>
        <li>
          <i class="bx bx-phone bx-tada"></i><span>0930695996(葉柏辰)</span>
        </li>
        <li>
          <i class="bx bxl-gmail"></i>
          <span>lazpytb+bapc@gmail.com(葉柏辰)</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.contact {
  header {
    padding: 80px 10px;
    text-align: center;
    background-color: #fab340;
    color: #ffffff;
    font-size: 3rem;
    font-weight: 700;
  }
  .contactBlock {
    margin: 50px auto;
    width: 80vw;
    box-shadow: 0px 2px 22px 10px #f1f1f1;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 20px 50px;
    @include phone {
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    ul {
      list-style: none;
      li {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        a {
          line-height: 28px;
          text-align: center;
        }
        i {
          font-size: 28px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
