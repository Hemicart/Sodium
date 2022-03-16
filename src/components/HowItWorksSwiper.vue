<template>
  <swiper
    :breakpoints="{
      '1023': {
        slidesPerView: 1,
      },
      '1400': {
        slidesPerView: 2,
        spaceBetween: 90,
      },
    }"
    :modules="[Navigation]" :navigation="true"
    class="swiper-how wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="1s"
  >
    <swiper-slide>
      <img class="mp_how-slide_img" :src="require(`@/assets/hiw/hiw-1.png`)" alt="">
      <h5 class="mp_how-slide_title">Instant Borrowing</h5>
      <p class="mp_how-slide_text">SODIUM unlocks the financial value of an NFT by giving users instant access to a liquidity pool based on an automated NFT asset valuation.</p>
      <a class="mp_how-slide_link" href="https://docs.sodium.fi/borrowing" target="_blank"><span>Read More</span></a>
    </swiper-slide>
    <swiper-slide>
      <img class="mp_how-slide_img" :src="require(`@/assets/hiw/hiw-2.png`)" alt="">
      <h5 class="mp_how-slide_title">Fair Price Engine</h5>
      <p class="mp_how-slide_text">The FPE is an automatic NFT asset pricing system. Utilizing machine learning, our algorithm evaluates a number of unique data points in order to accurately calculate a final estimate.</p>
      <a class="mp_how-slide_link" href="https://docs.sodium.fi/fpe-fair-price-engine" target="_blank"><span>Read More</span></a>
    </swiper-slide>
    <swiper-slide>
      <img class="mp_how-slide_img" :src="require(`@/assets/hiw/hiw-3.png`)" alt="">
      <h5 class="mp_how-slide_title">Liquidation Lottery</h5>
      <p class="mp_how-slide_text">SODIUM protocol executes liquidation using a process called the Liquidation Lottery. To participate in the Lottery, users have to stake SOD, which will also allow them to earn staking bonuses and platform fees.</p>
      <a class="mp_how-slide_link" href="https://docs.sodium.fi/liquidation-lottery" target="_blank"><span>Read More</span></a>
    </swiper-slide>
    <swiper-slide>
      <img class="mp_how-slide_img" :src="require(`@/assets/hiw/hiw-4.png`)" alt="">
      <h5 class="mp_how-slide_title">Liquidity Mining</h5>
      <p class="mp_how-slide_text">The majority of tokens will be distributed through the Liquidity Mining program.  Borrowers, lenders and LP Stakers all automatically become a part of the Liquidity Mining program.</p>
      <a class="mp_how-slide_link" href="https://docs.sodium.fi/sod-rewards" target="_blank"><span>Read More</span></a>
    </swiper-slide>
  </swiper>
</template>
<script>
  import Navigation from 'swiper/modules/navigation/navigation.js';
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

  import 'swiper/modules/navigation/navigation.scss';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        Navigation
      };
    },
  };
</script>
<style lang="scss">
  .mp {
    &_how-slide {
      &_img {
        width: 164px;
        display: block;
        @media screen and (max-width: 1023px) {
          margin: 0 auto;
        }
      }
      &_title {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        margin: 20px 0 24px;
      }
      &_text {
        font-size: 14px;
        line-height: 24px;
      }
      &_link {
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 0;
        @media screen and (max-width: 1023px) {
          right: 0;
          padding: 12px 0;
        }
        span {
          font-size: 14px;
          line-height: 18px;
          padding: 0 16px 0 0;
          color: #ffffff;
          display: inline-block;
          background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNiA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMS4wNjE2MiAxLjQwNjZDMC45Nzk0NiAxLjQ4NDMzIDAuOTc5NDYgMS42MTA2NCAxLjA2MTYyIDEuNjg4MzdMMy42ODU1NiA0LjE2NjA0TDEuMDYxNjIgNi42NDg1N0MwLjk3OTQ2IDYuNzI2MzEgMC45Nzk0NiA2Ljg1MjYyIDEuMDYxNjIgNi45MzAzNUMxLjE0Mzc4IDcuMDA4MDggMS4yNzcyOSA3LjAwODA4IDEuMzU5NDQgNi45MzAzNUw0LjEyNzE2IDQuMzExNzlDNC4xNjgyNCA0LjI3MjkyIDQuMTg4NzggNC4yMjQzNCA0LjE4ODc4IDQuMTcwOUM0LjE4ODc4IDQuMTIyMzIgNC4xNjgyNCA0LjA2ODg4IDQuMTI3MTYgNC4wMzAwMkwxLjM1OTQ0IDEuNDExNDZDMS4yNzcyOSAxLjMyODg3IDEuMTQzNzggMS4zMjg4NyAxLjA2MTYyIDEuNDA2NloiIGZpbGw9IiNFQjU1OTUiIHN0cm9rZT0iI0VCNTU5NSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=') right bottom 4px no-repeat;
          transition: color 0.4s;
        }
        &:hover {
          span {
            color: #EB5595;
          }
        }
      }
    }
  }
  .swiper {
    &-how {
      width: 100%;
      .swiper {
        &-wrapper {
          width: 100%;
          height: 494px;
          @media screen and (max-width: 1400px) {
            height: 454px;
          }
        }
        &-slide {
          height: 404px;
          position: relative;
          @media screen and (max-width: 1400px) {
            height: 360px;
          }
          @media screen and (max-width: 1023px) {
            text-align: center;
          }
        }
        &-button {
          &-prev, &-next {
            position: absolute;
            top: auto;
            right: auto;
            bottom: 0;
            width: 52px;
            height: 55px;
            border-radius: 50%;
            background-color: #424052;
            background-size: 12px 20px;
            background-position: center;
            background-repeat: no-repeat;
            &:after {
              display: none;
            }
          }
          &-prev {
            left: 0;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljc1NTc1IDAuNjA0NzM2TDExLjg1MjEgMi43OTc3Nkw0LjkzNDI3IDkuOTEwMTZMMTEuODUyMSAxNy4wMTY0TDkuNzU1NzUgMTkuMjA5NEwwLjc0MDk0IDkuOTEwMTZMOS43NTU3NSAwLjYwNDczNloiIGZpbGw9IiNFN0ZDRkQiLz4KPC9zdmc+Cg==');
            @media screen and (max-width: 1023px) {
              left: 50%;
              margin: 0 0 0 -60px;
            }
          }
          &-next {
            left: 65px;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjI0NDI1IDE5LjQzNDFMMC4xNDc5NDkgMTcuMjQxMUw3LjA2NTczIDEwLjEyODdMMC4xNDc5NDkgMy4wMjI0NUwyLjI0NDI1IDAuODI5NDNMMTEuMjU5MSAxMC4xMjg3TDIuMjQ0MjUgMTkuNDM0MVoiIGZpbGw9IiNFN0ZDRkQiLz4KPC9zdmc+Cg==');
            @media screen and (max-width: 1023px) {
              right: 50%;
              left: auto;
              margin: 0 -60px 0 0;
            }
          }
        }
      }
    }
  }
</style>
