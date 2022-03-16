<template>
  <div class="m-card_list">
    <article class="m-card" v-for="(item, index) in items" :key='index'>
      <div class="m-card_img" :style="{ backgroundImage: 'url(' + require('@/assets/cards/' + item.collectionID + '.png') + ')' }"></div>
      <div class="m-card_in">
        <h5 class="m-card_title">{{item.collectionTitle}} #{{item.tokenID}}</h5>
        <div class="m-card_item">
          <span>Est.Price</span>
          <span class="m-card_num">{{item.estPrice}} ETH</span>
        </div>
        <div class="m-card_item --sm">
          <span>Borrowing Limit</span>
          <span class="m-card_num">{{item.borrowingLimit}} ETH</span>
        </div>
        <div class="m-card_line">
          <span>Borrow APR</span>
          <span class="m-card_num">12.7%</span>
        </div>
        <div class="m-card_sod-b">
          <span class="m-card_sod">sod 23.91% APR</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [
        {
          collectionID: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
          collectionTitle: 'BoredApeYachtClub',
          tokenID: '6644',
          estPrice: 0,
          borrowingLimit: 0
        },
        {
          collectionID: '0x60e4d786628fea6478f785a6d7e704777c86a7c6',
          collectionTitle: 'MutantApeYachtClub',
          tokenID: '16064',
          estPrice: 0,
          borrowingLimit: 0
        },
        {
          collectionID: '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b',
          collectionTitle: 'CloneX',
          tokenID: '16595',
          estPrice: 0,
          borrowingLimit: 0
        },
        {
          collectionID: '0x1a92f7381b9f03921564a437210bb9396471050c',
          collectionTitle: 'Cool Cat',
          tokenID: '4840',
          estPrice: 0,
          borrowingLimit: 0
        },
        {
          collectionID: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
          collectionTitle: 'Doodle',
          tokenID: '9257',
          estPrice: 0,
          borrowingLimit: 0
        },
        {
          collectionID: '0xed5af388653567af2f388e6224dc7c4b3241c544',
          collectionTitle: 'Azuki',
          tokenID: '4183',
          estPrice: 0,
          borrowingLimit: 0
        },
        {
          collectionID: '0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83',
          collectionTitle: 'KaijuKing',
          tokenID: '1510',
          estPrice: 0,
          borrowingLimit: 0
        },
        {
          collectionID: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
          collectionTitle: 'CryptoPunk',
          tokenID: '5279',
          estPrice: 0,
          borrowingLimit: 0
        }
      ]
    }
  },
  mounted() {
    this.items.forEach((item) => {
      axios.get('/api/get_fpe/' + item.collectionID + '/' + item.tokenID + '')
      .then( response => {
          let price = response.data[0]["Current estimate"];
          item['estPrice'] = price.toFixed(2)
          item['borrowingLimit'] = (price*0.3).toFixed(2)
        })
      .catch( e => {
        console.log(e)
      });
    });
  }
}
</script>

<style lang="scss">
  .m-card {
    width: 263px;
    height: 383px;
    background: #382D54;
    border-radius: 20px;
    padding: 10px;
    margin: 32px 0 0;
    &_list {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: -32px 0 0;
    }
    &_in {
      padding: 10px 10px 0;
    }
    &_img {
      display: block;
      width: 100%;
      height: 206px;
      background-position: center;
      background-size: cover;
      border-radius: 20px;
    }
    &_title {
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.5px;
      white-space: nowrap;
      & + .m-card_item {
        margin: 2px 0 0;
      }
    }
    &_num {
      min-width: 72px;
      max-width: 72px;
      text-align: left;
    }
    &_item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: justify;
        letter-spacing: 0.5px;
        color: #EB5595;
      }
      &.--sm {
        span {
          font-size: 12px;
        }
      }
      & + .m-card_item {
        margin: 16px 0 0;
      }
    }
    &_line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 3px 0 0;
      span {
        font-size: 12px;
        line-height: 22px;
        text-align: justify;
        letter-spacing: 0.5px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    &_sod {
      border: 1px solid #EB5595;
      box-sizing: border-box;
      border-radius: 12px;
      text-align: center;
      font-weight: 600;
      text-transform: uppercase;
      font-size: 15px;
      line-height: 18px;
      padding: 10px 14px;
      display: inline-block;
      &-b {
        margin: 8px 0 0;
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
