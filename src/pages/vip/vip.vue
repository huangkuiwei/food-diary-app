<template>
  <view class="vip-page">
    <view class="banner">
      <view class="title">
        <text>会员中心</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>

      <view class="user-container">
        <view class="userinfo">
          <view class="left">
            <image
              mode="widthFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/recode/head01.png"
            />
          </view>

          <view class="right">
            <text>我不吃香菜</text>
            <text>您还未开通会员</text>
          </view>
        </view>
      </view>
    </view>

    <view class="vip-info">
      <view class="title">
        <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/title-icon.png" />
        <text>尊享会员权益</text>
      </view>

      <view class="introduce">
        <image mode="heightFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/icon1.png" />
        <image mode="heightFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/icon2.png" />
        <image mode="heightFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/icon3.png" />
      </view>

      <view class="vip-title-icon">
        <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/title-icon2.png" />
        <image mode="widthFix" src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/title-icon3.png" />
      </view>

      <view class="vip-shop-list">
        <view
          class="item"
          @click="selectedVip = item"
          :class="{ active: selectedVip.id === item.id }"
          v-for="item of vipList"
          :key="item.id"
        >
          <view class="name">{{ item.name }}</view>
          <view class="price">
            <text>￥</text>
            <text>{{ item.price }}</text>
          </view>
          <view class="tip">78%用户选择</view>
        </view>
      </view>

      <view class="rule">
        <view class="rule-title">以下内容请您知悉</view>

        <view>1.AI食记会员服务属于虚拟商品，是一项特殊服务，会员开通成功后概不退款，故请先试用满意后再开通</view>
        <view>2.会员价格会随着功能的完善会逐步涨价，现在开通最划算</view>
        <view>3.会员时长到期后不会自动续费</view>
        <view>4.有任何开通会员问题请联系客服咨询</view>
      </view>
    </view>

    <view class="buy-box">
      <view class="btn">立即开通</view>
      <view class="agreement">
        <radio :value="agree" @change="agree = $event.detail.value" />
        <text>我已阅读并同意</text>
        <text>《会员服务协议》</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'vip',

  data() {
    return {
      vipList: [
        {
          id: 1,
          name: '1个月',
          price: 19,
        },
        {
          id: 2,
          name: '12个月',
          price: 199,
        },
        {
          id: 3,
          name: '24个月',
          price: 299,
        },
      ],
      selectedVip: {},
      agree: null,
    };
  },

  onLoad() {
    this.selectedVip = this.vipList[0];
  },

  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style scoped lang="scss">
.vip-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 0;
    background: linear-gradient(90deg, rgba(206, 238, 250, 0.9) 0%, #e0fae9 100%);

    .title {
      text-align: center;
      color: #1a1a1a;
      font-size: 32rpx;
      font-weight: bold;
      position: relative;
      margin-bottom: 52rpx;

      .back {
        position: absolute;
        top: -2rpx;
        left: 15rpx;
      }
    }

    .user-container {
      padding: 0 20rpx;

      .userinfo {
        padding: 63rpx 40rpx 150rpx;
        background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/vip-banner-bg.png') left
          top/100% 100% no-repeat;
        display: flex;
        align-items: center;

        .left {
          flex-shrink: 0;
          margin-right: 24rpx;

          image {
            width: 120rpx;
            border-radius: 50%;
          }
        }

        .right {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 30rpx;

          text {
            &:nth-child(1) {
              font-weight: bold;
              font-size: 32rpx;
              color: #ffffff;
            }

            &:nth-child(2) {
              font-size: 24rpx;
              color: #ffffff;
            }
          }
        }
      }
    }
  }

  .vip-info {
    padding: 50rpx 0 120rpx;
    background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/vip/vip-info-bg.png') left top/100%
      auto no-repeat;
    position: relative;
    top: -114rpx;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 28rpx;
      margin-bottom: 40rpx;

      image {
        width: 178rpx;
        margin-bottom: 16rpx;
      }

      text {
        font-weight: 500;
        font-size: 24rpx;
        color: #1a1a1a;
      }
    }

    .introduce {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35rpx;
      padding: 0 28rpx;
      margin-bottom: 45rpx;

      image {
        height: 158rpx;
      }
    }

    .vip-title-icon {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 28rpx;

      image {
        margin-bottom: 56rpx;

        &:nth-child(1) {
          width: 142rpx;
        }

        &:nth-child(2) {
          width: 160rpx;
        }
      }
    }

    .vip-shop-list {
      display: flex;
      align-items: center;
      gap: 20rpx;
      padding: 0 0 0 28rpx;
      overflow: auto;
      margin-bottom: 50rpx;

      .item {
        flex-shrink: 0;
        width: 257rpx;
        padding: 50rpx 0 28rpx;
        border-radius: 20rpx;
        border: 2px solid #d9d9d9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &.active {
          background: #f9faf4;
          border: 2px solid #333333;
        }

        .name {
          font-weight: 500;
          font-size: 32rpx;
          color: #333333;
          margin-bottom: 34rpx;
        }

        .price {
          margin-bottom: 44rpx;

          text {
            color: #111111;

            &:nth-child(1) {
              font-size: 24rpx;
            }

            &:nth-child(2) {
              font-size: 55rpx;
            }
          }
        }

        .tip {
          font-size: 24rpx;
          color: #666666;
        }
      }
    }

    .rule {
      padding: 0 28rpx;
      font-size: 22rpx;
      color: #666666;

      view {
        line-height: 40rpx;

        &.rule-title {
          font-size: 24rpx;
          font-weight: 500;
        }
      }
    }
  }

  .buy-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200rpx;
    padding-top: 20rpx;
    background: #ffffff;
    box-shadow: 0 2rpx 12rpx 0 rgba(0, 0, 0, 0.05);
    border-top: 2rpx solid #eeeeee;
    display: flex;
    flex-direction: column;
    align-items: center;

    .btn {
      width: 592rpx;
      height: 103rpx;
      background: #0abf92;
      border-radius: 52rpx;
      font-weight: 500;
      font-size: 32rpx;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24rpx;
    }

    .agreement {
      font-size: 24rpx;
      color: #1a1a1a;
      display: flex;
      align-items: center;
      justify-content: center;

      radio {
        transform: scale(0.7);
      }
    }
  }
}
</style>
