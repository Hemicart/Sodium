<template>
  <div class="side_inside">
    <div class="side_top">
      <router-link :to="{ name: 'mainpage' }">
        <img class="side_logo" :src="require(`@/assets/sodium.png`)" alt="">
      </router-link>
    </div>
    <div class="side_list">
      <router-link :to="{ name: 'dashboard' }" class="side_link" :class="{ active: $route.name == 'dashboard'}">
        <span class="side_link-icon-b">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="side_link-icon">
            <rect x="1" y="1" width="7" height="7" rx="2.5" stroke="#ffffff" stroke-width="1.5"/>
            <rect x="1" y="12" width="7" height="7" rx="2.5" stroke="#ffffff" stroke-width="1.5"/>
            <rect x="12" y="1" width="7" height="7" rx="2.5" stroke="#ffffff" stroke-width="1.5"/>
            <rect x="12" y="12" width="7" height="7" rx="3.5" stroke="#ffffff" stroke-width="1.5"/>
          </svg>
        </span>
        <span class="side_link-text">Dashboard</span>
      </router-link>
      <router-link :to="{ name: 'borrowing' }" class="side_link" :class="{ active: $route.name == 'borrowing'}">
        <span class="side_link-icon-b">
          <svg width="20" height="25" viewBox="0 0 20 25" fill="none" class="side_link-icon">
            <rect x="1" y="1.39062" width="18" height="21.832" rx="2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 8.66797H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 23.2227V8.66797" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="side_link-text">Borrowing</span>
      </router-link>
      <router-link :to="{ name: 'lending' }" class="side_link" :class="{ active: $route.name == 'lending'}">
        <span class="side_link-icon-b">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="side_link-icon">
            <path d="M18.5 10.248H13.25L11.5 13.4319H8L6.25 10.248H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.01875 2.93583L1 10.248V16.6157C1 17.788 1.7835 18.7383 2.75 18.7383H16.75C17.7165 18.7383 18.5 17.788 18.5 16.6157V10.248L15.4812 2.93583C15.1857 2.21453 14.5791 1.75824 13.915 1.75781H5.585C4.92092 1.75824 4.31426 2.21453 4.01875 2.93583Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="side_link-text">Lending</span>
      </router-link>
      <router-link :to="{ name: 'fairpriceengine' }" class="side_link" :class="{ active: $route.name == 'fairpriceengine' || $route.name == 'collection'}">
        <span class="side_link-icon-b">
          <svg width="22" height="25" viewBox="0 0 22 25" fill="none" class="side_link-icon">
            <path d="M21 12.8926H17L14 23.8086L8 1.97656L5 12.8926H1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="side_link-text">Fair Price Engine</span>
      </router-link>
    </div>
    <div class="side_list">
      <h3 class="side_title --inactive">Coming soon</h3>
      <a href="#" class="side_link --inactive">
        <span class="side_link-icon-b">
          <svg width="22" height="23" viewBox="0 0 22 23" fill="none" class="side_link-icon">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.375 22.5H21.625C22.246 22.5 22.75 21.996 22.75 21.375C22.75 20.754 22.246 20.25 21.625 20.25H1.375C0.754 20.25 0.25 20.754 0.25 21.375C0.25 21.996 0.754 22.5 1.375 22.5ZM5.875 10.125H5.16175C3.69138 10.125 2.5 8.93361 2.5 7.46323C2.5 7.46211 2.5 7.46211 2.5 7.46098C2.5 6.65098 2.89038 5.89161 3.54963 5.42136C5.36763 4.12311 10.8464 0.209235 10.8464 0.209235C11.2368 -0.0697653 11.7633 -0.0697653 12.1536 0.209235C12.1536 0.209235 17.6324 4.12311 19.4504 5.42136C20.1096 5.89161 20.5 6.65098 20.5 7.46098V7.46323C20.5 8.93361 19.3086 10.125 17.8383 10.125H17.125V15.75H19.375C19.996 15.75 20.5 16.254 20.5 16.875C20.5 17.496 19.996 18 19.375 18H3.625C3.004 18 2.5 17.496 2.5 16.875C2.5 16.254 3.004 15.75 3.625 15.75H5.875V10.125ZM8.125 10.125V15.75H10.375V10.125H8.125ZM12.625 10.125V15.75H14.875V10.125H12.625ZM11.5 2.50761L4.85688 7.25173C4.7905 7.30011 4.75 7.37773 4.75 7.46098V7.46323C4.75 7.69048 4.9345 7.87498 5.16175 7.87498H17.8383C18.0655 7.87498 18.25 7.69048 18.25 7.46323V7.46098C18.25 7.37773 18.2095 7.30011 18.1431 7.25173L11.5 2.50761Z" fill="white" fill-opacity="0.88"/>
          </svg>
        </span>
        <span class="side_link-text">DAO</span>
      </a>
      <a href="#" class="side_link --inactive">
        <span class="side_link-icon-b">
          <svg width="24" height="30" viewBox="0 0 24 30" fill="none" class="side_link-icon">
            <path d="M18.04 16.8409C17.62 17.3382 17.38 18.0538 17.44 18.8179C17.53 20.1278 18.52 21.086 19.6 21.086H21.5V22.5294C21.5 25.04 19.81 27.0898 17.74 27.0898H6.26C4.19 27.0898 2.5 25.04 2.5 22.5294V14.3666C2.5 11.8559 4.19 9.80615 6.26 9.80615H17.74C19.81 9.80615 21.5 11.8559 21.5 14.3666V16.1132H19.48C18.92 16.1132 18.41 16.38 18.04 16.8409Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.5 15.4582V9.91536C2.5 8.47202 3.23 7.18631 4.34 6.67689L12.28 3.03822C13.52 2.46816 14.85 3.58406 14.85 5.1972V9.80617" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22.5588 17.3505V19.8491C22.5588 20.5162 22.1188 21.062 21.5588 21.0862H19.5988C18.5188 21.0862 17.5288 20.1281 17.4388 18.8181C17.3788 18.054 17.6188 17.3384 18.0388 16.8411C18.4088 16.3802 18.9188 16.1134 19.4788 16.1134H21.5588C22.1188 16.1377 22.5588 16.6834 22.5588 17.3505Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 14.9609H14" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="side_link-text">Liquidation Lottery</span>
      </a>
      <a href="#" class="side_link --inactive">
        <span class="side_link-icon-b">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" class="side_link-icon">
            <path d="M1 4.32813C1 2.67127 2.34315 1.32812 4 1.32812H14C15.6569 1.32812 17 2.67127 17 4.32813V17.2167C17 17.9959 16.0579 18.3861 15.507 17.8351V17.8351C15.2122 17.5403 14.7503 17.4946 14.4034 17.7258L12.6821 18.8734C12.2855 19.1378 11.7574 19.0855 11.4203 18.7484L9.70711 17.0352C9.31658 16.6447 8.68342 16.6447 8.29289 17.0352L6.57969 18.7484C6.24262 19.0855 5.7145 19.1378 5.31788 18.8734L3.59657 17.7258C3.24969 17.4946 2.7878 17.5403 2.49301 17.8351V17.8351C1.94205 18.3861 1 17.9959 1 17.2167V4.32813Z" stroke="white" stroke-width="1.5"/>
            <path d="M8 5.32812L13 5.32812" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 9.32812L13 9.32812" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 13.3281L13 13.3281" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle r="1" transform="matrix(1 0 0 -1 5 5.32812)" fill="white"/>
            <circle r="1" transform="matrix(1 0 0 -1 5 9.32812)" fill="white"/>
            <circle r="1" transform="matrix(1 0 0 -1 5 13.3281)" fill="white"/>
          </svg>
        </span>
        <span class="side_link-text">NFT Staking</span>
      </a>
      <a href="#" class="side_link --inactive">
        <span class="side_link-icon-b">
          <svg width="21" height="25" viewBox="0 0 21 25" fill="none" class="side_link-icon">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0398 19.292C15.79 18.2625 17.7511 15.6078 17.7511 12.5C17.7511 10.499 16.9379 8.68648 15.6257 7.37423C15.1544 6.90298 15.1544 6.13692 15.6257 5.66567C16.0981 5.19442 16.863 5.19442 17.3355 5.66567C19.0851 7.41533 20.1678 9.83199 20.1678 12.5C20.1678 16.7086 17.472 20.2925 13.7141 21.6181L14.8149 22.3817C15.3623 22.7624 15.4988 23.5152 15.1182 24.0637C14.7388 24.6111 13.9848 24.7477 13.4374 24.367L9.81239 21.8525C9.26622 21.4743 9.12847 20.7251 9.50426 20.1765L11.9209 16.6506C12.2979 16.0996 13.0507 15.9594 13.6005 16.3365C14.1503 16.7134 14.2905 17.4662 13.9135 18.016L13.0398 19.292ZM7.31597 3.37104L6.20551 2.63032C5.65089 2.26057 5.49985 1.50899 5.8696 0.954363C6.24056 0.399738 6.99093 0.249905 7.54556 0.619655L11.1706 3.03632C11.7264 3.40607 11.8762 4.15646 11.5065 4.71229L9.08981 8.33729C8.71885 8.89191 7.96847 9.04174 7.41385 8.67199C6.85922 8.30224 6.70818 7.55066 7.07793 6.99604L7.9298 5.72004C5.19535 6.758 3.25114 9.40303 3.25114 12.5C3.25114 14.501 4.06314 16.3123 5.37539 17.6257C5.84664 18.097 5.84664 18.8619 5.37539 19.3343C4.90414 19.8056 4.13805 19.8056 3.6668 19.3343C1.91714 17.5847 0.834473 15.168 0.834473 12.5C0.834473 8.28049 3.54355 4.68812 7.31597 3.37104Z" fill="white"/>
          </svg>
        </span>
        <span class="side_link-text">NFT Deposit/Withdraw</span>
      </a>
    </div>
    <div class="side_bottom">
      SODIUM <span>|</span> Unlocking NFT Value
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .side {
    &_inside {
      position: fixed;
      left: 0;
      top: 0;
      color: #ffffff;
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
    }
    &_top {
      padding: 32px 20px 32px 52px;
    }
    &_logo {
      height: 30px;
    }
    &_title {
      display: block;
      font-weight: bold;
      text-transform: uppercase;
      padding: 0 0 0 52px;
      margin: 0 0 25px;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.01em;
      &.--inactive {
        color: #8C9BBF;
      }
    }
    &_list {
      display: flex;
      flex-direction: column;
      padding: 62px 0 35px;
      & + .side_list {
        border-top: 1px solid rgba(255, 255, 255, 0.52);
      }
    }
    &_link {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 20px 0 52px;
      position: relative;
      transition: background 0.4s;
      &:before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        bottom: 0;
        width: 6px;
        background: transparent;
        transition: background 0.4s;
      }
      &-icon {
        display: block;
        path, rect, circle {
          transition: stroke 0.4s;
        }
        &-b {
          width: 34px;
        }
      }
      &-text {
        font-size: 14px;
        color: #ffffff;
        transition: color 0.4s;
      }
      &.active, &:hover {
        background: #ffffff;
        &:before {
          background: #7422DD;
        }
        .side_link {
          &-icon {
            path, rect, circle {
              stroke: #333333;
            }
          }
          &-text {
            color: #333333;
          }
        }
      }
      &.--inactive {
        .side_link {
          &-text {
            color: #8C9BBF;
          }
        }
        &.active, &:hover {
          .side_link {
            &-icon {
              path, rect, circle {
                stroke: #8C9BBF;
              }
            }
            &-text {
              color: #8C9BBF;
            }
          }
        }
      }
    }
    &_bottom {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 24px 32px;
      white-space: nowrap;
      font-size: 14px;
      line-height: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.52);
      span {
        color: #EB5595;
      }
    }
  }
</style>
