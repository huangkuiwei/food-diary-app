<template>
  <view class="exchange-center-page">
    <view class="banner">
      <view class="title">
        <text>兑换中心</text>

        <view class="back" @click="back">
          <uni-icons class="back" color="#1A1A1A" type="left" size="22"></uni-icons>
        </view>
      </view>

      <view class="points-container">
        <view class="points">
          <view class="points-title">我的积分</view>

          <view class="number">
            <view>
              <image
                mode="heightFix"
                src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/exchangeCenter/icon1.png"
              />

              <text>5</text>
            </view>

            <view>
              <image
                mode="heightFix"
                src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/exchangeCenter/icon2.png"
              />

              <text>95</text>
            </view>
          </view>

          <view class="sign-in">
            <image
              mode="heightFix"
              src="https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/exchangeCenter/icon3.png"
            />
            <text class="tip">连续签到第3天，明日签到阳光+10</text>
            <text class="go-sign-in">去签到</text>
          </view>
        </view>
      </view>
    </view>

    <view class="exchange-container">
      <view class="title">
        <text>会员兑换</text>
        <text @click="$refs.exchangeDialog.open()">兑换记录</text>
      </view>

      <view class="exchange-list">
        <view class="exchange-item" v-for="item of exchangeList" :key="item.id">
          <view class="left">
            <text>{{ item.name }}</text>
            <text>需消耗{{ item.consume }}朵小花</text>
          </view>

          <view class="right" :class="{ disabled: item.disabled }">去兑换</view>
        </view>
      </view>
    </view>

    <exchange-dialog ref="exchangeDialog" />
  </view>
</template>

<script>
import ExchangeDialog from '@/pages/exchangeCenter/exchangeDialog.vue';

export default {
  name: 'exchangeCenter',

  components: {
    ExchangeDialog,
  },

  data() {
    return {
      exchangeList: [
        {
          id: 1,
          name: '3日会员',
          consume: 1,
          disabled: false,
        },
        {
          id: 2,
          name: '7日会员',
          consume: 3,
          disabled: false,
        },
        {
          id: 3,
          name: '15日会员',
          consume: 10,
          disabled: true,
        },
        {
          id: 4,
          name: '30日会员',
          consume: 30,
          disabled: true,
        },
      ],
    };
  },

  methods: {
    back() {
      uni.navigateBack();
    },
  },
};
</script>

<style scoped lang="scss">
.exchange-center-page {
  .banner {
    padding: calc(var(--status-bar-height) + 60rpx) 0 0;
    background: linear-gradient(90deg, #f5f6d6 0%, #f4f6ea 51%, #ebf8cc 100%);

    .title {
      text-align: center;
      color: #1a1a1a;
      font-size: 32rpx;
      font-weight: bold;
      margin-bottom: 70rpx;
      position: relative;

      .back {
        position: absolute;
        top: -2rpx;
        left: 30rpx;
      }
    }

    .points-container {
      padding: 0 15rpx;

      .points {
        height: 334rpx;
        padding: 77rpx 27rpx 0 44rpx;
        background: url('https://hnenjoy.oss-cn-shanghai.aliyuncs.com/food-diary-app/exchangeCenter/points-bg.png') left
          top/ 100% 100% no-repeat;

        .points-title {
          font-weight: 500;
          font-size: 32rpx;
          color: #111111;
          margin-bottom: 38rpx;
        }

        .number {
          display: flex;
          align-items: center;
          gap: 24rpx;
          margin-bottom: 60rpx;

          view {
            display: flex;
            align-items: center;

            image {
              height: 38rpx;
              margin-right: 12rpx;
            }

            text {
              font-size: 24rpx;
              color: #111111;
            }
          }
        }

        .sign-in {
          display: flex;
          align-items: center;

          image {
            height: 40rpx;
            margin-right: 9rpx;
          }

          .tip {
            font-size: 26rpx;
            color: #111111;
            flex-grow: 1;
          }

          .go-sign-in {
            width: 140rpx;
            height: 60rpx;
            background: #a4dd2b;
            border-radius: 25rpx;
            font-size: 30rpx;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }

  .exchange-container {
    background: #ffffff;
    border-radius: 25rpx 25rpx 0 0;
    padding: 53rpx 30rpx;
    position: relative;
    top: -20rpx;

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 28rpx;
      margin-bottom: 32rpx;

      text {
        &:nth-child(1) {
          font-weight: 500;
          font-size: 32rpx;
          color: #111111;
        }

        &:nth-child(2) {
          font-size: 24rpx;
          color: #999999;
        }
      }
    }

    .exchange-list {
      display: flex;
      flex-direction: column;
      gap: 20rpx;

      .exchange-item {
        background: #f5f5f5;
        border-radius: 20rpx;
        padding: 37rpx 40rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          display: flex;
          flex-direction: column;
          gap: 15rpx;

          text {
            &:nth-child(1) {
              font-weight: 500;
              font-size: 32rpx;
              color: #222222;
            }

            &:nth-child(2) {
              font-size: 24rpx;
              color: #999999;
            }
          }
        }

        .right {
          &.disabled {
            background: #d9d9d9;
            color: #ffffff;
          }

          background: linear-gradient(90deg, #fe9f49 0%, #fe4c03 100%);
          border-radius: 30rpx;
          width: 160rpx;
          height: 60rpx;
          font-size: 30rpx;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
