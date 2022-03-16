<template>
  <ul class="mp_medium-list wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.35s">
    <template v-for="(item,index) in data.items" :key="index">
      <template v-if="index < 3">
        <li class="mp_medium-item">
            <div class="mp_medium-bg" :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"></div>
            <div class="mp_medium-info">
              <h4 class="mp_medium-title">{{item.title}}</h4>
              <div class="mp_medium-text" v-html="item.description"></div>
              <a target="_blank" rel="noreferrer noopener" :href="item.link" class="mp_medium-link">Read More</a>
            </div>
        </li>
      </template>
    </template>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: '',
      baseURL: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sodiumofficial'
    };
  },
  mounted() {
    axios.get(this.baseURL)
         .then((response) =>{
           this.data = response.data
         })
         .catch(error => console.log(error))
  }
}
</script>

<style lang="scss">
  .mp {
    &_medium {
      &-list {
        margin: 95px 0 85px;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1400px) {
          margin: 70px 0 58px;
        }
        @media screen and (max-width: 767px) {
          flex-direction: column;
          align-items: center;
          margin: 36px 0;
        }
      }
      &-item {
        text-align: left;
        background: #ffffff;
        width: 300px;
        height: 372px;
        border-radius: 12px;
        overflow: hidden;
        @media screen and (max-width: 1023px) {
          width: 225px;
        }
        @media screen and (max-width: 767px) {
          max-width: 320px;
          width: 100%;
        }
        & + .mp_medium-item {
          @media screen and (max-width: 767px) {
            margin: 24px 0 0;
          }
        }
      }
      &-bg {
        height: 168px;
        background-position: center;
        background-size: cover;
      }
      &-info {
        padding: 20px 12px 0;
      }
      &-title {
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #000000;
      }
      &-text {
        font-size: 14px;
        line-height: 24px;
        color: #999999;
        max-height: 72px;
        min-height: 72px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 14px 0;
        * {
          display: none;
        }
        p {
          display: block;
        }
      }
      &-link {
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #050505;
        padding: 0 16px 0 0;
        display: inline-block;
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgNiA4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMS4wNjE2MiAxLjQwNjZDMC45Nzk0NiAxLjQ4NDMzIDAuOTc5NDYgMS42MTA2NCAxLjA2MTYyIDEuNjg4MzdMMy42ODU1NiA0LjE2NjA0TDEuMDYxNjIgNi42NDg1N0MwLjk3OTQ2IDYuNzI2MzEgMC45Nzk0NiA2Ljg1MjYyIDEuMDYxNjIgNi45MzAzNUMxLjE0Mzc4IDcuMDA4MDggMS4yNzcyOSA3LjAwODA4IDEuMzU5NDQgNi45MzAzNUw0LjEyNzE2IDQuMzExNzlDNC4xNjgyNCA0LjI3MjkyIDQuMTg4NzggNC4yMjQzNCA0LjE4ODc4IDQuMTcwOUM0LjE4ODc4IDQuMTIyMzIgNC4xNjgyNCA0LjA2ODg4IDQuMTI3MTYgNC4wMzAwMkwxLjM1OTQ0IDEuNDExNDZDMS4yNzcyOSAxLjMyODg3IDEuMTQzNzggMS4zMjg4NyAxLjA2MTYyIDEuNDA2NloiIGZpbGw9IiNFQjU1OTUiIHN0cm9rZT0iI0VCNTU5NSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=') right bottom 4px no-repeat;
        transition: color 0.4s;
        &:hover {
          color: #EB5595;
        }
      }
    }
  }
</style>
