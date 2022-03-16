<template>
  <div class="c-chart">
    <div class="c-chart_header">
      <div class="c-chart_header-left">
        <div class="c-chart_header-img" :style="{ backgroundImage: 'url(' + require('@/assets/austronaut.png') + ')' }">
          <div class="c-chart_header-img_bg" :style="{ backgroundImage: 'url(' + imgBase + collectionID + '/tokens/' + inputSearch + ')'}"></div>
        </div>
        <div class="c-chart_header-info">
          <h2 class="c-chart_header-title">{{ collections['' + collectionID + ''] }} #{{inputSearch}}</h2>
          <div class="c-chart_header-icon">
            <img :src="require('@/assets/examples/'+ collectionID +'.png')" alt="">
            <span>{{ collections['' + collectionID + ''] }} NFT</span>
          </div>
          <div class="c-chart_header-id">
            <span>{{collectionID}}</span>
            <img :src="require('@/assets/id-icon.png')" alt="">
          </div>
          <p class="c-chart_header-text">The Fair Price Engine (FPE) is our proprietary NFT price estimation system. Utilizing neural networks, the FPE calculates your NFT’s current value by analyzing and drawing correlations between important data inputs. Please note that our FPE is in its alpha testing phase; we are continually increasing the accuracy of the estimated prices provided, as well as the price estimation history in the chart below.</p>
        </div>
      </div>
      <div class="c-chart_header-right">
        <input type="text" name="searchNFT" class="c-chart_search" placeholder="search #" v-on:keypress="numbersOnly" maxlength="5" v-model="inputSearch" @input="estPriceMethod()">
        <div class="c-chart_header-price">
          <h4>FPE Est. Price</h4>
          <span>Ξ {{estPrice}}</span>
        </div>
      </div>
    </div>
    <div class="c-chart_scatter">
      <div class="c-chart_scatter-top">
        <div class="c-chart_scatter-color-b">
          <span class="c-chart_scatter-color --collection">COLLECTION TRADES</span>
          <span class="c-chart_scatter-color --searched">SEARCHED ID TRADES</span>
          <span class="c-chart_scatter-color --fpe">FPE EST. PRICE</span>
        </div>
        <div class="c-chart_scatter-button">
          <input class="c-chart-checkbox" type="radio" name="chartPeriod" value="7d" id="chartPeriod7d" v-model="chartPeriod"><label for="chartPeriod7d">7D</label>
          <input class="c-chart-checkbox" type="radio" name="chartPeriod" value="30d" id="chartPeriod30d" v-model="chartPeriod"><label for="chartPeriod30d">30D</label>
          <input class="c-chart-checkbox" type="radio" name="chartPeriod" value="90d" id="chartPeriod90d" v-model="chartPeriod" checked><label for="chartPeriod90d">90D</label>
        </div>
      </div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import {Chart} from 'highcharts-vue'

export default {
  props: ["datas7d","datas30d","datas90d", "collectionID"],
  components: {
    highcharts: Chart
  },
  data() {
    return {
      inputSearch: 1,
      estPrice: '',
      estPriceData: [],
      chartPeriod: '',
      priceData: [],
      imgBase: 'https://images.icytools.workers.dev/md/collections/',
      priceBaseUrl: '/api/get_fpe/' + this.collectionID,
      collections: {
        '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb': 'CryptoPunk',
        '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d': 'Bored Ape Yacht Club',
        '0x60e4d786628fea6478f785a6d7e704777c86a7c6': 'Mutant Ape Yacht Club',
        '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b': 'Clone-X',
        '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e': 'Doodle',
        '0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb': 'VeeFriends',
        '0xfe8c6d19365453d26af321d0e8c910428c23873f': 'Creepz Genesis',
        '0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83': 'KaijuKing',
        '0x1a92f7381b9f03921564a437210bb9396471050c': 'Cool Cats',
        '0xed5af388653567af2f388e6224dc7c4b3241c544': 'Azuki'
      },
      chartOptions: {
        chart: {
          backgroundColor: 'rgba(0,0,0,0)',
          type: "scatter",
          spacing: [12, 12, 12, 12]
        },
        tooltip: {          
          formatter: function () {
            if ( !this.point.tokenID ) {
              return 'Date: <b>' + moment.unix(this.x).format('YYYY-MM-DD HH:mm:ss') + '</b>' +
                    '<br>Value: <b>' + this.y + '</b>'
            }
            return 'Date: <b>' + moment.unix(this.x).format('YYYY-MM-DD HH:mm:ss') + '</b>' +
                  '<br>Value: <b>' + this.y + '</b>' +
                  '<br>Token ID: <b>' + this.point.tokenID
          }
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 2,
              lineWidth: 2,
              lineColor: "#ffffff",
              fillColor: "#ffffff",
              states: {
                normal:{
                  opacity: 0.25
                },
                hover:  {
                  radiusPlus: 4,
                  duration: 100,
                  opacity: 1
                },
                select: {
                  fillColor: '#08F7FE',
                  lineColor: '#08F7FE',
                  radius: 8,
                  opacity: 1
                }
              }
            }
          },
          spline: {
            marker: {
              radius: 2,
              lineWidth: 2,
              fillColor: "#ffffff"
            },
            lineColor: "#F5D300",
            lineWidth: 4,
            zIndex: 1
          },
          series: {
            turboThreshold: 0
          }
        },
        title: false,
        xAxis: {
          type: 'datetime',
          title: 'false',
          lineColor: '#86869E',
          labels: {
            style: {
              color: '#86869E',
              fontSize: '12px'
            }
          },
          tickPixelInterval: 75,
          tickmarkPlacement: 'between',
          tickWidth: 1
        },
        yAxis: {
            // type: 'logarithmic',
            type: 'line',
            title: {
              text: 'PRICE IN ETH',
              style: {
                color: "#86869E",
                fontSize: "14px",
                fontFamily: 'Poppins'
              }
            },
            gridLineColor: '#86869E',
            endOnTick: false,
            maxPadding: 0.1,
            // minPadding: 0.1,
            // min: 0.1,
            labels: {
              style: {
                color: '#86869E',
                fontSize: '12px'
              }
            }
        },
        series: [
          {
            showInLegend: false,
            data: this.getChartData('90d')
          },
          {
            type: 'spline',
            showInLegend: false,
            data: this.getTokenData(),
            zIndex: 2
          }
        ]
      }
    }
  },
  watch: {
    chartPeriod(value) {
      setTimeout(()=>
        this.chartOptions.series[0].data = this.getChartData(value),
        100
      );
      this.estPriceCurrent();
      this.selectUpdate();
    }
  },
  methods: {
    agoDayTime: function(time) {
      return moment().subtract(time, 'days').format("YYYY-MM-DD") + ' 12:00:00'
    },
    numbersOnly(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    estPriceCurrent() {
      this.priceData = [];

      this.priceData.push({x: moment().unix(), y: this.estPriceData["Current estimate"]});

      let period = (this.chartPeriod == '7d') ? 7 : 30;

      for (var i = 1; i < period; i++) {
        this.priceData.push({
          x: moment(this.agoDayTime(i)).unix(),
          y: this.estPriceData["" + i + "d ago"]
        })
      }

      this.chartOptions.series[1].data = this.getTokenData()
    },
    estPriceMethod: function() {
      axios.get(this.priceBaseUrl + '/' + this.inputSearch)
      .then( response => {
          this.estPriceData = response.data[0];
          this.estPrice =  this.estPriceData["Current estimate"].toFixed(3);
          this.estPriceCurrent();
        })
      .catch( e => {
        console.log(e);
        this.estPrice = '-'
      });
      this.selectUpdate();
    },
    getChartData: function(period) {
      return this.$props['datas' + period]
    },
    getTokenData: function() {
      return this.$data['priceData']
    },
    selectUpdate() {
      this.chartOptions.series[0].data.forEach((item) => {
        if ( item['tokenID'] == this.inputSearch ) {
          item['selected'] = true
        }
        else {
          item['selected'] = false
        }
      })
    }
  },
  mounted() {
    this.estPriceMethod();
  }
}
</script>

<style lang="scss">
  .c-chart {
    &_scatter {
      border-radius: 20px;
      background: #382D54;
      padding: 16px 8px 20px 0;
      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 12px 18px 46px;
      }
      &-button {
        display: flex;
        justify-content: center;
        background: rgba(255, 255, 255, 0.15);
        padding: 4px;
        border-radius: 5px;
      }
      &-color {
        font-size: 10px;
        line-height: 15px;
        color: #ffffff;
        padding: 0 0 0 23px;
        position: relative;
        &-b {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          box-sizing: border-box;
        }
        &.--collection {
          &:before {
            background: rgba(196, 196, 196, 0.2);
            border: 1px solid #FFFFFF;
          }
        }
        &.--searched {
          &:before {
            background: #08F7FE;
          }
        }
        &.--fpe {
          &:before {
            background: #F5D300;
          }
        }
        & + .c-chart_scatter-color {
          margin: 0 0 0 22px;
        }
      }
    }
    &_header {
      padding: 12px 30px 12px 12px;
      border-radius: 20px;
      background: #382D54;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      margin: 0 0 56px;

      &-left {
        display: flex;
      }

      &-right {
        min-width: 165px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px 0;
      }

      &-info {
        display: flex;
        flex-direction: column;
        padding: 20px 0 0;
        text-align: left;
        max-width: 400px;
      }

      &-title {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #ffffff;
      }
      &-icon {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 22px;
          margin: 0 12px 0 0;
        }
        span {
          font-weight: 600;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.5px;
          color: #8C9BBF;
        }
      }
      &-img {
        min-width: 240px;
        max-width: 240px;
        min-height: 240px;
        border-radius: 20px;
        margin: 0 42px 0 0;
        background-color: #302A7D;
        background-position: center;
        background-size: center;
        background-size: cover;
        &_bg {
          width: 240px;
          height: 240px;
          background-position: center;
          background-size: cover;
          border-radius: 20px;
        }
        img {
          display: block;
          width: 100%;

        }
      }
      &-id {
        margin: 6px 0 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.875px;
          text-transform: uppercase;
          color: #8C9BBF;
        }
        img {
          width: 14px;
          margin: 0 0 0 8px;
        }
      }
      &-text {
        margin: 16px 0 0;
        font-weight: 500;
        font-size: 11px;
        line-height: 18px;
        letter-spacing: -0.5px;
        color: #8C9BBF;
      }
      &-price {
        color: #ffffff;
        letter-spacing: 0.5px;
        h4 {
          font-weight: 600;
          font-size: 19px;
          line-height: 25px;
        }
        span {
          font-weight: 500;
          font-size: 41px;
        }
      }
    }
    &_search {
      display: block;
      width: 144px;
      background: rgba(255, 255, 255, 0.32);
      border-radius: 22px;
      border: none;
      outline: none;
      padding: 0 10px;
      height: 33px;
      color: #ffffff;
      font-size: 16px;
    }
  }
  input[type='radio'].c-chart-checkbox {
    display: none;
    & +label {
      line-height: 30px;
      display: flex;
      justify-content: center;
      width: 42px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
      color: #ffffff;
    }
    &:checked + label {
      background: #fff;
      color: #000;
    }
  }
  .highcharts {
    &-point {
      z-index: 0;
      position: relative;
      &-select {
        z-index: 3;
      }
    }
  }
</style>
