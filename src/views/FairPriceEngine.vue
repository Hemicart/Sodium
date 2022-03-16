<template>
  <div class="table --lending">
    <div class="table_head --start">
      <span class="table_head-item w-300 --start">Collection</span>
      <span class="table_head-item w-164">FPE Market Cap</span>
      <span class="table_head-item w-164">FPE Avrg. Price</span>
      <span class="table_head-item w-124">24h</span>
      <span class="table_head-item w-124">7d</span>
      <span class="table_head-item w-110">Avrg. Price (7D)</span>
    </div>
    <FPELine v-for="(line, index) in lines" :key="index"
      :index="index"
      :collectionName="line.collectionName"
      :marketCap="line.marketCap"
      :averagePrice="line.averagePrice"
      :percent24h="line.percent24h"
      :percent7d="line.percent7d"
      :averagePrice7d="line.averagePrice7d"
      :collectionID="line.collectionID" />
  </div>
</template>

<script>
import axios from 'axios'
import FPELine from '@/components/FPELine'
export default {
  components: {
    FPELine
  },
  data() {
    return {
      lines: [],
      datas: [],
      collections: [
        '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
        '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
        '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b',
        '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
        '0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb',
        '0xfe8c6d19365453d26af321d0e8c910428c23873f',
        '0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83',
        '0x1a92f7381b9f03921564a437210bb9396471050c',
        '0xed5af388653567af2f388e6224dc7c4b3241c544'
      ]
    }
  },
  methods: {
    getDatas: function() {
      this.datas.forEach((item, i) => {
        let collectionNameOption = {collectionName: item['Collection name'] },
            marketCapOption      = {marketCap: item['FPE Market Cap']},
            averagePriceOption   = {averagePrice: item['FPE Avrg Price']},
            percent24hOption     = {percent24h: item['24h']},
            percent7dOption      = {percent7d: item['7d']},
            averagePrice7dOption = {averagePrice7d: item['Avrg Price(7D)']},
            collectionIDOption   = {collectionID: this.collections[i]},

            line = Object.assign({},
              collectionNameOption,
              marketCapOption,
              averagePriceOption,
              percent24hOption,
              percent7dOption,
              averagePrice7dOption,
              collectionIDOption
            )
        this.lines.push(line)
      });
    },
    getReq: function() {
            axios.get('/api/get_pretab/tab')
            .then( response => {
                this.datas = response.data;
                this.getDatas();
              })
            .catch(e => {
                console.log(e);
            });
    }
  },
  mounted() {
    this.getReq();
  }
}
</script>

<style lang="scss">
</style>
