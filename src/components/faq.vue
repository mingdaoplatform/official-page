<script lang="ts" setup>
import { reactive } from "vue";
interface FAQ {
  index: number;
  title: string;
  content: string;
}
const FAQs = reactive<Array<FAQ>>([
  {
    index: 0,
    title: "這能幫到我甚麼？",
    content:
      "在這枯燥乏味的複習時間裡，增加些每日挑戰，確認不熟處加以複習讀書碰到難題時，也歡迎尋求協助(ﾉ>ω<)ﾉ",
  },
  {
    index: 1,
    title: "我該如何操作？",
    content: `1.可以到各科問題討論區問問題、看別人的問題、嘗試解決其他人的問題<br>
2.利用每日的考古題/小練習來確保功力不會倒退`,
  },
  {
    index: 2,
    title: "我太害羞了怎麼辦？",
    content: `除了留言機制外，其他內容是可以匿名的
              <ul><li>每日挑戰可以自行練習，隔天公布解答</li></ul>`,
  },
  {
    index: 3,
    title: "老師/班導如何善用？",
    content: `老師或班導可以藉由上網站上學生提問的問題，了解學生在這一單元，甚至這一學科的弱點，抑或是不熟、需要加強的地方<br>
或是老師可以藉由每日一英單的欄位當作每日的練習，培養學生手感`,
  },
]);
const toggleFaq = (index: number) => {
  try {
    const DOM = document.getElementById(`faq-${index}`)!;
    if (DOM.classList.length > 1) {
      DOM.classList.remove("active");
      return false;
    }
    DOM.classList.add("active");
    return;
  } catch (err) {
    console.error("rrr: ", err);
  }
};
</script>

<template>
  <div class="blockSix">
    <div class="block"></div>
    <div class="contain">
      <div class="title">
        <h2>FAQs</h2>
      </div>
      <div class="faqs">
        <div class="faq" v-for="f in FAQs" :id="`faq-${f.index}`">
          <div class="title" @click="toggleFaq(f.index)">
            <h1>{{ f.title }}</h1>
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 14 8"
              aria-hidden="true"
              style="width: 14px; height: 8px"
            >
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.0625 1.1167L6.8625 6.9167L12.6625 1.1167"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </svg>
          </div>
          <div class="content" v-html="f.content"></div>
        </div>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../scss/global.scss";
.blockSix {
  overflow: hidden;
  background-color: #fab340;
  display: flex;
  flex-direction: row;
  .block {
    flex-grow: 1;
  }
  .contain {
    flex-grow: 1;
    background-repeat: no-repeat;
    background-position: top left;
    padding: 96px 320px;
    width: 1440px;
    max-width: 1440px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @include phone {
      padding: 96px 20px;
    }
    & > .title {
      margin-bottom: 24px;
      h2 {
        color: #fff;
        font-size: 1.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
      }
    }
    .faqs {
      .faq {
        height: 88px;
        &.active {
          height: auto;
        }
        overflow: hidden;
        padding: 0;
        border-top: 1px solid #fff4e2;
        &:last-child {
          border-bottom: 1px solid #fff4e2;
        }
        & > .title {
          margin: 30px 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          h1 {
            color: #fff;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
            @include phone {
              font-size: 1rem;
              line-height: 24px;
            }
          }
        }
        .content {
          color: #ffffff;
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>
