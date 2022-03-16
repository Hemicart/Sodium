<template>
  <swiper
    :modules="[EffectCards]" effect="cards" :grabCursor="true"
    class="swiper-nft wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="1s"
  >
    <swiper-slide>
      <div class="swiper-slide_img">
        <img :src="require(`@/assets/nftcards/doodle.jpg`)" alt="Doodle">
      </div>
      <div class="swiper-slide_top">
        <div class="swiper-slide_text">
          <h4 class="swiper-slide_top-title">Doodle#2764</h4>
          <span class="swiper-slide_top-value">Est. Value: 2.50 ETH</span>
        </div>
        <span class="swiper-slide_button">SOD 23.81% APR</span>
      </div>
      <span class="swiper-slide_value">Borrowing limit: 0.75 ETH</span>
      <span class="swiper-slide_value">Borrow APR: 12.3%</span>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide_img">
        <img :src="require(`@/assets/nftcards/coolcat.jpg`)" alt="Cool Cat">
      </div>
      <div class="swiper-slide_top">
        <div class="swiper-slide_text">
          <h4 class="swiper-slide_top-title">Cool Cat#3520</h4>
          <span class="swiper-slide_top-value">Est. Value: 2.50 ETH</span>
        </div>
        <span class="swiper-slide_button">SOD 23.81% APR</span>
      </div>
      <span class="swiper-slide_value">Borrowing limit: 3.033 ETH</span>
      <span class="swiper-slide_value">Borrow APR: 12.3%</span>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide_img">
        <img :src="require(`@/assets/nftcards/punk.jpg`)" alt="CryptoPunk">
      </div>
      <div class="swiper-slide_top">
        <div class="swiper-slide_text">
          <h4 class="swiper-slide_top-title">CryptoPunk#2353</h4>
          <span class="swiper-slide_top-value">Est. Value: 41 ETH</span>
        </div>
        <span class="swiper-slide_button">SOD 23.81% APR</span>
      </div>
      <span class="swiper-slide_value">Borrowing limit: 0.75 ETH</span>
      <span class="swiper-slide_value">Borrow APR: 12.3%</span>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide_img">
        <img :src="require(`@/assets/nftcards/mayc.jpg`)" alt="Doodle">
      </div>
      <div class="swiper-slide_top">
        <div class="swiper-slide_text">
          <h4 class="swiper-slide_top-title">MAYC#10047</h4>
          <span class="swiper-slide_top-value">Est. Value: 24.5 ETH</span>
        </div>
        <span class="swiper-slide_button">SOD 23.81% APR</span>
      </div>
      <span class="swiper-slide_value">Borrowing limit: 7.35 ETH</span>
      <span class="swiper-slide_value">Borrow APR: 12.3%</span>
    </swiper-slide>
    <swiper-slide>
      <div class="swiper-slide_img">
        <img :src="require(`@/assets/nftcards/azuki.jpg`)" alt="Doodle">
      </div>
      <div class="swiper-slide_top">
        <div class="swiper-slide_text">
          <h4 class="swiper-slide_top-title">Azuki#7621</h4>
          <span class="swiper-slide_top-value">Est. Value: 16.9 ETH</span>
        </div>
        <span class="swiper-slide_button">SOD 23.81% APR</span>
      </div>
      <span class="swiper-slide_value">Borrowing limit: 5.07 ETH</span>
      <span class="swiper-slide_value">Borrow APR: 12.3%</span>
    </swiper-slide>
  </swiper>
</template>
<script>
  import EffectCards  from 'swiper/modules/effect-cards/effect-cards.js';
  import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

  import 'swiper/swiper.scss';
  import 'swiper/modules/effect-cards/effect-cards.scss';

  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        EffectCards
      };
    },
  };
</script>
<style lang="scss">
  .swiper {
    &-nft {
      .swiper {
        &-wrapper {
          width: 270px;
          height: 396px;
        }
        &-slide {
          padding: 22px;
          background: #FFFFFF;
          box-shadow: -7px 7px 27px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          &_img {
            display: block;
            border-radius: 20px;
            overflow: hidden;
            filter: drop-shadow(-5px 6px 12px rgba(0, 0, 0, 0.2));
            img {
              width: 100%;
              display: block;
            }
          }
          &_button {
            border: 1px solid #7929CA;
            box-sizing: border-box;
            border-radius: 8px;
            width: 98px;
            height: 29px;
            font-weight: 500;
            color: #7929CA;
            font-size: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.15);
          }
          &_top {
            display: flex;
            margin: 24px 0 20px;
            justify-content: space-between;
            align-items: center;
            &-title {
              font-weight: 600;
              font-size: 11px;
              line-height: 16px;
              color: #000000;
              text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
            }
            &-value {
              font-size: 10px;
              line-height: 13px;
              color: #000000;
              text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.2);
            }
          }
          &_text {
            display: flex;
            flex-direction: column;
          }
          &_value {
            display: block;
            font-weight: 600;
            font-size: 11px;
            line-height: 16px;
            margin: 4px 0 0;
            color: #4623C3;
            text-shadow: -3px 3px 4px rgba(0, 0, 0, 0.25);
          }
        }
      }
    }
  }
</style>
