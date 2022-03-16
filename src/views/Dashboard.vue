<template>
  <div class="table">
    <div class="table_head">
      <span class="table_head-item w-248">Collection</span>
      <span class="table_head-item w-164">Market Cap</span>
      <span class="table_head-item w-96">24h</span>
      <span class="table_head-item w-144">Volume (24h)</span>
      <span class="table_head-item w-124">Avrg. Price (24h)</span>
      <span class="table_head-item w-96">24h</span>
      <span class="table_head-item w-110">Avrg. Price (7D)</span>
    </div>
    <DashboardLine v-for="(line, index) in lines" :key="index"
      :index="index"
      :collectionName="line.collectionName"
      :marketCap="line.marketCap"
      :percent24h="line.percent24h"
      :volume24h="line.volume24h"
      :averagePrice24h="line.averagePrice24h"
      :percent24hAverage="line.percent24hAverage"
      :averagePrice7d="line.averagePrice7d" />
  </div>
</template>

<script>
import axios from 'axios'
import DashboardLine from '@/components/DashboardLine'
export default {
  components: {
    DashboardLine
  },
  data() {
    return {
      lines: [],
      datas: []
    }
  },
  methods: {
    getDatas: function() {
      this.datas.forEach((item) => {
        let collectionNameOption    = {collectionName: item['Collection name'] },
            marketCapOption         = {marketCap: item['Market Cap']},
            percent24hOption        = {percent24h: item['%24h']},
            volume24hOption         = {volume24h: item['Volume(24h)']},
            averagePrice24hOption   = {averagePrice24h: item['Avrg Price(24h)']},
            percent24hAverageOption = {percent24hAverage: item['%24h Avrg']},
            averagePrice7dOption    = {averagePrice7d: item['Avrg Price(7D)']},

            line = Object.assign({},
              collectionNameOption,
              marketCapOption,
              percent24hOption,
              volume24hOption,
              averagePrice24hOption,
              percent24hAverageOption,
              averagePrice7dOption
            )
        this.lines.push(line)
      });
    },
    getReq: function() {
      axios.get('/api/get_tab1/table1')
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
