<template>
  <div class="mainpage">
    <div class="header">
      <div class="container">
        <div class="header_in">
          <img class="mp_logo" :src="require(`@/assets/sodium.png`)" alt="">
          <nav class="mp_nav">
            <a @click="scrollTo('how-it-work')">How  it works</a>
            <a @click="scrollTo('key-features')">Key Features</a>
            <a @click="scrollTo('medium-articles')">Blog</a>
            <a @click="scrollTo('join-beta')">Beta Program</a>
          </nav>
          <a href="https://docs.sodium.fi/" target="_blank" rel="noreferrer noopener" class="mp_button">Whitepaper</a>
        </div>
      </div>
    </div>
    <section class="mp_top" id="#top-section">
      <div class="container">
        <div class="mp_top-in">
          <div class="mp_top-text-b">
            <h1 class="mp_top-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s"><span>Unlocking</span><span>NFT Value</span></h1>
            <p class="mp_top-text wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">SODIUM - a decentralized protocol for instant borrowing against NFT collateral.</p>
            <router-link :to="{name: 'dashboard'}" class="mp_button wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">Launch App</router-link>
          </div>
          <div class="mp_top-bubble wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.75s" :style="{'background-image': 'url(' + require('@/assets/bubble-gum.png') + ')'}">
            <NFTCardsSwipe />
          </div>
        </div>
      </div>
    </section>
    <section class="mp_how" id="#how-it-work" ref="how-it-work">
      <div class="container">
        <div class="mp_how-in">
          <div class="mp_how-text-b">
            <span class="mp_title-text wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">Sodium protocol</span>
            <h2 class="mp_title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">How it works</h2>
            <p class="mp_how-text wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">Sodium protocol enables users to effortlessly lend, borrow, and earn interest with their digital assets. Depositors providing liquidity to the protocol may earn passive income, while borrowers are able to borrow in an NFT-over-collateralized manner.</p>
          </div>
          <div class="mp_how-slider">
            <HowItWorksSwiper />
          </div>
        </div>
      </div>
    </section>
    <section class="mp_kf" id="key-features" ref="key-features">
      <div class="container">
        <div class="mp_kf-in">
          <span class="mp_title-text wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">Sodium protocol</span>
          <h3 class="mp_title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">Key features</h3>
          <div class="mp_kf-place">
            <div class="mp_kf-item --staking wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.25s">
              <span class="mp_kf-item-in"></span>
              <img :src="require(`@/assets/kf/staking.png`)" alt="">
              <span class="mp_kf-item_text">Staking</span>
            </div>
            <div class="mp_kf-item --mining wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.25s">
              <span class="mp_kf-item-in"></span>
              <img :src="require(`@/assets/kf/mining.png`)" alt="">
              <span class="mp_kf-item_text">Liquidity Mining</span>
            </div>
            <div class="mp_kf-item --ai-pricing wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay="0.25s">
              <span class="mp_kf-item-in"></span>
              <img :src="require(`@/assets/kf/ai-pricing.png`)" alt="">
              <span class="mp_kf-item_text">AI-Pricing</span>
            </div>
            <div class="mp_kf-item --sodnft wow fadeInRight" data-wow-duration="0.6s" data-wow-delay="0.25s">
              <span class="mp_kf-item-in"></span>
              <img :src="require(`@/assets/kf/sodnft.png`)" alt="">
              <span class="mp_kf-item_text">sodNFT</span>
            </div>
            <div class="mp_kf-item --liquidity wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.25s">
              <span class="mp_kf-item-in"></span>
              <img :src="require(`@/assets/kf/liquidity.png`)" alt="">
              <span class="mp_kf-item_text">Instant Liquidity</span>
            </div>
            <div class="mp_kf-item --dao wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.25s">
              <span class="mp_kf-item-in"></span>
              <img :src="require(`@/assets/kf/dao.png`)" alt="">
              <span class="mp_kf-item_text">DAO</span>
            </div>
            <div class="mp_kf-podium-b wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.75s">
              <img class="mp_kf-podium --purple" :src="require(`@/assets/kf/podium-purple.png`)" alt="">
              <img class="mp_kf-podium --blue" :src="require(`@/assets/kf/podium-blue.png`)" alt="">
              <div class="mp_kf-back">
                <img class="--purple" :src="require(`@/assets/kf/strikes-back-purple.png`)" alt="">
                <img class="--blue" :src="require(`@/assets/kf/strikes-back-blue.png`)" alt="">
              </div>
              <div class="mp_kf-logo">
                <img class="--back" :src="require(`@/assets/kf/logo-back.png`)" alt="">
                <img class="--front" :src="require(`@/assets/kf/logo-front.png`)" alt="">
              </div>
              <div class="mp_kf-front">
                <img class="--purple" :src="require(`@/assets/kf/strikes-front-purple.png`)" alt="">
                <img class="--blue" :src="require(`@/assets/kf/strikes-front-blue.png`)" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mp_medium" id="medium-articles" ref="medium-articles">
      <div class="container">
        <div class="mp_medium-in">
          <span class="mp_title-text wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">Sodium protocol</span>
          <h3 class="mp_title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.25s"><span>Explore</span> More</h3>
          <MediumArticles />
          <a href="https://docs.sodium.fi/" target="_blank" rel="noreferrer noopener" class="mp_w-button wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.35s">WHITEPAPER</a>
        </div>
      </div>
    </section>
    <section class="mp_join" id="join-beta" ref="join-beta">
      <div class="container">
        <div class="mp_join-in">
          <div class="mp_join-block wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.5s" :style="{'background-image': 'url(' + require('@/assets/join-bg.png') + ')'}">
            <span class="mp_join-text">Join the BETA testing program</span>
            <a class="mp_w-button" href="https://2bvyfbre1rs.typeform.com/to/fPlVArRq" target="_blank" rel="noreferrer noopener">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="footer-in">
          <div class="footer_left wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay="0.25s">
            <img class="mp_logo" :src="require(`../assets/sodium.png`)" alt="">
            <span class="footer_copyright">© Copyright 2022 SODIUM <span>|</span> Unlocking NFT Value</span>
            <span class="footer_copyright">gm@sodium.fi</span>
          </div>
          <div class="mp_social">
            <a href="https://twitter.com/Sodium_fi" target="_blank" rel="noreferrer noopener" class="mp_social-link wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.25s">
              <svg width="25" height="22" viewBox="0 0 25 22" fill="none">
                <path fill="#4623C3" d="M21.8411 5.32781C21.8563 5.55899 21.8563 5.79022 21.8563 6.02139C21.8563 13.0726 16.9367 21.1972 7.94511 21.1972C5.17497 21.1972 2.60165 20.322 0.437012 18.8028C0.830596 18.8523 1.20899 18.8688 1.61772 18.8688C3.90341 18.8688 6.00752 18.0267 7.68777 16.59C5.53827 16.5404 3.73693 15.0047 3.11629 12.891C3.41906 12.9405 3.72179 12.9735 4.0397 12.9735C4.47867 12.9735 4.91768 12.9074 5.32636 12.7919C3.08605 12.2965 1.40576 10.1497 1.40576 7.55713V7.4911C2.05664 7.88743 2.81356 8.13512 3.61578 8.16811C2.29884 7.21032 1.43604 5.57551 1.43604 3.726C1.43604 2.73521 1.6782 1.82697 2.10207 1.03432C4.50891 4.27095 8.12674 6.38463 12.1835 6.61586C12.1078 6.21953 12.0624 5.80674 12.0624 5.39389C12.0624 2.45447 14.2422 0.0600586 16.9517 0.0600586C18.3595 0.0600586 19.631 0.70408 20.5241 1.74442C21.6291 1.51325 22.6887 1.06736 23.6273 0.456383C23.2639 1.69492 22.492 2.73526 21.4778 3.39575C22.4617 3.28021 23.4154 2.98291 24.2933 2.57011C23.6274 3.62693 22.7948 4.56815 21.8411 5.32781Z"/>
              </svg>
            </a>
            <a href="https://t.me/sodiumannouncements" target="_blank" rel="noreferrer noopener" class="mp_social-link wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
              <svg width="304px" height="30px" viewBox="0 0 100 100">
                <path fill="#4623C3" d="M88.723,12.142C76.419,17.238,23.661,39.091,9.084,45.047c-9.776,3.815-4.053,7.392-4.053,7.392 s8.345,2.861,15.499,5.007c7.153,2.146,10.968-0.238,10.968-0.238l33.62-22.652c11.922-8.107,9.061-1.431,6.199,1.431 c-6.199,6.2-16.452,15.975-25.036,23.844c-3.815,3.338-1.908,6.199-0.238,7.63c6.199,5.246,23.129,15.976,24.082,16.691 c5.037,3.566,14.945,8.699,16.452-2.146c0,0,5.961-37.435,5.961-37.435c1.908-12.637,3.815-24.321,4.053-27.659 C97.307,8.804,88.723,12.142,88.723,12.142z"/>
              </svg>
            </a>
            <a href="https://discord.gg/KrVCuBbx" target="_blank" rel="noreferrer noopener" class="mp_social-link wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.45s">
              <svg viewBox="0 0 640 512" width="30px" height="30px">
                <path fill="#4623C3" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/>
              </svg>
            </a>
            <a href="https://sodiumofficial.medium.com/" target="_blank" rel="noreferrer noopener" class="mp_social-link wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
              <svg height="32px" width="32px" viewBox="0 0 1151 1151" xml:space="preserve">
                  <g transform="matrix(1,0,0,1,-246.226,-1.33631)">
                    <path fill="#4623C3" d="M883.45,576.26C883.45,739.93 751.67,872.61 589.12,872.61C426.57,872.61 294.78,739.93 294.78,576.26C294.78,412.59 426.56,279.9 589.12,279.9C751.68,279.9 883.45,412.59 883.45,576.26" style="fill-rule:nonzero;"/>
                  </g>
                  <g transform="matrix(1,0,0,1,-246.226,-1.33631)">
                    <path fill="#4623C3" d="M1206.34,576.26C1206.34,730.32 1140.45,855.26 1059.17,855.26C977.89,855.26 912,730.32 912,576.26C912,422.2 977.88,297.26 1059.16,297.26C1140.44,297.26 1206.33,422.16 1206.33,576.26"/>
                  </g>
                  <g transform="matrix(1,0,0,1,-246.226,-1.33631)">
                    <path fill="#4623C3" d="M1338.41,576.26C1338.41,714.26 1315.24,826.2 1286.65,826.2C1258.06,826.2 1234.9,714.29 1234.9,576.26C1234.9,438.23 1258.07,326.32 1286.65,326.32C1315.23,326.32 1338.41,438.22 1338.41,576.26" style="fill-rule:nonzero;"/>
                  </g>
                  <g transform="matrix(1,0,0,1,-246.226,-1.33631)">
                    <path fill="#4623C3" d="M1633.77,0L1337.48,0L1337.48,0.25L296.29,0.25L296.29,0L-0,0L-0,1150.07L119.51,1150.07L119.51,1150.51L1529.92,1150.51L1529.92,1150.07L1633.77,1150.07L1633.77,0ZM1337.48,296.54L1337.48,854.21L296.29,854.21L296.29,296.54L1337.48,296.54Z" style="fill:none;fill-rule:nonzero;"/>
                  </g>
              </svg>
            </a>
          </div>
          <router-link :to="{name: 'dashboard'}" class="mp_button wow fadeInRight" data-wow-duration="0.8s" data-wow-delay="0.25s">Launch App</router-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import 'wowjs/css/libs/animate.css'
import WOW from 'wowjs'
import NFTCardsSwipe from '@/components/NFTCardsSwipe'
import HowItWorksSwiper from '@/components/HowItWorksSwiper'
import MediumArticles from '@/components/MediumArticles'
export default {
  components: {
    NFTCardsSwipe,
    HowItWorksSwiper,
    MediumArticles
  },
  data() {
    return {

    };
  },
  methods: {
    scrollTo(refName) {
      let element = this.$refs[refName];
      let top = element.offsetTop;
      window.scrollTo(600, top);
    }
  },
  mounted(){
    let wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: false
    });
    wow.init();
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Kodchasan:wght@200;300;400;500;600;700&display=swap');
  html {
    scroll-behavior: smooth;
  }
  #app {
    background: url('~@/assets/gradient-top.svg') #19172D top 72px center no-repeat;
    background-size: 1437px;
    @media screen and (max-width: 1400px) {
      background-size: 1120px;
    }
    @media screen and (max-width: 480px) {
      overflow-x: hidden;
    }
  }
  .container {
    max-width: 1440px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    @media screen and (max-width: 1400px) {
      max-width: 1020px;
    }
    @media screen and (max-width: 767px) {
      padding: 0 12px;
    }
  }
  .header {
    height: 72px;
    display: flex;
    background: #1A182E;
    border: 1px solid #291C61;
    &_in {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 55px 0 0;
      @media screen and (max-width: 1400px) {
        padding: 0;
      }
    }
    .mp {
      &_button {
        margin: 7px 0 0;
      }
    }
  }
  .mp {
    &_title {
      font-size: 56px;
      line-height: 64px;
      text-shadow: #4F3DFE 3px 3px;
      font-family: 'Kodchasan', sans-serif;
      text-transform: uppercase;
      @media screen and (max-width: 1400px) {
        font-size: 46px;
        line-height: 58px;
      }
      @media screen and (max-width: 767px) {
        font-size: 36px;
        line-height: 48px;
      }
      span {
        color: #4F3DFE;
        text-shadow: #ffffff 3px 3px;
      }
      &-text {
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 5px;
        text-transform: uppercase;
        display: block;
        @media screen and (max-width: 1400px) {
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and (max-width: 767px) {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }
    &_logo {
      height: 55px;
      margin: 5px 0 0;
      display: block;
      @media screen and (max-width: 480px) {
        height: 36px;
      }
    }
    &_nav {
      display: flex;
      align-items: center;
      height: 100%;
      @media screen and (max-width: 1023px) {
        display: none;
      }
      a {
        cursor: pointer;
        color: #ffffff;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        transition: color 0.4s;
        @media screen and (max-width: 1400px) {
          font-size: 18px;
        }
        &:hover {
          color: #9c9c9d;
        }
        & + a {
          margin: 0 0 0 54px;
          @media screen and (max-width: 1400px) {
            margin: 0 0 0 38px;
          }
        }
      }
    }
    &_top {
      position: relative;
      padding: 70px 0 0;
      min-height: 992px;
      @media screen and (max-width: 1400px) {
        padding: 54px 0 0;
        min-height: 780px;
      }
      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 50%;
        height: 100%;
        z-index: 0;
        background: url('~@/assets/left-gradient.svg') top -440px right 136px no-repeat;
        @media screen and (max-width: 1400px) {
          background-position: top -440px right;
        }
      }
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 50%;
        height: 100%;
        z-index: 0;
        background: url('~@/assets/right-gradient.svg') bottom -112px left 136px no-repeat;
        @media screen and (max-width: 1400px){
          background-position: bottom -109px right -398px;
        }
        @media screen and (max-width: 1023px) {
          background-position: bottom -134px left -92px;
        }
      }
      &-in {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 53px 0 106px;
        position: relative;
        z-index: 1;
        @media screen and (max-width: 1400px) {
          padding: 0;
        }
        @media screen and (max-width: 1023px) {
          flex-direction: column;
        }
      }
      &-text {
        font-size: 20px;
        line-height: 32px;
        margin: 52px 0 48px;
        @media screen and (max-width: 1400px) {
          font-size: 18px;
          line-height: 28px;
          margin: 42px 0 38px;
        }
        @media screen and (max-width: 767px) {
          font-size: 16px;
          line-height: 24px;
        }
        &-b {
          position: relative;
          max-width: 474px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          @media screen and (max-width: 1400px) {
            max-width: 440px;
          }
          @media screen and (max-width: 1023px) {
            align-items: center;
            text-align: center;
          }
        }
      }
      &-title {
        font-weight: bold;
        font-size: 93px;
        line-height: 98px;
        color: #ffffff;
        font-family: 'Kodchasan', sans-serif;
        text-shadow: #4F3DFE 5px 5px;
        span {
          display: block;
        }
        @media screen and (max-width: 1400px) {
          font-size: 74px;
          line-height: 86px;
        }
        @media screen and (max-width: 767px) {
          font-size: 62px;
          line-height: 72px;
        }
        @media screen and (max-width: 480px) {
          font-size: 54px;
          line-height: 68px;
        }
      }
      &-bubble {
        width: 644px;
        height: 644px;
        background-position: center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1400px) {
          width: 564px;
          height: 564px;
        }
        @media screen and (max-width: 1023px) {
          margin: 42px auto 0;
        }
        @media screen and (max-width: 767px) {
          width: 480px;
          height: 480px;
        }
        @media screen and (max-width: 767px) {
          margin: 82px 0 0;
          width: 100%;
          height:auto;
          background: none !important;
        }
      }
      &-title {

      }
    }
    &_how {
      padding: 108px 0 218px;
      @media screen and (max-width: 1400px) {
        padding: 72px 0 82px;
      }
      &-in {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 37px 0 74px;
        @media screen and (max-width: 1400px) {
          padding: 0;
        }
        @media screen and (max-width: 1023px) {
          flex-direction: column;
          align-items: center;
        }
      }
      &-text {
        font-size: 18px;
        line-height: 32px;
        @media screen and (max-width: 1400px) {
          font-size: 16px;
          line-height: 28px;
        }
        &-b {
          padding: 0 50px 0 0;
          margin: 0 65px 0 0;
          min-height: 404px;
          flex: 0 0 510px;
          border-right: 2px solid #4623C3;
          @media screen and (max-width: 1400px){
            padding: 0 40px 0 0;
            margin: 0 40px 0 0;
            flex: 0 0 420px;
            min-height: 360px;
          }
          @media screen and (max-width: 1023px) {
            max-width: 480px;
            width: 100%;
            border-right: none;
            border-bottom: 2px solid #4623C3;
            padding: 0 0 36px;
            margin: 0;
            min-height: 0;
            flex: unset;
            text-align: center;
          }
        }
      }
      &-slider {
        width: 722px;
        @media screen and (max-width: 1400px){
          width: 520px;
        }
        @media screen and (max-width: 1023px) {
          margin: 42px 0 0;
        }
        @media screen and (max-width: 767px) {
          max-width: 520px;
          width: 100%;
        }
      }
      .mp_title {
        margin: 14px 0 44px;
      }
    }
    &_kf {
      text-align: center;
      padding: 67px 0 57px;
      background: #4623C3;
      @media screen and (max-width: 767px) {
        padding: 36px 0 42px;
      }
      &-in {
        background: radial-gradient(50% 50% at 52.36% 50%, rgba(130, 100, 237, 0.68) 7.81%, rgba(76, 40, 207, 0.68) 68.23%, #4623C3 100%);
        padding: 0 168px 0 165px;
        @media screen and (max-width: 1400px){
          padding: 0;
        }
      }
      &-place {
        position: relative;
        height: 634px;
        margin: 40px 0 0;
        @media screen and (max-width: 767px) {
          height: 560px;
        }
        @media screen and (max-width: 620px) {
          height: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      &-podium {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        display: block;
        &.--blue {
          opacity: 0;
          -moz-animation: podium-opacity 6s infinite;
          -webkit-animation: podium-opacity 6s infinite;
          animation: podium-opacity 6s infinite;
        }
        &-b {
          width: 638px;
          height: 634px;
          margin: 0 auto;
          position: relative;
          @media screen and (max-width: 1400px) {
            width: 582px;
            height: 580px;
          }
          @media screen and (max-width: 767px) {
            max-width: 582px;
            height: 520px;
            width: 100%;
          }
          @media screen and (max-width: 620px) {
            height: 480px;
          }
          @media screen and (max-width: 481px) {
            height: 400px;
          }
          @media screen and (max-width: 361px) {
            height: 340px;
          }
        }
      }
      &-item {
        width: 73px;
        height: 73px;
        border-radius: 50%;
        background-color: #f2f2f2;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        @media screen and (max-width: 620px) {
          top: auto !important;
          right: auto !important;
          left: auto !important;
          bottom: auto !important;
          position: relative;
          margin: 0 40px 60px;
        }
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 73px;
          height: 73px;
          border-radius: 50%;
        }
        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 73px;
          height: 73px;
          border-radius: 50%;
        }
        &-in {
          position: absolute;
          left: 0;
          top: 0;
          width: 73px;
          height: 73px;
          border-radius: 50%;
          background: radial-gradient(50% 50% at 50% 50%, #F1EAFD 74.48%, #4926C7 100%);
          filter: blur(8px);
          transition: filter 1s;
        }

        img {
          display: block;
          position: relative;
          z-index: 1;
        }
        &_text {
          position: absolute;
          font-weight: 500;
          font-size: 18px;
          line-height: 32px;
          top: 100%;
          left: 50%;
          white-space: nowrap;
          margin: 5px 0 0;
          transform: translateX(-50%);
        }

        &.--staking {
          top: 40px;
          left: 82px;
          @media screen and (max-width: 1400px) {
            left: 125px;
          }
          @media screen and (max-width: 767px) {
            top: -24px;
            left: 50px;
          }
          &:before {
            background: linear-gradient(135.64deg, #FFFFFF 15.01%, #BCA5F1 91%);
          }
          &:after {
            background: linear-gradient(135.64deg, #FFFFFF 15.01%, #DFFDFA 91%);
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
          img {
            width: 45px;
          }
        }
        &.--mining {
          top: 40px;
          right: 24px;
          @media screen and (max-width: 1400px) {
            right: 89px;
          }
          @media screen and (max-width: 767px) {
            top: -24px;
            right: 50px;
          }
          &:before {
            background: linear-gradient(225.36deg, #FFFFFF 15.41%, #BCA5F1 87.2%);
          }
          &:after {
            background: linear-gradient(225.36deg, #FFFFFF 15.41%, #DFFDFA 87.2%);
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
          img {
            width: 42px;
          }
        }
        &.--ai-pricing {
          top: 251px;
          left: 10px;
          @media screen and (max-width: 1400px) {
            left: 59px;
          }
          @media screen and (max-width: 767px) {
            top: 120px;
            left: 30px;
          }
          &:before {
            background: linear-gradient(106.63deg, #FAFAFA 17.46%, #BCA5F1 92.45%);
          }
          &:after {
            background: linear-gradient(106.63deg, #FAFAFA 17.46%, #DFFDFA 92.45%);
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
          img {
            width: 42px;
          }
        }
        &.--sodnft {
          top: 251px;
          right: 0;
          @media screen and (max-width: 1400px) {
            right: 37px;
          }
          @media screen and (max-width: 767px) {
            top: 120px;
            right: 30px;
          }
          &:before {
            background: linear-gradient(258.35deg, #F1EAFD 8.66%, #BCA5F1 115.44%);
          }
          &:after {
            background: linear-gradient(258.35deg, #F1EAFD 8.66%, #DFFDFA 115.44%);
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
          img {
            width: 55px;
          }
        }
        &.--liquidity {
          top: 441px;
          left: 78px;
          @media screen and (max-width: 1400px) {
            left: 99px;
          }
          @media screen and (max-width: 767px) {
            left: 30px;
            top: auto;
            bottom: 20px;
          }
          &:before {
            background: linear-gradient(74.73deg, #F1EAFD 7.05%, #BCA5F1 104.16%);
          }
          &:after {
            background: linear-gradient(74.73deg, #F1EAFD 7.05%, #DFFDFA 104.16%);
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
          img {
            width: 53px;
          }
        }
        &.--dao {
          top: 441px;
          right: 72px;
          @media screen and (max-width: 767px) {
            right: 30px;
            top: auto;
            bottom: 20px;
          }
          &:before {
            background: linear-gradient(287.26deg, rgba(241, 234, 253, 0) 8.77%, #FFFFFF 8.78%, #BCA5F1 98.59%);
          }
          &:after {
            background: linear-gradient(287.26deg, rgba(241, 234, 253, 0) 8.77%, #FFFFFF 8.78%, #DFFDFA 98.59%);
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
          img {
            width: 52px;
          }
        }

        &:hover {
          .mp_kf-item-in {
            filter: blur(20px);
          }
        }
      }
      &-front {
        width: 369px;
        height: 237px;
        position: absolute;
        left: 122px;
        top: 95px;
        @media screen and (max-width: 1400px) {
          width: 320px;
          height: 205px;
          left: 98px;
        }
        @media screen and (max-width: 767px) {
          left: 50%;
          margin: 0 0 0 -180px;
        }
        @media screen and (max-width: 620px) {
          width: 240px;
          height: 154px;
          margin: 0 0 0 -120px;
        }
        @media screen and (max-width: 481px) {
          width: 160px;
          height: 102px;
          margin: 0 0 0 -80px;
        }
        img {
          width: 100%;
          position: absolute;
          left: 0;
          top: 0;
          &.--blue {
            opacity: 0;
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
        }
        -moz-animation: front-px 4s infinite;
        -webkit-animation: front-px 4s infinite;
        animation: front-px 4s infinite;
      }
      &-back {
        position: absolute;
        top: 0;
        left: 177px;
        width: 287px;
        height: 290px;
        @media screen and (max-width: 1400px) {
          width: 242px;
          height: 244px;
          left: 160px;
        }
        @media screen and (max-width: 767px) {
          left: 50%;
          margin: 0 0 0 -121px;
        }
        @media screen and (max-width: 620px) {
          width: 188px;
          height: 190px;
          margin: 0 0 0 -94px;
        }
        @media screen and (max-width: 481px) {
          width: 160px;
          height: 102px;
          margin: 0 0 0 -80px;
        }
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          &.--blue {
            opacity: 0;
            -moz-animation: podium-opacity 6s infinite;
            -webkit-animation: podium-opacity 6s infinite;
            animation: podium-opacity 6s infinite;
          }
        }
        -moz-animation: back-px 5s infinite;
        -webkit-animation: back-px 5s infinite;
        animation: back-px 5s infinite;
      }
      &-logo {
        position: absolute;
        width: 168px;
        height: 227px;
        top: 63px;
        left: 253px;
        @media screen and (max-width: 1400px) {
          width: 142px;
          height: 190px;
          left: 226px;
        }
        @media screen and (max-width: 767px) {
          left: 50%;
          margin: 0 0 0 -71px;
        }
        @media screen and (max-width: 620px) {
          width: 114px;
          height: 152px;
          margin: 0 0 0 -57px;
        }
        @media screen and (max-width: 481px) {
          width: 80px;
          height: 106px;
          margin: 0 0 0 -40px;
        }
        img {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          &.--front {
            opacity: 0;
            -moz-animation: logo-front 8s infinite;
            -webkit-animation: logo-front 8s infinite;
            animation: logo-front 8s infinite;
          }
        }
        -moz-animation: logo-px 6s infinite;
        -webkit-animation: logo-px 6s infinite;
        animation: logo-px 6s infinite;
      }
      .mp {
        &_title {
          margin: 14px 0 0;
        }
      }
    }
    &_medium {
      padding: 160px 0 130px;
      text-align: center;
      @media screen and (max-width: 1400px) {
        padding: 72px 0 62px;
      }
      &-in {
        padding: 0 180px;
        @media screen and (max-width: 1400px) {
          padding: 0;
        }
      }
    }
    &_join {
      padding: 130px 0 255px;
      @media screen and (max-width: 1400px) {
        padding: 72px 0 120px;
      }
      @media screen and (max-width: 767px) {
        padding: 48px 0;
      }
      &-in {
        padding: 0 180px;
        @media screen and (max-width: 1400px) {
          padding: 0;
        }
      }
      &-block {
        background: #4623C3;
        height: 302px;
        background-position: center;
        background-size: cover;
        padding: 0 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 767px) {
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
        }
      }
      &-text {
        font-size: 45px;
        line-height: 58px;
        font-weight: 600;
        font-family: 'Kodchasan', sans-serif;
        @media screen and (max-width: 1400px) {
          font-size: 36px;
          line-height: 48px;
        }
        @media screen and (max-width: 767px) {
          margin: 0 0 32px;
          text-align: center;
          font-size: 30px;
          line-height: 36px;
        }
      }
    }
    &_social {
      display: flex;
      @media screen and (max-width: 1023px) {
        margin: 32px 0;
      }
      &-link {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.4s;
        svg path {
          transition: fill 0.4s;
        }
        &:hover {
          background: #4623C3;
          svg path {
            fill: #ffffff;
          }
        }
        & + .mp_social-link {
          margin: 0 0 0 30px;
          @media screen and (max-width: 767px) {
            margin: 0 0 0 20px;
          }
        }
      }
    }

    &_button {
      border: 2px solid #EB5595;
      border-radius: 12px;
      font-weight: 600;
      font-size: 17px;
      line-height: 24px;
      color: #EB5595;
      min-width: 165px;
      padding: 8px 10px;
      white-space: nowrap;
      text-align: center;
      transition: background 0.4s, color 0.4s;
      &:hover {
        background: #EB5595;
        color: #ffffff;
      }
      @media screen and (max-width: 767px) {
        font-size: 15px;
        min-width: 136px;
        padding: 6px 8px;
        line-height: 18px;
      }
    }
    &_w-button {
      background: #FFFFFF;
      border: 1px solid #4623C3;
      box-sizing: border-box;
      border-radius: 45px;
      font-weight: 600;
      font-size: 17px;
      line-height: 25px;
      text-align: center;
      white-space: nowrap;
      padding: 18px 45px;
      color: #4623C3;
      display: inline-block;
      transition: background 0.4s, color 0.4s, border-color 0.4s;
      &:hover {
        color: #ffffff;
        background: #4623C3;
        border-color: #ffffff;
      }
    }
  }
  .footer {
    padding: 36px 0 47px;
    &-in {
      padding: 0 70px 0 116px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      @media screen and (max-width: 1400px) {
        padding: 0;
      }
      @media screen and (max-width: 1023px) {
        flex-direction: column;
        align-items: center;
      }
    }
    &_copyright {
      font-size: 14px;
      line-height: 20px;
      color: #ffffff;
      display: block;
      @media screen and (max-width: 1023px) {
        text-align: center;
      }
      span {
        color: #EB5595;
      }
    }
    .mp_logo {
      margin: 0 0 12px;
      @media screen and (max-width: 1023px) {
        margin: 0 auto 18px;
      }
    }
  }

  @-moz-keyframes kf-icon-staking {
    0% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #BCA5F1 91%);
    }
    50% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #DFFDFA 91%);
    }
    100% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #BCA5F1 91%);
    }
  }
  @-webkit-keyframes kf-icon-staking {
    0% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #BCA5F1 91%);
    }
    50% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #DFFDFA 91%);
    }
    100% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #BCA5F1 91%);
    }
  }
  @keyframes kf-icon-staking {
    0% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #BCA5F1 91%);
    }
    50% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #DFFDFA 91%);
    }
    100% {
      background: linear-gradient(135.64deg, #FFFFFF 15.01%, #BCA5F1 91%);
    }
  }

  @-moz-keyframes logo-front {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes logo-front {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes logo-front {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes logo-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-webkit-keyframes logo-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes logo-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @-moz-keyframes front-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-webkit-keyframes front-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes front-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @-moz-keyframes back-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @-webkit-keyframes back-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes back-px {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @-moz-keyframes podium-opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @-webkit-keyframes podium-opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes podium-opacity {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
