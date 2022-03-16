<template>
  <div class="ch">
    <div class="m-container">
      <div class="ch_title-b">
        <span class="ch_title">ALPHA Version</span>
        <a href="" class="m-button">Connect Wallet</a>
      </div>
      <div class="ch_list">
        <div class="ch_item --sm">
          <div class="ch_item-col">
            <svg  width="125" height="79" viewBox="0 0 125 79" fill="none" class="ch_item-chart">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.35547 62.3562H5.77964L10.9896 49.5149L16.1531 55.9356H21.328L25.5934 37.0938L30.9815 49.5149L34.7973 40.5057L39.4671 37.0938L50.7879 40.5057L55.141 33.8208L60.3541 37.0938L64.2405 40.5057L69.3983 33.8208L74.6214 30.891L79.8083 37.0938L84.4257 20.0882L89.3635 14.9346L94.6498 20.0882L103.982 11.0911L109.318 14.9346L117.981 7.42832L123.578 1V79H1.64673L1.35547 62.3562Z" fill="url(#paint0_linear_124_243)"/>
              <path d="M1.35547 62.3562H5.77964L10.9896 49.5149L16.1531 55.9356H21.328L25.5934 37.0938L30.9815 49.5149L34.7973 40.5057L39.4671 37.0938L50.7879 40.5057L55.141 33.8208L60.3541 37.0938L64.2405 40.5057L69.3983 33.8208L74.6214 30.891L79.8083 37.0938L84.4257 20.0882L89.3635 14.9346L94.6499 20.0882L103.982 11.0911L109.318 14.9346L117.981 7.42832L123.578 1" stroke="#7422DD" stroke-width="2" stroke-linecap="round"/>
              <defs>
              <linearGradient id="paint0_linear_124_243" x1="1.35547" y1="1" x2="1.35547" y2="79" gradientUnits="userSpaceOnUse">
              <stop stop-color="#F1E4FA"/>
              <stop offset="0.999802" stop-color="#AF71FF" stop-opacity="0.01"/>
              </linearGradient>
              </defs>
            </svg>
            <span class="ch_item-title">Loan Volume</span>
            <span class="ch_item-num --lg">$ 120,520,000</span>
            <span class="ch_item-diff">+1.063,20 (25.21%)</span>
          </div>
        </div>
        <div class="ch_item">
          <div class="ch_item-col">
            <span class="ch_item-title">Total value locked</span>
            <span class="ch_item-num">$ 751,564,562</span>
            <span class="ch_item-diff">0.74%</span>
          </div>
          <div class="ch_item-col">
            <span class="ch_item-title">NFT VALUE Locked</span>
            <span class="ch_item-num">$ 557,829,684</span>
            <span class="ch_item-diff">0.27%</span>
          </div>
          <div class="ch_item-col">
            <span class="ch_item-title">SOD Circ. Supply</span>
            <span class="ch_item-num">18,881,725 SOD</span>
            <span class="ch_item-diff">0.01%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap');
  .ch { //content-header
    height: 280px;
    background: linear-gradient(89.96deg, #7422DD 58.13%, #2D20C3 99.94%);
    display: flex;
    margin: 0;
    padding: 24px 0;

    &_title {
      font-size: 20px;
      line-height: 30px;
      font-weight: 500;
      &-b {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    &_list {
      display: flex;
      margin: 24px 0 0;
    }
    &_item {
      height: 166px;
      background: #FFFFFF;
      border-radius: 22px;
      padding: 24px 32px;
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      display: flex;
      justify-content: flex-start;
      position: relative;
      &-col {
        display: flex;
        flex-direction: column;
        & + .ch_item-col {
          margin: 0 0 0 48px;
        }
      }
      &.--sm {
        max-width: 352px;
      }
      & + .ch_item {
        margin: 0 0 0 24px;
      }
      &-title {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        display: block;
        letter-spacing: 0.875px;
        text-transform: uppercase;
        color: #8C9BBF;
        font-family: 'Mulish', sans-serif;
      }
      &-num {
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        letter-spacing: 0.45px;
        text-transform: uppercase;
        color: #2F3F67;
        display: block;
        margin: 30px 0 14px;
        &.--lg {
          font-size: 24px;
          line-height: 36px;
          letter-spacing: 0.75px;
          margin: 22px 0 13px;
        }
      }
      &-diff {
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuMzc3OTMgMTFMMTAuMTU1NyAxIiBzdHJva2U9IiMwMEFDNDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0wLjM3NzkzIDFIMTAuMTU1N1YxMSIgc3Ryb2tlPSIjMDBBQzQ1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K') left center no-repeat;
        padding: 0 0 0 16px;
        font-family: 'Mulish',sans-serif;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.875px;
        text-transform: uppercase;
        color: #00AC45;
      }
      &-chart {
        width: 125px;
        height: 79px;
        position: absolute;
        right: 24px;
        bottom: 30px;
      }
    }
  }
</style>
