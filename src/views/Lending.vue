<template>
<div class="table --lending">
  <div class="table_head">
    <span class="table_head-item w-144">Asset</span>
    <span class="table_head-item w-154">Deposit Market ($)</span>
    <span class="table_head-item w-154">Deposit Total APY</span>
    <span class="table_head-item w-154">Borrow Market ($)</span>
    <span class="table_head-item w-154">Borrow Total APY ($)</span>
    <span class="table_head-item w-124">Liquidity</span>
    <span class="table_head-item w-144">Action</span>
  </div>
  <div class="table_line">
    <span class="table_line-item w-144">
      <span class="table_line-icon">
        <img :src="require('@/assets/examples/eth.png')" alt="">
      </span>
      <span class="table_info">
        <span class="table_info-title">Eth</span>
        <span class="table_info-text">Ethereum</span>
      </span>
    </span>
    <span class="table_line-item w-154 --center">$ 113.39M</span>
    <span class="table_line-item w-154 --center">10.94%</span>
    <span class="table_line-item w-154 --center">$ 96.81M</span>
    <span class="table_line-item w-154 --center">14.24%</span>
    <span class="table_line-item w-124 --center">$ 16.59M</span>
    <span class="table_line-item w-144 --center">
      <span class="table_button --blue">Deposit</span>
    </span>
  </div>
  <div class="table_line">
    <span class="table_line-item w-144">
      <span class="table_line-icon">
        <img :src="require('@/assets/examples/bnb.png')" alt="">
      </span>
      <span class="table_info">
        <span class="table_info-title">BNB</span>
        <span class="table_info-text">Binance Coin</span>
      </span>
    </span>
    <span class="table_line-item w-154 --center">$ 74.67M</span>
    <span class="table_line-item w-154 --center">8.42%</span>
    <span class="table_line-item w-154 --center">$ 53.32M</span>
    <span class="table_line-item w-154 --center">10.61%</span>
    <span class="table_line-item w-124 --center">$ 21.35M</span>
    <span class="table_line-item w-144 --center">
      <span class="table_button --blue">Deposit</span>
    </span>
  </div>
  <div class="table_line">
    <span class="table_line-item w-144">
      <span class="table_line-icon">
        <img :src="require('@/assets/examples/sol.png')" alt="">
      </span>
      <span class="table_info">
        <span class="table_info-title">Sol</span>
        <span class="table_info-text">Solana</span>
      </span>
    </span>
    <span class="table_line-item w-154 --center">$ 93.67M</span>
    <span class="table_line-item w-154 --center">12.3%</span>
    <span class="table_line-item w-154 --center">$ 88.86M</span>
    <span class="table_line-item w-154 --center">16.84%</span>
    <span class="table_line-item w-124 --center">$ 4.81M</span>
    <span class="table_line-item w-144 --center">
      <span class="table_button --blue">Deposit</span>
    </span>
  </div>
  <div class="table_line">
    <span class="table_line-item w-144">
      <span class="table_line-icon">
        <img :src="require('@/assets/examples/usdt.png')" alt="">
      </span>
      <span class="table_info">
        <span class="table_info-title">Usdt</span>
        <span class="table_info-text">Tether</span>
      </span>
    </span>
    <span class="table_line-item w-154 --center">$ 323.39M</span>
    <span class="table_line-item w-154 --center">6.13%</span>
    <span class="table_line-item w-154 --center">$ 203.12M</span>
    <span class="table_line-item w-154 --center">9.53%</span>
    <span class="table_line-item w-124 --center">$ 120.27M</span>
    <span class="table_line-item w-144 --center">
      <span class="table_button --blue">Deposit</span>
    </span>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss">

</style>
