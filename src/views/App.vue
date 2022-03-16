<template>
  <section class="m-layout">
    <aside class="m-layout_side">
      <Sidebar />
    </aside>
    <section class="m-layout_content">
      <ContentHeader />
      <main class="m-main">
        <div class="m-container">
          <div class="m-link-b" v-if="$route.name != 'collection'">
            <div class="m-link_left">
              <a href="#" class="m-link">Market Cup</a>
              <a href="#" class="m-link">Trade Volume</a>
              <a href="#" class="m-link">Trending</a>
              <a href="#" class="m-link">Tools</a>
            </div>
            <input type="search" name="" value="" placeholder="Search" class="m-link-search">
          </div>
          <router-view/>
        </div>
      </main>
    </section>
  </section>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import ContentHeader from "@/components/ContentHeader"
export default {
  components: {
    Sidebar, ContentHeader
  }
}
</script>

<style lang="scss">
  .m-container {
    max-width: 1166px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
  }
  .m {
    &-button {
      font-size: 17px;
      line-height: 18px;
      padding: 13px 13px;
      border-radius: 12px;
      background: #EB5595;
      border: 1px solid #EB5595;
      color: #ffffff;
      transition: background 0.4s, color 0.4s;
      &:hover {
        color: #EB5595;
        background: #ffffff;
      }
    }
    &-layout {
      display: flex;
      flex-direction: row;
      &_side {
        background: #1A182E;
        position: relative;
        display: flex;
        min-height: 100vh;
        flex: 0 0 280px;
        max-width: 280px;
        min-width: 280px;
        width: 280px;
      }
      &_content {
        background: #2B293D;
        position: relative;
        display: flex;
        flex: auto;
        flex-flow: column nowrap;
        min-height: 100vh;
        overflow-x: hidden;
      }
    }
    &-main {
      flex: auto;
      min-height: 0;
      padding: 40px 0;
      &_in {
        padding: 40px 0;
        position: absolute;
        top: 280px;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex: 1 0 auto;
        flex-flow: column nowrap;
        min-height: calc(100vh - 280px);
        overflow-y: scroll;
      }
    }
    &-link {
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      &-search {
        height: 24px;
        background: transparent;
        outline: none;
        color: #ffffff;
        border: none;
        border-bottom: 1px solid rgba(255,255,255, 0.5);
      }
      & + .m-link {
        margin: 0 0 0 30px;
      }
      &-b {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 13px 24px;
        background: rgba(68, 34, 121, 0.31);
        margin: 0 0 46px;
      }
    }
  }
  .table {
    &_head {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 0 30px;
      &-item {
        font-size: 16px;
        line-height: 40px;
        white-space: nowrap;
        text-align: center;
        &.--start {
          text-align: left;
        }
      }
    }
    &_line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      height: 58px;
      background: rgba(68, 34, 121, 0.31);
      margin: 6px 0 0;
      color: #ffffff;
      &-icon {
        max-width: 42px;
        min-width: 42px;
        height: 42px;
        margin: 0 13px 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          display: block;
          border-radius: 50%;
        }
      }
      &-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0 4px;
        &.--center {
          justify-content: center;
        }
        &:first-child {
          padding: 0 4px 0 0;
        }
        &:last-child {
          padding: 0 0 0 4px;
        }
      }
    }
    &_button {
      width: 75px;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFFFFF;
      padding: 5px 0;
      box-sizing: border-box;
      border-radius: 12px;
      &.--pink {
        background: #EB5595;
        border: 1px solid #EB5595;
      }
      &.--blue {
        background: #7422DD;
        border: 1px solid #7422DD;
      }
      & + .table_button {
        margin: 0 0 0 5px;
      }
    }
    &_info {
      display: flex;
      flex-direction: column;
      &-title {
        font-weight: bold;
        font-size: 18px;
        line-height: 17px;
        text-transform: uppercase;
      }
      &-text {
        font-weight: 300;
        font-size: 11px;
        line-height: 17px;
        white-space: nowrap;
      }
    }
    &.--lending {
      .table {
        &_head, &_line {
          padding: 0 6px 0 24px;
        }
      }
    }
  }
  .w {
    &-96 {
      width: 96px;
    }
    &-100 {
      width: 100px;
    }
    &-110 {
      width: 110px;
    }
    &-124 {
      width: 124px;
    }
    &-144 {
      width: 144px;
    }
    &-154 {
      width: 154px;
    }
    &-164 {
      width: 164px;
    }
    &-206 {
      width: 206px;
    }
    &-248 {
      width: 248px;
    }
    &-300 {
      width: 300px;
    }
  }
  .t {
    &-green {
      color: #71D875;
    }
    &-red {
      color: #FF5274;
    }
    &-purple {
      color: #7F63F4;
    }
  }
  .c-chart {
    &.--sm {
      width: 104px;
      height: 50px;
    }
    .highcharts-credits {
      opacity: 0;
    }
  }
</style>
