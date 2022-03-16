<template>
  <div class="table_line">
    <span class="table_line-item w-248">
      <span class="table_line-icon">
        <img :src="require('@/assets/examples/' + collections[index] + '.png')" alt="">
      </span>
      {{collectionName}}
    </span>
    <span class="table_line-item w-164">
      Ξ {{marketCap}}
    </span>
    <span class="table_line-item w-96 --center t-green" :class="{'t-red': percent24h < 0}">
      <template v-if="percent24h < 0">
        {{ percent24h*(-1) }} %
      </template>
      <template v-else>
        {{ percent24h }} %
      </template>
    </span>
    <span class="table_line-item w-144">
      Ξ {{volume24h}}
    </span>
    <span class="table_line-item w-124 t-purple">
      Ξ {{averagePrice24h}}
    </span>
    <span class="table_line-item w-96 --center t-green" :class="{'t-red':percent24hAverage < 0}">
      <template v-if="percent24hAverage < 0">
        {{ percent24hAverage*(-1) }} %
      </template>
      <template v-else>
        {{ percent24hAverage }} %
      </template>
    </span>
    <span class="table_line-item w-110">
      <div class="c-chart --sm">
        <highcharts :options="chartOptions"></highcharts>
      </div>
    </span>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
export default {
  props: [
    'index', 'collectionName', 'marketCap', 'percent24h', 'volume24h', 'averagePrice24h', 'percent24hAverage', 'averagePrice7d'
  ],
  components: {
    highcharts: Chart
  },
  data() {
    return {
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
      ],
      chartOptions: {
        chart: {
          backgroundColor: 'rgba(0,0,0,0)',
          type: "spline",
          height: 50,
          width: 104
        },
        tooltip: {
          outside: true,
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 2,
              lineColor: this.percent24hAverage < 0 ? '#FF5274':'#71D875',
              lineWidth: 0,
              fillColor: this.percent24hAverage < 0 ? '#FF5274':'#71D875'
            },
            lineWidth: 2,
            lineColor: this.percent24hAverage < 0 ? '#FF5274':'#71D875'
          }
        },
        title: false,
        xAxis: [
          {
            visible: false
          }
        ],
        yAxis: [
          {
            visible: false
          }
        ],
        series: [
          {
            showInLegend: false,
            data: this.averagePrice7d,
            name: 'Price'
          }
        ]
      },
    }
  },
  mounted() {

  }
}
</script>

<style lang="css" scoped>
</style>
